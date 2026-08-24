export interface PolicySection {
  heading: string;
  body: string[];
}

export interface Policy {
  slug: string;
  title: string;
  summary: string;
  sections: PolicySection[];
}

export const POLICIES: Policy[] = [
  {
    slug: 'acceptable-use',
    title: 'Acceptable Use of the Platform',
    summary:
      'The ground rules for using Clapout — what every Creator and Brand agrees to when they sign up.',
    sections: [
      {
        heading: '1. One person, one account',
        body: [
          'Each Creator may hold one Clapout account, registered in their own name with social media accounts they own or control. Operating multiple accounts, sharing an account, or joining campaigns on behalf of someone else is not permitted.',
        ],
      },
      {
        heading: '2. Honest participation',
        body: [
          'Use Clapout only to take part in campaigns as they are described in the brief. Do not misrepresent your audience, your handles, your location, or the performance of your posts. Information you provide during signup and verification must be accurate and kept up to date.',
        ],
      },
      {
        heading: '3. Respect the platform',
        body: [
          'You may not interfere with the operation of Clapout — including probing or disrupting our systems, scraping data at scale, circumventing verification, or using automation to join campaigns or submit posts.',
          'Treat other users and the Clapout team with respect. Harassment, threats, or abusive behaviour in campaign interactions or support channels may lead to suspension.',
        ],
      },
      {
        heading: '4. Follow platform rules everywhere',
        body: [
          'Campaign content lives on TikTok, YouTube, Instagram, and other social platforms. You must follow the rules of those platforms as well as ours. Content that is removed by a social platform for a rule violation does not qualify for rewards.',
        ],
      },
      {
        heading: '5. Consequences',
        body: [
          'Breaches of this policy may lead to content being disqualified, unverified rewards being withheld, or your account being suspended or closed, depending on severity. Serious cases are handled under our Fraud or Artificial Views policy and our Disputes and Appeals process.',
        ],
      },
    ],
  },
  {
    slug: 'responsibilities',
    title: 'Creator and Brand Responsibilities',
    summary:
      'What Creators owe Brands, what Brands owe Creators, and where Clapout sits in between.',
    sections: [
      {
        heading: '1. Creator responsibilities',
        body: [
          'Creators agree to read the campaign brief in full before joining, follow it exactly — including required edits, captions, tags, and posting windows — and submit accurate post links for verification.',
          'Creators are responsible for the accounts they post from: the account must be theirs, public for the duration of the campaign, and in good standing on its platform. Creators must disclose sponsored content where the law or the social platform requires it.',
        ],
      },
      {
        heading: '2. Brand responsibilities',
        body: [
          'Brands agree to provide a clear, complete brief before the campaign opens; to supply only materials they have the right to license; and to fund the campaign budget before Creators begin posting.',
          'Brands must state requirements up front. Requirements added after Creators have joined apply only to posts made after the change, and material changes give participating Creators the right to withdraw without penalty.',
        ],
      },
      {
        heading: '3. Clapout’s role',
        body: [
          'Clapout operates the platform that connects the two sides: we host briefs, review submissions, verify performance, and pay out verified rewards from the campaign budget. We are not a party to the creative relationship between a Brand and a Creator beyond what the brief and these policies define.',
        ],
      },
      {
        heading: '4. Shared expectations',
        body: [
          'Both sides agree to communicate through Clapout for anything that affects payment or verification, to raise problems promptly through our Disputes and Appeals process rather than through public call-outs, and to keep confidential any non-public campaign information shared with them.',
        ],
      },
    ],
  },
  {
    slug: 'prohibited-campaigns',
    title: 'Prohibited Campaigns and Content',
    summary:
      'Campaign types Clapout will not run, and content Creators may never post under a Clapout campaign.',
    sections: [
      {
        heading: '1. Campaigns we do not accept',
        body: [
          'Clapout does not run campaigns that promote: illegal products or services; weapons; recreational drugs; gambling or betting products aimed at minors or unlicensed in the target market; get-rich-quick, pyramid, or unregistered investment schemes; adult sexual content; or political disinformation.',
          'We may decline any campaign that we reasonably believe would harm Creators, mislead audiences, or damage trust in the platform, even if it is not listed above.',
        ],
      },
      {
        heading: '2. Content Creators may never post',
        body: [
          'Regardless of the brief, campaign content must not contain: hate speech or harassment; violent or graphic material; sexually explicit material; false claims presented as fact; other people’s copyrighted work used without permission; or private information about any person.',
        ],
      },
      {
        heading: '3. Misleading formats',
        body: [
          'Content may not disguise advertising as organic opinion where disclosure is required, fake an endorsement, impersonate another person or account, or use engagement-bait that violates the host platform’s rules.',
        ],
      },
      {
        heading: '4. Enforcement',
        body: [
          'Prohibited content is removed from the campaign and earns no reward, whether flagged before or after posting. Brands that submit prohibited campaign materials forfeit related fees as described in our Campaign Cancellations policy. Repeat or serious violations lead to permanent removal from Clapout.',
        ],
      },
    ],
  },
  {
    slug: 'campaign-cancellations',
    title: 'Campaign Cancellations',
    summary:
      'What happens when a Brand ends a campaign early — and what Creators are still owed.',
    sections: [
      {
        heading: '1. Cancelling before launch',
        body: [
          'A Brand may cancel a campaign at no cost any time before it is published to Creators. Once cancelled, the campaign budget is refunded under our Refunds policy, less any payment-processing fees already incurred.',
        ],
      },
      {
        heading: '2. Cancelling a live campaign',
        body: [
          'Once a campaign is live and Creators have joined, cancelling it does not erase what has already been earned. All posts published before the cancellation takes effect remain eligible for verification, and verified performance up to the cancellation time is paid out from the campaign budget as normal.',
          'Creators are notified as soon as a campaign is cancelled. Posts made after the notification are not eligible for rewards.',
        ],
      },
      {
        heading: '3. Cancellation by Clapout',
        body: [
          'Clapout may suspend or cancel a campaign that breaches our Prohibited Campaigns and Content policy, that is not funded as agreed, or where we detect fraud that compromises verification. Where the fault lies with the Brand, Creators’ verified earnings to that point are still honoured from the campaign budget.',
        ],
      },
      {
        heading: '4. Remaining funds',
        body: [
          'Whatever remains of the budget after verified rewards and applicable fees are settled is handled under our Refunds of Unused Campaign Funds policy.',
        ],
      },
    ],
  },
  {
    slug: 'refunds',
    title: 'Refunds of Unused Campaign Funds',
    summary:
      'How leftover campaign budget is calculated and returned to Brands.',
    sections: [
      {
        heading: '1. What counts as unused funds',
        body: [
          'A campaign budget is drawn down by verified Creator rewards and Clapout’s platform fee as stated in the campaign agreement. Anything left when the campaign closes — because performance targets were not fully consumed or the campaign was cancelled — is the unused balance.',
        ],
      },
      {
        heading: '2. When refunds are issued',
        body: [
          'Unused balances are refundable after the campaign window closes and the final verification pass is complete, normally within 14 days of campaign close. This waiting period exists because views continue to accrue and be verified until the window ends.',
        ],
      },
      {
        heading: '3. How refunds are paid',
        body: [
          'Refunds are returned to the payment method or account the campaign was funded from, via our payment providers (including Paystack). Third-party processing fees already incurred are not refundable. Where a refund cannot be returned to the original method, we will contact the Brand to arrange an alternative.',
        ],
      },
      {
        heading: '4. What is not refunded',
        body: [
          'Rewards already verified and owed to Creators are never clawed back into a refund. Platform fees for work already performed — campaign setup, review, and verification on posts submitted — are earned when performed. Campaigns cancelled by Clapout for a Brand’s policy breach may forfeit the platform fee for the full campaign.',
        ],
      },
    ],
  },
  {
    slug: 'performance-verification',
    title: 'Creator Performance Verification',
    summary:
      'How Clapout counts views and decides what gets paid.',
    sections: [
      {
        heading: '1. What we verify',
        body: [
          'Rewards are calculated only on verified performance. For each submitted post we confirm: the post is live and public; it was published within the campaign window; it follows the brief; and its metrics — views and any other measures named in the brief — are genuine.',
        ],
      },
      {
        heading: '2. How verification works',
        body: [
          'Creators submit the link to their published post through Clapout. We read the public metrics of that post from the host platform and monitor them across the campaign window. Metrics are checked against patterns of organic growth; sudden spikes inconsistent with the account’s reach are held for review under our Fraud or Artificial Views policy.',
        ],
      },
      {
        heading: '3. When counts differ',
        body: [
          'Social platforms report views differently across surfaces, and totals can be adjusted by the platforms themselves. Clapout’s verified count — taken from the host platform’s public metrics at verification time — is the number used for payment. If a platform removes or re-states views, the verified count follows the platform.',
        ],
      },
      {
        heading: '4. Timing and payment',
        body: [
          'Final verification happens after the campaign window closes, and verified payouts follow via mobile money or bank transfer for Creators in Ghana, or another method stated in the brief. A Creator who believes their count is wrong can raise it through Disputes and Appeals within 14 days of payout.',
        ],
      },
    ],
  },
  {
    slug: 'fraud',
    title: 'Fraud or Artificial Views',
    summary:
      'Artificial engagement is excluded from payment and can end your time on Clapout.',
    sections: [
      {
        heading: '1. What counts as artificial',
        body: [
          'Artificial engagement includes, without limitation: purchased views, likes, or followers; bot or click-farm traffic; engagement pods and view-exchange groups; view loops or autoplay embeds designed to inflate counts; and self-viewing at scale through multiple devices or accounts.',
        ],
      },
      {
        heading: '2. Other fraud',
        body: [
          'Submitting a post you did not create, editing a link after verification, misrepresenting an account as your own, colluding with other accounts to game a campaign, or providing false payout details are treated as fraud even where no artificial views are involved.',
        ],
      },
      {
        heading: '3. What happens when we detect it',
        body: [
          'Metrics we determine to be artificial are excluded from the verified count — the affected post may still earn on its genuine performance if the inflation appears to be third-party and not procured by the Creator.',
          'Where the evidence indicates the Creator procured the inflation or otherwise acted fraudulently, the post is disqualified in full, pending rewards are withheld, and the account may be suspended or permanently removed. Brands that use artificial engagement to trigger their own campaign thresholds are subject to the same measures.',
        ],
      },
      {
        heading: '4. Recovering wrongful payouts',
        body: [
          'If fraud is discovered after payment, Clapout may recover the amount from future payouts or, for serious cases, pursue recovery directly. We may also report fraudulent activity to the affected social platforms and, where required, to law enforcement.',
        ],
      },
      {
        heading: '5. If you think we got it wrong',
        body: [
          'Fraud determinations can be challenged through our Disputes and Appeals process. Provide whatever evidence you have — analytics screenshots, audience data, platform notifications — and we will review the determination with fresh eyes.',
        ],
      },
    ],
  },
  {
    slug: 'disputes',
    title: 'Disputes and Appeals',
    summary:
      'How to challenge a decision — rejected posts, view counts, withheld rewards, or account actions.',
    sections: [
      {
        heading: '1. What you can dispute',
        body: [
          'Creators may dispute a rejected submission, a verified view count, a withheld or miscalculated payout, or a suspension. Brands may dispute verification outcomes that affect their budget, refund calculations, and campaign suspensions.',
        ],
      },
      {
        heading: '2. How to raise a dispute',
        body: [
          'Email clapoutcreators@gmail.com with the campaign name, the post link or transaction concerned, what outcome you believe is wrong, and any evidence. Disputes must be raised within 14 days of the decision you are challenging — after that, decisions become final.',
        ],
      },
      {
        heading: '3. How we handle it',
        body: [
          'We acknowledge disputes within 2 business days and aim to resolve them within 10. The dispute is reviewed by someone other than the person who made the original decision wherever our team size allows. You will receive the outcome in writing, with reasons.',
        ],
      },
      {
        heading: '4. Appeals',
        body: [
          'If you disagree with a dispute outcome, you may appeal once, within 7 days of receiving it, by replying with any new information. Appeal outcomes are final on the platform.',
        ],
      },
      {
        heading: '5. Beyond the platform',
        body: [
          'Nothing in this process limits rights you cannot waive under applicable law, including the laws of Ghana. Where a dispute involves a payment provider, their own dispute procedures may also apply.',
        ],
      },
    ],
  },
];

export function getPolicy(slug: string): Policy | undefined {
  return POLICIES.find((policy) => policy.slug === slug);
}
