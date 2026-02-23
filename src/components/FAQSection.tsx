import { faqs } from '@/content/data';

export function FAQSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 bg-zinc-50/70 py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold tracking-widest text-[hsl(var(--accent))] uppercase">
          FAQ
        </span>
        <h2
          id="faq-heading"
          className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Ofte stillede spørgsmål
        </h2>
        <p className="mt-4 text-muted-foreground text-sm sm:text-base">
          Korte svar på det, jeg oftest bliver spurgt om.
        </p>

        <div className="mt-12 divide-y divide-zinc-200">
          {faqs.map((item, i) => (
            <details
              key={item.question}
              className="group py-5 first:pt-0"
            >
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-left">
                <span className="text-sm font-medium text-foreground group-hover:text-[hsl(var(--accent))] transition-colors pr-4">
                  {item.question}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 text-xs group-open:bg-[hsl(var(--accent))] group-open:border-[hsl(var(--accent))] group-open:text-white transition-colors">
                  {i + 1}
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-0">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
