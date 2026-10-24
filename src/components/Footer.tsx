import Link from 'next/link';
import { site, mailto } from '@/site.config';

export function Footer() {
  const year = new Date().getFullYear();
  const owner = site.operator.legalName.startsWith('[') ? site.name : site.operator.legalName;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          <div>© {year} {owner}</div>
          <div style={{ marginTop: 6 }}>Puffkin is not medical advice. Talk to a doctor or a quitline for support.</div>
        </div>
        <nav aria-label="Footer">
          <Link href="/support/">Support</Link>
          <a href={mailto()}>{site.supportEmail}</a>
          <Link href="/privacy/">Privacy Policy</Link>
          <Link href="/terms/">Terms of Service</Link>
        </nav>
      </div>
    </footer>
  );
}
