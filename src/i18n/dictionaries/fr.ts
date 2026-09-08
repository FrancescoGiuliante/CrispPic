import type { Dictionary } from "./en";

const faqItem = (q: string, a: string) => ({ q, a });

export const fr: Dictionary = {
  nav: { compress: "Compresser", resize: "Redimensionner", crop: "Rogner", convert: "Convertir", faq: "FAQ" },
  footer: {
    tools: "Outils",
    company: "Société",
    legal: "Mentions légales",
    compress: "Compresser à un poids",
    resize: "Redimensionner",
    crop: "Rogner",
    convert: "Convertir le format",
    about: "À propos",
    contact: "Contact",
    faq: "FAQ",
    privacy: "Confidentialité",
    terms: "Conditions",
    tagline: "Adaptez votre image à l'exigence demandée.",
    privacyPill: "Rien n'est envoyé",
    copyright: "Tout le traitement se fait dans votre navigateur.",
  },
  common: {
    faqHeading: "Questions fréquentes",
    relatedHeading: "Outils associés",
    faqPageTitle: "Questions fréquentes",
    faqGeneral: "Général",
    whyHeading: "Pourquoi CrispPic",
    trustPrivate: "Vos fichiers ne quittent jamais votre appareil — aucun envoi, aucun serveur.",
    trustFast: "S'exécute hors du thread principal : même les grandes photos restent instantanées.",
    trustFree: "Sans compte, sans filigrane, sans limite du nombre d'images.",
    howHeading: "Comment ça marche",
    step1: "Déposez, collez ou choisissez une image.",
    step2: "Activez les exigences qu'elle doit respecter.",
    step3: "Téléchargez. Rien n'a jamais été envoyé.",
    shortcutTip: "Appuyez sur Ctrl/⌘ + S pour enregistrer le résultat.",
    privacyTitle: "Privé par conception",
    privacyBody: "Chaque transformation a lieu dans votre navigateur. Nous ne pourrions pas voir vos images même en le voulant.",
    skipToContent: "Aller au contenu",
    home: "Accueil",
    primaryNav: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  theme: { toLight: "Passer au thème clair", toDark: "Passer au thème sombre" },
  home: {
    badge: "100 % privé — vos fichiers ne quittent jamais votre appareil",
    h1: "Adaptez votre image à l'exigence demandée",
    subtitle:
      "Compressez à un poids exact, redimensionnez, rognez ou convertissez le format — choisissez ce qu'il vous faut, on s'occupe du reste.",
    faq: [
      faqItem(
        "Mon image est-elle envoyée quelque part ?",
        "Non. Chaque transformation — compression, redimensionnement, rognage, conversion — se déroule entièrement dans votre navigateur via l'API Canvas. Le fichier ne quitte jamais votre appareil."
      ),
      faqItem(
        "Quels formats d'image sont pris en charge ?",
        "Vous pouvez importer du JPG, PNG, WebP, GIF, BMP, AVIF ou HEIC (le format par défaut des photos iPhone). La sortie peut être en JPG, PNG ou WebP."
      ),
      faqItem(
        "Puis-je combiner poids, dimensions et format en une seule fois ?",
        "Oui — c'est tout l'intérêt. Activez n'importe quelle combinaison de poids maximal, largeur/hauteur, rognage, rotation et format de sortie : CrispPic applique tout en une seule passe."
      ),
      faqItem("Est-ce vraiment gratuit ?", "Oui, sans compte, sans filigrane et sans limite du nombre d'images traitées."),
    ],
  },
  toolPages: {
    compress: {
      badge: "100 % privé — vos fichiers ne quittent jamais votre appareil",
      h1: "Compressez votre image à un poids exact",
      subtitle: "Choisissez un poids cible et nous trouvons la meilleure qualité qui tient encore en dessous.",
      faq: [
        faqItem(
          "Comment CrispPic atteint-il un poids exact ?",
          "Il recherche par dichotomie la qualité d'encodage la plus élevée qui reste sous votre cible. Si l'image ne tient à aucune qualité, elle est réduite et la recherche recommence."
        ),
        faqItem(
          "Pourquoi mon résultat ne fait-il pas exactement 100 Ko ?",
          "Le résultat est toujours égal ou inférieur à votre cible, mais tomber pile dessus est impossible — nous préférons rester en dessous plutôt que dépasser."
        ),
        faqItem(
          "Quels sites imposent un poids maximal ?",
          "Exemples courants : portails administratifs et demandes de visa, formulaires de candidature, fiches produit e-commerce, forums ou CMS avec limites d'envoi."
        ),
      ],
    },
    resize: {
      badge: "100 % privé — vos fichiers ne quittent jamais votre appareil",
      h1: "Redimensionnez votre image aux dimensions exactes",
      subtitle:
        "Définissez largeur et hauteur en pixels ou une échelle en pourcentage — verrouillez les proportions pour éviter toute déformation.",
      faq: [
        faqItem(
          "Que se passe-t-il si je ne renseigne que la largeur ?",
          "La hauteur est calculée automatiquement pour préserver les proportions d'origine — l'image ne sera ni étirée ni écrasée."
        ),
        faqItem(
          "Puis-je redimensionner à une largeur et une hauteur exactes sans distorsion ?",
          "Oui — avec les proportions verrouillées, CrispPic ajuste votre image dans le cadre défini sans l'étirer. Déverrouillez-les si vous voulez vraiment une taille exacte, même non proportionnelle."
        ),
        faqItem(
          "Puis-je redimensionner et fixer un poids maximal en même temps ?",
          "Oui — activez aussi « Poids maximal » et les deux exigences sont appliquées ensemble en une seule passe."
        ),
      ],
    },
    convert: {
      badge: "100 % privé — vos fichiers ne quittent jamais votre appareil",
      h1: "Convertissez votre image dans un autre format",
      subtitle: "JPG, PNG, WebP — et les photos HEIC d'iPhone sont converties automatiquement à l'import.",
      faq: [
        faqItem(
          "Vers quels formats puis-je convertir ?",
          "Sortie en JPG, PNG ou WebP. En entrée nous acceptons JPG, PNG, WebP, GIF, BMP, AVIF et HEIC/HEIF."
        ),
        faqItem(
          "Convertir un PNG transparent en JPG fait-il perdre la transparence ?",
          "Oui — le JPG n'a pas de canal alpha, les zones transparentes deviennent donc blanches. CrispPic vous prévient avant ; choisissez PNG ou WebP pour la conserver."
        ),
        faqItem(
          "Mes photos iPhone sont en HEIC — puis-je les convertir ?",
          "Oui. Importez un fichier .heic et CrispPic le convertit automatiquement avant d'appliquer le format choisi."
        ),
      ],
    },
    crop: {
      badge: "100 % privé — vos fichiers ne quittent jamais votre appareil",
      h1: "Rognez votre image au format qu'il vous faut",
      subtitle: "Importez une image pour ouvrir l'éditeur de rognage — choisissez un ratio, faites glisser pour cadrer, puis appliquez.",
      faq: [
        faqItem(
          "Quels ratios de rognage sont disponibles ?",
          "Libre, carré (1:1), paysage (4:3), portrait (3:4), panoramique (16:9), story (9:16), ou un ratio personnalisé que vous saisissez."
        ),
        faqItem(
          "Puis-je modifier le rognage après l'avoir appliqué ?",
          "Oui — cliquez sur l'icône crayon à côté de « Rognage » pour rouvrir l'éditeur, ou sur la × pour le supprimer."
        ),
        faqItem(
          "Puis-je rogner et compresser à un poids cible en même temps ?",
          "Oui — activez « Poids maximal » après le rognage et les deux sont appliqués ensemble."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Déposez une image, ou cliquez pour l'importer",
    dropzoneDrag: "Déposez-la n'importe où",
    dropzoneHint: "JPG, PNG, WebP, AVIF ou HEIC — jusqu'à 40 Mo",
    dropzonePaste: "Vous pouvez aussi coller une capture d'écran",
    panelHeading: "Exigences de sortie",
    maxFileSize: "Poids maximal",
    customSizeLabel: "Poids personnalisé en kilooctets",
    dimensions: "Dimensions",
    resizeUnit: "Unité de redimensionnement",
    unitPixels: "Pixels",
    unitPercent: "Pourcentage",
    width: "Largeur en pixels",
    height: "Hauteur en pixels",
    lockAspect: "Verrouiller les proportions",
    unlockAspect: "Déverrouiller les proportions",
    presetPlaceholder: "Tailles courantes…",
    scale: "Échelle",
    sourceSize: "Source : {size} px",
    crop: "Rognage",
    transform: "Pivoter et retourner",
    rotateLeft: "Pivoter à gauche",
    rotateRight: "Pivoter à droite",
    flipHorizontal: "Retourner horizontalement",
    flipVertical: "Retourner verticalement",
    resetTransform: "Réinitialiser",
    outputFormat: "Format de sortie",
    quality: "Qualité",
    qualityValue: "Qualité {value} %",
    alphaWarning: "Le JPG n'a pas de transparence — les zones transparentes deviendront blanches.",
    openCropEditor: "Ouvrir l'éditeur de rognage",
    editCrop: "Modifier le rognage",
    removeCrop: "Supprimer le rognage",
    reading: "Lecture de l'image…",
    processing: "Traitement…",
    passthrough: "Aucune modification demandée — vous récupérerez votre fichier d'origine.",
    download: "Télécharger",
    downloadStarted: "Téléchargement lancé.",
    newImage: "Nouvelle image",
    leaveConfirm: "Votre image n'existe que dans cet onglet. Si vous quittez maintenant, elle sera perdue. Continuer ?",
    targetMissed: "Impossible de passer sous {size} sans perdre trop de qualité — voici le plus petit résultat possible.",
    before: "Avant",
    after: "Après",
    compareLabel: "Comparer avant et après",
    compareValue: "{value} % avant, le reste après",
    custom: "Perso",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Post carré",
      portrait1350: "Post portrait",
      story1920: "Story",
      og: "Aperçu réseaux sociaux",
      avatar512: "Avatar",
      thumb256: "Miniature",
      passport: "Photo d'identité",
    },
    formats: { auto: "Conserver", jpeg: "JPG", png: "PNG", webp: "WebP" },
  },
  errors: {
    fileTooLarge: "Ce fichier fait {size} Mo. Utilisez une image de moins de {max} Mo.",
    unsupportedType: "Utilisez une image JPG, PNG, WebP, AVIF, GIF, BMP ou HEIC.",
    decodeFailed: "Ce fichier n'a pas pu être ouvert comme image — il est peut-être corrompu.",
    heicFailed: "Cela ressemble à une photo HEIC et la conversion a échoué. Essayez de l'exporter d'abord en JPG.",
    encodeFailed: "Votre navigateur n'a pas pu enregistrer l'image dans ce format. Essayez un autre format de sortie.",
    formatUnsupported: "Votre navigateur ne peut pas écrire ce format. Essayez JPG ou PNG.",
    canvasUnavailable: "L'édition d'images n'est pas disponible dans ce navigateur.",
    outOfMemory: "Cette image est trop grande pour votre appareil. Essayez-en une plus petite.",
    unknown: "Une erreur s'est produite lors du traitement de cette image.",
  },
  cropModal: {
    title: "Rogner l'image",
    cancel: "Annuler",
    apply: "Appliquer le rognage",
    zoom: "Zoom",
    customWidth: "Largeur du ratio personnalisé",
    customHeight: "Hauteur du ratio personnalisé",
    ratios: {
      Free: "Libre",
      Square: "Carré",
      Landscape: "Paysage",
      Portrait: "Portrait",
      Widescreen: "Panoramique",
      Story: "Story",
      Custom: "Perso",
    },
  },
  language: { label: "Langue" },
  consent: {
    title: "Cookies sur ce site",
    body: "Vos images sont toujours traitées sur votre appareil — cela ne change jamais. Nous aimerions aussi déposer des cookies de mesure d'audience et de publicité de Google, pour mesurer l'usage et garder les outils gratuits. Si vous refusez, tout continue de fonctionner.",
    accept: "Accepter",
    decline: "Refuser",
    manage: "Préférences cookies",
    learnMore: "Politique de confidentialité",
    close: "Fermer",
  },
  errorPage: {
    title: "Une erreur est survenue.",
    body: "Une erreur inattendue a interrompu cette page. Vos images n'ont jamais été envoyées, rien n'est donc perdu — réessayer suffit généralement.",
    retry: "Réessayer",
    home: "Retour à l'accueil",
  },
  notFound: {
    code: "404",
    title: "Cette page n'existe pas.",
    body: "L'outil ou la page que vous cherchez a peut-être été déplacé, ou le lien est peut-être cassé.",
    cta: "Retour à l'accueil",
  },
  legal: {
    updatedLabel: "Dernière mise à jour : {date}",
    about: {
      title: "À propos de {siteName}",
      p1: "{siteName} existe pour résoudre un problème précis : vous avez une image, et quelque chose — un formulaire, un site, une application — exige qu'elle respecte une spécification exacte. Un poids maximal. Des dimensions précises. Un format particulier.",
      p2: "Plutôt que de vous laisser deviner quel réglage, dans quel logiciel, vous y mènera, {siteName} vous demande directement le résultat dont vous avez besoin et s'occupe du reste : redimensionner, compresser ou convertir selon le cas.",
      howHeading: "Comment ça marche",
      howBody: "Tout le traitement d'image se déroule directement dans votre navigateur grâce aux technologies web standard. Vos fichiers ne sont jamais envoyés vers un serveur — nous n'avons tout simplement pas l'infrastructure pour les recevoir, volontairement.",
      whyHeading: "Pourquoi c'est gratuit",
      whyBody: "{siteName} est financé par une publicité minimale et non intrusive. Il n'y a ni compte, ni abonnement, ni fonctionnalité payante sur aucun outil.",
    },
    contact: {
      title: "Contact",
      intro: "Questions, signalements de bugs, demandes de fonctionnalités, ou toute question sur la confidentialité et le traitement de vos données — nous serions ravis de les recevoir.",
      emailBody: "Écrivez-nous à {{LINK}}. Nous lisons tout et répondons généralement sous quelques jours ouvrés.",
      reportHeading: "Signaler un problème avec un outil",
      reportIntro: "Comme tout se passe dans votre navigateur, nous ne pouvons pas voir ce qui a mal tourné sur votre appareil — et nous ne recevons jamais le fichier sur lequel vous travailliez. Pour rendre le bug reproductible, merci d'inclure :",
      reportItem1: "sur quelle page vous étiez, et ce que vous essayiez d'obtenir ;",
      reportItem2: "votre navigateur et système d'exploitation, avec leurs versions ;",
      reportItem3: "le format et le poids approximatif de l'image d'origine (merci de ne pas joindre l'image elle-même, sauf si nous vous le demandons).",
      privacyHeading: "Confidentialité et demandes sur les données",
      privacyBody: "{siteName} n'a pas de comptes et ne stocke aucune donnée personnelle, donc il n'y a normalement rien à exporter ou supprimer. Si vous avez une question sur la {{LINK}}, ou sur les cookies tiers déposés lorsque vous les acceptez, écrivez à la même adresse.",
      privacyLinkText: "politique de confidentialité",
    },
    privacy: {
      title: "Politique de confidentialité",
      imagesHeading: "Vos images",
      imagesBody: "Les outils de {siteName} traitent les images directement dans votre navigateur. Vos fichiers image ne sont ni envoyés, ni transmis, ni stockés sur un serveur que nous exploitons. Nous ne voyons, n'accédons ni ne conservons jamais le contenu d'un fichier que vous traitez.",
      cookiesHeading: "Cookies et votre consentement",
      cookiesBody1: "{siteName} ne dépose aucun cookie propre. Les seuls cookies que ce site peut déposer sont ceux des services tiers décrits ci-dessous, et ils ne sont chargés qu'après votre acceptation dans le bandeau cookies. Si vous refusez, ou n'avez pas encore répondu, aucun de ces scripts n'est sollicité et aucun cookie tiers n'est créé — chaque outil du site fonctionne exactement pareil dans les deux cas.",
      cookiesBody2: "Votre réponse est enregistrée dans le stockage local de votre navigateur (pas un cookie, et jamais envoyée nulle part) afin qu'on ne vous la redemande pas à chaque visite. Vous pouvez la modifier à tout moment via le lien Préférences cookies dans le pied de page ; retirer votre consentement recharge la page pour que les scripts s'arrêtent.",
      analyticsHeading: "Analyse d'audience",
      analyticsBody: "Avec votre consentement, nous utilisons Google Analytics pour comprendre l'usage global — par exemple, quels outils sont utilisés, quelles pages sont visitées, ainsi que des informations générales de localisation et d'appareil. Ces données sont anonymisées/agrégées lorsque c'est possible et ne sont jamais liées aux images que vous traitez : les événements enregistrés décrivent uniquement ce qui a été demandé à l'outil (par exemple « un fichier a été compressé »), jamais un nom de fichier ni quoi que ce soit dérivé du contenu de l'image.",
      adsHeading: "Publicité",
      adsBody: "Avec votre consentement, {siteName} peut afficher des publicités fournies par des réseaux tiers (comme Google AdSense) afin de garder les outils gratuits. Ces réseaux peuvent utiliser des cookies ou technologies similaires pour diffuser des annonces pertinentes, et Google peut traiter ces données en tant que responsable indépendant — voir {{LINK1}}. Vous pouvez également contrôler la personnalisation des annonces via votre navigateur ou via {{LINK2}}. Sans consentement, le script publicitaire n'est jamais chargé et les emplacements réservés affichent notre propre contenu.",
      adsLink1Text: "comment Google utilise les informations des sites qui utilisent ses services",
      adsLink2Text: "Paramètres des annonces Google",
      accountsHeading: "Comptes et données personnelles",
      accountsBody: "{siteName} ne nécessite ni compte, ni connexion, ni information personnelle pour utiliser un outil.",
      contactHeading: "Contact",
      contactBody: "Les questions sur cette politique peuvent être envoyées à {{LINK}}.",
    },
    terms: {
      title: "Conditions d'utilisation",
      useHeading: "Utilisation du service",
      useBody: "{siteName} est fourni gratuitement, en l'état, sans garantie d'aucune sorte. Il vous appartient de vous assurer que vous avez le droit de traiter toute image que vous ouvrez avec les outils de ce site. Rien n'est envoyé : les fichiers restent sur votre propre appareil à tout moment.",
      noGuaranteesHeading: "Aucune garantie",
      noGuaranteesBody: "Bien que {siteName} vise des résultats précis et corrects, nous ne garantissons pas que le résultat soit exempt d'erreur ou adapté à tout usage spécifique. Vérifiez toujours le résultat avant de vous y fier pour une démarche critique (par exemple un document juridique ou une candidature officielle).",
      adsHeading: "Publicité et contenus tiers",
      adsBody: "{siteName} est financé par la publicité, fournie par des réseaux tiers uniquement après acceptation des cookies publicitaires. Nous ne choisissons, n'approuvons ni ne contrôlons les publicités individuelles affichées, et ne sommes pas responsables du contenu des sites vers lesquels elles renvoient. La façon dont ces réseaux utilisent les données, et comment les désactiver, est décrite dans la {{LINK}}.",
      privacyLinkText: "politique de confidentialité",
      acceptableHeading: "Usage autorisé",
      acceptableBody: "Vous ne pouvez pas utiliser {siteName} pour traiter du contenu illégal, ni tenter de perturber, surcharger ou décompiler le service.",
      changesHeading: "Modifications",
      changesBody: "Ces conditions peuvent être mises à jour de temps à autre. Continuer à utiliser le site après des modifications vaut acceptation des conditions mises à jour.",
      contactHeading: "Contact",
      contactBody: "Les questions peuvent être envoyées à {{LINK}}.",
    },
  },
  landings: {
    size: {
      h1: "Compresser une image à {size}",
      subtitle: "Déposez un JPG, PNG ou WebP et récupérez-le à {size} maximum, avec la meilleure qualité possible. Rien n'est envoyé sur un serveur.",
      q1: "Comment compresser une image à {size} ?",
      a1: "Déposez votre image sur cette page. L'objectif {size} est déjà activé, le résultat apparaît donc immédiatement — il ne reste plus qu'à le télécharger. Si vous avez aussi besoin de dimensions précises ou d'un autre format, activez ces réglages : ils sont appliqués dans la même passe.",
      q2: "Le résultat fera-t-il exactement {size} ?",
      a2: "Il est garanti égal ou inférieur à {size}, jamais supérieur. Tomber exactement sur ce chiffre n'est pas possible avec un encodeur à perte, donc on reste toujours en dessous de la limite — ce qui est précisément ce que vérifie un formulaire d'envoi.",
      q3: "Qui a besoin de {size} ?",
      q4: "Que se passe-t-il si ma photo ne peut pas atteindre {size} ?",
      a4: "La qualité est d'abord réduite ; si même la qualité minimale utile reste trop lourde, l'image est redimensionnée et la recherche recommence. Si l'objectif est vraiment impossible à atteindre, vous obtenez le résultat le plus petit possible, clairement indiqué, plutôt qu'un échec silencieux.",
      q5: "Mon image est-elle envoyée sur un serveur ?",
      a5: "Non. Tout le traitement se fait dans votre navigateur via l'API Canvas, hors du thread principal, dans un Web Worker. Le fichier ne quitte jamais votre appareil : il n'y a donc rien que nous puissions voir, stocker ou supprimer.",
    },
    whoAsks: {
      "20kb": "20 Ko est l'une des limites les plus strictes couramment utilisées : les portails de concours publics et de demande de visa imposent souvent cette limite pour la signature ou la photo, et certains forums plus anciens limitent les avatars à ce même chiffre.",
      "50kb": "50 Ko est le plafond habituel pour l'envoi de photos de passeport et de pièce d'identité sur les portails de démarches administratives, ainsi que pour les documents scannés joints à des formulaires en ligne.",
      "100kb": "100 Ko est la limite d'envoi la plus courante sur les formulaires de candidature, les portails universitaires et les systèmes de gestion de contenu plus anciens.",
      "200kb": "200 Ko est une limite typique pour les photos de produits e-commerce et les annonces sur les places de marché, où la plateforme veut une image exploitable qui se charge quand même vite sur mobile.",
      "500kb": "500 Ko est un budget confortable pour la performance web : assez grand pour une photo d'en-tête pleine largeur, assez petit pour ne pas plomber le temps de chargement de la page.",
      "1mb": "1 Mo est la limite de pièce jointe et d'envoi sur de nombreux systèmes de messagerie, outils de tickets et formulaires d'assurance ou de sinistre.",
    },
    passportPhotoSizePixels: {
      h1: "Mettre une photo d'identité à la bonne taille en pixels",
      subtitle: "413 × 531 pixels correspond à 35 × 45 mm à 300 dpi — la taille ICAO attendue par la plupart des portails de passeport et de visa. Déjà réglée ci-dessous.",
      faq: [
        {
          q: "Quelle est la taille d'une photo d'identité en pixels ?",
          a: "La norme ICAO utilisée par la plupart des pays est 35 × 45 mm. Imprimée à 300 dpi, cela correspond à 413 × 531 pixels, ce que cette page configure. Le passeport américain fait exception : il mesure 2 × 2 pouces, soit 600 × 600 pixels à 300 dpi.",
        },
        {
          q: "Comment obtenir exactement 413 × 531 sans déformer le visage ?",
          a: "Recadrez d'abord, redimensionnez ensuite. Ouvrez l'éditeur de recadrage, réglez un ratio personnalisé de 35 : 45, positionnez la tête à l'intérieur puis validez — le redimensionnement tombera alors exactement sur la taille en pixels, sans distorsion. Laisser seulement le verrouillage du ratio actif sans recadrer ajuste la photo à l'intérieur de 413 × 531, ce qui conserve les proportions mais ne remplit pas le cadre.",
        },
        {
          q: "Le portail a aussi une limite de poids de fichier — puis-je faire les deux ?",
          a: "Oui. Activez aussi 'Poids maximum du fichier' et choisissez votre limite ; les dimensions et le poids maximum sont appliqués ensemble en une seule passe, pas besoin de compresser puis redimensionner avec deux outils différents.",
        },
        {
          q: "Ma photo est un fichier HEIC provenant d'un iPhone — cela fonctionnera-t-il ?",
          a: "Oui. Les photos HEIC et HEIF sont converties automatiquement dès que vous les déposez, avant toute autre modification, et vous pouvez exporter en JPG, PNG ou WebP.",
        },
      ],
    },
    resizeImageTo1080x1080: {
      h1: "Redimensionner une image en 1080 × 1080",
      subtitle: "Le format carré 1:1 demandé par Instagram, LinkedIn et la plupart des plateformes publicitaires. Déjà réglé — déposez une image et téléchargez-la.",
      faq: [
        {
          q: "Pourquoi 1080 × 1080 ?",
          a: "C'est la résolution native d'une publication carrée sur les réseaux sociaux : Instagram, Facebook et LinkedIn affichent tous les images 1:1 à 1080 px sur le côté long, donc envoyer exactement cette taille évite à la fois le flou d'agrandissement et un réencodage inutile de leur côté.",
        },
        {
          q: "Ma photo n'est pas carrée — que se passe-t-il ?",
          a: "Avec le ratio verrouillé, l'image est ajustée à l'intérieur de 1080 × 1080 sans être déformée, en conservant les proportions. Pour vraiment remplir le carré, ouvrez d'abord l'éditeur de recadrage, choisissez le ratio Carré et positionnez le sujet — le redimensionnement tombera alors exactement sur 1080 × 1080.",
        },
        {
          q: "Puis-je aussi garder le fichier sous une limite de poids ?",
          a: "Oui — activez 'Poids maximum du fichier' et les deux exigences sont appliquées ensemble en une seule passe, ce qui correspond généralement à ce que demande le cahier des charges d'une plateforme publicitaire.",
        },
        {
          q: "Agrandir rendra-t-il une petite image plus nette ?",
          a: "Non. Agrandir invente des pixels qui n'existent pas, donc une photo de 400 px mise à l'échelle en 1080 paraîtra floue. Partez toujours de l'original le plus grand dont vous disposez ; c'est en réduisant que la qualité se conserve.",
        },
      ],
    },
    convertHeicToJpg: {
      h1: "Convertir une photo HEIC en JPG",
      subtitle: "Déposez une photo d'iPhone — le HEIC est décodé automatiquement, puis réenregistré en JPG que tout le monde peut ouvrir.",
      faq: [
        {
          q: "Pourquoi ma photo iPhone ne s'ouvre-t-elle pas sur ce site ou cette app ?",
          a: "Les iPhone enregistrent les photos en HEIC (ou HEIF) par défaut, un format que la plupart des logiciels non Apple ne savent toujours pas lire. Convertir en JPG une seule fois règle le problème partout, car le JPG s'ouvre littéralement n'importe où.",
        },
        {
          q: "Dois-je installer quelque chose pour convertir un HEIC ?",
          a: "Non. Les versions récentes de Safari savent décoder le HEIC nativement, et tous les autres navigateurs utilisent un petit décodeur intégré qui ne se télécharge que lorsqu'un fichier HEIC est réellement déposé — dans les deux cas, rien n'est installé sur votre appareil.",
        },
        {
          q: "Puis-je aussi redimensionner ou compresser la photo en même temps ?",
          a: "Oui — activez les dimensions ou un poids maximum de fichier en plus du format, et les trois sont appliqués ensemble en une seule passe, ce qui est le cas habituel des photos HEIC fraîchement prises avec un téléphone : elles ont aussi tendance à être lourdes.",
        },
        {
          q: "Ma photo est-elle envoyée sur un serveur pour la convertir ?",
          a: "Non. Le décodage comme le réencodage se font localement dans votre navigateur. La photo ne quitte jamais votre appareil.",
        },
      ],
    },
    convertPngToJpg: {
      h1: "Convertir un PNG en JPG",
      subtitle: "Déposez un PNG et récupérez un JPG — généralement une fraction du poids, prêt pour les formulaires d'envoi qui n'acceptent pas le PNG.",
      faq: [
        {
          q: "Pourquoi convertir un PNG en JPG ?",
          a: "Le PNG est sans perte, ce qui rend les captures d'écran et graphiques nets mais aussi lourds. Le JPG compresse le contenu photographique bien plus efficacement, et c'est le format qu'attendent réellement la plupart des formulaires avec une limite de poids.",
        },
        {
          q: "Mon PNG a un fond transparent — que devient-il ?",
          a: "Le JPG n'a pas de canal de transparence, donc les zones transparentes sont remplies en blanc avant l'enregistrement. Si vous devez conserver la transparence, convertissez en WebP plutôt qu'en JPG.",
        },
        {
          q: "Puis-je aussi atteindre un poids de fichier précis ?",
          a: "Oui — activez aussi 'Poids maximum du fichier' et le format comme l'objectif de poids sont appliqués ensemble en une seule passe.",
        },
        {
          q: "Vais-je perdre en qualité ?",
          a: "Un peu — le JPG est un format avec perte. À la qualité par défaut, la différence est rarement visible ; si vous voulez la contrôler, activez la qualité manuelle et ajustez le curseur.",
        },
      ],
    },
    convertWebpToJpg: {
      h1: "Convertir une image WebP en JPG",
      subtitle: "Déposez un fichier WebP et récupérez un JPG qui s'ouvre partout, y compris dans les outils qui ne supportent pas encore le WebP.",
      faq: [
        {
          q: "Pourquoi aurais-je besoin de convertir du WebP en JPG ?",
          a: "La plupart des navigateurs modernes affichent le WebP sans problème, mais beaucoup de logiciels plus anciens, certains éditeurs de documents et certains formulaires d'envoi n'acceptent encore que le JPG ou le PNG. Convertir une fois règle le problème partout où vous devez ensuite utiliser le fichier.",
        },
        {
          q: "Convertir en JPG change-t-il la qualité de l'image ?",
          a: "Le JPG est lui aussi un format avec perte, il y a donc un réencodage, mais à la qualité par défaut la différence avec un WebP typique est minime. Activez la qualité manuelle si vous voulez contrôler vous-même ce compromis.",
        },
        {
          q: "Puis-je redimensionner en convertissant ?",
          a: "Oui — activez les dimensions ou une échelle en pourcentage en plus du changement de format, les deux sont appliqués dans la même passe.",
        },
        {
          q: "Est-ce différent d'une capture d'écran de l'image ?",
          a: "Oui — une capture d'écran recapture votre écran à la résolution de votre affichage et ajoute de la compression par-dessus. Ici, les pixels d'origine sont réencodés directement, ce qui conserve la vraie résolution et la vraie qualité de l'image source.",
        },
      ],
    },
    convertJpgToWebp: {
      h1: "Convertir une image JPG en WebP",
      subtitle: "Déposez un JPG et récupérez un WebP plus léger — généralement 25 à 35 % plus léger à qualité visuelle égale, idéal pour un site plus rapide.",
      faq: [
        {
          q: "Pourquoi convertir du JPG en WebP ?",
          a: "Le WebP produit généralement un fichier nettement plus léger que le JPG à qualité visuelle équivalente, c'est pourquoi il est devenu la recommandation par défaut dans les audits de performance web (y compris PageSpeed Insights de Google).",
        },
        {
          q: "Le WebP s'affichera-t-il partout ?",
          a: "Tous les navigateurs couramment utilisés aujourd'hui supportent le WebP. La principale raison de conserver un JPG est la compatibilité avec des logiciels plus anciens en dehors du navigateur — par exemple certains éditeurs d'images de bureau et outils de design.",
        },
        {
          q: "Puis-je définir un poids maximum pour le fichier WebP obtenu ?",
          a: "Oui — activez 'Poids maximum du fichier', il est appliqué en même temps que le changement de format, en une seule passe.",
        },
        {
          q: "Le WebP gère-t-il la transparence comme le PNG ?",
          a: "Oui, contrairement au JPG. Si votre fichier source a de la transparence et que vous convertissez depuis un PNG plutôt qu'un JPG, le WebP la conserve.",
        },
      ],
    },
  },
};
