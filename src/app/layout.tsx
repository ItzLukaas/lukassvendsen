import type { Metadata, Viewport } from 'next';
import { Outfit, DM_Sans, Rajdhani } from 'next/font/google';
import './globals.css';
import 'lenis/dist/lenis.css';
import { siteConfig } from '@/content/data';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { CookieBanner } from '@/components/CookieBanner';
import { CaseStudyLoadingProvider } from '@/context/CaseStudyLoadingContext';
import { PagePreloader } from '@/components/PagePreloader';
import { SmoothScroll } from '@/components/SmoothScroll';

// Bold, condensed sans-serif for headings (matching poster style)
const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#306D5E',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.brandName ?? siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.brandName ?? siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: { canonical: siteConfig.url },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    // Tilføj din Google Search Console verification når du har den
    // google: 'din-verifikationskode',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="da"
      className={`${rajdhani.variable} ${outfit.variable} ${dmSans.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans antialiased bg-background text-foreground overflow-x-hidden">
        <SmoothScroll />
        <PagePreloader />
        <CaseStudyLoadingProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
          <CookieBanner />
        </CaseStudyLoadingProvider>
      </body>
    </html>
  );
}
