/** Subtil overgang mellem sektioner – genbrugelig for rød tråd */
export function SectionDivider({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const isDark = variant === 'dark';
  return (
    <div
      className="h-16 w-full shrink-0"
      style={{
        background: isDark
          ? 'linear-gradient(180deg, transparent 0%, hsl(222 47% 18%) 100%)'
          : 'linear-gradient(180deg, hsl(220 40% 97%) 0%, hsl(0 0% 100%) 100%)',
      }}
      aria-hidden
    />
  );
}
