import type { Metadata } from 'next';
import Link from 'next/link';
import { site, mailto } from '@/site.config';
import { LegalPage, Operator, type Section } from '@/components/Legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${site.name} handles your data: no account, no analytics, your puffs stay on your phone.`,
  alternates: { canonical: '/privacy/' },
};

const email = <a href={mailto('Privacy request')}>{site.supportEmail}</a>;

const ON_DEVICE: [string, string][] = [
  ['Puff log', 'The time of each puff you log, and any you undo.'],
  ['Your plan', 'Starting puffs per day, plan length, start date, quit date, daily limits and any pace changes.'],
  ['Profile', 'The name or nickname you give Puffkin.'],
  ['Money', 'What you spend on vaping per week and your currency, used to calculate savings.'],
  ['Reasons for quitting', 'The reasons you picked during setup (for example "Health" or "Save money").'],
  ['Preferences', 'Roast level, go-easy days, sounds, haptics, reminder times and share-card settings.'],
  ['Progress', 'Milestones earned, streaks and the quit-day checklist.'],
];

const sections: Section[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    body: (
      <>
        <p>
          {site.name} (&quot;Puffkin&quot;, &quot;we&quot;, &quot;us&quot;) is an app that helps adults cut down and quit vaping. It is operated by <Operator />,
          which is the controller of the personal data described in this policy.
        </p>
        <p>
          This policy covers the {site.name} apps for iOS and Android (the &quot;App&quot;), this website (the &quot;Site&quot;) and our email support. Questions or
          requests: {email}.
        </p>
      </>
    ),
  },
  {
    id: 'on-device',
    title: 'Data that stays on your phone',
    body: (
      <>
        <p>
          Puffkin has <strong>no account and no server that stores your data</strong>. Everything you enter is saved only in the App&apos;s storage on your
          device. We cannot see it, access it or recover it.
        </p>
        <table>
          <thead>
            <tr>
              <th>What</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {ON_DEVICE.map(([k, v]) => (
              <tr key={k}>
                <td><strong>{k}</strong></td>
                <td>{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          Your puff log and quit plan relate to your nicotine use, which some laws treat as health-related information. That&apos;s one reason it never
          leaves your device unless you choose to share it.
        </p>
        <h3>Device backups</h3>
        <p>
          If you back up your phone (for example with iCloud, Google backup or a computer), your operating system may include the App&apos;s data in that
          backup. Backups are controlled by Apple or Google and your device settings, not by us.
        </p>
        <h3>Reminders</h3>
        <p>
          Morning, evening, milestone and check-in reminders are scheduled locally on your device. Their text is generated on your phone. Puffkin only
          sends notifications if you allow them in your device settings, and you can turn them off at any time.
        </p>
        <h3>Share cards</h3>
        <p>
          When you share a roast, the image is created on your device and passed to the app you choose (for example Messages or Instagram). Whatever you
          post is then governed by that app&apos;s privacy policy. You can hide your numbers on share cards in You → Puffkin.
        </p>
      </>
    ),
  },
  {
    id: 'what-we-receive',
    title: 'Data we receive',
    body: (
      <>
        <p>We only receive personal data in these situations:</p>
        <h3>When you email support</h3>
        <p>
          We receive your email address, your message and anything you attach (such as a screenshot or your device model). We use it only to answer you
          and fix problems. Support email is stored by our email provider, {site.emailProvider.name}.
        </p>
        <h3>When you buy a subscription</h3>
        <p>
          Purchases, free trials, renewals and refunds are processed by Apple (App Store) or Google (Google Play). They handle your payment details and
          billing information under their own privacy policies; <strong>we never receive your name, payment card or billing address</strong>. The App
          receives only what it needs to unlock features: whether you have an active subscription, which plan, and when it renews or expires.
        </p>
        <h3>When you visit this website</h3>
        <p>
          The Site uses no cookies, analytics, advertising or tracking scripts. Like any website, our host ({site.websiteHost.name}) automatically
          processes technical data such as your IP address, browser type and the pages requested, to deliver the Site and protect it from abuse. Fonts and
          images are served from our own domain.
        </p>
      </>
    ),
  },
  {
    id: 'what-we-dont-do',
    title: 'What we don’t do',
    body: (
      <ul>
        <li>We don&apos;t sell or rent your personal data, and we don&apos;t &quot;share&quot; it for cross-context behavioral advertising.</li>
        <li>We don&apos;t show ads, and we don&apos;t use advertising identifiers (IDFA / Advertising ID).</li>
        <li>We don&apos;t track you across other companies&apos; apps or websites.</li>
        <li>We don&apos;t use analytics or tracking SDKs in the App or on the Site.</li>
        <li>We don&apos;t collect your location, contacts, photos, microphone or camera data.</li>
        <li>We don&apos;t use your data to train AI models.</li>
      </ul>
    ),
  },
  {
    id: 'how-we-use',
    title: 'How we use data, and our legal bases',
    body: (
      <>
        <p>Where the GDPR, UK GDPR or similar laws apply, we rely on these legal bases:</p>
        <table>
          <thead>
            <tr>
              <th>Purpose</th>
              <th>Data</th>
              <th>Legal basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Providing the App&apos;s features on your device</td>
              <td>On-device data (section 2)</td>
              <td>Performance of our contract with you (these are processed by your device; we never receive them)</td>
            </tr>
            <tr>
              <td>Unlocking and managing your subscription</td>
              <td>Subscription status from Apple / Google</td>
              <td>Performance of a contract</td>
            </tr>
            <tr>
              <td>Answering support requests</td>
              <td>Your email and message</td>
              <td>Our legitimate interest in helping you and improving the App; contract where it concerns your purchase</td>
            </tr>
            <tr>
              <td>Sending reminders</td>
              <td>Reminder settings (on device)</td>
              <td>Your consent, given through your device&apos;s notification permission. You can withdraw it at any time.</td>
            </tr>
            <tr>
              <td>Running and securing the Site</td>
              <td>Server logs</td>
              <td>Our legitimate interest in keeping the Site available and secure</td>
            </tr>
            <tr>
              <td>Meeting legal obligations</td>
              <td>Support emails, if needed</td>
              <td>Legal obligation</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
  {
    id: 'third-parties',
    title: 'Service providers',
    body: (
      <>
        <p>These providers process limited data on our behalf or as independent controllers, only for the purposes listed:</p>
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {site.processors.map((p) => (
              <tr key={p.name}>
                <td>
                  <a href={p.policyUrl} rel="noopener noreferrer" target="_blank">{p.name}</a>
                </td>
                <td>{p.purpose}</td>
                <td>{p.data}</td>
              </tr>
            ))}
            <tr>
              <td>
                <a href={site.emailProvider.policyUrl} rel="noopener noreferrer" target="_blank">{site.emailProvider.name}</a>
              </td>
              <td>Hosting our support mailbox.</td>
              <td>Support emails you send us.</td>
            </tr>
            <tr>
              <td>
                <a href={site.websiteHost.policyUrl} rel="noopener noreferrer" target="_blank">{site.websiteHost.name}</a>
              </td>
              <td>Hosting this website.</td>
              <td>Standard server logs (IP address, browser, pages requested).</td>
            </tr>
          </tbody>
        </table>
        <p>
          We may also disclose information if required by law, to protect the rights and safety of our users or others, or as part of a merger or sale of
          the App. In a sale, this policy (or one at least as protective) will continue to apply.
        </p>
      </>
    ),
  },
  {
    id: 'retention',
    title: 'How long we keep data, and deleting it',
    body: (
      <>
        <ul>
          <li>
            <strong>On-device data</strong> stays on your phone until you delete it. In the App: You → Start over → <em>Delete all my data</em>. Deleting the App
            also deletes it. Copies in device backups remain until those backups are replaced or deleted.
          </li>
          <li>
            <strong>Support emails</strong> are kept for up to 24 months after your request is resolved, then deleted, unless the law requires us to keep them
            longer. You can ask us to delete them sooner at {email}.
          </li>
          <li>
            <strong>Purchase records</strong> are kept by Apple or Google under their own policies. We keep no copy of them.
          </li>
          <li>
            <strong>Website server logs</strong> are kept by our host for a short period under its own retention policy.
          </li>
        </ul>
        <p>
          Puffkin has no user account, so there is no account to delete. To cancel a subscription, see <Link href="/support/">Support</Link>; cancelling
          does not delete your on-device data, and deleting your data or the App does not cancel your subscription.
        </p>
      </>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights',
    body: (
      <>
        <p>
          Depending on where you live (for example the EU, UK, California and other US states, Canada, Brazil or Australia), you may have the right to
          access, correct, delete or receive a copy of your personal data, to object to or restrict processing, to withdraw consent, and not to be
          discriminated against for exercising these rights.
        </p>
        <p>
          Most of your data is on your device, where you can view, change and delete it yourself. For data we hold (support emails), email {email}. We
          respond within 30 days, and may need to verify that the request comes from you, for example by replying from the same email address. You can
          use an authorized agent where the law allows.
        </p>
        <p>
          You also have the right to complain to your local data protection authority. We&apos;d appreciate the chance to address your concern first.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Age requirement',
    body: (
      <p>
        Puffkin is intended only for adults aged {site.minimumAge} or older, or the legal age to buy nicotine products where they live, whichever is
        higher. It is not directed at children, and we do not knowingly collect personal data from anyone under {site.minimumAge}. If you believe a minor has
        sent us personal data, contact {email} and we will delete it.
      </p>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    body: (
      <p>
        On-device data is protected by your phone&apos;s own security, such as your passcode and device encryption, so keep your device locked. The Site is
        served over HTTPS. Support email is stored with a reputable provider using encryption in transit. No system is perfectly secure, but we
        deliberately collect as little as possible so there is little to protect.
      </p>
    ),
  },
  {
    id: 'transfers',
    title: 'International transfers',
    body: (
      <p>
        Our service providers may process data in countries other than yours, including the United States. Where required, transfers rely on appropriate
        safeguards such as the European Commission&apos;s Standard Contractual Clauses or the provider&apos;s certification under an applicable data privacy
        framework.
      </p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    body: (
      <p>
        If our practices change, for example if we add a feature that sends data off your device, we will update this policy and the
        &quot;Last updated&quot; date before the change takes effect. For significant changes we will also tell you in the App. We will never start sending
        your puff data off your device without telling you first.
      </p>
    ),
  },
  {
    id: 'contact',
    title: 'Contact',
    body: (
      <p>
        <Operator />
        <br />
        Email: {email}
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={sections}
      summary={
        <>
          <h2>The short version</h2>
          <ul>
            <li>No account. Your puffs, plan and settings are stored <strong>only on your phone</strong>.</li>
            <li>No ads, no analytics, no tracking, and we never sell your data.</li>
            <li>Payments go through Apple or Google; we never see your card details.</li>
            <li>We only get personal data if you email us, and we use it only to help you.</li>
            <li>Delete everything in the App: You → Start over → Delete all my data.</li>
          </ul>
        </>
      }
    />
  );
}
