/**
 * Everything that varies (contact, legal entity, store links, data processors) lives here.
 * Values in [SQUARE BRACKETS] are placeholders: `npm run build` lists any that are left.
 *
 * Keep `processors` truthful. The Privacy Policy is generated from it, and it must match
 * the App Store privacy labels and the Google Play Data safety form.
 */
export type Processor = {
  name: string;
  purpose: string;
  data: string;
  policyUrl: string;
};

export const site = {
  name: 'Puffkin',
  tagline: 'Every puff gets a reaction.',
  description:
    'Puffkin helps adults quit vaping: count every puff, watch your daily limit shrink to zero, and get roasted by a grumpy little cloud the whole way.',
  url: 'https://puffkin.evtsoy.com',

  supportEmail: 'puffkin@evtsoy.com',
  supportResponseTime: 'We usually reply within 2 business days.',

  operator: {
    legalName: '[LEGAL NAME OF THE APP OPERATOR]', // company or your full name as shown on the App Store / Play listing
    address: '[POSTAL ADDRESS]', // required by Google Play for paid apps; also used for legal notices
    country: '[COUNTRY]',
  },
  governingLaw: '[COUNTRY / STATE WHOSE LAWS APPLY]',

  effectiveDate: '2026-10-24', // update whenever the policy text changes
  minimumAge: 18,

  appStoreUrl: '', // e.g. https://apps.apple.com/app/id0000000000; empty shows "Coming soon"
  playStoreUrl: '', // e.g. https://play.google.com/store/apps/details?id=com.evtsoy.puffkin

  // Third parties that receive any personal data. Only list what the app or site really uses.
  processors: [
    {
      name: 'Apple (App Store)',
      purpose: 'Processing purchases, subscriptions, free trials and refunds on iOS.',
      data: 'Purchase and subscription status. Apple handles your payment details; we never see them.',
      policyUrl: 'https://www.apple.com/legal/privacy/',
    },
    {
      name: 'Google (Google Play)',
      purpose: 'Processing purchases, subscriptions, free trials and refunds on Android.',
      data: 'Purchase and subscription status. Google handles your payment details; we never see them.',
      policyUrl: 'https://policies.google.com/privacy',
    },
    {
      name: 'RevenueCat',
      purpose: 'Validating purchases and keeping your subscription status in sync across reinstalls.',
      data: 'A random app user ID, purchase receipts and subscription status. No name, email or puff data.',
      policyUrl: 'https://www.revenuecat.com/privacy/',
    },
    {
      name: 'Expo (EAS Update)',
      purpose: 'Checking for app updates and downloading them.',
      data: 'Platform, app runtime version, the ID of the update already on the device, and the IP address of the request. No name, email or puff data.',
      policyUrl: 'https://expo.dev/privacy',
    },
  ] as Processor[],

  // Who hosts this website (they receive standard server logs).
  websiteHost: { name: 'Vercel', policyUrl: 'https://vercel.com/legal/privacy-policy' },
  // Who runs the support mailbox (they store support emails). [CONFIRM]
  emailProvider: { name: '[EMAIL PROVIDER, e.g. Google Workspace]', policyUrl: '[EMAIL PROVIDER PRIVACY POLICY URL]' },
} as const;

export const mailto = (subject = 'Puffkin support') =>
  `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}`;

export const prettyDate = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
