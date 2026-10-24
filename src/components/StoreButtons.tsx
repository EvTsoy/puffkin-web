import { site } from '@/site.config';

/** Text buttons, not the official badges: swap in Apple's and Google's badge artwork once the store links are live. */
export function StoreButtons() {
  const stores = [
    { label: 'App Store', pre: 'Download on the', url: site.appStoreUrl },
    { label: 'Google Play', pre: 'Get it on', url: site.playStoreUrl },
  ];
  return (
    <div className="store-row">
      {stores.map((s, i) =>
        s.url ? (
          <a key={s.label} className={`btn store-btn ${i === 0 ? 'btn-lime' : 'btn-ghost'}`} href={s.url} rel="noopener noreferrer">
            <small>{s.pre}</small>
            {s.label}
          </a>
        ) : (
          <span key={s.label} className={`btn store-btn ${i === 0 ? 'btn-lime' : 'btn-ghost'}`} aria-disabled="true">
            <small>Coming soon to</small>
            {s.label}
          </span>
        ),
      )}
    </div>
  );
}
