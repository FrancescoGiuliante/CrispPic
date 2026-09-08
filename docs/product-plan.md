# FitMyFile — Analisi, Requisiti, Roadmap

> Fonte: brief "Image Requirement Tools" (vision doc). Questo documento lo traduce in stato-attuale + requisiti verificabili + backlog eseguibile, sulla base di un audit del codice in `fitmyfile/` al 2026-08-25.

---

## 1. Stato attuale (audit del repo)

Il progetto **non parte da zero**: esiste già una foundation solida e coerente con i principi del brief (zero-cost, client-side, no backend/account). 3 commit puliti, working tree pulito.

| Area | Stato | Dettaglio |
|---|---|---|
| Stack | ✅ | Next.js 16, React 19, TypeScript, Tailwind v4, ESLint. Nessuna dipendenza pesante oltre `lucide-react`, `cva`, `clsx`, `tailwind-merge`. |
| Layout & design system | ✅ | `Header`, `Footer`, `Logo`, `ContentPage`, componenti UI (`Button`, `Badge`, `Card`). Design light-only, palette zinc + accent. |
| Pagine legali/contenuto | ✅ | `/about`, `/faq`, `/privacy`, `/terms`, `/contact`, 404 custom — tutte scritte, non placeholder. |
| SEO base | 🟡 | `robots.ts` + `sitemap.ts` presenti ma **statici** (6 route). Metadata/OG/Twitter card in `layout.tsx`. Mancano JSON-LD, OG image reale, favicon set completo. |
| Ads | ✅ (gated) | `AdSlot` non renderizza nulla finché `NEXT_PUBLIC_ADSENSE_CLIENT` non è settata; rispetta la regola "mai tra upload e risultato"; altezza riservata (no CLS). |
| Analytics | 🟡 (gated, non wired) | `GoogleAnalytics` carica gtag solo se `NEXT_PUBLIC_GA_ID` è settata. **Nessun evento custom** (upload, compressione completata, download) ancora tracciato. |
| Tool: Compress-to-size | ✅ MVP funzionante | `compress.ts`: canvas-based, binary search qualità JPEG (6 step) + downscale progressivo (85%/step, max 20 iterazioni), guard 64px minimo. `CompressTool.tsx`: drag&drop, preset 20/50/100/200/500KB/1MB + custom, preview before/after, badge risultato, download, reset. |
| Resize / Crop / Convert | ⬜ | Non implementati. |
| Landing page SEO programmatiche | ⬜ | Non implementate — solo homepage. |
| Dominio / hosting / GA4 / AdSense reali | ⬜ | Env var vuote (`.env.example`), `SITE_URL` fallback su placeholder `fitmyfile.com` (**da verificare se il dominio è già registrato**). |

**Il naming e la value proposition del brief sono già stati recepiti**: nome prodotto "FitMyFile", tagline "Make your image fit the requirement.", badge privacy "Processed in your browser — never uploaded" in home.

---

## 2. Analisi strategica

### Cosa è già coerente col brief
- Zero backend, zero storage, zero costi di elaborazione: confermato, tutto client-side via Canvas API.
- Privacy come feature di prodotto (non solo compliance): badge visibile in home.
- Ads/analytics progettati per essere "spenti di default" finché non c'è approvazione/config — evita di pubblicare un sito con placeholder rotti.
- Un solo strumento reale ma **completo**, non una demo: preset + custom, before/after, gestione del caso "non riesco a stare sotto il target".

### Rischi tecnici da indirizzare prima di espandere l'engine
1. **PNG trasparente → sempre JPEG**: `compress.ts` riempie di bianco lo sfondo prima di disegnare (necessario per JPEG, che non ha alpha). Oggi questo accade sempre, anche se l'utente vuole restare in PNG/WebP con trasparenza. Va reso **esplicito e scelto**, non implicito, quando arriva la conversione formato.
2. **HEIC (foto iPhone)**: nessun browser desktop decodifica HEIC nativamente. Serve una libreria wasm (es. `heic2any`), pesante: va caricata con `dynamic import` solo quando serve, mai nel bundle principale.
3. **EXIF orientation**: `loadImage()` usa `new Image()` + `drawImage`. Da verificare sui browser target che l'orientamento EXIF sia rispettato; l'alternativa più robusta è `createImageBitmap(file, { imageOrientation: 'from-image' })`.
4. **Main thread bloccato su immagini grandi**: nel caso peggiore l'algoritmo fa fino a 6 (qualità) × 20 (scala) = 120 encode su canvas, tutti sul thread principale. Su una foto 20-50MP questo può congelare la UI per secondi. Da spostare in Web Worker + `OffscreenCanvas` (con fallback).
5. **AVIF via `canvas.toBlob`**: supporto incompleto/lento a seconda del browser — da testare prima di promettere AVIF nell'MVP pubblico.

