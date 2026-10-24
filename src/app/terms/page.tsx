import type { Metadata } from 'next';
import Link from 'next/link';
import { site, mailto } from '@/site.config';
import { LegalPage, Operator, type Section } from '@/components/Legal';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `The terms for using ${site.name}: subscriptions, free trials, health disclaimer and your rights.`,
  alternates: { canonical: '/terms/' },
};

const email = <a href={mailto('Terms question')}>{site.supportEmail}</a>;
const APPLE_CANCEL = 'https://support.apple.com/en-us/118428';
const GOOGLE_CANCEL = 'https://support.google.com/googleplay/answer/7018481';

const sections: Section[] = [
  {
    id: 'agreement',
    title: 'Agreement',
    body: (
      <>
        <p>
          These Terms of Service (&quot;Terms&quot;) are an agreement between you and <Operator /> (&quot;we&quot;, &quot;us&quot;) for your use of the {site.name}
          {' '}mobile apps (the &quot;App&quot;) and this website. By downloading, opening or using the App, you agree to these Terms and to our{' '}
          <Link href="/privacy/">Privacy Policy</Link>. If you don&apos;t agree, don&apos;t use the App.
        </p>
        <p>
          If you got the App from Apple&apos;s App Store, section 15 also applies. If you got it from Google Play, section 16 also applies.
        </p>
      </>
    ),
  },
  {
    id: 'eligibility',
    title: 'Who can use Puffkin',
    body: (
      <p>
        You must be at least {site.minimumAge} years old, or the legal age to buy nicotine products where you live if that is higher, and able to enter
        into a binding contract. Puffkin is designed for adults who already vape and want to cut down or quit. It does not promote, sell or facilitate
        access to nicotine or vaping products.
      </p>
    ),
  },
  {
    id: 'health',
    title: 'Not medical advice',
    body: (
      <>
        <p>
          <strong>
            Puffkin is a self-tracking and motivation tool. It is not a medical device and does not provide medical advice, diagnosis or treatment.
          </strong>{' '}
          Daily limits, plans, quit dates and every other suggestion in the App are general, automatically calculated targets. They are not personalized
          medical guidance.
        </p>
        <ul>
          <li>Talk to a doctor or pharmacist before changing your nicotine use, especially if you are pregnant, breastfeeding or have a health condition, or before using nicotine replacement or medication.</li>
          <li>Nicotine withdrawal can affect mood, sleep and concentration. If you feel unwell, stop following the plan and get professional advice.</li>
          <li>In an emergency, call your local emergency number. Puffkin cannot help in an emergency.</li>
        </ul>
        <p>You are responsible for your own health decisions. Results vary, and we don&apos;t promise that you will quit.</p>
      </>
    ),
  },
  {
    id: 'roasts',
    title: 'Puffkin’s roasts',
    body: (
      <p>
        Puffkin&apos;s personality is sarcastic by design. His lines are humor aimed at the vaping habit, not at you, and they are not statements of fact or
        advice. You choose how harsh he is (Mild, Spicy or Brutal) and can switch roasts off for a day with a go-easy day. If you find a line hurtful or
        inappropriate, tell us at {email} and we&apos;ll review it.
      </p>
    ),
  },
  {
    id: 'license',
    title: 'Your license to use the App',
    body: (
      <>
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable, revocable license to download and use the App on devices you own or control,
          for your own non-commercial use, subject to these Terms and the rules of the store you downloaded it from.
        </p>
        <p>You agree not to:</p>
        <ul>
          <li>copy, modify, sell, rent or distribute the App, or create derivative works from it;</li>
          <li>reverse engineer, decompile or try to extract its source code, except where the law expressly allows it;</li>
          <li>bypass any payment, subscription or security feature;</li>
          <li>use the App in a way that is unlawful, harmful or that interferes with its operation.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions, free trials and payments',
    body: (
      <>
        <p>Some or all of the App&apos;s features require a paid subscription (&quot;Puffkin Pro&quot;). Prices and plans are shown in the App before you buy.</p>
        <ul>
          <li>
            <strong>Billing.</strong> Payment is charged to your Apple ID or Google Play account when you confirm the purchase, or when a free trial ends.
            Prices are shown in your local currency and may include taxes.
          </li>
          <li>
            <strong>Auto-renewal.</strong> Subscriptions renew automatically at the same price and for the same period (monthly or yearly) unless you cancel
            at least 24 hours before the end of the current period. Your account is charged for renewal within the 24 hours before the period ends.
          </li>
          <li>
            <strong>Free trials.</strong> If a free trial is offered, you are charged when the trial ends unless you cancel at least 24 hours before it ends.
            Trials are generally available once per person, as determined by Apple or Google.
          </li>
          <li>
            <strong>Cancelling.</strong> Manage or cancel in your store account settings (
            <a href={APPLE_CANCEL} rel="noopener noreferrer" target="_blank">Apple</a>,{' '}
            <a href={GOOGLE_CANCEL} rel="noopener noreferrer" target="_blank">Google Play</a>). Deleting the App does not cancel a subscription. After you
            cancel, you keep access until the end of the period you&apos;ve paid for.
          </li>
          <li>
            <strong>Refunds.</strong> Purchases are processed by Apple or Google, and refunds are handled by them under their refund policies. We cannot issue
            refunds directly. This does not limit any refund rights you have under consumer law.
          </li>
          <li>
            <strong>Price changes.</strong> If we change a subscription price, Apple or Google will notify you in advance as their rules require, and where
            required you will be asked to agree before the new price applies.
          </li>
          <li>
            <strong>Restoring purchases.</strong> Use Restore purchases in the App with the same Apple ID or Google account you bought with.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'your-data',
    title: 'Your data and backups',
    body: (
      <p>
        Your puff log, plan and settings are stored only on your device (see the <Link href="/privacy/">Privacy Policy</Link>). We can&apos;t restore them if
        your device is lost, reset or the App is deleted, unless they are included in a device backup you control. You are responsible for your own
        backups.
      </p>
    ),
  },
  {
    id: 'sharing',
    title: 'Share cards and content you post',
    body: (
      <p>
        The App lets you create share cards with Puffkin&apos;s lines. You may share them for personal, non-commercial purposes. You are responsible for what
        you post and where you post it, including any numbers about your vaping that you choose to show. Do not use share cards to promote nicotine or
        vaping products.
      </p>
    ),
  },
  {
    id: 'ip',
    title: 'Intellectual property',
    body: (
      <p>
        The App, the Puffkin name and character, his lines, the design and all related content are owned by us or our licensors and are protected by
        intellectual property laws. Except for the license in section 5, these Terms don&apos;t give you any rights to them. If you send us feedback or ideas,
        we may use them without any obligation to you.
      </p>
    ),
  },
  {
    id: 'availability',
    title: 'Changes and availability',
    body: (
      <p>
        We may update, change or discontinue features of the App at any time, for example to fix bugs, improve the plan or comply with law or store rules.
        If we discontinue a paid feature you have an active subscription for, the store&apos;s refund rules and your consumer rights apply.
      </p>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer of warranties',
    body: (
      <p className="caps">
        To the fullest extent permitted by law, the App is provided &quot;as is&quot; and &quot;as available&quot;, without warranties of any kind, whether
        express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy and non-infringement. We don&apos;t warrant
        that the App will be uninterrupted, error-free, or that calculations (such as limits, quit dates or savings) are accurate for your situation. Some
        jurisdictions don&apos;t allow these exclusions, so some of them may not apply to you.
      </p>
    ),
  },
  {
    id: 'liability',
    title: 'Limitation of liability',
    body: (
      <>
        <p className="caps">
          To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special, consequential or punitive damages, or for any
          loss of data, health outcome or decision you make based on the App. Our total liability for any claim relating to the App is limited to the
          amount you paid for the App in the 12 months before the claim, or USD 50, whichever is greater.
        </p>
        <p>
          Nothing in these Terms limits liability that cannot be limited by law, such as liability for death or personal injury caused by negligence or for
          fraud, or your statutory rights as a consumer.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: 'Ending these Terms',
    body: (
      <p>
        You can stop using the App at any time by deleting it (and cancelling any subscription in your store account). We may suspend or end your license if
        you seriously or repeatedly break these Terms. Sections that by their nature should survive (such as 3, 9, 11, 12 and 14) continue to apply.
      </p>
    ),
  },
  {
    id: 'law',
    title: 'Governing law and disputes',
    body: (
      <>
        <p>
          These Terms are governed by the laws of {site.governingLaw}, without regard to conflict-of-law rules. If you are a consumer, you also keep the
          protection of the mandatory laws of the country where you live, and you may bring claims in your local courts.
        </p>
        <p>Before starting any formal dispute, please email {email} so we can try to resolve it informally.</p>
        <p>
          We may update these Terms. We&apos;ll change the &quot;Last updated&quot; date and, for material changes, notify you in the App before they take
          effect. Continuing to use the App afterwards means you accept the updated Terms.
        </p>
      </>
    ),
  },
  {
    id: 'apple',
    title: 'Additional terms for the Apple App Store',
    body: (
      <>
        <p>If you downloaded the App from Apple&apos;s App Store:</p>
        <ul>
          <li>These Terms are between you and us only, not Apple. We, not Apple, are solely responsible for the App and its content.</li>
          <li>Your license is limited to using the App on Apple-branded products you own or control, as permitted by the Usage Rules in the Apple Media Services Terms and Conditions.</li>
          <li>Apple has no obligation to provide any maintenance or support services for the App. Contact us at {email} for support.</li>
          <li>
            If the App fails to conform to any applicable warranty, you may notify Apple and Apple will refund the purchase price (if any). To the maximum
            extent permitted by law, Apple has no other warranty obligation for the App.
          </li>
          <li>
            We, not Apple, are responsible for addressing any claims relating to the App or your use of it, including product liability claims, claims that
            the App fails to meet legal or regulatory requirements, and claims under consumer protection, privacy or similar laws.
          </li>
          <li>If a third party claims the App infringes their intellectual property rights, we, not Apple, are responsible for investigating, defending and settling that claim.</li>
          <li>
            You confirm that you are not located in a country subject to a U.S. Government embargo or designated as &quot;terrorist supporting&quot;, and that
            you are not on any U.S. Government list of prohibited or restricted parties.
          </li>
          <li>You must comply with applicable third-party terms (such as your mobile carrier&apos;s) when using the App.</li>
          <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and, once you accept them, Apple may enforce them against you.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'google',
    title: 'Additional terms for Google Play',
    body: (
      <p>
        If you downloaded the App from Google Play, you also agree to the Google Play Terms of Service. These Terms are between you and us, not Google.
        Google is not responsible for the App or its support. Purchases and refunds are subject to Google Play&apos;s policies.
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

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      sections={sections}
      summary={
        <>
          <h2>The short version</h2>
          <ul>
            <li>Puffkin is for adults ({site.minimumAge}+) and is <strong>not medical advice</strong>.</li>
            <li>Subscriptions renew automatically until you cancel in your App Store or Google Play settings, at least 24 hours before renewal.</li>
            <li>Refunds are handled by Apple or Google.</li>
            <li>Your data lives on your phone, so keep your own backups.</li>
            <li>Puffkin roasts the habit, not you. You control how hard.</li>
          </ul>
        </>
      }
    />
  );
}
