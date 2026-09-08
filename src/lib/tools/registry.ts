import type { Params, ToolMode } from "@/components/tool/params";

/**
 * Programmatic landing pages.
 *
 * These exist because the searches people actually type are not "compress
 * image" but "compress image to 20kb" — a requirement, already stated. Each
 * entry here becomes one statically generated route under `/[slug]`.
 *
 * The hard rule: a landing is **data, not a page**. Every entry renders the
 * exact same `ToolTemplate` → `ImageTool` as `/compress` does; the only thing
 * that differs is the copy and the `preset` that is merged over the mode's
 * defaults. There is deliberately no per-slug component, no per-slug route
 * file, and no second copy of the engine — adding the ninth landing is adding
 * an object to an array, and a change to the tool reaches all of them at once.
 *
 * That also means these are not thin doorway pages: each one arrives with the
 * requirement already switched on, so the visitor's first action is choosing a
 * file rather than reconstructing the setting the query already told us.
 */

/** The copy shape `ToolTemplate` renders — matches a dictionary `toolPages` entry. */
export type LandingCopy = {
  badge: string;
  h1: string;
  subtitle: string;
  faq: { q: string; a: string }[];
};

export type Landing = LandingCopy & {
  /** URL segment, and the id used by `related`. */
  slug: string;
  /** Which entry point's defaults and panel ordering this landing inherits. */
  mode: ToolMode;
  /** `<title>` — kept separate from the H1, which reads as a promise rather than a query. */
  title: string;
  /** Meta and OG description. */
  description: string;
  /** Merged over `MODE_CONFIG[mode].defaults`, so the requirement is already on. */
  preset: Partial<Params>;
  /** Slugs of sibling landings, rendered as internal links (and used for crawl depth). */
  related: string[];
  /** Size-landing only: the prose size ("20 KB", "1 MB"), for `{size}` interpolation in `landings.size`. */
  sizeLabel?: string;
};

/**
 * The URL slug and `<title>`/meta description stay English on purpose — these
 * pages exist to rank for an English search phrase, and there is no
 * localized URL to point `hreflang` at. The `badge`/`h1`/`subtitle`/`faq`
 * below are the English source of that intent, kept here so the JSON-LD
 * (`faqPageJsonLd`/`breadcrumbJsonLd`, generated once at build time — there
 * is no per-locale route to key it off) always matches what a crawler sees.
 *
 * The copy an actual visitor reads is a separate, translated pass: see the
 * `landings` block in the dictionaries and `resolveLandingCopy()`, which
 * `LandingTemplate` calls to override this English copy with the visitor's
 * own language, exactly like every other page on the site.
 */
const BADGE = "100% private — your files never leave your device";

/* -------------------------------------------------------------- file size */

type SizeSpec = {
  slug: string;
  /** How the size is written in prose and in the size chips ("20 KB", "1 MB"). */
  label: string;
  bytes: number;
  /** One line on who actually asks for this size — the part a generic template can't know. */
  whoAsks: string;
};

const SIZE_SPECS: SizeSpec[] = [
  {
    slug: "compress-image-to-20kb",
    label: "20 KB",
    bytes: 20 * 1024,
    whoAsks:
      "20 KB is one of the tightest limits in common use: government exam and visa portals frequently cap the signature or photo upload here, and some older forums cap avatars at the same figure.",
  },
  {
    slug: "compress-image-to-50kb",
    label: "50 KB",
    bytes: 50 * 1024,
    whoAsks:
      "50 KB is the usual ceiling for passport and ID photo uploads on government application portals, and for scanned documents attached to online forms.",
  },
  {
    slug: "compress-image-to-100kb",
    label: "100 KB",
    bytes: 100 * 1024,
    whoAsks:
      "100 KB is the most common upload cap on job application forms, university portals and older content management systems.",
  },
  {
    slug: "compress-image-to-200kb",
    label: "200 KB",
    bytes: 200 * 1024,
    whoAsks:
      "200 KB is a typical limit for e-commerce product photos and marketplace listings, where the platform wants a usable image that still loads quickly on mobile.",
  },
  {
    slug: "compress-image-to-500kb",
    label: "500 KB",
    bytes: 500 * 1024,
    whoAsks:
      "500 KB is a comfortable web-performance budget: large enough for a full-width hero photo, small enough that it will not dominate a page's load time.",
  },
  {
    slug: "compress-image-to-1mb",
    label: "1 MB",
    bytes: 1024 * 1024,
    whoAsks:
      "1 MB is the attachment and upload limit on a lot of email systems, ticketing tools and insurance or claim submission forms.",
  },
];

