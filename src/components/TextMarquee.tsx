const MARQUEE_STRING =
  'Clip · Post · Earn · Verify · Reach · Create · Repeat · Clapout · ';

export default function TextMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-6 md:py-8">
      <div className="marquee-track">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="font-bamboly shrink-0 select-none uppercase"
            style={{
              color: '#EC612C',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1,
              paddingRight: '0.25em',
            }}
          >
            {MARQUEE_STRING}
          </span>
        ))}
      </div>
    </div>
  );
}
