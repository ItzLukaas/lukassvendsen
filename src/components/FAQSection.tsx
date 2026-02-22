import { faqs } from '@/content/data';

export function FAQSection() {
  return (
    <section
      id="faq"
      className="scroll-mt-24 py-16 sm:py-24 lg:py-28 bg-muted/10"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 sm:mb-12">
          <h2
            id="faq-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
          >
            Ofte stillede spørgsmål
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Et par korte svar på det, jeg oftest bliver spurgt om. Du er altid
            velkommen til at skrive, hvis du mangler noget.
          </p>
        </header>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border/80 bg-card/80 px-4 py-3 sm:px-5 sm:py-4 open:border-accent/70 open:shadow-md transition-all duration-200"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="text-sm sm:text-base font-medium text-foreground">
                  {item.question}
                </span>
                <span className="text-xl leading-none text-muted-foreground group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

