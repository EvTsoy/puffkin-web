import type { Metadata, Viewport } from 'next';
import './globals.css';
import { site } from '@/site.config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}: quit vaping, one roast at a time`, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.name,
  openGraph: { type: 'website', siteName: site.name, title: `${site.name}: ${site.tagline}`, description: site.description, url: '/' },
  twitter: { card: 'summary_large_image', title: `${site.name}: ${site.tagline}`, description: site.description },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = { themeColor: '#0F100D', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
