import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { CSSProperties } from 'react';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ char, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span style={{ position: 'relative' }}>
      <span style={{ opacity: 0 }} aria-hidden>
        {char}
      </span>
      <motion.span style={{ opacity, position: 'absolute', left: 0 }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wordIdx) => {
        const start = charIndex;
        charIndex += word.length + 1;
        return (
          <span key={wordIdx} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {word.split('').map((char, i) => (
              <Char
                key={i}
                char={char}
                progress={scrollYProgress}
                range={[(start + i) / totalChars, (start + i + 1) / totalChars]}
              />
            ))}
            {wordIdx < words.length - 1 && <span>&nbsp;</span>}
          </span>
        );
      })}
    </p>
  );
}