/**
 * Builds one file-size landing. The shared answers are written once here and
 * interpolated per size, so the six pages stay genuinely consistent — and a
 * correction to how the size search works is a one-line edit, not six.
 */
function sizeLanding(spec: SizeSpec, index: number): Landing {
  // Neighbours in the ladder, so every landing links to the two sizes a
  // visitor is most likely to try next when the first target is too strict.
  const neighbours = [SIZE_SPECS[index - 1], SIZE_SPECS[index + 1]].filter(Boolean) as SizeSpec[];

  return {
    slug: spec.slug,
    mode: "compress",
    badge: BADGE,
    sizeLabel: spec.label,
    title: `Compress Image to ${spec.label} Online — Free, No Upload`,
    h1: `Compress an image to ${spec.label}`,
    subtitle: `Drop in a JPG, PNG or WebP and get it back at or under ${spec.label}, at the best quality that still fits. Nothing is uploaded.`,
    description: `Compress a JPG, PNG or WebP image to ${spec.label} or less, for free. Runs entirely in your browser — no upload, no signup, no watermark.`,
    preset: { sizeEnabled: true, targetBytes: spec.bytes },
    faq: [
      {
        q: `How do I compress an image to ${spec.label}?`,
        a: `Drop your image on this page. The ${spec.label} target is already switched on, so the result appears straight away — then just download it. If you also need specific dimensions or a different format, turn those requirements on and they are applied in the same pass.`,
      },
      {
        q: `Will the result be exactly ${spec.label}?`,
        a: `It is guaranteed to be at or under ${spec.label}, never over. Landing on the figure exactly is not possible with a lossy encoder, so we always err below the limit — which is what an upload form is checking anyway.`,
      },
      {
        q: `Who asks for ${spec.label}?`,
        a: spec.whoAsks,
      },
      {
        q: `What if my photo cannot reach ${spec.label}?`,
        a: `Quality is lowered first; if even the lowest useful quality is still too large, the image is scaled down and the search runs again. If the target is genuinely unreachable you get the smallest result we could produce, clearly labelled, rather than a silent failure.`,
      },
      {
        q: "Is my image uploaded to a server?",
        a: "No. The whole process runs in your browser using the Canvas API, off the main thread in a Web Worker. The file never leaves your device, so there is nothing for us to see, store or delete.",
      },
    ],
    related: [
      ...neighbours.map((n) => n.slug),
      "resize-image-to-1080x1080",
      "passport-photo-size-pixels",
    ].slice(0, 3),
  };
}

/* ------------------------------------------------------------- dimensions */

const DIMENSION_LANDINGS: Landing[] = [
  {
    slug: "passport-photo-size-pixels",
    mode: "resize",
    badge: BADGE,
    title: "Passport Photo Size in Pixels — Resize to 413×531 Free",
    h1: "Make a passport photo the right size in pixels",
    subtitle:
      "413 × 531 pixels is 35 × 45 mm at 300 dpi — the ICAO size most passport and visa portals expect. It is already set below.",
    description:
      "Resize a photo to the standard 413 × 531 px passport size (35 × 45 mm at 300 dpi), and cap the file size if the portal asks for one. Free and processed in your browser.",
    preset: { dimensionsEnabled: true, width: "413", height: "531", lockAspect: true },
    faq: [
      {
        q: "What is the passport photo size in pixels?",
        a: "The ICAO standard used by most countries is 35 × 45 mm. Printed at 300 dpi that is 413 × 531 pixels, which is what this page sets. The US passport photo is the exception: it is 2 × 2 inches, or 600 × 600 pixels at 300 dpi.",
      },
      {
        q: "How do I get exactly 413 × 531 without stretching my face?",
        a: "Crop first, then resize. Open the crop editor, set a custom ratio of 35 : 45, position your head inside it, and apply — the resize then lands on the exact pixel size with no distortion. Leaving the aspect lock on without cropping fits the photo inside 413 × 531 instead, which keeps the proportions but will not fill the frame.",
      },
      {
        q: "The portal also has a file size limit — can I do both?",
        a: "Yes. Turn on 'Maximum file size' as well and pick your limit; the dimensions and the size cap are applied together in a single pass, so you do not have to compress and resize in two different tools.",
      },
      {
        q: "My photo is a HEIC file from an iPhone — will that work?",
        a: "Yes. HEIC and HEIF photos are converted automatically when you drop them in, before anything else is applied, and you can output JPG, PNG or WebP.",
      },
    ],
    related: ["compress-image-to-50kb", "compress-image-to-100kb", "compress-image-to-20kb"],
  },
  {
    slug: "resize-image-to-1080x1080",
    mode: "resize",
    badge: BADGE,
    title: "Resize Image to 1080×1080 — Free Square Image Resizer",
    h1: "Resize an image to 1080 × 1080",
    subtitle:
      "The square 1:1 size Instagram, LinkedIn and most ad platforms ask for. Already set — drop an image and download it.",
    description:
      "Resize any photo to a 1080 × 1080 square for social posts, avatars and ad creatives. Free, private, and processed entirely in your browser.",
    preset: { dimensionsEnabled: true, width: "1080", height: "1080", lockAspect: true },
    faq: [
      {
        q: "Why 1080 × 1080?",
        a: "It is the native resolution of a square social post: Instagram, Facebook and LinkedIn all render 1:1 images at 1080 px on the long edge, so uploading exactly that avoids both upscaling blur and a pointless re-encode on their side.",
      },
      {
        q: "My photo is not square — what happens?",
        a: "With the aspect ratio locked, the image is fitted inside 1080 × 1080 without stretching, so the proportions survive. To truly fill the square, open the crop editor first, pick the Square ratio, and position the subject — then the resize lands exactly on 1080 × 1080.",
      },
      {
        q: "Can I also keep the file under a size limit?",
        a: "Yes — turn on 'Maximum file size' and both requirements are applied together in one pass, which is usually what an ad platform's spec sheet asks for.",
      },
      {
        q: "Will resizing up make a small image sharper?",
        a: "No. Enlarging invents pixels it does not have, so a 400 px photo scaled to 1080 will look soft. Start from the largest original you have; downscaling is where quality is preserved.",
      },
    ],
    related: ["compress-image-to-500kb", "compress-image-to-1mb", "passport-photo-size-pixels"],
  },
];