### Principio strategico da rispettare nell'espansione
Il brief è esplicito (§11, §21): le landing page SEO **non devono essere pagine duplicate create ad hoc**. Questo impone una scelta architetturale precisa fin da ora: un **registry dati** che descrive ogni landing (slug, titolo, requisito preconfigurato, FAQ, correlati) e **una sola route dinamica** che renderizza lo stesso motore/componenti con parametri diversi. Vedi §4.

---

## 3. Requisiti

### 3.1 Requisiti funzionali

| ID | Requisito | Stato |
|---|---|---|
| FR-1 | Upload via drag&drop o file picker (JPG/PNG/WebP in input) | ✅ |
| FR-2 | Compress-to-target-size con preset (20/50/100/200/500KB/1MB) + custom | ✅ |
| FR-3 | Preview before/after con peso, risoluzione, qualità stimata | ✅ |
| FR-4 | Download del file risultato, mai upload su server | ✅ |
| FR-5 | Resize per larghezza / altezza / percentuale / dimensioni custom, con lock aspect ratio | ⬜ |
| FR-6 | Crop libero + preset (1:1, 4:3, 16:9) + ratio custom | ⬜ |
| FR-7 | Conversione formato output: JPG, PNG, WebP (AVIF/HEIC opzionali, vedi rischi) | ⬜ |
| FR-8 | Flusso combinato in un solo passaggio: formato + dimensioni + peso massimo (es. "JPG 600×600 max 100KB") — **punto di forza distintivo del prodotto** | ⬜ |
| FR-9 | Gestione errori specifica: file troppo grande, formato non supportato, file corrotto, target irraggiungibile (già presente parzialmente in FR-2) | 🟡 (solo MIME check oggi) |
| FR-10 | Landing page SEO dedicate, generate dal registry, con tool preconfigurato + FAQ + correlati | ⬜ |
| FR-11 | Tracking eventi prodotto (upload iniziato, elaborazione completata, download, tool/target usati) | ⬜ |

### 3.2 Requisiti non funzionali

| ID | Requisito |
|---|---|
| NFR-1 | **Zero elaborazione lato server** per le funzioni core: tutto avviene nel browser dell'utente. |
| NFR-2 | **Costo operativo ≈ €0** fino a quando il traffico non lo giustifica (hosting free tier, no DB, no storage). |
| NFR-3 | Nessun dato personale o immagine raccolto/loggato. |
| NFR-4 | UI utilizzabile in **pochi secondi** dall'arrivo sul sito al download (no account, no step superflui). |
| NFR-5 | Il thread principale non deve bloccarsi in modo percepibile (>200ms) durante l'elaborazione di immagini fino a ~25MP — implica offload a Web Worker. |
| NFR-6 | Supporto browser: ultime 2 major di Chrome, Firefox, Safari, Edge, desktop e mobile. |
| NFR-7 | Performance: Core Web Vitals in soglia "Good" (LCP < 2.5s, CLS < 0.1, INP < 200ms) sulla home e sulle landing. |
| NFR-8 | Accessibilità: navigabile da tastiera, contrasto AA, stati di errore annunciati. |
| NFR-9 | Ogni landing SEO deve avere title/description/H1 univoci, FAQ reali, e non essere contenuto duplicato. |
| NFR-10 | Ads mai invasive: nessun interstitial/popup, mai tra step di upload e risultato (già rispettato da `AdSlot`). |

---

## 4. Architettura tecnica proposta (per colmare i gap)

**Motore immagine unificato.** Oggi `compress.ts` è un algoritmo isolato. Per supportare FR-5/6/7/8 senza duplicare logica, conviene un orchestratore unico:

```
src/lib/image/
  engine.ts        // processImage(file, requirements) — orchestra resize → crop → convert → target-size
  compress.ts       (esistente, diventa uno step interno: quality search)
  resize.ts         // calcolo dimensioni da width/height/percent/aspect-lock
  crop.ts           // calcolo rettangolo di crop da ratio o selezione utente
  convert.ts         // mapping formato output → mime + encoder canvas
  exif.ts           // createImageBitmap con imageOrientation: 'from-image'
  heic.ts           // wrapper dynamic-import di heic2any, usato solo se serve
  worker/
    image.worker.ts // stesso engine eseguito off-main-thread, OffscreenCanvas + fallback
```

`processImage(file, { maxBytes?, width?, height?, aspectLock?, cropRatio?, format? })` è la singola funzione che ogni tool/landing page chiama — così "JPG + 600×600 + max 100KB" (FR-8) non è un caso speciale ma il caso generale con più parametri valorizzati insieme.

**Landing page SEO data-driven** (per FR-10, rispettando NFR-9 e il vincolo "no pagine duplicate artificiali"):

