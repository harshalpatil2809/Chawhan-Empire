import Link from 'next/link';
import Container from '@/components/ui/Container';
import { site, whatsappLink } from '@/lib/site';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-[#0C1422] text-concrete">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center bg-signal font-display text-sm font-bold text-ink">
              BC
            </span>
            <span className="font-display text-base font-semibold text-white">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-concrete/70">
            Residential, commercial and turnkey construction across Nagpur and Maharashtra
            since 2011. {site.tagline}
          </p>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-concrete/70">
            {[
              { href: '/about', label: 'About us' },
              { href: '/projects', label: 'Projects' },
              { href: '/services', label: 'Services' },
              { href: '/contact', label: 'Contact' },
              { href: '/request-a-quote', label: 'Request a quote' }
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-concrete/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold text-white">Get in touch</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-concrete/70">
            <li>
              <a href={`tel:${site.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-white">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              {site.address.line1}
              <br />
              {site.address.line2}
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
          <ul className="mt-5 flex gap-4 text-sm text-concrete/70">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-concrete/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. Demo website.</p>
          <p>
            <Link href="/admin/login" className="hover:text-concrete">
              Staff login
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
}
