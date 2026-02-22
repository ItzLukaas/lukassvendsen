import { clients } from '@/content/data';
import { Card, CardContent } from '@/components/ui/card';

export function ClientsSection() {
  return (
    <section
      id="kunder"
      className="scroll-mt-20 py-20 sm:py-28"
      aria-labelledby="kunder-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="kunder-heading"
          className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-center text-foreground"
        >
          Kunder & samarbejdspartnere
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          Jeg har haft fornøjelsen af at arbejde sammen med disse virksomheder og kunder.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client) => (
            <Card
              key={client.name}
              className="border-border bg-card hover:bg-muted/50 transition-colors"
            >
              <CardContent className="pt-6">
                <p className="font-medium text-foreground">{client.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{client.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
