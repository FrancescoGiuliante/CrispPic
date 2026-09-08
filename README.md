# CrispPic

Make your image fit the requirement — compress to an exact size, resize, crop, or convert format. 100% client-side: nothing is ever uploaded to a server.

**[crisppic.com](https://crisppic.com)**

## What it does

- **Compress to size** — target an exact file size (20 KB–1 MB or custom) via binary-search quality + progressive downscale.
- **Resize** — by pixels or percentage, with aspect-ratio lock and common presets.
- **Crop** — free or fixed ratios (1:1, 4:3, 3:4, 16:9, 9:16, custom).
- **Convert** — JPG, PNG, WebP, with automatic HEIC/HEIF decoding for iPhone photos.
- All of the above compose in a single pass (e.g. "JPG, 1080×1080, under 200 KB" is one operation, not four).
- 16 languages, light/dark theme, and 12 statically generated SEO landing pages for common size/format/dimension searches.

## Why it's private

Every operation runs in the browser via the Canvas API, offloaded to a Web Worker (`OffscreenCanvas`) with an automatic main-thread fallback. No backend, no image ever leaves the device, no account.

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # eslint
```

## Project layout

```
src/
  app/                  routes (App Router), incl. [slug] for SEO landings
  components/
    tool/               ImageTool, RequirementsPanel, CropModal, ...
    layout/              Header, Footer, legal pages, ...
  i18n/                 LanguageProvider + one dictionary per locale
  lib/
    image/              processing engine (worker + main-thread fallback)
    tools/registry.ts   data-driven SEO landing pages
```

## License

MIT — see [LICENSE](LICENSE).
