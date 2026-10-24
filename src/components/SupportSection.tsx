import Link from 'next/link';
import { site, mailto } from '@/site.config';
import { CopyEmail } from './CopyEmail';

const APPLE_CANCEL = 'https://support.apple.com/en-us/118428';
const APPLE_REFUND = 'https://support.apple.com/en-us/118223';
const GOOGLE_CANCEL = 'https://support.google.com/googleplay/answer/7018481';
const GOOGLE_REFUND = 'https://support.google.com/googleplay/answer/2479637';

export function ContactCard({ headingLevel = 'h3' }: { headingLevel?: 'h2' | 'h3' }) {
  const H = headingLevel;
  return (
    <div className="card contact-card" id="contact">
      <p className="eyebrow" style={{ color: 'rgba(18,20,15,.7)' }}>Contact support</p>
      <H>A real human reads every email.</H>
      <a className="email" href={mailto()}>{site.supportEmail}</a>
      <div className="row">
        <a className="btn btn-ink" href={mailto()}>Email support</a>
        <CopyEmail email={site.supportEmail} className="btn btn-outline-ink" />
      </div>
      <p className="note">{site.supportResponseTime}</p>
      <ul>
        <li>Your phone model and iOS / Android version</li>
        <li>The Puffkin version (You → bottom of the screen)</li>
        <li>What happened, and a screenshot if you have one</li>
      </ul>
      <p className="note">Please don&apos;t send payment card numbers. We never need them.</p>
    </div>
  );
}

export function Faq() {
  return (
    <div className="faq">
      <details>
        <summary>How do I cancel my subscription?</summary>
        <div className="answer">
          <p>Subscriptions are billed by Apple or Google, so you cancel them there. Deleting the app does not cancel it.</p>
          <ul>
            <li><strong>iPhone:</strong> Settings → your name → Subscriptions → Puffkin → Cancel Subscription. <a href={APPLE_CANCEL} rel="noopener noreferrer" target="_blank">Apple&apos;s guide</a></li>
            <li><strong>Android:</strong> Google Play → profile icon → Payments &amp; subscriptions → Subscriptions → Puffkin → Cancel. <a href={GOOGLE_CANCEL} rel="noopener noreferrer" target="_blank">Google&apos;s guide</a></li>
          </ul>
          <p>Cancel at least 24 hours before the trial or billing period ends to avoid the next charge. You keep access until the period ends.</p>
        </div>
      </details>
      <details>
        <summary>Can I get a refund?</summary>
        <div className="answer">
          <p>Refunds are handled by the store you paid through, under their rules. We can&apos;t issue them ourselves.</p>
          <ul>
            <li><strong>Apple:</strong> <a href={APPLE_REFUND} rel="noopener noreferrer" target="_blank">Request a refund from Apple</a> (reportaproblem.apple.com).</li>
            <li><strong>Google Play:</strong> <a href={GOOGLE_REFUND} rel="noopener noreferrer" target="_blank">Google Play refund policies</a>.</li>
          </ul>
        </div>
      </details>
      <details>
        <summary>I paid but Puffkin is still locked</summary>
        <div className="answer">
          <p>Open the paywall and tap <strong>Restore</strong>, or go to You → Restore purchases. Make sure you&apos;re signed in with the same Apple ID or Google account you paid with. Still stuck? Email us with the date of purchase. A screenshot of the store receipt helps, minus any card details.</p>
        </div>
      </details>
      <details>
        <summary>I got a new phone. Where did my history go?</summary>
        <div className="answer">
          <p>Puffkin has no account, and your puffs are stored only on your phone. They move to a new phone only through your device backup (iCloud, Google, or a computer backup), depending on your backup settings. Your subscription isn&apos;t tied to your data: tap Restore purchases on the new phone.</p>
        </div>
      </details>
      <details>
        <summary>How do I delete my data?</summary>
        <div className="answer">
          <p>In the app: You → Start over → <strong>Delete all my data</strong>. That erases your puffs, stats, plan and settings from your phone. Deleting the app also removes them. Device backups you made earlier may still contain a copy until they&apos;re replaced or deleted.</p>
          <p>To delete emails you&apos;ve sent us, write to <a href={mailto('Delete my support emails')}>{site.supportEmail}</a>. See the <Link href="/privacy/">Privacy Policy</Link> for details.</p>
        </div>
      </details>
      <details>
        <summary>Reminders aren&apos;t arriving</summary>
        <div className="answer">
          <p>Check that notifications are allowed for Puffkin in your phone&apos;s settings, and that Focus or Do Not Disturb isn&apos;t hiding them. Then check You → Reminders. Reminders are scheduled on your phone, so a low-power or battery-saver mode can delay them.</p>
        </div>
      </details>
      <details>
        <summary>The roasts are too much today</summary>
        <div className="answer">
          <p>Turn on a <strong>go-easy day</strong> (Home or Plan) and Puffkin stops roasting until midnight. Or change his roast level to Mild in You → Puffkin. He roasts the habit, never you. If a line ever crosses that line, email us the text and we&apos;ll fix it.</p>
        </div>
      </details>
      <details>
        <summary>Is Puffkin medical advice?</summary>
        <div className="answer">
          <p>No. Puffkin is a tracking and motivation tool, not a medical device or treatment. Nicotine withdrawal can be hard. Talk to a doctor or pharmacist, especially if you&apos;re pregnant, have a health condition, or are thinking about nicotine replacement.</p>
          <p>Free help: in the US, call <a href="tel:+18007848669">1-800-QUIT-NOW</a> or see the <a href="https://www.cdc.gov/tobacco/e-cigarettes/quitting.html" rel="noopener noreferrer" target="_blank">CDC&apos;s quitting guide</a>. In the UK, <a href="https://www.nhs.uk/better-health/quit-smoking/" rel="noopener noreferrer" target="_blank">NHS Quit Smoking</a>. Elsewhere, your doctor or local health service. In an emergency, call your local emergency number.</p>
        </div>
      </details>
    </div>
  );
}

export function SupportSection({ asPage = false }: { asPage?: boolean }) {
  const Title = asPage ? 'h1' : 'h2';
  return (
    <section className="section" id="support" aria-labelledby="support-title" style={asPage ? { paddingTop: 48 } : undefined}>
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Support</p>
          <Title id="support-title" className="display" style={asPage ? { fontSize: 'clamp(44px, 7vw, 72px)' } : undefined}>
            Stuck? We&apos;ve got you.
          </Title>
          <p>Questions, bugs, billing or feedback: email us and we&apos;ll sort it out. Quick answers below.</p>
        </div>
        <div className="support-grid">
          <ContactCard headingLevel={asPage ? 'h2' : 'h3'} />
          <Faq />
        </div>
      </div>
    </section>
  );
}