/* ----------------------------------------------------------------- format */

/**
 * Every entry here sets the exact same `preset` — `{ format: "jpeg" }` (or
 * `"webp"`) — regardless of which input format is named in the slug. That
 * is not an oversight: the engine's output format has no notion of "coming
 * from HEIC" versus "coming from PNG", so the *setting* these pages switch
 * on is identical. What differs, and what earns each one its own page, is
 * the search intent and the copy that speaks to it — a HEIC visitor is
 * usually holding an iPhone photo they cannot open in some tool at all; a
 * PNG visitor is usually trying to shrink a screenshot.
 */
const FORMAT_LANDINGS: Landing[] = [
  {
    slug: "convert-heic-to-jpg",
    mode: "convert",
    badge: BADGE,
    title: "Convert HEIC to JPG Online — Free, No Upload",
    h1: "Convert a HEIC photo to JPG",
    subtitle: "Drop in an iPhone photo — HEIC is decoded automatically, then saved back out as a JPG anyone can open.",
    description: "Convert HEIC or HEIF iPhone photos to JPG for free, entirely in your browser. No upload, no signup, no app to install.",
    preset: { format: "jpeg" },
    faq: [
      {
        q: "Why won't my iPhone photo open on this website or app?",
        a: "iPhones save photos as HEIC (or HEIF) by default, a format most non-Apple software still cannot read. Converting to JPG once fixes this everywhere, since JPG opens on literally anything.",
      },
      {
        q: "Do I need to install anything to convert HEIC?",
        a: "No. Recent Safari versions can decode HEIC natively, and every other browser falls back to a small in-browser decoder that downloads only when a HEIC file is actually dropped in — either way, nothing is installed on your device.",
      },
      {
        q: "Can I also resize or compress the photo at the same time?",
        a: "Yes — turn on dimensions or a maximum file size alongside the format, and all three are applied together in one pass, which is the usual case for HEIC photos straight off a phone: they also tend to be large.",
      },
      {
        q: "Is my photo uploaded to convert it?",
        a: "No. Decoding and re-encoding both happen locally in your browser. The photo never leaves your device.",
      },
    ],
    related: ["convert-png-to-jpg", "compress-image-to-1mb", "passport-photo-size-pixels"],
  },
  {
    slug: "convert-png-to-jpg",
    mode: "convert",
    badge: BADGE,
    title: "Convert PNG to JPG Online — Free, No Upload",
    h1: "Convert a PNG to JPG",
    subtitle: "Drop in a PNG and get back a JPG — usually a fraction of the size, ready for upload forms that don't accept PNG.",
    description: "Convert a PNG image to JPG for free, entirely in your browser. Cap the file size at the same time if you need to.",
    preset: { format: "jpeg" },
    faq: [
      {
        q: "Why convert a PNG to JPG?",
        a: "PNG is lossless, which makes screenshots and graphics look sharp but also large. JPG compresses photographic content far more efficiently, and it's the format most upload forms with a size limit actually expect.",
      },
      {
        q: "My PNG has a transparent background — what happens to it?",
        a: "JPG has no transparency channel, so transparent areas are filled with white before saving. If you need to keep the transparency, convert to WebP instead of JPG.",
      },
      {
        q: "Can I hit an exact file size at the same time?",
        a: "Yes — turn on 'Maximum file size' as well and both the format and the size target are applied together in a single pass.",
      },
      {
        q: "Will I lose quality?",
        a: "Some — JPG is a lossy format. At the default quality the difference is rarely visible; if you need control over it, turn on quality manually and adjust the slider.",
      },
    ],
    related: ["convert-webp-to-jpg", "compress-image-to-100kb", "convert-heic-to-jpg"],
  },
  {
    slug: "convert-webp-to-jpg",
    mode: "convert",
    badge: BADGE,
    title: "Convert WebP to JPG Online — Free, No Upload",
    h1: "Convert a WebP image to JPG",
    subtitle: "Drop in a WebP file and get back a JPG that opens anywhere, including in tools that don't support WebP yet.",
    description: "Convert a WebP image to JPG for free, entirely in your browser. No upload, no signup.",
    preset: { format: "jpeg" },
    faq: [
      {
        q: "Why would I need to convert WebP to JPG?",
        a: "Most modern browsers display WebP fine, but plenty of older software, some document editors, and a few upload forms still only accept JPG or PNG. Converting once solves it everywhere you need to use the file next.",
      },
      {
        q: "Does converting to JPG change the image quality?",
        a: "JPG is also a lossy format, so there is a re-encoding step, but at the default quality the difference from a typical WebP is minor. Turn on manual quality if you want to control the trade-off yourself.",
      },
      {
        q: "Can I resize while I convert?",
        a: "Yes — turn on dimensions or a percentage scale alongside the format change, and both are applied in the same pass.",
      },
      {
        q: "Is this any different from a screenshot of the image?",
        a: "Yes — a screenshot re-captures your screen at your display's resolution and adds compression on top. This re-encodes the original pixel data directly, so you keep the source image's real resolution and quality.",
      },
    ],
    related: ["convert-png-to-jpg", "convert-heic-to-jpg", "resize-image-to-1080x1080"],
  },
  {
    slug: "convert-jpg-to-webp",
    mode: "convert",
    badge: BADGE,
    title: "Convert JPG to WebP Online — Free, No Upload",
    h1: "Convert a JPG image to WebP",
    subtitle: "Drop in a JPG and get back a smaller WebP — usually 25–35% lighter at the same visual quality, ideal for a faster website.",
    description: "Convert a JPG image to the modern WebP format for free, entirely in your browser. Cap the file size at the same time if you need to.",
    preset: { format: "webp" },
    faq: [
      {
        q: "Why convert JPG to WebP?",
        a: "WebP typically produces a noticeably smaller file than JPG at the same visual quality, which is why it's become the default recommendation for web performance audits (including Google's own PageSpeed Insights).",
      },
      {
        q: "Will WebP display everywhere?",
        a: "Every browser in general use today supports WebP. The main reason to keep a JPG around is compatibility with older software outside the browser — for example some desktop image editors and design tools.",
      },
      {
        q: "Can I set a maximum file size for the WebP output?",
        a: "Yes — turn on 'Maximum file size' and it's applied together with the format change in one pass.",
      },
      {
        q: "Does WebP support transparency like PNG?",
        a: "Yes, unlike JPG. If your source has transparency and you convert from PNG rather than JPG, WebP keeps it.",
      },
    ],
    related: ["convert-png-to-jpg", "compress-image-to-200kb", "resize-image-to-1080x1080"],
  },
];

/* ------------------------------------------------------------------ index */

export const LANDINGS: Landing[] = [...SIZE_SPECS.map(sizeLanding), ...DIMENSION_LANDINGS, ...FORMAT_LANDINGS];

const BY_SLUG = new Map(LANDINGS.map((landing) => [landing.slug, landing]));

export function getLanding(slug: string): Landing | undefined {
  return BY_SLUG.get(slug);
}

/** Resolved `related` entries, with unknown slugs dropped rather than rendered as dead links. */
export function relatedLandings(landing: Landing): Landing[] {
  return landing.related.map((slug) => BY_SLUG.get(slug)).filter((l): l is Landing => Boolean(l));
}
