import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { ConsentedScripts } from "@/components/consent/ConsentedScripts";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { THEME_INIT_SCRIPT, ThemeProvider } from "@/components/theme/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { ADSENSE_ACCOUNT } from "@/lib/ads";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";
import { organizationJsonLd, softwareApplicationJsonLd } from "@/lib/seo";
import "./globals.css";

// Inter: a variable font, so it carries every weight the app actually
// uses — Regular (400) for body copy, Semi-Bold (600) and Bold (700) for
// headings — without listing weights by hand. Its Google Fonts build
// covers Latin + Cyrillic, so it also renders our es, pt, fr, de, it, nl,
// pl, tr, and ru dictionaries natively — non-Latin scripts (ar, hi, ja, ko,
// zh) fall back to the OS system font, as with any single Google Font
// choice.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Matches the header surface in each theme, so the browser chrome on
  // mobile blends into the app instead of framing it in white.
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0f" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // `suppressHydrationWarning` because the inline script below stamps
    // `data-theme` on this element before React hydrates — an intentional,
    // and the only correct, way to avoid a flash of the wrong theme.
    <html lang="en" dir="ltr" className={`${inter.variable} h-full`} suppressHydrationWarning>
      {/* `suppressHydrationWarning` because browser extensions commonly inject
          their own <script> tags into <head> before React hydrates, which
          shifts the children and produces a spurious mismatch. */}
      <head suppressHydrationWarning>
        {/* Unconditional, unlike the real ad loader in AdSenseScript.tsx —
            Google's site-verification crawler never clicks the cookie
            consent banner, so this proof-of-ownership tag has to be present
            on every request regardless of consent state. */}
        <meta name="google-adsense-account" content={ADSENSE_ACCOUNT} />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([softwareApplicationJsonLd(), organizationJsonLd()]) }}
        />
      </head>
      <body className="h-full bg-bg text-fg antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <ToastProvider>
              {/* Consent wraps the app rather than sitting beside it: the
                  banner and the footer's "Cookie preferences" link both read
                  the same context, and no third-party script exists in the
                  document until it says "granted". */}
              <ConsentProvider>
                {children}
                <CookieBanner />
                <ConsentedScripts />
              </ConsentProvider>
            </ToastProvider>
          </LanguageProvider>
        </ThemeProvider>
        {/* Cookieless — no persistent identifier, no cross-site tracking —
            so it sits outside the consent gate that guards GA/AdSense above.
            Counts page views only once "Enable" is clicked in the Vercel
            dashboard; until then this renders nothing. */}
        <Analytics />
      </body>
    </html>
  );
}
