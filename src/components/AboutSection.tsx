import { about } from '@/content/data';

export function AboutSection() {
  return (
    <section
      id="om-mig"
      className="scroll-mt-24 py-16 sm:py-24 lg:py-28"
      aria-labelledby="om-mig-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 sm:mb-12">
          <h2
            id="om-mig-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
          >
            {about.heading}
          </h2>
          <p className="mt-4 text-xl text-muted-foreground font-medium">
            {about.title}
          </p>
        </header>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
          {about.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
