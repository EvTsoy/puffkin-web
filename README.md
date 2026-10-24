# Puffkin website

Landing page, support, Privacy Policy and Terms of Service for the Puffkin app.
Next.js 16 (App Router, TypeScript), static export, no tracking, no cookies, fonts self-hosted.

| Page | URL | Use it for |
|---|---|---|
| Home (support contact in the first screen) | `/` | Marketing URL |
| Support (email + FAQ) | `/support/` | **App Store Support URL**, Google Play website |
| Privacy Policy | `/privacy/` | **App Store Privacy Policy URL**, **Google Play privacy policy** |
| Terms of Service | `/terms/` | App Store custom EULA (or link in the app's paywall) |

## Before you publish
1. Fill in every `[PLACEHOLDER]` in `src/site.config.ts` (legal name, address, country, governing law, website host, email provider, domain).
   `npm run build` lists what's left; `npm run lint:placeholders` fails while any remain.
2. Keep `processors` truthful. If the app uses RevenueCat, Sentry or anything else that receives data, uncomment it or add it. The Privacy Policy table is generated from this list.
3. Make sure the app really does what the policy says: no analytics SDKs, data only on device, in-app "Delete all my data".
4. Add the store links (`appStoreUrl`, `playStoreUrl`) once the app is live, and swap the text buttons for Apple's and Google's official badges.
5. Have a lawyer review the policy and terms for your jurisdiction. This text is a solid starting point, not legal advice.

## Develop & deploy
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
```
Deploy `out/` anywhere static (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3). On Vercel, import the repo and it builds automatically.

## Store listing answers this site supports (confirm against the real app)
- **Apple App Privacy:** "Data Not Collected", if the app has no analytics or crash SDKs and no server of its own. Purchases through StoreKit alone don't count as collection by you. If you add RevenueCat or Sentry, declare what they collect.
- **Google Play Data safety:** no data collected or shared, data encrypted in transit (n/a), no account deletion needed (no accounts). Update it if you add any SDK.
- **Age rating:** the app references tobacco and nicotine. Answer the age-rating questionnaires accordingly; the site and terms say 18+.

## Structure
```
src/site.config.ts          all contact / legal / processor values
src/app/page.tsx            home (hero + support strip + features + support section)
src/app/support/page.tsx    support page
src/app/privacy/page.tsx    privacy policy
src/app/terms/page.tsx      terms of service (incl. Apple minimum EULA terms)
src/components/             Puffkin, Header, Footer, SupportSection (contact card + FAQ), Legal shell
public/screens/             app screens used on the home page
```
