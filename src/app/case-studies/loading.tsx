export default function CaseStudiesListLoading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[hsl(var(--extra))]"
      aria-live="polite"
      aria-label="Indlæser"
    >
      <div className="h-12 w-12 rounded-full border-4 border-white/25 border-t-white animate-case-study-spin" />
      <p className="text-sm font-medium text-white/90">Indlæser</p>
    </div>
  );
}
