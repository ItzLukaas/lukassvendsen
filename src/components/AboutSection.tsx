import { about } from '@/content/data';

export function AboutSection() {
  return (
    <section
      id="om-mig"
      className="scroll-mt-20 py-20 sm:py-28"
      aria-labelledby="om-mig-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="om-mig-heading"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-center text-foreground"
        >
          {about.heading}
        </h2>
        <h3 className="mt-4 text-xl text-muted-foreground text-center font-medium">
          {about.title}
        </h3>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          {about.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
