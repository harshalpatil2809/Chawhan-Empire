'use client';

import { useRef, useState, type ChangeEvent } from 'react';
import SmartImage from './SmartImage';
import { Button } from './Button';
import { Input } from './Field';
import type { ProjectImage } from '@/lib/types';

const MAX_BYTES = 2_000_000;

interface Props {
  label: string;
  hint?: string;
  images: ProjectImage[];
  onChange: (images: ProjectImage[]) => void;
}

/**
 * Demo uploader: files are read into data URLs and kept in local state.
 * Replace readFile() with a real upload call (S3, Supabase Storage) later.
 */
export default function ImageUploader({ label, hint, images, onChange }: Props) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addUrl = () => {
    const trimmed = url.trim();
    if (!trimmed) return;
    if (!/^https?:\/\//.test(trimmed)) {
      setError('Image links must start with http:// or https://');
      return;
    }
    setError(null);
    onChange([...images, { url: trimmed, alt: label }]);
    setUrl('');
  };

  const handleFiles = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    if (!files.length) return;
    const tooBig = files.find((f) => f.size > MAX_BYTES);
    if (tooBig) {
      setError(`${tooBig.name} is over 2 MB. Use a smaller file for the demo.`);
      return;
    }
    setError(null);
    const read = (file: File) =>
      new Promise<ProjectImage>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({ url: String(reader.result), alt: file.name });
        reader.onerror = () => reject(new Error('read failed'));
        reader.readAsDataURL(file);
      });
    try {
      const next = await Promise.all(files.map(read));
      onChange([...images, ...next]);
    } catch {
      setError('One of those files could not be read. Try another image.');
    }
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div>
      <p className="mb-1.5 text-sm font-medium text-ink">{label}</p>
      {hint ? <p className="mb-3 text-xs text-ink-mute">{hint}</p> : null}

      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste an image link"
          aria-label={`${label} image link`}
        />
        <Button type="button" variant="secondary" size="sm" onClick={addUrl} className="sm:w-32">
          Add link
        </Button>
      </div>

      <div className="mt-2">
        <label className="inline-flex cursor-pointer items-center text-sm font-medium text-steel hover:text-steel-dark">
          Or upload from this device
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="sr-only"
            onChange={handleFiles}
          />
        </label>
      </div>

      {error ? (
        <p role="alert" className="mt-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      {images.length === 0 ? (
        <p className="mt-3 border border-dashed border-concrete-dark bg-white px-4 py-6 text-center text-sm text-ink-mute">
          No images yet. Add a link or upload one.
        </p>
      ) : (
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {images.map((image, i) => (
            <li key={`${image.url}-${i}`} className="relative border border-concrete-dark bg-white">
              <div className="aspect-[4/3] bg-concrete">
                <SmartImage src={image.url} alt={image.alt} />
              </div>
              <button
                type="button"
                onClick={() => onChange(images.filter((_, index) => index !== i))}
                className="absolute right-1 top-1 rounded-sm bg-ink/80 px-2 py-1 text-xs text-white hover:bg-ink"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
