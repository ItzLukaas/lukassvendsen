import Link from 'next/link';
import { siteConfig, contact } from '@/content/data';

export const metadata = {
  title: 'Cookiepolitik',
  description: 'Cookiepolitik og persondata for ' + (siteConfig.brandName ?? siteConfig.name),
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          href="/"
          className="text-sm font-medium text-[hsl(var(--extra))] hover:underline"
        >
          ← Tilbage til forsiden
        </Link>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-zinc-900">
          Cookiepolitik
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Sidst opdateret: {new Date().toLocaleDateString('da-DK')}
        </p>

        <div className="mt-10 space-y-8 text-zinc-600 text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-zinc-900">Hvad er cookies?</h2>
            <p>
              Cookies er små tekstfiler, som websitet gemmer på din enhed. De bruges til at huske indstillinger, forstå hvordan sitet bruges, og i nogle tilfælde til markedsføring. Vi overholder de danske og EU-regler om cookies og persondata (GDPR).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">Hvilke cookies bruger vi?</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-zinc-800">Nødvendige cookies</strong> – f.eks. til at huske din cookievalg og sikre, at sitet fungerer. Disse kan ikke slås fra.
              </li>
              <li>
                <strong className="text-zinc-800">Statistik/analytics</strong> – hvis du accepterer, kan vi bruge værktøjer til at se, hvordan siden bruges (fx antal besøgende). Det hjælper os med at forbedre sitet.
              </li>
              <li>
                <strong className="text-zinc-800">Markedsføring</strong> – kun hvis du accepterer; bruges evt. til relevante annoncer.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">Dine valg</h2>
            <p>
              Når du besøger sitet, kan du vælge &quot;Kun nødvendige&quot; eller &quot;Accepter alle&quot;. Du kan til enhver tid ændre dine valg ved at slette cookies for dette website i din browser og genindlæse siden – så vises cookie-boksen igen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-zinc-900">Kontakt</h2>
            <p>
              Spørgsmål om cookies eller persondata? Kontakt mig på{' '}
              <a
                href={`mailto:${contact.email}`}
                className="text-[hsl(var(--extra))] font-medium hover:underline"
              >
                {contact.email}
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 text-xs text-zinc-400">
          {siteConfig.brandName ?? siteConfig.name} – {siteConfig.name}
        </p>
      </div>
    </main>
  );
}
