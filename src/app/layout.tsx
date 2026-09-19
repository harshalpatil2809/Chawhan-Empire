import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Archivo, Inter } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '@/context/StoreProvider';
import { AuthProvider } from '@/context/AuthProvider';
import { site } from '@/lib/site';

const display = Archivo({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap'
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Premium Construction Services in Nagpur`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} | Premium Construction Services in Nagpur`,
    description: site.description,
    locale: 'en_IN'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable}`}>
      <body>
        <AuthProvider>
          <StoreProvider>{children}</StoreProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
