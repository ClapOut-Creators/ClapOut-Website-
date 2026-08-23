import { useState } from 'react';

interface TabsProps {
  tabs: [string, string];
  onChange?: (activeIndex: number) => void;
  className?: string;
}

export default function Tabs({ tabs, onChange, className = '' }: TabsProps) {
  const [active, setActive] = useState(0);

  const select = (index: number) => {
    setActive(index);
    onChange?.(index);
  };

  return (
    <div className={`inline-flex rounded-pill border border-border-button p-1 dark:border-dark-border ${className}`}>
      {tabs.map((label, index) => (
        <button
          key={label}
          type="button"
          onClick={() => select(index)}
          className={`rounded-pill px-6 py-2 font-poppins text-sm transition-colors duration-200 ${
            active === index
              ? 'bg-brand-orange text-white'
              : 'text-brand-dark hover:bg-black/5 dark:text-white dark:hover:bg-white/10'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
