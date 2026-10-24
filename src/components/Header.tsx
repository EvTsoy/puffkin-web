import Link from 'next/link';
import { Puffkin } from './Puffkin';
import { site } from '@/site.config';

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <Puffkin size={40} />
          <span>{site.name.toLowerCase()}</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/#features" className="nav-hide-sm">Features</Link>
          <Link href="/privacy/" className="nav-hide-sm">Privacy</Link>
          <Link href="/terms/" className="nav-hide-sm">Terms</Link>
          <Link href="/support/" className="nav-support">Support</Link>
        </nav>
      </div>
    </header>
  );
}
