// "Terms & Conditions" and "terms of Service" both point at the same
// #/terms route — the site only has one real terms document, and the
// source design's two phrasings read as redundant wording rather than two
// separate documents (confirmed with the user in Phase 13 planning).
export default function TermsNote() {
  return (
    <p className="mt-4 text-center font-sfpro text-xs text-text-body dark:text-dark-body">
      By adding, you agree to our{' '}
      <a href="#/terms" className="text-brand-dark underline dark:text-white">
        Clapout Terms &amp; Conditions
      </a>
      ,{' '}
      <a href="#/terms" className="text-brand-dark underline dark:text-white">
        terms of Service
      </a>
      , and{' '}
      <a href="#/privacy" className="text-brand-dark underline dark:text-white">
        Privacy Policy
      </a>
      .
    </p>
  );
}
