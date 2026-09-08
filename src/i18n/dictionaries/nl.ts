import type { Dictionary } from "./en";

const faqItem = (q: string, a: string) => ({ q, a });

export const nl: Dictionary = {
  nav: { compress: "Comprimeren", resize: "Formaat", crop: "Bijsnijden", convert: "Converteren", faq: "FAQ" },
  footer: {
    tools: "Tools",
    company: "Bedrijf",
    legal: "Juridisch",
    compress: "Comprimeren naar grootte",
    resize: "Formaat wijzigen",
    crop: "Bijsnijden",
    convert: "Formaat converteren",
    about: "Over ons",
    contact: "Contact",
    faq: "FAQ",
    privacy: "Privacy",
    terms: "Voorwaarden",
    tagline: "Maak je afbeelding passend voor de eis.",
    privacyPill: "Niets wordt geüpload",
    copyright: "Alle verwerking gebeurt in je browser.",
  },
  common: {
    faqHeading: "Veelgestelde vragen",
    relatedHeading: "Gerelateerde tools",
    faqPageTitle: "Veelgestelde vragen",
    faqGeneral: "Algemeen",
    whyHeading: "Waarom CrispPic",
    trustPrivate: "Je bestanden verlaten je apparaat nooit — geen upload, geen server.",
    trustFast: "Draait buiten de hoofdthread: zelfs grote foto's blijven direct.",
    trustFree: "Geen account, geen watermerk, geen limiet op het aantal afbeeldingen.",
    howHeading: "Hoe het werkt",
    step1: "Sleep, plak of kies een afbeelding.",
    step2: "Zet de eisen aan waaraan hij moet voldoen.",
    step3: "Download. Er is nooit iets geüpload.",
    shortcutTip: "Druk op Ctrl/⌘ + S om het resultaat op te slaan.",
    privacyTitle: "Privé van opzet",
    privacyBody: "Elke bewerking gebeurt in je browser. We zouden je afbeeldingen niet eens kunnen zien.",
    skipToContent: "Naar inhoud",
    home: "Home",
    primaryNav: "Hoofdnavigatie",
    openMenu: "Menu openen",
    closeMenu: "Menu sluiten",
  },
  theme: { toLight: "Naar licht thema", toDark: "Naar donker thema" },
  home: {
    badge: "100% privé — je bestanden verlaten je apparaat nooit",
    h1: "Maak je afbeelding passend voor de eis",
    subtitle:
      "Comprimeer naar een exacte grootte, wijzig het formaat, snijd bij of converteer — kies wat je nodig hebt, wij doen de rest.",
    faq: [
      faqItem(
        "Wordt mijn afbeelding ergens geüpload?",
        "Nee. Elke bewerking — comprimeren, formaat wijzigen, bijsnijden, converteren — gebeurt volledig in je browser via de Canvas API. Het bestand verlaat je apparaat nooit."
      ),
      faqItem(
        "Welke afbeeldingsformaten worden ondersteund?",
        "Je kunt JPG, PNG, WebP, GIF, BMP, AVIF of HEIC uploaden (het standaardformaat van iPhone-foto's). Uitvoer als JPG, PNG of WebP."
      ),
      faqItem(
        "Kan ik grootte, afmetingen en formaat in één keer combineren?",
        "Ja — dat is juist het idee. Zet elke combinatie van maximale bestandsgrootte, breedte/hoogte, bijsnijden, draaien en uitvoerformaat aan: CrispPic past alles in één keer toe."
      ),
      faqItem("Is het echt gratis?", "Ja, zonder account, zonder watermerk en zonder limiet op het aantal afbeeldingen."),
    ],
  },
  toolPages: {
    compress: {
      badge: "100% privé — je bestanden verlaten je apparaat nooit",
      h1: "Comprimeer je afbeelding naar een exacte grootte",
      subtitle: "Kies een doelgrootte en wij vinden de hoogste kwaliteit die er nog onder blijft.",
      faq: [
        faqItem(
          "Hoe haalt CrispPic een exacte bestandsgrootte?",
          "Het zoekt binair naar de hoogste coderingskwaliteit die nog onder je doel blijft. Past de afbeelding bij geen enkele kwaliteit, dan wordt hij verkleind en start de zoektocht opnieuw."
        ),
        faqItem(
          "Waarom is mijn resultaat niet exact 100KB?",
          "Het resultaat blijft gegarandeerd op of onder je doel, maar er precies op landen kan niet — we blijven liever eronder dan erover."
        ),
        faqItem(
          "Welke sites vragen om een maximale bestandsgrootte?",
          "Veelvoorkomend: overheids- en visumportalen, sollicitatieformulieren, productpagina's in webshops, en forums of CMS'en met uploadlimieten."
        ),
      ],
    },
    resize: {
      badge: "100% privé — je bestanden verlaten je apparaat nooit",
      h1: "Wijzig het formaat naar exacte afmetingen",
      subtitle:
        "Stel breedte en hoogte in pixels in of schaal met een percentage — vergrendel de verhouding om vervorming te voorkomen.",
      faq: [
        faqItem(
          "Wat gebeurt er als ik alleen een breedte instel?",
          "De hoogte wordt automatisch berekend om de oorspronkelijke verhouding te behouden — de afbeelding wordt niet uitgerekt of platgedrukt."
        ),
        faqItem(
          "Kan ik naar een exacte breedte en hoogte schalen zonder vervorming?",
          "Ja — met de verhouding vergrendeld past CrispPic je afbeelding binnen het kader zonder hem uit te rekken. Ontgrendel als je echt een exacte, mogelijk niet-proportionele maat wilt."
        ),
        faqItem(
          "Kan ik tegelijk schalen en een maximale bestandsgrootte instellen?",
          "Ja — zet ook 'Maximale bestandsgrootte' aan en beide eisen worden samen in één keer toegepast."
        ),
      ],
    },
    convert: {
      badge: "100% privé — je bestanden verlaten je apparaat nooit",
      h1: "Converteer je afbeelding naar een ander formaat",
      subtitle: "JPG, PNG, WebP — en HEIC-foto's van de iPhone worden automatisch geconverteerd bij het uploaden.",
      faq: [
        faqItem(
          "Naar welke formaten kan ik converteren?",
          "Uitvoer als JPG, PNG of WebP. Als invoer accepteren we JPG, PNG, WebP, GIF, BMP, AVIF en HEIC/HEIF."
        ),
        faqItem(
          "Verlies ik transparantie als ik een transparante PNG naar JPG converteer?",
          "Ja — JPG heeft geen transparantiekanaal, dus transparante gebieden worden wit. CrispPic waarschuwt je vooraf; kies PNG of WebP om transparantie te behouden."
        ),
        faqItem(
          "Mijn iPhone-foto's zijn HEIC — kan ik die converteren?",
          "Ja. Upload een .heic-bestand en CrispPic converteert het automatisch voordat je gekozen formaat wordt toegepast."
        ),
      ],
    },
    crop: {
      badge: "100% privé — je bestanden verlaten je apparaat nooit",
      h1: "Snijd je afbeelding bij op de verhouding die je nodig hebt",
      subtitle: "Upload een afbeelding om de bijsnij-editor te openen — kies een verhouding, sleep en pas toe.",
      faq: [
        faqItem(
          "Welke bijsnijverhoudingen zijn beschikbaar?",
          "Vrij, vierkant (1:1), liggend (4:3), staand (3:4), breedbeeld (16:9), story (9:16), of een eigen verhouding die je zelf invoert."
        ),
        faqItem(
          "Kan ik de uitsnede achteraf aanpassen?",
          "Ja — klik op het potloodicoon naast 'Bijsnijden' om de editor opnieuw te openen, of op de × om de uitsnede te verwijderen."
        ),
        faqItem(
          "Kan ik tegelijk bijsnijden en naar een doelgrootte comprimeren?",
          "Ja — zet na het bijsnijden 'Maximale bestandsgrootte' aan en beide worden samen toegepast."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Sleep een afbeelding, of klik om te uploaden",
    dropzoneDrag: "Laat het overal los",
    dropzoneHint: "JPG, PNG, WebP, AVIF of HEIC — tot 40 MB",
    dropzonePaste: "Je kunt ook een schermafbeelding plakken",
    panelHeading: "Uitvoereisen",
    maxFileSize: "Maximale bestandsgrootte",
    customSizeLabel: "Eigen grootte in kilobytes",
    dimensions: "Afmetingen",
    resizeUnit: "Eenheid",
    unitPixels: "Pixels",
    unitPercent: "Procent",
    width: "Breedte in pixels",
    height: "Hoogte in pixels",
    lockAspect: "Verhouding vergrendelen",
    unlockAspect: "Verhouding ontgrendelen",
    presetPlaceholder: "Veelgebruikte maten…",
    scale: "Schaal",
    sourceSize: "Bron: {size} px",
    crop: "Uitsnede",
    transform: "Draaien & spiegelen",
    rotateLeft: "Naar links draaien",
    rotateRight: "Naar rechts draaien",
    flipHorizontal: "Horizontaal spiegelen",
    flipVertical: "Verticaal spiegelen",
    resetTransform: "Herstellen",
    outputFormat: "Uitvoerformaat",
    quality: "Kwaliteit",
    qualityValue: "Kwaliteit {value}%",
    alphaWarning: "JPG kent geen transparantie — transparante gebieden worden wit.",
    openCropEditor: "Bijsnij-editor openen",
    editCrop: "Uitsnede bewerken",
    removeCrop: "Uitsnede verwijderen",
    reading: "Afbeelding lezen…",
    processing: "Bezig…",
    passthrough: "Geen wijzigingen gevraagd — je krijgt je originele bestand terug.",
    download: "Downloaden",
    downloadStarted: "Download gestart.",
    newImage: "Nieuwe afbeelding",
    leaveConfirm: "Je afbeelding bestaat alleen in dit tabblad. Als je nu weggaat, gaat hij verloren. Doorgaan?",
    targetMissed: "We konden niet onder {size} komen zonder te veel kwaliteitsverlies — dit is het kleinst haalbare.",
    before: "Voor",
    after: "Na",
    compareLabel: "Voor en na vergelijken",
    compareValue: "{value}% voor, de rest na",
    custom: "Eigen",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Vierkante post",
      portrait1350: "Staande post",
      story1920: "Story",
      og: "Socialevoorbeeld",
      avatar512: "Avatar",
      thumb256: "Miniatuur",
      passport: "Pasfoto",
    },
    formats: { auto: "Behouden", jpeg: "JPG", png: "PNG", webp: "WebP" },
  },
  errors: {
    fileTooLarge: "Dat bestand is {size} MB. Gebruik een afbeelding onder {max} MB.",
    unsupportedType: "Gebruik een JPG-, PNG-, WebP-, AVIF-, GIF-, BMP- of HEIC-afbeelding.",
    decodeFailed: "Dit bestand kon niet als afbeelding worden geopend — het is mogelijk beschadigd.",
    heicFailed: "Dit lijkt een HEIC-foto en kon niet worden geconverteerd. Exporteer hem eerst als JPG.",
    encodeFailed: "Je browser kon de afbeelding niet in dit formaat opslaan. Probeer een ander uitvoerformaat.",
    formatUnsupported: "Je browser kan dit formaat niet schrijven. Probeer JPG of PNG.",
    canvasUnavailable: "Afbeeldingsbewerking is niet beschikbaar in deze browser.",
    outOfMemory: "Deze afbeelding is te groot voor je apparaat. Probeer een kleinere.",
    unknown: "Er ging iets mis bij het verwerken van deze afbeelding.",
  },
  cropModal: {
    title: "Afbeelding bijsnijden",
    cancel: "Annuleren",
    apply: "Uitsnede toepassen",
    zoom: "Zoom",
    customWidth: "Breedte eigen verhouding",
    customHeight: "Hoogte eigen verhouding",
    ratios: {
      Free: "Vrij",
      Square: "Vierkant",
      Landscape: "Liggend",
      Portrait: "Staand",
      Widescreen: "Breedbeeld",
      Story: "Story",
      Custom: "Eigen",
    },
  },
  language: { label: "Taal" },
  consent: {
    title: "Cookies op deze site",
    body: "Je afbeeldingen worden altijd op je eigen apparaat verwerkt — dat verandert nooit. Daarnaast willen we analytische en advertentiecookies van Google plaatsen, om het gebruik te meten en de tools gratis te houden. Weiger je, dan blijft alles gewoon werken.",
    accept: "Accepteren",
    decline: "Weigeren",
    manage: "Cookievoorkeuren",
    learnMore: "Privacybeleid",
    close: "Sluiten",
  },
  errorPage: {
    title: "Er is iets misgegaan.",
    body: "Een onverwachte fout heeft deze pagina onderbroken. Je afbeeldingen zijn nooit geüpload, dus er is niets verloren — opnieuw proberen helpt meestal.",
    retry: "Opnieuw proberen",
    home: "Terug naar home",
  },
  notFound: {
    code: "404",
    title: "Deze pagina bestaat niet.",
    body: "De tool of pagina die je zoekt is misschien verplaatst, of de link is kapot.",
    cta: "Terug naar home",
  },
  legal: {
    updatedLabel: "Laatst bijgewerkt: {date}",
    about: {
      title: "Over {siteName}",
      p1: "{siteName} bestaat om één specifiek probleem op te lossen: je hebt een afbeelding, en iets — een formulier, een website, een applicatie — vereist dat die aan een precieze specificatie voldoet. Een maximale bestandsgrootte. Exacte afmetingen. Een bepaald formaat.",
      p2: "In plaats van je te laten uitzoeken welke instelling, in welke software, je daar brengt, vraagt {siteName} direct naar het resultaat dat je nodig hebt en regelt de rest: schalen, comprimeren of converteren naargelang nodig.",
      howHeading: "Hoe het werkt",
      howBody: "Alle beeldverwerking gebeurt rechtstreeks in je browser met standaard webtechnologie. Je bestanden worden nooit naar een server geüpload — we hebben er bewust simpelweg de infrastructuur niet voor.",
      whyHeading: "Waarom het gratis is",
      whyBody: "{siteName} wordt ondersteund door minimale, niet-opdringerige advertenties. Er zijn geen accounts, abonnementen of betaalde functies bij geen enkele tool.",
    },
    contact: {
      title: "Contact",
      intro: "Vragen, bugmeldingen, verzoeken voor nieuwe functies, of iets over privacy en hoe we met je gegevens omgaan — we horen het graag.",
      emailBody: "Mail ons op {{LINK}}. We lezen alles en reageren meestal binnen enkele werkdagen.",
      reportHeading: "Een probleem met een tool melden",
      reportIntro: "Omdat alles in je browser gebeurt, kunnen we niet zien wat er op jouw apparaat misging — en we ontvangen nooit het bestand waaraan je werkte. Voeg voor een reproduceerbare bug het volgende toe:",
      reportItem1: "op welke pagina je was, en wat je probeerde te bereiken;",
      reportItem2: "je browser en besturingssysteem, met hun versies;",
      reportItem3: "het formaat en de geschatte grootte van de originele afbeelding (voeg de afbeelding zelf alleen bij als we daarom vragen).",
      privacyHeading: "Privacy en verzoeken over gegevens",
      privacyBody: "{siteName} heeft geen accounts en slaat geen persoonsgegevens op, dus normaal gesproken is er niets te exporteren of te verwijderen. Heb je een vraag over het {{LINK}}, of over de cookies van derden die worden geplaatst als je ze accepteert, mail dan naar hetzelfde adres.",
      privacyLinkText: "privacybeleid",
    },
    privacy: {
      title: "Privacybeleid",
      imagesHeading: "Jouw afbeeldingen",
      imagesBody: "De tools van {siteName} verwerken afbeeldingen rechtstreeks in je browser. Je afbeeldingsbestanden worden niet geüpload, verzonden of opgeslagen op een server die wij beheren. We zien, benaderen of bewaren nooit de inhoud van een bestand dat je verwerkt.",
      cookiesHeading: "Cookies en jouw toestemming",
      cookiesBody1: "{siteName} plaatst zelf geen cookies. De enige cookies die deze site kan plaatsen zijn die van de hieronder beschreven diensten van derden, en die worden pas geladen nadat je ze accepteert in de cookiebanner. Wijs je af, of heb je nog niet geantwoord, dan wordt geen van die scripts aangevraagd en wordt er geen cookie van derden aangemaakt — elke tool op de site werkt in beide gevallen precies hetzelfde.",
      cookiesBody2: "Je antwoord wordt opgeslagen in de lokale opslag van je browser (geen cookie, en nooit ergens naartoe verzonden), zodat je niet bij elk bezoek opnieuw wordt gevraagd. Je kunt het op elk moment wijzigen via de link Cookievoorkeuren in de footer van elke pagina; toestemming intrekken herlaadt de pagina zodat de scripts stoppen.",
      analyticsHeading: "Analyse",
      analyticsBody: "Met jouw toestemming gebruiken we Google Analytics om geaggregeerd gebruik te begrijpen — bijvoorbeeld welke tools gebruikt worden, welke pagina's bezocht worden, en algemene locatie- en apparaatinformatie. Deze gegevens zijn waar mogelijk geanonimiseerd/geaggregeerd en worden nooit gekoppeld aan de afbeeldingen die je verwerkt: de events die we registreren beschrijven alleen wat aan de tool werd gevraagd (bijvoorbeeld \"een bestand is gecomprimeerd\"), nooit een bestandsnaam of iets afgeleid van de inhoud van de afbeelding.",
      adsHeading: "Advertenties",
      adsBody: "Met jouw toestemming kan {siteName} advertenties tonen van externe netwerken (zoals Google AdSense) om de tools gratis te houden. Deze netwerken kunnen cookies of vergelijkbare technologieën gebruiken om relevante advertenties te tonen, en Google kan deze gegevens verwerken als zelfstandige verwerkingsverantwoordelijke — zie {{LINK1}}. Je kunt advertentiepersonalisatie ook regelen via je browser of via {{LINK2}}. Zonder toestemming wordt het advertentiescript nooit geladen en tonen de gereserveerde vakken in plaats daarvan onze eigen content.",
      adsLink1Text: "hoe Google informatie gebruikt van sites die zijn diensten gebruiken",
      adsLink2Text: "Google-advertentie-instellingen",
      accountsHeading: "Accounts en persoonsgegevens",
      accountsBody: "{siteName} vereist geen account, inlog of persoonlijke gegevens om welke tool dan ook te gebruiken.",
      contactHeading: "Contact",
      contactBody: "Vragen over dit beleid kun je sturen naar {{LINK}}.",
    },
    terms: {
      title: "Gebruiksvoorwaarden",
      useHeading: "Gebruik van de dienst",
      useBody: "{siteName} wordt gratis aangeboden, in de huidige staat, zonder enige garantie. Je bent zelf verantwoordelijk om te controleren of je het recht hebt om elke afbeelding die je met de tools op deze site opent, te verwerken. Er wordt niets geüpload: de bestanden blijven de hele tijd op je eigen apparaat.",
      noGuaranteesHeading: "Geen garanties",
      noGuaranteesBody: "Hoewel {siteName} streeft naar nauwkeurige, correcte resultaten, garanderen we niet dat de uitvoer foutloos is of geschikt voor elk specifiek doel. Controleer het resultaat altijd voordat je erop vertrouwt voor een kritieke inzending (bijvoorbeeld een juridisch document of een officiële aanvraag).",
      adsHeading: "Advertenties en content van derden",
      adsBody: "{siteName} wordt gefinancierd met advertenties, die pas door netwerken van derden worden getoond nadat je advertentiecookies hebt geaccepteerd. Wij kiezen, onderschrijven of controleren de individuele advertenties die verschijnen niet, en zijn niet verantwoordelijk voor de inhoud van sites waarnaar ze linken. Hoe die netwerken gegevens gebruiken, en hoe je ze uitschakelt, staat beschreven in het {{LINK}}.",
      privacyLinkText: "privacybeleid",
      acceptableHeading: "Aanvaardbaar gebruik",
      acceptableBody: "Je mag {siteName} niet gebruiken om illegale content te verwerken, of proberen de dienst te verstoren, te overbelasten of te reverse-engineeren.",
      changesHeading: "Wijzigingen",
      changesBody: "Deze voorwaarden kunnen van tijd tot tijd worden bijgewerkt. Voortgezet gebruik van de site na wijzigingen geldt als aanvaarding van de bijgewerkte voorwaarden.",
      contactHeading: "Contact",
      contactBody: "Vragen kun je sturen naar {{LINK}}.",
    },
  },
  landings: {
    size: {
      h1: "Comprimeer een afbeelding naar {size}",
      subtitle: "Sleep een JPG, PNG of WebP hierheen en krijg 'm terug op {size} of minder, in de best mogelijke kwaliteit. Er wordt niets geüpload.",
      q1: "Hoe comprimeer ik een afbeelding naar {size}?",
      a1: "Sleep je afbeelding naar deze pagina. Het doel van {size} staat al aan, dus het resultaat verschijnt meteen — download het daarna gewoon. Heb je ook specifieke afmetingen of een ander formaat nodig, zet die eisen dan aan en ze worden in dezelfde stap toegepast.",
      q2: "Is het resultaat precies {size}?",
      a2: "Het is gegarandeerd {size} of minder, nooit meer. Precies op dat getal uitkomen is met een lossy encoder niet mogelijk, dus we blijven altijd onder de limiet — en dat is precies wat een uploadformulier controleert.",
      q3: "Wie heeft {size} nodig?",
      q4: "Wat als mijn foto {size} niet kan halen?",
      a4: "Eerst wordt de kwaliteit verlaagd; is zelfs de laagste bruikbare kwaliteit nog te groot, dan wordt de afbeelding verkleind en begint het zoeken opnieuw. Is het doel echt onhaalbaar, dan krijg je het kleinst mogelijke resultaat, duidelijk aangegeven, in plaats van een stille mislukking.",
      q5: "Wordt mijn afbeelding naar een server geüpload?",
      a5: "Nee. Het hele proces gebeurt in je browser via de Canvas API, buiten de hoofdthread in een Web Worker. Het bestand verlaat je apparaat nooit — er is dus niets wat wij kunnen zien, opslaan of verwijderen.",
    },
    whoAsks: {
      "20kb": "20 KB is een van de strengste veelgebruikte limieten: portalen voor overheidsexamens en visa leggen deze limiet vaak op voor de handtekening of foto, en sommige oudere forums beperken avatars tot hetzelfde getal.",
      "50kb": "50 KB is het gebruikelijke maximum voor het uploaden van pasfoto's en ID-foto's op portalen van overheidsinstanties, en voor gescande documenten die bij online formulieren horen.",
      "100kb": "100 KB is de meest voorkomende uploadlimiet bij sollicitatieformulieren, universiteitsportalen en oudere content management systemen.",
      "200kb": "200 KB is een typische limiet voor productfoto's bij e-commerce en marketplace-advertenties, waar het platform een bruikbare afbeelding wil die toch snel laadt op mobiel.",
      "500kb": "500 KB is een comfortabel budget voor webprestaties: groot genoeg voor een hero-foto over de volle breedte, klein genoeg om de laadtijd van de pagina niet te domineren.",
      "1mb": "1 MB is de bijlage- en uploadlimiet bij veel e-mailsystemen, ticketsystemen en verzekerings- of schadeformulieren.",
    },
    passportPhotoSizePixels: {
      h1: "Zet een pasfoto op de juiste maat in pixels",
      subtitle: "413 × 531 pixels komt overeen met 35 × 45 mm bij 300 dpi — de ICAO-maat die de meeste paspoort- en visumportalen verwachten. Hieronder al ingesteld.",
      faq: [
        {
          q: "Wat is de pasfotoformaat in pixels?",
          a: "De ICAO-standaard die de meeste landen gebruiken is 35 × 45 mm. Afgedrukt op 300 dpi komt dat neer op 413 × 531 pixels, wat deze pagina instelt. Het Amerikaanse paspoort is de uitzondering: dat is 2 × 2 inch, oftewel 600 × 600 pixels bij 300 dpi.",
        },
        {
          q: "Hoe kom ik precies op 413 × 531 zonder mijn gezicht te vervormen?",
          a: "Bijsnijden eerst, dan pas het formaat aanpassen. Open de bijsnij-editor, stel een aangepaste verhouding van 35 : 45 in, plaats je hoofd erbinnen en pas toe — de formaataanpassing komt dan exact uit op de pixelmaat, zonder vervorming. Alleen de verhouding vergrendelen zonder bij te snijden past de foto in plaats daarvan binnen 413 × 531, wat de verhoudingen behoudt maar het kader niet vult.",
        },
        {
          q: "Het portaal heeft ook een bestandsgrootte-limiet — kan ik beide doen?",
          a: "Ja. Zet ook 'Maximale bestandsgrootte' aan en kies je limiet; de afmetingen en de grootte-limiet worden samen in één stap toegepast, dus je hoeft niet in twee verschillende tools te comprimeren en formaat aan te passen.",
        },
        {
          q: "Mijn foto is een HEIC-bestand van een iPhone — werkt dat?",
          a: "Ja. HEIC- en HEIF-foto's worden automatisch geconverteerd zodra je ze sleept, voordat er iets anders wordt toegepast, en je kunt exporteren naar JPG, PNG of WebP.",
        },
      ],
    },
    resizeImageTo1080x1080: {
      h1: "Pas een afbeelding aan naar 1080 × 1080",
      subtitle: "Het vierkante 1:1-formaat dat Instagram, LinkedIn en de meeste advertentieplatforms vragen. Al ingesteld — sleep een afbeelding en download 'm.",
      faq: [
        {
          q: "Waarom 1080 × 1080?",
          a: "Dat is de native resolutie van een vierkante social-postplaatsing: Instagram, Facebook en LinkedIn tonen 1:1-afbeeldingen allemaal op 1080 px aan de lange zijde, dus precies die maat uploaden voorkomt zowel wazigheid door opschalen als een onnodige herencodering aan hun kant.",
        },
        {
          q: "Mijn foto is niet vierkant — wat gebeurt er dan?",
          a: "Met de beeldverhouding vergrendeld wordt de afbeelding binnen 1080 × 1080 gepast zonder te vervormen, dus de verhoudingen blijven behouden. Om het vierkant echt te vullen, open eerst de bijsnij-editor, kies de verhouding Vierkant en positioneer het onderwerp — dan komt de formaataanpassing precies uit op 1080 × 1080.",
        },
        {
          q: "Kan ik het bestand ook onder een grootte-limiet houden?",
          a: "Ja — zet 'Maximale bestandsgrootte' aan en beide eisen worden samen in één stap toegepast, wat meestal is wat het specificatieblad van een advertentieplatform vraagt.",
        },
        {
          q: "Wordt een kleine afbeelding scherper door te vergroten?",
          a: "Nee. Vergroten verzint pixels die er niet zijn, dus een foto van 400 px opgeschaald naar 1080 zal er zacht uitzien. Begin altijd met het grootste origineel dat je hebt; bij verkleinen blijft de kwaliteit behouden.",
        },
      ],
    },
    convertHeicToJpg: {
      h1: "Zet een HEIC-foto om naar JPG",
      subtitle: "Sleep een iPhone-foto hierheen — HEIC wordt automatisch gedecodeerd en dan weer opgeslagen als JPG dat iedereen kan openen.",
      faq: [
        {
          q: "Waarom opent mijn iPhone-foto niet op deze website of app?",
          a: "iPhones slaan foto's standaard op als HEIC (of HEIF), een formaat dat de meeste niet-Apple software nog steeds niet kan lezen. Eenmalig omzetten naar JPG lost dit overal op, want JPG opent letterlijk overal.",
        },
        {
          q: "Moet ik iets installeren om HEIC om te zetten?",
          a: "Nee. Recente versies van Safari kunnen HEIC native decoderen, en elke andere browser valt terug op een kleine in-browser decoder die alleen wordt gedownload zodra er echt een HEIC-bestand wordt gesleept — in beide gevallen wordt er niets op je apparaat geïnstalleerd.",
        },
        {
          q: "Kan ik de foto tegelijk ook verkleinen of comprimeren?",
          a: "Ja — zet afmetingen of een maximale bestandsgrootte aan naast het formaat, en alle drie worden samen in één stap toegepast, wat het gebruikelijke geval is bij HEIC-foto's rechtstreeks van de telefoon: die zijn vaak ook groot.",
        },
        {
          q: "Wordt mijn foto geüpload naar een server om 'm te converteren?",
          a: "Nee. Zowel het decoderen als het opnieuw encoderen gebeurt lokaal in je browser. De foto verlaat je apparaat nooit.",
        },
      ],
    },
    convertPngToJpg: {
      h1: "Zet een PNG om naar JPG",
      subtitle: "Sleep een PNG hierheen en krijg een JPG terug — meestal een fractie van de bestandsgrootte, klaar voor uploadformulieren die geen PNG accepteren.",
      faq: [
        {
          q: "Waarom een PNG omzetten naar JPG?",
          a: "PNG is lossless, wat screenshots en grafieken er scherp maar ook groot uit laat zien. JPG comprimeert fotografische inhoud veel efficiënter en is het formaat dat de meeste formulieren met een grootte-limiet daadwerkelijk verwachten.",
        },
        {
          q: "Mijn PNG heeft een transparante achtergrond — wat gebeurt daarmee?",
          a: "JPG heeft geen transparantiekanaal, dus transparante gebieden worden voor het opslaan wit gevuld. Moet je de transparantie behouden, converteer dan naar WebP in plaats van JPG.",
        },
        {
          q: "Kan ik tegelijk ook een exacte bestandsgrootte halen?",
          a: "Ja — zet ook 'Maximale bestandsgrootte' aan en zowel het formaat als het groottedoel worden samen in één stap toegepast.",
        },
        {
          q: "Verlies ik kwaliteit?",
          a: "Een beetje — JPG is een lossy formaat. Bij de standaardkwaliteit is het verschil zelden zichtbaar; wil je het zelf regelen, zet dan de handmatige kwaliteit aan en pas de schuifregelaar aan.",
        },
      ],
    },
    convertWebpToJpg: {
      h1: "Zet een WebP-afbeelding om naar JPG",
      subtitle: "Sleep een WebP-bestand hierheen en krijg een JPG terug dat overal opent, ook in tools die WebP nog niet ondersteunen.",
      faq: [
        {
          q: "Waarom zou ik WebP naar JPG moeten omzetten?",
          a: "De meeste moderne browsers tonen WebP prima, maar veel oudere software, sommige documenteditors en enkele uploadformulieren accepteren nog steeds alleen JPG of PNG. Eenmalig converteren lost het overal op waar je het bestand daarna nodig hebt.",
        },
        {
          q: "Verandert converteren naar JPG de beeldkwaliteit?",
          a: "JPG is ook een lossy formaat, dus er is een herencoderingsstap, maar bij de standaardkwaliteit is het verschil met een typische WebP klein. Zet de handmatige kwaliteit aan als je die afweging zelf wilt sturen.",
        },
        {
          q: "Kan ik tegelijk met converteren ook het formaat aanpassen?",
          a: "Ja — zet afmetingen of een percentageschaal aan naast de formaatwijziging, en beide worden in dezelfde stap toegepast.",
        },
        {
          q: "Is dit anders dan een screenshot van de afbeelding?",
          a: "Ja — een screenshot legt je scherm opnieuw vast op de resolutie van je beeldscherm en voegt daar bovenop compressie toe. Dit encodeert de originele pixeldata direct opnieuw, zodat je de echte resolutie en kwaliteit van de bronafbeelding behoudt.",
        },
      ],
    },
    convertJpgToWebp: {
      h1: "Zet een JPG-afbeelding om naar WebP",
      subtitle: "Sleep een JPG hierheen en krijg een kleinere WebP terug — meestal 25–35% lichter bij dezelfde visuele kwaliteit, ideaal voor een snellere website.",
      faq: [
        {
          q: "Waarom JPG omzetten naar WebP?",
          a: "WebP levert doorgaans een merkbaar kleiner bestand op dan JPG bij dezelfde visuele kwaliteit, daarom is het de standaardaanbeveling geworden bij webprestatie-audits (ook in Google's eigen PageSpeed Insights).",
        },
        {
          q: "Wordt WebP overal weergegeven?",
          a: "Elke browser die tegenwoordig gangbaar is, ondersteunt WebP. De belangrijkste reden om een JPG te bewaren is compatibiliteit met oudere software buiten de browser — bijvoorbeeld sommige desktop-beeldbewerkers en ontwerptools.",
        },
        {
          q: "Kan ik een maximale bestandsgrootte instellen voor de WebP-uitvoer?",
          a: "Ja — zet 'Maximale bestandsgrootte' aan en het wordt samen met de formaatwijziging in één stap toegepast.",
        },
        {
          q: "Ondersteunt WebP transparantie zoals PNG?",
          a: "Ja, in tegenstelling tot JPG. Als je bronbestand transparantie heeft en je converteert vanuit PNG in plaats van JPG, behoudt WebP die.",
        },
      ],
    },
  },
};
