import { clients } from '@/content/data';
import { Card, CardContent } from '@/components/ui/card';

export function ClientsSection() {
  return (
    <section
      id="kunder"
      className="scroll-mt-24 py-16 sm:py-24 lg:py-28 bg-muted/20"
      aria-labelledby="kunder-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <h2
            id="kunder-heading"
            className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-foreground"
          >
            Kunder & samarbejdspartnere
          </h2>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg">
            Jeg har haft fornøjelsen af at arbejde sammen med disse virksomheder og kunder.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client) => (
            <Card
              key={client.name}
              className="border-border/80 bg-card shadow-sm hover:shadow-md hover:border-border transition-all duration-200 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-6 sm:p-7">
                <p className="font-semibold text-foreground">{client.name}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{client.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