```ts
// src/lib/tools/registry.ts
type ToolPreset = {
  slug: string;                 // "compress-image-to-100kb"
  h1: string;
  description: string;
  requirement: { maxBytes?: number; width?: number; height?: number; format?: OutputFormat };
  faq: { q: string; a: string }[];
  related: string[];            // altri slug del cluster
};
```

più una singola route dinamica `src/app/[slug]/page.tsx` con `generateStaticParams()` sul registry e `generateMetadata()` per title/description/OG per pagina, JSON-LD `FAQPage` incluso. Aggiungere ogni nuova landing = una entry nel registry, non un nuovo file/pagina copiata.

**Eventi analytics**: helper `track(event, params)` che chiama `window.gtag` solo se presente (coerente col gating già esistente in `GoogleAnalytics`), chiamato da `engine.ts` e dai componenti tool nei punti: upload iniziato, elaborazione completata (con tool/target/input format/output format), download.

---

## 5. Roadmap di implementazione

Riorganizzo le 6 fasi del brief in base a cosa è già fatto. Ogni item ha una stima indicativa (S = poche ore, M = 1-2 giorni, L = 3+ giorni).

### Sprint A — Motore immagine completo
- [ ] `engine.ts` orchestratore unificato (M)
- [ ] Resize (larghezza/altezza/%/custom, lock aspect ratio) (S)
- [ ] Crop (free + preset 1:1/4:3/16:9 + custom ratio) (M)
- [ ] Conversione formato output JPG/PNG/WebP, con gestione esplicita trasparenza (M)
- [ ] Flusso combinato formato+dimensioni+peso in un'unica UI (FR-8) (M)
- [ ] Migrazione a `createImageBitmap` con `imageOrientation: 'from-image'` per EXIF (S)

### Sprint B — Robustezza
- [ ] Offload engine su Web Worker + `OffscreenCanvas`, fallback su main thread se non supportato (L)
- [ ] Supporto HEIC via dynamic import, attivato solo su file HEIC/HEIF (M)
- [ ] Validazione file: dimensione massima, file corrotti, messaggi di errore specifici per FR-9 (S)
- [ ] Micro-interazioni/animazioni leggere, polish mobile (S)

### Sprint C — SEO cluster
- [ ] `registry.ts` + route dinamica `[slug]/page.tsx` (M)
- [ ] Primo cluster "File size" (20/50/100/200/500KB/1MB) come landing dedicate (S, riusa FR-2)
- [ ] Cluster "Resize" e "Format" appena Sprint A è pronto (S ciascuno)
- [ ] JSON-LD FAQPage, OG image per landing, sitemap generata dal registry invece che hardcoded (S)

### Sprint D — Lancio
- [ ] Dominio: verificare/acquistare `fitmyfile.com` o alternativa (da decidere)
- [ ] Configurare GA4 reale + eventi custom (S, l'infra c'è già)
- [ ] Richiesta AdSense (dopo aver pubblicato contenuto sufficiente)
- [ ] Google Search Console + submit sitemap
- [ ] Pass Lighthouse/Core Web Vitals su home + landing
- [ ] Test cross-browser (Chrome/Firefox/Safari/Edge, desktop+mobile) su casi limite: PNG con trasparenza, immagini enormi/minuscole, EXIF ruotato, file corrotto

### Sprint E — Post-lancio (guidato dai dati)
- [ ] Monitorare Search Console 4-8 settimane (indicizzazione)
- [ ] Espandere il cluster che genera più traffico organico, non aggiungere tool a caso (principio §16 del brief)

---

## 6. Prossimi passi immediati (proposta)

1. **Sprint A** è il blocco a maggior valore: senza resize/crop/convert/combo, il prodotto resta "un compressore" e non "il motore per qualsiasi requisito immagine" — che è la vera value proposition (§5, §21 del brief).
2. In parallelo, EXIF fix (`createImageBitmap`) è economico (S) e previene un bug di fiducia (foto ruotate) prima che arrivi traffico reale.
3. SEO cluster (Sprint C) ha senso **solo dopo** Sprint A, perché altrimenti le landing "resize"/"format" non avrebbero un tool funzionante dietro.

## 7. Checklist go-live (dal brief §18, con stato)

Branding ✅ · UI professionale ✅ · Responsive ✅ (da verificare su device reali) · Performance ⬜ (non misurata) · SEO 🟡 (base ok, cluster mancante) · Error handling 🟡 (base) · Privacy ✅ · Funzioni fondamentali 🟡 (solo compress) · Landing SEO ⬜ · Analytics 🟡 (gated, non wired) · Favicon 🟡 (solo .ico) · OG 🟡 (meta ok, immagine mancante) · Sitemap 🟡 (statica) · About/Privacy/Terms/Contact/FAQ ✅ · 404 ✅
