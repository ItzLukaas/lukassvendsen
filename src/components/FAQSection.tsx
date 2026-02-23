import { faqs } from '@/content/data';

export function FAQSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24 border-t border-border"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Ofte stillede spørgsmål
        </h2>
        <p className="mt-2 text-muted-foreground text-sm sm:text-base">
          Korte svar på det, jeg oftest bliver spurgt om.
        </p>

        <div className="mt-8 space-y-px">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group border-b border-border py-4 first:pt-0"
            >
              <summary className="cursor-pointer list-none text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
                {item.question}
              </summary>
              <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed pl-0">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
