const faqItem = (q: string, a: string) => ({ q, a });

export const en = {
  nav: {
    compress: "Compress",
    resize: "Resize",
    crop: "Crop",
    convert: "Convert",
    faq: "FAQ",
  },
  footer: {
    tools: "Tools",
    company: "Company",
    legal: "Legal",
    compress: "Compress to size",
    resize: "Resize",
    crop: "Crop",
    convert: "Convert format",
    about: "About",
    contact: "Contact",
    faq: "FAQ",
    privacy: "Privacy",
    terms: "Terms",
    tagline: "Make your image fit the requirement.",
    privacyPill: "Nothing is uploaded",
    copyright: "All processing happens in your browser.",
  },
  common: {
    faqHeading: "Common questions",
    relatedHeading: "Related tools",
    faqPageTitle: "Frequently asked questions",
    faqGeneral: "General",
    whyHeading: "Why CrispPic",
    trustPrivate: "Your files never leave your device — there is no upload and no server.",
    trustFast: "Runs off the main thread, so even large photos stay instant.",
    trustFree: "No account, no watermark, no limit on how many images you process.",
    howHeading: "How it works",
    step1: "Drop, paste or pick an image.",
    step2: "Switch on the requirements it has to meet.",
    step3: "Download. Nothing was ever uploaded.",
    shortcutTip: "Press Ctrl/⌘ + S to save the result.",
    privacyTitle: "Private by design",
    privacyBody: "Every transformation runs in your browser. We could not see your images if we wanted to.",
    skipToContent: "Skip to content",
    home: "Home",
    primaryNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  theme: {
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
  },
  home: {
    badge: "100% private — your files never leave your device",
    h1: "Make your image fit the requirement",
    subtitle: "Compress to an exact size, resize, crop, or convert format — pick what you need, we handle the rest.",
    faq: [
      faqItem(
        "Is my image uploaded anywhere?",
        "No. Every transformation — compressing, resizing, cropping, converting — runs entirely in your browser using the Canvas API. The file never leaves your device."
      ),
      faqItem(
        "What image formats are supported?",
        "You can upload JPG, PNG, WebP, GIF, BMP, AVIF, or HEIC (the default format on iPhone photos). Output as JPG, PNG, or WebP."
      ),
      faqItem(
        "Can I combine size, dimensions, and format in one go?",
        "Yes — that's the whole point. Turn on any combination of maximum file size, width/height, crop, rotation, and output format, and CrispPic applies all of them in a single pass."
      ),
      faqItem("Is it really free?", "Yes, with no account, no watermark, and no limit on how many images you process."),
    ],
  },
  toolPages: {
    compress: {
      badge: "100% private — your files never leave your device",
      h1: "Compress your image to an exact size",
      subtitle: "Pick a target file size and we'll find the highest quality that still fits under it.",
      faq: [
        faqItem(
          "How does CrispPic hit an exact file size?",
          "It binary-searches the encoding quality until it finds the highest quality that still lands under your target. If the image can't fit at any quality, it's resized down and the search runs again."
        ),
        faqItem(
          "Why isn't my result exactly 100KB?",
          "The result is guaranteed to be at or under your target, but landing exactly on it isn't possible — we always err on the safe side rather than going over."
        ),
        faqItem(
          "Which sites need a maximum file size?",
          "Common examples: government and visa application portals, job application forms, e-commerce product listings, and forums or CMSs with upload limits."
        ),
      ],
    },
    resize: {
      badge: "100% private — your files never leave your device",
      h1: "Resize your image to exact dimensions",
      subtitle: "Set a width and height in pixels or scale by percentage — lock the aspect ratio to avoid stretching.",
      faq: [
        faqItem(
          "What happens if I only set a width?",
          "The height is calculated automatically to preserve the original aspect ratio — the image won't be stretched or squashed."
        ),
        faqItem(
          "Can I resize to an exact width and height without distortion?",
          "Yes — with the aspect ratio locked, CrispPic fits your image inside the box you set without stretching it. Unlock it if you specifically want an exact, possibly non-proportional, size."
        ),
        faqItem(
          "Can I resize and set a maximum file size at the same time?",
          "Yes — turn on 'Maximum file size' as well and both requirements are applied together in one pass."
        ),
      ],
    },
    convert: {
      badge: "100% private — your files never leave your device",
      h1: "Convert your image to another format",
      subtitle: "JPG, PNG, WebP — and HEIC photos from iPhone are converted automatically on upload.",
      faq: [
        faqItem(
          "Which formats can I convert to?",
          "Output as JPG, PNG, or WebP. Input accepts JPG, PNG, WebP, GIF, BMP, AVIF, and HEIC/HEIF."
        ),
        faqItem(
          "Will converting a transparent PNG to JPG lose the transparency?",
          "Yes — JPG has no transparency channel, so transparent areas are filled with white. CrispPic warns you before it happens; choose PNG or WebP to keep transparency."
        ),
        faqItem(
          "My iPhone photos are HEIC — can I convert those?",
          "Yes. Upload a .heic file and CrispPic converts it automatically before applying whatever format you choose."
        ),
      ],
    },
    crop: {
      badge: "100% private — your files never leave your device",
      h1: "Crop your image to the ratio you need",
      subtitle: "Upload an image to open the crop editor — pick a ratio, drag to position, and apply.",
      faq: [
        faqItem(
          "What crop ratios are available?",
          "Free-form, square (1:1), landscape (4:3), portrait (3:4), widescreen (16:9), story (9:16), or a custom ratio you type in."
        ),
        faqItem(
          "Can I adjust the crop after applying it?",
          "Yes — click the pencil icon next to 'Crop' to reopen the editor, or the × to remove the crop entirely."
        ),
        faqItem(
          "Can I crop and compress to a target size at once?",
          "Yes — turn on 'Maximum file size' after cropping and both are applied together."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Drop an image, or click to upload",
    dropzoneDrag: "Drop it anywhere",
    dropzoneHint: "JPG, PNG, WebP, AVIF or HEIC — up to 40 MB",
    dropzonePaste: "You can also paste a screenshot",
    panelHeading: "Output requirements",
    maxFileSize: "Maximum file size",
    customSizeLabel: "Custom size in kilobytes",
    dimensions: "Dimensions",
    resizeUnit: "Resize unit",
    unitPixels: "Pixels",
    unitPercent: "Percent",
    width: "Width in pixels",
    height: "Height in pixels",
    lockAspect: "Lock aspect ratio",
    unlockAspect: "Unlock aspect ratio",
    presetPlaceholder: "Common sizes…",
    scale: "Scale",
    sourceSize: "Source: {size} px",
    crop: "Crop",
    transform: "Rotate & flip",
    rotateLeft: "Rotate left",
    rotateRight: "Rotate right",
    flipHorizontal: "Flip horizontally",
    flipVertical: "Flip vertically",
    resetTransform: "Reset",
    outputFormat: "Output format",
    quality: "Quality",
    qualityValue: "Quality {value}%",
    alphaWarning: "JPG has no transparency — transparent areas will become white.",
    openCropEditor: "Open crop editor",
    editCrop: "Edit crop",
    removeCrop: "Remove crop",
    reading: "Reading image…",
    processing: "Processing…",
    passthrough: "No changes requested — you'll get your original file back.",
    download: "Download",
    downloadStarted: "Download started.",
    newImage: "New image",
    leaveConfirm: "Your image is only in this tab. If you leave now, it will be lost. Continue?",
    targetMissed: "Couldn't fit under {size} without losing too much quality — this is the smallest we could get.",
    before: "Before",
    after: "After",
    compareLabel: "Compare before and after",
    compareValue: "{value}% before, rest after",
    custom: "Custom",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Square post",
      portrait1350: "Portrait post",
      story1920: "Story",
      og: "Social preview",
      avatar512: "Avatar",
      thumb256: "Thumbnail",
      passport: "Passport photo",
    },
    formats: {
      auto: "Keep",
      jpeg: "JPG",
      png: "PNG",
      webp: "WebP",
    },
  },
  errors: {
    fileTooLarge: "That file is {size} MB. Please use an image under {max} MB.",
    unsupportedType: "Please use a JPG, PNG, WebP, AVIF, GIF, BMP or HEIC image.",
    decodeFailed: "This file couldn't be opened as an image — it may be corrupted.",
    heicFailed: "This looks like a HEIC photo and couldn't be converted. Try exporting it as JPG first.",
    encodeFailed: "Your browser couldn't save the image in this format. Try a different output format.",
    formatUnsupported: "Your browser can't write this format. Try JPG or PNG instead.",
    canvasUnavailable: "Image editing isn't available in this browser.",
    outOfMemory: "This image is too large for your device to process. Try a smaller one.",
    unknown: "Something went wrong processing this image.",
  },
  cropModal: {
    title: "Crop image",
    cancel: "Cancel",
    apply: "Apply crop",
    zoom: "Zoom",
    customWidth: "Custom ratio width",
    customHeight: "Custom ratio height",
    ratios: {
      Free: "Free",
      Square: "Square",
      Landscape: "Landscape",
      Portrait: "Portrait",
      Widescreen: "Widescreen",
      Story: "Story",
      Custom: "Custom",
    },
  },
  language: {
    label: "Language",
  },
  consent: {
    title: "Cookies on this site",
    body: "Your images are always processed on your device — that never changes. We would also like to set analytics and advertising cookies from Google, to measure usage and keep the tools free. Decline and everything still works.",
    accept: "Accept",
    decline: "Decline",
    manage: "Cookie preferences",
    learnMore: "Privacy Policy",
    close: "Close",
  },
  errorPage: {
    title: "Something went wrong.",
    body: "An unexpected error interrupted this page. Your images were never uploaded, so nothing was lost — trying again usually fixes it.",
    retry: "Try again",
    home: "Back to home",
  },
  notFound: {
    code: "404",
    title: "This page doesn't exist.",
    body: "The tool or page you're looking for may have moved, or the link might be broken.",
    cta: "Back to home",
  },
  /**
   * The four long-form pages (about, contact, privacy, terms). Kept in the
   * dictionary like every other string in the app rather than hardcoded per
   * page, so they render in the visitor's language instead of being the one
   * corner of the site stuck in English.
   *
   * A handful of sentences need an inline link (an email address, a link to
   * another page) in the middle of them. Since a dictionary value is plain
   * text, those sentences carry a literal `{{LINK}}` (or `{{LINK1}}` /
   * `{{LINK2}}` where a sentence needs two) token instead — the page
   * component splits the string on that token and places the real `<a>` in
   * the gap. This keeps the surrounding grammar natural to translate in any
   * word order, rather than forcing the link to always sit in one fixed
   * position in every language.
   */
  legal: {
    updatedLabel: "Last updated: {date}",
    about: {
      title: "About {siteName}",
      p1: "{siteName} exists to solve one specific problem: you have an image, and something — a form, a website, an application — requires it to meet a precise specification. A maximum file size. Exact dimensions. A particular format.",
      p2: "Instead of asking you to figure out which setting in which software will get you there, {siteName} asks for the result you need and handles the rest: resizing, compressing, or converting as needed.",
      howHeading: "How it works",
      howBody: "All image processing runs directly in your browser using standard web technologies. Your files are never uploaded to a server — we simply don't have the infrastructure to receive them, by design.",
      whyHeading: "Why it's free",
      whyBody: "{siteName} is supported by minimal, non-intrusive advertising. There are no accounts, no subscriptions, and no paywalls on any tool.",
    },
    contact: {
      title: "Contact",
      intro: "Questions, bug reports, feature requests, or anything about privacy and how your data is handled — we'd like to hear them.",
      emailBody: "Email us at {{LINK}}. We read everything and usually reply within a few working days.",
      reportHeading: "Reporting a problem with a tool",
      reportIntro: "Because everything runs inside your browser, we cannot see what went wrong on your machine — and we never receive the file you were working on. To make a bug reproducible, please include:",
      reportItem1: "which page you were on, and what you were trying to produce;",
      reportItem2: "your browser and operating system, and their versions;",
      reportItem3: "the original image's format and approximate size (please do not attach the image itself unless we ask for it).",
      privacyHeading: "Privacy and data requests",
      privacyBody: "{siteName} has no accounts and stores no personal data, so there is normally nothing to export or delete. If you have a question about the {{LINK}}, or about the third-party cookies that are set when you accept them, write to the same address.",
      privacyLinkText: "privacy policy",
    },
    privacy: {
      title: "Privacy Policy",
      imagesHeading: "Your images",
      imagesBody: "{siteName}'s tools process images directly in your browser. Your image files are not uploaded, transmitted, or stored on any server operated by us. We never see, access, or retain the content of any file you process.",
      cookiesHeading: "Cookies and your consent",
      cookiesBody1: "{siteName} sets no cookies of its own. The only cookies this site can place are those set by the third-party services described below, and they are loaded only after you accept them in the cookie banner. If you decline, or have not yet answered, none of those scripts are requested and no third-party cookie is created — every tool on the site works exactly the same either way.",
      cookiesBody2: "Your answer is stored in your browser's local storage (not a cookie, and never sent anywhere) so you are not asked again on every visit. You can change it at any time with the Cookie preferences link in the footer of any page; withdrawing consent reloads the page so the scripts stop running.",
      analyticsHeading: "Analytics",
      analyticsBody: "With your consent we use Google Analytics to understand aggregate usage — for example, which tools are used, which pages are visited, and general location and device information. This data is anonymized/aggregated where possible and is never linked to the images you process: the events we record describe only what the tool was asked to do (such as \"a file was compressed\"), never a filename or anything derived from image content.",
      adsHeading: "Advertising",
      adsBody: "With your consent, {siteName} may display advertising served by third-party networks (such as Google AdSense) to keep the tools free. These networks may use cookies or similar technologies to serve relevant ads, and Google may process this data as an independent controller — see {{LINK1}}. You can additionally control ad personalization through your browser or via {{LINK2}}. Without consent, the ad script is never loaded and the reserved ad areas show our own content instead.",
      adsLink1Text: "how Google uses information from sites that use its services",
      adsLink2Text: "Google Ads Settings",
      accountsHeading: "Accounts and personal data",
      accountsBody: "{siteName} does not require an account, login, or personal information to use any tool.",
      contactHeading: "Contact",
      contactBody: "Questions about this policy can be sent to {{LINK}}.",
    },
    terms: {
      title: "Terms of Service",
      useHeading: "Use of the service",
      useBody: "{siteName} is provided free of charge, as-is, without warranty of any kind. You are responsible for ensuring you have the right to process any image you open with the tools on this site. Nothing is uploaded: the files stay on your own device throughout.",
      noGuaranteesHeading: "No guarantees",
      noGuaranteesBody: "While {siteName} aims to produce accurate, correct results, we do not guarantee that output will be error-free or fit for every specific purpose. Always verify the result before relying on it for a critical submission (e.g. a legal document or official application).",
      adsHeading: "Advertising and third-party content",
      adsBody: "{siteName} is funded by advertising, which is served by third-party networks only after you have accepted advertising cookies. We do not choose, endorse, or control the individual adverts that appear, and we are not responsible for the content of any site they link to. How those networks use data, and how to turn them off, is described in the {{LINK}}.",
      privacyLinkText: "privacy policy",
      acceptableHeading: "Acceptable use",
      acceptableBody: "You may not use {siteName} to process content that is illegal, or to attempt to disrupt, overload, or reverse-engineer the service.",
      changesHeading: "Changes",
      changesBody: "These terms may be updated from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.",
      contactHeading: "Contact",
      contactBody: "Questions can be sent to {{LINK}}.",
    },
  },
  /**
   * The 12 keyword landing pages (`/[slug]`), translated — the badge/h1/
   * subtitle/FAQ a visitor actually reads follows their chosen language
   * exactly like every other page on the site. Only the URL slug and the
   * server-rendered `<title>`/meta description (in `registry.ts`) stay
   * English on purpose: they exist to rank for the English search phrase,
   * and there is no localized URL to point a translated one at.
   *
   * The six `compress-image-to-*` pages share one template here (`size`)
   * instead of six near-duplicate copies — `{size}` is filled in at render
   * time with `formatBytes(bytes, locale)`, so "100 KB" becomes "100 Ko",
   * "100 КБ" etc. automatically. `whoAsks` is the one sentence a shared
   * template cannot know (who actually needs 20 KB vs. 1 MB), keyed by the
   * same suffix as the slug ("20kb", "1mb", ...).
   */
  landings: {
    size: {
      h1: "Compress an image to {size}",
      subtitle: "Drop in a JPG, PNG or WebP and get it back at or under {size}, at the best quality that still fits. Nothing is uploaded.",
      q1: "How do I compress an image to {size}?",
      a1: "Drop your image on this page. The {size} target is already switched on, so the result appears straight away — then just download it. If you also need specific dimensions or a different format, turn those requirements on and they are applied in the same pass.",
      q2: "Will the result be exactly {size}?",
      a2: "It is guaranteed to be at or under {size}, never over. Landing on the figure exactly is not possible with a lossy encoder, so we always err below the limit — which is what an upload form is checking anyway.",
      q3: "Who asks for {size}?",
      q4: "What if my photo cannot reach {size}?",
      a4: "Quality is lowered first; if even the lowest useful quality is still too large, the image is scaled down and the search runs again. If the target is genuinely unreachable you get the smallest result we could produce, clearly labelled, rather than a silent failure.",
      q5: "Is my image uploaded to a server?",
      a5: "No. The whole process runs in your browser using the Canvas API, off the main thread in a Web Worker. The file never leaves your device, so there is nothing for us to see, store or delete.",
    },
    whoAsks: {
      "20kb": "20 KB is one of the tightest limits in common use: government exam and visa portals frequently cap the signature or photo upload here, and some older forums cap avatars at the same figure.",
      "50kb": "50 KB is the usual ceiling for passport and ID photo uploads on government application portals, and for scanned documents attached to online forms.",
      "100kb": "100 KB is the most common upload cap on job application forms, university portals and older content management systems.",
      "200kb": "200 KB is a typical limit for e-commerce product photos and marketplace listings, where the platform wants a usable image that still loads quickly on mobile.",
      "500kb": "500 KB is a comfortable web-performance budget: large enough for a full-width hero photo, small enough that it will not dominate a page's load time.",
      "1mb": "1 MB is the attachment and upload limit on a lot of email systems, ticketing tools and insurance or claim submission forms.",
    },
    passportPhotoSizePixels: {
      h1: "Make a passport photo the right size in pixels",
      subtitle: "413 × 531 pixels is 35 × 45 mm at 300 dpi — the ICAO size most passport and visa portals expect. It is already set below.",
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
    },
    resizeImageTo1080x1080: {
      h1: "Resize an image to 1080 × 1080",
      subtitle: "The square 1:1 size Instagram, LinkedIn and most ad platforms ask for. Already set — drop an image and download it.",
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
    },
    convertHeicToJpg: {
      h1: "Convert a HEIC photo to JPG",
      subtitle: "Drop in an iPhone photo — HEIC is decoded automatically, then saved back out as a JPG anyone can open.",
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
    },
    convertPngToJpg: {
      h1: "Convert a PNG to JPG",
      subtitle: "Drop in a PNG and get back a JPG — usually a fraction of the size, ready for upload forms that don't accept PNG.",
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
    },
    convertWebpToJpg: {
      h1: "Convert a WebP image to JPG",
      subtitle: "Drop in a WebP file and get back a JPG that opens anywhere, including in tools that don't support WebP yet.",
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
    },
    convertJpgToWebp: {
      h1: "Convert a JPG image to WebP",
      subtitle: "Drop in a JPG and get back a smaller WebP — usually 25–35% lighter at the same visual quality, ideal for a faster website.",
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
    },
  },
};

export type Dictionary = typeof en;
