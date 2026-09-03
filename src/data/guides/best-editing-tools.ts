import type { Guide } from './types';

export const bestEditingTools: Guide = {
  slug: 'best-editing-tools',
  label: 'Best Editing Tools',
  title: 'Best Editing Tools for Clippers: Free and Paid Options',
  summary:
    'A practical look at the editors clippers actually use — phone apps, desktop software, caption tools — and which ones fit campaign work on Clapout.',
  readTime: '9 min read',
  intro: [
    'Most people starting out as clippers assume they need better software. They almost never do. The clips that earn on campaigns are cut on a phone, with a free app, using footage the brand already supplied.',
    'What matters is how fast you can go from raw asset to a finished 9:16 clip that follows the brief. An editor that gets you there in twenty minutes is worth more than one with a hundred effects you will never open.',
    'This guide covers the tools that hold up in real campaign work, what each one is good for, and the ones to leave alone if you want your submissions verified and paid.',
  ],
  sections: [
    {
      heading: 'What actually matters in a clipping editor',
      blocks: [
        {
          kind: 'p',
          text: 'Feature lists are a bad way to choose an editor. Four things decide whether a tool helps you earn or slows you down.',
        },
        {
          kind: 'list',
          items: [
            {
              lead: 'Speed.',
              text: 'You may cut five or six clips for one campaign. If the app takes a minute to open a project and stutters on the timeline, that cost multiplies across every submission.',
            },
            {
              lead: 'Captions.',
              text: 'Auto-captions you can edit and restyle in the app save the single biggest chunk of editing time. Typing captions by hand is not a workflow you can sustain.',
            },
            {
              lead: '9:16 handling.',
              text: 'The editor should open a vertical project natively, let you reframe landscape footage inside it, and keep your subject in the safe area away from platform UI.',
            },
            {
              lead: 'Export quality.',
              text: 'Some apps quietly crush your export to a low bitrate. A soft, blocky clip gets fewer views and looks like a rip, which is exactly what reviewers watch for.',
            },
          ],
        },
        {
          kind: 'p',
          text: 'Everything else — colour wheels, keyframe curves, motion tracking — is optional for clipping. Useful later. Not what gets your first campaign paid.',
        },
      ],
    },
    {
      heading: 'CapCut: the default, and why it earned that',
      blocks: [
        {
          kind: 'p',
          text: 'CapCut is what most clippers use, and it is the right recommendation for almost everyone starting out. It is free, it opens straight into a vertical project, and its auto-captions are accurate enough that you are correcting words rather than typing lines.',
        },
        {
          kind: 'p',
          text: 'The practical wins are the small ones. You can drop in campaign footage, trim on a touch timeline, generate captions, restyle them in two taps, and export at 1080p without a watermark on a normal edited export. That covers the full job for most briefs.',
        },
        {
          kind: 'p',
          text: 'Two caveats worth knowing. CapCut Pro puts some effects, some stock audio, and higher frame rate exports behind a subscription, and the app will keep offering it. And CapCut availability and features shift by region and by app store — some templates and effects that creators mention online are not there on every account.',
        },
        {
          kind: 'callout',
          title: 'Check your export before you post',
          text: 'CapCut adds an outro card with its logo if you use certain templates. Watch your export to the last frame. A branded outro on a campaign clip is a fast way to fail review.',
        },
      ],
    },
    {
      heading: 'Other phone editors worth having',
      blocks: [
        {
          kind: 'p',
          text: 'You do not need three editors. But it helps to have a second one installed for the days CapCut is being awkward, or when a brief rules out certain effects.',
        },
        {
          kind: 'list',
          items: [
            {
              lead: 'VN Video Editor.',
              text: 'Clean, free, and no watermark on export. The timeline is closer to desktop editing software, which makes it a good place to learn real cutting habits rather than template habits. Captions take more work than CapCut.',
            },
            {
              lead: 'InShot.',
              text: 'Fast for the simple jobs — trimming a long file down, resizing 16:9 footage to 9:16, adding a quick text overlay. The free version watermarks some exports, so check before you submit anything.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Desktop editors, if you have a laptop',
      blocks: [
        {
          kind: 'p',
          text: 'A laptop is not required to earn on campaigns. Plenty of creators editing entirely on their phones are being paid every campaign window. But if you have one, three options are worth your time.',
        },
        {
          kind: 'list',
          items: [
            {
              lead: 'DaVinci Resolve.',
              text: 'Free, and genuinely professional grade — the same software used to finish films. The trade is a steep learning curve and a machine that can handle it. Worth it if you plan to do longer-form or client work later, overkill for a 30-second clip.',
            },
            {
              lead: 'Adobe Premiere Pro.',
              text: 'The industry standard, on a monthly subscription. The reason to pay for it is a client or agency that requires project files in it. Do not subscribe on the theory that better software will produce better clips.',
            },
            {
              lead: 'CapCut desktop.',
              text: 'The same workflow as the phone app on a bigger screen, with the same auto-captions. The easiest desktop step up if you already know the mobile version, and your projects feel familiar immediately.',
            },
          ],
        },
      ],
    },
    {
      heading: 'Captions and why you burn them in',
      blocks: [
        {
          kind: 'p',
          text: 'A large share of short-form viewers watch with the sound off or the sound low. Captions burned into the video keep those viewers in the clip past the first few seconds, and retention is what pushes a clip further into the feed.',
        },
        {
          kind: 'p',
          text: 'Platform auto-captions are not the same thing. They can be switched off by the viewer, they are styled by the platform, and they do not travel if the clip is reposted. Burn yours in.',
        },
        {
          kind: 'p',
          text: 'CapCut auto-captions cover this for most briefs. What you must do is read them back before exporting. Auto-captioning misreads product names, brand names, and Ghanaian names constantly, and a misspelt brand name in a campaign clip is a review problem, not a cosmetic one. Check every caption against the spelling used in the brief.',
        },
      ],
    },
    {
      heading: 'Audio: the rule people break most often',
      blocks: [
        {
          kind: 'p',
          text: 'Campaign briefs on Clapout often require the official sound or supplied audio track, kept at full volume, with no voiceover and no music layered over it. Some briefs are strict about this because the audio is licensed for the campaign.',
        },
        {
          kind: 'p',
          text: 'That makes one boring feature important: your editor must let you see and set the volume level of each audio track separately, and mute the original clip audio cleanly. CapCut, VN, and every desktop editor listed here do this. Some quick-edit apps flatten audio into a single track and make it guesswork.',
        },
        {
          kind: 'p',
          text: 'Before you export, listen to the whole clip once on headphones. Clipping, a background track you forgot to mute, or audio that drops out at a cut are all reasons a submission gets rejected.',
        },
      ],
    },
    {
      heading: 'Building a workflow that is actually fast',
      blocks: [
        {
          kind: 'p',
          text: 'The difference between a creator earning steadily and one who burns out is rarely skill. It is setup. Once your workflow is built, a clip should take twenty to thirty minutes, not three hours.',
        },
        {
          kind: 'list',
          items: [
            {
              lead: 'Save a caption style.',
              text: 'Pick one font, size, colour, and position that reads well on a phone, and reuse it on every clip. This alone removes a decision you would otherwise make dozens of times.',
            },
            {
              lead: 'Build a project template.',
              text: 'A blank 9:16 project with your caption style, your export settings, and your usual hook timing already in place. Duplicate it for each new clip instead of starting cold.',
            },
            {
              lead: 'Organise files per campaign.',
              text: 'One folder per campaign with the supplied assets, your exports, and a note of the brief rules. When a reviewer asks a question three weeks later, you can answer it.',
            },
            {
              lead: 'Batch your work.',
              text: 'Cut all your clips for a campaign in one sitting, then export them together. Switching between campaigns mid-session is where mistakes with briefs happen.',
            },
            {
              lead: 'Lock your export settings.',
              text: '1080p, 30fps unless the brief says otherwise, highest bitrate your app offers. Set it once and stop thinking about it.',
            },
          ],
        },
      ],
    },
    {
      heading: 'The free starter stack',
      blocks: [
        {
          kind: 'p',
          text: 'Here is what a working setup costs to begin with: nothing.',
        },
        {
          kind: 'p',
          text: 'A phone that can record and edit video, CapCut installed, and the footage and audio the campaign brief supplies. That is the whole stack. Campaign briefs on Clapout usually include official footage and audio, so you are not paying for stock, and you are not shooting from scratch unless the brief asks for it.',
        },
        {
          kind: 'p',
          text: 'Rewards are stated up front on every campaign — for example ₵20 per 1,000 verified views — so you can see what a campaign pays before you spend a minute editing. Start at ₵0 in tools, get paid on verified views, and let the earnings decide what you buy next.',
        },
      ],
    },
    {
      heading: 'What to avoid for campaign work',
      blocks: [
        {
          kind: 'p',
          text: 'This is the part a tools guide from a campaign platform has to be honest about. Some popular tools will get your submissions rejected.',
        },
        {
          kind: 'list',
          items: [
            {
              lead: 'AI auto-clippers.',
              text: 'Many campaign briefs explicitly ban tools like Opus Clip and similar auto-clipping services. They cut on a formula, they produce near-identical clips across every creator using them, and reviewers recognise the output immediately. Briefs ask for properly edited, unique clips, and an auto-clipped submission fails that on its face.',
            },
            {
              lead: 'Lazy reposts and low-effort edits.',
              text: 'Trimming thirty seconds off supplied footage and posting it is not an edit. Nor is adding one text box. If your clip would be indistinguishable from another creator’s on the same campaign, it will not be treated as original work.',
            },
            {
              lead: 'Watermarked exports.',
              text: 'A watermark from a free tier tells a brand you did not take the campaign seriously, and some platforms suppress reach on clips carrying another app’s branding. Use a tool that exports clean.',
            },
            {
              lead: 'Screen-recorded rips.',
              text: 'Screen-recording the source instead of using the assets in the brief costs you resolution, adds interface elements, and often captures compressed audio. The brief gives you the real files. Use them.',
            },
            {
              lead: 'Editors that compress badly.',
              text: 'Some free apps re-encode at a low bitrate no matter what you choose. Compare an export against your source on the same screen. If the export looks noticeably softer, change tools.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Read the brief before you open the editor',
          text: 'Rules about AI tools, audio, captions, and required on-screen elements are in the brief, not in the app. Five minutes reading first saves an entire re-edit.',
        },
      ],
    },
    {
      heading: 'When it is worth paying for tools',
      blocks: [
        {
          kind: 'p',
          text: 'Pay for tools after you are earning consistently, not before. If you have completed several campaigns and been paid on verified views across all of them, you have evidence that spending money will return something.',
        },
        {
          kind: 'p',
          text: 'Upgrade in this order. First, storage — a phone with room for campaign assets and exports, or a cheap external drive. Running out of space mid-campaign costs more than any subscription. Second, better data or a faster connection, because uploads and asset downloads eat time. Third, a CapCut Pro subscription if you are genuinely blocked by a locked feature you have already tried to work around.',
        },
        {
          kind: 'p',
          text: 'Premiere Pro and a new laptop come far later, and only when a client requires them. No brand has ever paid a creator more because of the software their clip was cut in.',
        },
      ],
    },
  ],
  faq: [
    {
      question: 'Can I earn on Clapout campaigns editing only on my phone?',
      answer:
        'Yes. Many creators on Clapout edit entirely on their phones and are paid every campaign window. CapCut on a mid-range phone handles vertical projects, auto-captions, and clean 1080p exports, which covers what nearly every brief asks for. A laptop is a convenience, not a requirement.',
    },
    {
      question: 'Why do campaign briefs ban AI auto-clipping tools?',
      answer:
        'Because they produce generic, near-identical clips. Brands are paying for creators who can find a moment, cut it well, and make it their own. Tools like Opus Clip cut to a formula, so ten creators using them submit ten versions of the same clip. Briefs that ban them require properly edited, unique work, and auto-clipped submissions get rejected at review.',
    },
    {
      question: 'Is CapCut Pro worth paying for?',
      answer:
        'Not when you are starting. Free CapCut does trimming, captions, text, transitions, and watermark-free 1080p export, which is the whole job for most briefs. Consider Pro only once you are earning consistently and have hit a specific locked feature you cannot work around another way.',
    },
    {
      question: 'What export settings should I use for TikTok, Reels, and Shorts?',
      answer:
        '1080 by 1920, 30fps, and the highest bitrate your editor offers, unless the campaign brief specifies something different. Keep captions and key elements away from the top and bottom edges, where platform buttons and usernames sit. Watch the finished export once before you post.',
    },
    {
      question: 'Do I need to add my own music to a campaign clip?',
      answer:
        'Usually the opposite. Briefs often require the official sound at full volume with no voiceover and no added music, because the audio is licensed for that campaign. Check the brief first. Adding your own track over a required sound is one of the more common reasons a submission is not verified.',
    },
  ],
};
