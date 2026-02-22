import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/content/data';

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] min-h-screen flex-col items-center justify-center px-4 pb-20 pt-24 text-center sm:px-6"
      aria-label="Velkommen"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/40 via-background to-background" />
      <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-foreground animate-in opacity-0 [animation-name:fadeInUp] [animation-delay:0.1s]">
        {siteConfig.name}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground sm:text-xl animate-in opacity-0 [animation-name:fadeInUp] [animation-delay:0.25s]">
        Fotograf – fanger øjeblikke og fortæller historier gennem billeder
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-in opacity-0 [animation-name:fadeInUp] [animation-delay:0.4s]">
        <Button asChild size="lg" className="min-h-12 px-6 rounded-xl">
          <Link href="#galleri">Se galleri</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="min-h-12 px-6 rounded-xl">
          <Link href="#kontakt">Kontakt mig</Link>
        </Button>
      </div>
      <Link
        href="#om-mig"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted/80"
        aria-label="Scroll ned"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </Link>
    </section>
  );
}
