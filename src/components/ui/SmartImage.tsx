'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

interface Props {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

const FALLBACK = '/placeholder.svg';

/** Plain img with a graceful fallback so a dead URL never breaks the layout. */
export default function SmartImage({ src, alt, className, priority }: Props) {
  const [source, setSource] = useState(src || FALLBACK);
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={source}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => {
        setSource(FALLBACK);
        setLoaded(true);
      }}
      className={cn(
        'h-full w-full object-cover transition-opacity duration-500',
        loaded ? 'opacity-100' : 'opacity-0',
        className
      )}
    />
  );
}
