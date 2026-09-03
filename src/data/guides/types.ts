export type GuideBlock =
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: { lead?: string; text: string }[] }
  | { kind: 'callout'; title?: string; text: string };

export interface GuideSection {
  heading: string;
  blocks: GuideBlock[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface Guide {
  slug: string;
  /** Short label used in the footer and cross-links. */
  label: string;
  /** Full page title (H1). */
  title: string;
  summary: string;
  readTime: string;
  /** Opening paragraphs shown before the first section. */
  intro: string[];
  sections: GuideSection[];
  faq?: GuideFaq[];
}
