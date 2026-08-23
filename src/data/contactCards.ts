import { Mail, Clock, MessageCircle } from 'lucide-react';
import type { ContactInfoCard } from '../types/content';
import { CREATORS_WHATSAPP_URL } from './links';

// Copy read directly off doc/Clapout.pdf pages 23/25 (Contact page) —
// support.clapout@gmail.com is a real, separate address from the
// Footer's hello@clapout.co, not a typo to merge.
export const contactCards: ContactInfoCard[] = [
  {
    icon: Mail,
    heading: 'Email Support',
    body: 'Get help with analytics, viewbot detection, and platform features',
    linkLabel: 'support.clapout@gmail.com',
    linkHref: 'mailto:support.clapout@gmail.com',
  },
  {
    icon: Clock,
    heading: 'Response Time',
    body: 'We typically respond within 24 hours during business days. Urgent technical issues get priority support.',
  },
  {
    icon: MessageCircle,
    heading: 'Community',
    body: 'Join our community for updates and peer support',
    linkLabel: 'WhatsApp',
    linkHref: CREATORS_WHATSAPP_URL,
  },
];
