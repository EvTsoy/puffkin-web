import Link from 'next/link';
import { Puffkin } from '@/components/Puffkin';

export default function NotFound() {
  return (
    <section className="wrap" style={{ padding: '80px 20px', textAlign: 'center' }}>
      <Puffkin mood="shocked" size={180} label="Puffkin, shocked" className="" />
      <h1 className="display" style={{ fontSize: 56, marginTop: 24 }}>This page went up in smoke.</h1>
      <p className="muted" style={{ marginTop: 12 }}>Try the home page, or contact support.</p>
      <p style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
        <Link className="btn btn-lime" href="/">Home</Link>
        <Link className="btn btn-ghost" href="/support/">Support</Link>
      </p>
    </section>
  );
}
