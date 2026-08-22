import type { FaqItem } from '../types/content';

// Questions from design-reference.md § 5 (design-reference.md / the PDF show
// the accordions collapsed, so no answer copy came from Figma). Answers are
// carried over verbatim from the pre-rebuild src/components/FaqSection.tsx,
// which already had real, brand-appropriate copy for these same 6 questions
// — reused rather than re-asking the user or inventing new text.
export const faqs: FaqItem[] = [
  {
    question: 'What is Clapout?',
    answer:
      'Clapout is a creator distribution platform that connects brands with micro-influencers and creators. Brands provide a campaign, creators post and promote the content, and Clapout tracks the results and rewards creators based on verified performance.',
  },
  {
    question: 'Do I need a lot of followers to join?',
    answer:
      "No. You don't need millions of followers to work with brands. Clapout is built for micro-influencers and emerging creators — what matters is that your content reaches real people and performs.",
  },
  {
    question: 'How do I earn as a creator?',
    answer:
      'Every campaign states its reward up front — for example ₵20 per 1,000 verified views. You join a campaign, follow the brief, post the content on your platform, submit your post link, and earn based on your verified performance. You always know how much you can earn before you join.',
  },
  {
    question: 'How is my performance verified?',
    answer:
      'After you post, you submit your link to Clapout. Our team reviews the post against the campaign brief and tracks its performance over the campaign window. Only genuine, verified views count toward your payout.',
  },
  {
    question: 'How do brands launch a campaign?',
    answer:
      'Brands set a campaign budget, provide their content and brief, and Clapout activates a network of creators to distribute it. Brands track verified performance and only pay based on results.',
  },
  {
    question: 'When and how do I get paid?',
    answer:
      'Payouts are made after the campaign window closes and your performance has been verified. Creators in Ghana are paid via mobile money or bank transfer. Payment timelines are stated in each campaign brief.',
  },
];
