import { site, mailto } from '@/site.config';
import { Puffkin } from '@/components/Puffkin';
import { StoreButtons } from '@/components/StoreButtons';
import { SupportSection } from '@/components/SupportSection';

const FEATURES = [
  {
    title: 'A plan that steps you down to zero',
    body: 'Pick 4, 6 or 8 weeks. Your daily limit shrinks a little every day. Struggling? Slow down. Cruising? Speed up.',
    img: '/screens/plan.webp',
    alt: 'Plan screen: 15 days to quit day, today’s limit 54 puffs, a chart stepping down to zero.',
  },
  {
    title: 'See the damage. Then beat it.',
    body: 'Every day against its limit, your best day, your streak, and the money you’ve kept.',
    img: '/screens/stats.webp',
    alt: 'Stats screen: a week of bars against each day’s limit, with an over-limit Monday highlighted.',
  },
  {
    title: 'Roasts worth posting',
    body: 'Puffkin reacts to every puff. When he lands a good one, turn it into a story card in one tap.',
    img: '/screens/share.webp',
    alt: 'Share sheet with a lime story card quoting Puffkin.',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">Quit vaping, one roast at a time</p>
            <h1 className="display" style={{ marginTop: 14 }}>
              {site.tagline}
            </h1>
            <p className="hero-lede">
              Puffkin is a grumpy little cloud who lives in your lungs. Log every puff, watch your daily limit shrink to zero, and
              get roasted the whole way. He roasts the habit, never you.
            </p>
            <StoreButtons />

            {/* Support contact, visible on first load */}
            <div className="card support-strip" role="region" aria-label="Support contact">
              <Puffkin mood="wink" size={56} />
              <div className="label">
                <strong>Need help with the app?</strong>
                <a className="email" href={mailto()}>{site.supportEmail}</a>
              </div>
              <a className="btn btn-ghost" href="/support/">Support &amp; FAQ</a>
            </div>
          </div>
          <div className="phone">
            <img src="/screens/home.webp" alt="Puffkin home screen: 16 of 200 puffs today, 4 minutes since the last puff, a big PUFF button and Puffkin's smug reaction." width={390} height={844} />
          </div>
        </div>
      </section>

      <section className="section" id="features" aria-labelledby="features-title">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2 id="features-title" className="display">Count it. Shrink it. Quit it.</h2>
            <p>No account, no tracking. Your puffs stay on your phone.</p>
          </div>
          <div className="features">
            {FEATURES.map((f) => (
              <article key={f.title} className="card feature">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <div className="shot">
                  <img src={f.img} alt={f.alt} width={390} height={600} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SupportSection />

      <div className="wrap">
        <p className="disclaimer">
          Puffkin is for adults ({site.minimumAge}+, or the legal age to buy nicotine where you live). It&apos;s a tracking and motivation tool, not
          medical advice, diagnosis or treatment. Talk to a doctor or a quitline for support.
        </p>
      </div>
    </>
  );
}
