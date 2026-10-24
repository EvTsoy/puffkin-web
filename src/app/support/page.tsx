import type { Metadata } from 'next';
import { site } from '@/site.config';
import { SupportSection } from '@/components/SupportSection';

export const metadata: Metadata = {
  title: 'Support',
  description: `Get help with ${site.name}: email ${site.supportEmail}, cancel or restore a subscription, delete your data.`,
  alternates: { canonical: '/support/' },
};

export default function SupportPage() {
  return <SupportSection asPage />;
}
