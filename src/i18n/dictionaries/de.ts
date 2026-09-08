import type { Dictionary } from "./en";

const faqItem = (q: string, a: string) => ({ q, a });

export const de: Dictionary = {
  nav: { compress: "Komprimieren", resize: "Größe ändern", crop: "Zuschneiden", convert: "Konvertieren", faq: "FAQ" },
  footer: {
    tools: "Werkzeuge",
    company: "Unternehmen",
    legal: "Rechtliches",
    compress: "Auf Dateigröße komprimieren",
    resize: "Größe ändern",
    crop: "Zuschneiden",
    convert: "Format konvertieren",
    about: "Über uns",
    contact: "Kontakt",
    faq: "FAQ",
    privacy: "Datenschutz",
    terms: "AGB",
    tagline: "Bring dein Bild auf die geforderte Vorgabe.",
    privacyPill: "Nichts wird hochgeladen",
    copyright: "Die gesamte Verarbeitung findet in deinem Browser statt.",
  },
  common: {
    faqHeading: "Häufige Fragen",
    relatedHeading: "Verwandte Tools",
    faqPageTitle: "Häufig gestellte Fragen",
    faqGeneral: "Allgemein",
    whyHeading: "Warum CrispPic",
    trustPrivate: "Deine Dateien verlassen dein Gerät nie — kein Upload, kein Server.",
    trustFast: "Läuft außerhalb des Haupt-Threads: Auch große Fotos bleiben sofort verfügbar.",
    trustFree: "Kein Konto, kein Wasserzeichen, keine Begrenzung der Bildanzahl.",
    howHeading: "So funktioniert's",
    step1: "Bild ziehen, einfügen oder auswählen.",
    step2: "Die Vorgaben aktivieren, die es erfüllen muss.",
    step3: "Herunterladen. Nichts wurde je hochgeladen.",
    shortcutTip: "Strg/⌘ + S drückt das Ergebnis direkt in die Downloads.",
    privacyTitle: "Privat by Design",
    privacyBody: "Jede Umwandlung läuft in deinem Browser. Wir könnten deine Bilder gar nicht sehen.",
    skipToContent: "Zum Inhalt springen",
    home: "Start",
    primaryNav: "Hauptnavigation",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
  theme: { toLight: "Zum hellen Design wechseln", toDark: "Zum dunklen Design wechseln" },
  home: {
    badge: "100 % privat — deine Dateien verlassen dein Gerät nie",
    h1: "Bring dein Bild auf die geforderte Vorgabe",
    subtitle:
      "Auf eine exakte Dateigröße komprimieren, skalieren, zuschneiden oder das Format wechseln — wähl aus, was du brauchst, den Rest übernehmen wir.",
    faq: [
      faqItem(
        "Wird mein Bild irgendwo hochgeladen?",
        "Nein. Jede Umwandlung — Komprimieren, Skalieren, Zuschneiden, Konvertieren — läuft vollständig in deinem Browser über die Canvas-API. Die Datei verlässt dein Gerät nie."
      ),
      faqItem(
        "Welche Bildformate werden unterstützt?",
        "Du kannst JPG, PNG, WebP, GIF, BMP, AVIF oder HEIC (das Standardformat von iPhone-Fotos) hochladen. Die Ausgabe erfolgt als JPG, PNG oder WebP."
      ),
      faqItem(
        "Kann ich Dateigröße, Maße und Format in einem Schritt kombinieren?",
        "Ja — genau darum geht es. Aktiviere beliebige Kombinationen aus maximaler Dateigröße, Breite/Höhe, Zuschnitt, Drehung und Ausgabeformat: CrispPic wendet alles in einem Durchgang an."
      ),
      faqItem(
        "Ist es wirklich kostenlos?",
        "Ja — ohne Konto, ohne Wasserzeichen und ohne Begrenzung, wie viele Bilder du verarbeitest."
      ),
    ],
  },
  toolPages: {
    compress: {
      badge: "100 % privat — deine Dateien verlassen dein Gerät nie",
      h1: "Komprimiere dein Bild auf eine exakte Dateigröße",
      subtitle: "Wähle eine Zielgröße und wir finden die höchste Qualität, die noch darunter bleibt.",
      faq: [
        faqItem(
          "Wie trifft CrispPic eine exakte Dateigröße?",
          "Per binärer Suche wird die höchste Encoder-Qualität gesucht, die noch unter deinem Ziel bleibt. Passt das Bild bei keiner Qualität, wird es verkleinert und die Suche startet erneut."
        ),
        faqItem(
          "Warum ist mein Ergebnis nicht exakt 100 KB?",
          "Das Ergebnis liegt garantiert auf oder unter deinem Ziel, aber exakt zu treffen ist nicht möglich — wir bleiben lieber darunter, als darüber zu gehen."
        ),
        faqItem(
          "Welche Seiten verlangen eine maximale Dateigröße?",
          "Typische Beispiele: Behörden- und Visumsportale, Bewerbungsformulare, E-Commerce-Produktlistings sowie Foren oder CMS mit Upload-Limits."
        ),
      ],
    },
    resize: {
      badge: "100 % privat — deine Dateien verlassen dein Gerät nie",
      h1: "Skaliere dein Bild auf exakte Maße",
      subtitle:
        "Breite und Höhe in Pixeln festlegen oder prozentual skalieren — sperre das Seitenverhältnis, um Verzerrungen zu vermeiden.",
      faq: [
        faqItem(
          "Was passiert, wenn ich nur eine Breite angebe?",
          "Die Höhe wird automatisch berechnet, um das ursprüngliche Seitenverhältnis zu erhalten — das Bild wird weder gestreckt noch gestaucht."
        ),
        faqItem(
          "Kann ich auf exakte Breite und Höhe skalieren, ohne zu verzerren?",
          "Ja — bei gesperrtem Seitenverhältnis passt CrispPic dein Bild in den gesetzten Rahmen ein, ohne es zu strecken. Entsperre es, wenn du wirklich eine exakte, möglicherweise unproportionale Größe willst."
        ),
        faqItem(
          "Kann ich gleichzeitig skalieren und eine maximale Dateigröße setzen?",
          "Ja — aktiviere zusätzlich „Maximale Dateigröße“, und beide Vorgaben werden gemeinsam in einem Durchgang angewendet."
        ),
      ],
    },
    convert: {
      badge: "100 % privat — deine Dateien verlassen dein Gerät nie",
      h1: "Konvertiere dein Bild in ein anderes Format",
      subtitle: "JPG, PNG, WebP — und HEIC-Fotos vom iPhone werden beim Hochladen automatisch konvertiert.",
      faq: [
        faqItem(
          "In welche Formate kann ich konvertieren?",
          "Ausgabe als JPG, PNG oder WebP. Als Eingabe akzeptieren wir JPG, PNG, WebP, GIF, BMP, AVIF und HEIC/HEIF."
        ),
        faqItem(
          "Geht die Transparenz verloren, wenn ich ein transparentes PNG in JPG umwandle?",
          "Ja — JPG hat keinen Transparenzkanal, transparente Bereiche werden weiß. CrispPic warnt dich vorher; wähle PNG oder WebP, um die Transparenz zu behalten."
        ),
        faqItem(
          "Meine iPhone-Fotos sind HEIC — kann ich die umwandeln?",
          "Ja. Lade eine .heic-Datei hoch und CrispPic konvertiert sie automatisch, bevor dein gewähltes Format angewendet wird."
        ),
      ],
    },
    crop: {
      badge: "100 % privat — deine Dateien verlassen dein Gerät nie",
      h1: "Schneide dein Bild auf das gewünschte Seitenverhältnis zu",
      subtitle: "Lade ein Bild hoch, um den Zuschnitt-Editor zu öffnen — Verhältnis wählen, positionieren, anwenden.",
      faq: [
        faqItem(
          "Welche Zuschnitt-Verhältnisse gibt es?",
          "Frei, Quadrat (1:1), Querformat (4:3), Hochformat (3:4), Breitbild (16:9), Story (9:16) oder ein eigenes Verhältnis."
        ),
        faqItem(
          "Kann ich den Zuschnitt nachträglich ändern?",
          "Ja — klick auf das Stift-Symbol neben „Zuschnitt“, um den Editor erneut zu öffnen, oder auf das ×, um den Zuschnitt zu entfernen."
        ),
        faqItem(
          "Kann ich zuschneiden und gleichzeitig auf eine Zielgröße komprimieren?",
          "Ja — aktiviere nach dem Zuschneiden „Maximale Dateigröße“ und beides wird gemeinsam angewendet."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Bild hierher ziehen oder klicken zum Hochladen",
    dropzoneDrag: "Überall loslassen",
    dropzoneHint: "JPG, PNG, WebP, AVIF oder HEIC — bis 40 MB",
    dropzonePaste: "Du kannst auch einen Screenshot einfügen",
    panelHeading: "Ausgabe-Vorgaben",
    maxFileSize: "Maximale Dateigröße",
    customSizeLabel: "Eigene Größe in Kilobyte",
    dimensions: "Maße",
    resizeUnit: "Einheit",
    unitPixels: "Pixel",
    unitPercent: "Prozent",
    width: "Breite in Pixeln",
    height: "Höhe in Pixeln",
    lockAspect: "Seitenverhältnis sperren",
    unlockAspect: "Seitenverhältnis entsperren",
    presetPlaceholder: "Gängige Größen…",
    scale: "Skalierung",
    sourceSize: "Quelle: {size} px",
    crop: "Zuschnitt",
    transform: "Drehen & spiegeln",
    rotateLeft: "Nach links drehen",
    rotateRight: "Nach rechts drehen",
    flipHorizontal: "Horizontal spiegeln",
    flipVertical: "Vertikal spiegeln",
    resetTransform: "Zurücksetzen",
    outputFormat: "Ausgabeformat",
    quality: "Qualität",
    qualityValue: "Qualität {value} %",
    alphaWarning: "JPG kennt keine Transparenz — transparente Bereiche werden weiß.",
    openCropEditor: "Zuschnitt-Editor öffnen",
    editCrop: "Zuschnitt bearbeiten",
    removeCrop: "Zuschnitt entfernen",
    reading: "Bild wird gelesen…",
    processing: "Wird verarbeitet…",
    passthrough: "Keine Änderung angefordert — du bekommst deine Originaldatei zurück.",
    download: "Herunterladen",
    downloadStarted: "Download gestartet.",
    newImage: "Neues Bild",
    leaveConfirm: "Ihr Bild existiert nur in diesem Tab. Wenn Sie jetzt weggehen, geht es verloren. Fortfahren?",
    targetMissed:
      "Unter {size} war es ohne zu großen Qualitätsverlust nicht möglich — das ist das kleinstmögliche Ergebnis.",
    before: "Vorher",
    after: "Nachher",
    compareLabel: "Vorher und nachher vergleichen",
    compareValue: "{value} % vorher, Rest nachher",
    custom: "Eigene",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Quadratischer Post",
      portrait1350: "Hochformat-Post",
      story1920: "Story",
      og: "Social-Vorschau",
      avatar512: "Avatar",
      thumb256: "Vorschaubild",
      passport: "Passfoto",
    },
    formats: { auto: "Beibehalten", jpeg: "JPG", png: "PNG", webp: "WebP" },
  },
  errors: {
    fileTooLarge: "Diese Datei hat {size} MB. Bitte nutze ein Bild unter {max} MB.",
    unsupportedType: "Bitte nutze ein JPG-, PNG-, WebP-, AVIF-, GIF-, BMP- oder HEIC-Bild.",
    decodeFailed: "Diese Datei ließ sich nicht als Bild öffnen — sie ist möglicherweise beschädigt.",
    heicFailed: "Das sieht nach einem HEIC-Foto aus und konnte nicht konvertiert werden. Exportiere es zuerst als JPG.",
    encodeFailed: "Dein Browser konnte das Bild in diesem Format nicht speichern. Probier ein anderes Ausgabeformat.",
    formatUnsupported: "Dein Browser kann dieses Format nicht schreiben. Probier JPG oder PNG.",
    canvasUnavailable: "Bildbearbeitung ist in diesem Browser nicht verfügbar.",
    outOfMemory: "Dieses Bild ist zu groß für dein Gerät. Probier ein kleineres.",
    unknown: "Bei der Verarbeitung dieses Bildes ist etwas schiefgelaufen.",
  },
  cropModal: {
    title: "Bild zuschneiden",
    cancel: "Abbrechen",
    apply: "Zuschnitt anwenden",
    zoom: "Zoom",
    customWidth: "Breite des eigenen Verhältnisses",
    customHeight: "Höhe des eigenen Verhältnisses",
    ratios: {
      Free: "Frei",
      Square: "Quadrat",
      Landscape: "Querformat",
      Portrait: "Hochformat",
      Widescreen: "Breitbild",
      Story: "Story",
      Custom: "Eigene",
    },
  },
  language: { label: "Sprache" },
  consent: {
    title: "Cookies auf dieser Seite",
    body: "Deine Bilder werden immer auf deinem Gerät verarbeitet — daran ändert sich nichts. Zusätzlich möchten wir Analyse- und Werbe-Cookies von Google setzen, um die Nutzung zu messen und die Tools kostenlos zu halten. Lehnst du ab, funktioniert weiterhin alles.",
    accept: "Akzeptieren",
    decline: "Ablehnen",
    manage: "Cookie-Einstellungen",
    learnMore: "Datenschutzerklärung",
    close: "Schließen",
  },
  errorPage: {
    title: "Etwas ist schiefgelaufen.",
    body: "Ein unerwarteter Fehler hat diese Seite unterbrochen. Deine Bilder wurden nie hochgeladen, es ist also nichts verloren — ein neuer Versuch hilft meistens.",
    retry: "Erneut versuchen",
    home: "Zurück zur Startseite",
  },
  notFound: {
    code: "404",
    title: "Diese Seite gibt es nicht.",
    body: "Das gesuchte Werkzeug oder die Seite wurde vielleicht verschoben, oder der Link ist defekt.",
    cta: "Zurück zur Startseite",
  },
  legal: {
    updatedLabel: "Zuletzt aktualisiert: {date}",
    about: {
      title: "Über {siteName}",
      p1: "{siteName} gibt es, um ein konkretes Problem zu lösen: Du hast ein Bild, und irgendetwas — ein Formular, eine Website, eine Anwendung — verlangt, dass es einer genauen Vorgabe entspricht. Eine maximale Dateigröße. Exakte Maße. Ein bestimmtes Format.",
      p2: "Statt dich herausfinden zu lassen, welche Einstellung in welcher Software dich ans Ziel bringt, fragt {siteName} direkt nach dem gewünschten Ergebnis und übernimmt den Rest: Skalieren, Komprimieren oder Konvertieren, je nach Bedarf.",
      howHeading: "So funktioniert's",
      howBody: "Die gesamte Bildverarbeitung läuft direkt in deinem Browser über Standard-Webtechnologien. Deine Dateien werden nie auf einen Server hochgeladen — wir haben die Infrastruktur dafür bewusst gar nicht.",
      whyHeading: "Warum es kostenlos ist",
      whyBody: "{siteName} finanziert sich über minimale, nicht aufdringliche Werbung. Es gibt kein Konto, kein Abo und keine kostenpflichtigen Funktionen bei keinem der Werkzeuge.",
    },
    contact: {
      title: "Kontakt",
      intro: "Fragen, Fehlermeldungen, Wünsche für neue Funktionen oder alles rund um Datenschutz und den Umgang mit deinen Daten — wir freuen uns darauf.",
      emailBody: "Schreib uns an {{LINK}}. Wir lesen alles und antworten meist innerhalb weniger Werktage.",
      reportHeading: "Ein Problem mit einem Werkzeug melden",
      reportIntro: "Da alles in deinem Browser läuft, können wir nicht sehen, was auf deinem Gerät schiefgelaufen ist — und wir erhalten nie die Datei, an der du gearbeitet hast. Damit sich der Fehler nachvollziehen lässt, gib bitte an:",
      reportItem1: "auf welcher Seite du warst und was du erreichen wolltest;",
      reportItem2: "deinen Browser und dein Betriebssystem samt Version;",
      reportItem3: "Format und ungefähre Größe des Originalbilds (bitte das Bild selbst nur anhängen, wenn wir ausdrücklich darum bitten).",
      privacyHeading: "Datenschutz und Datenanfragen",
      privacyBody: "{siteName} hat keine Konten und speichert keine personenbezogenen Daten, daher gibt es normalerweise nichts zu exportieren oder zu löschen. Bei Fragen zur {{LINK}} oder zu den Drittanbieter-Cookies, die beim Akzeptieren gesetzt werden, schreib an dieselbe Adresse.",
      privacyLinkText: "Datenschutzerklärung",
    },
    privacy: {
      title: "Datenschutzerklärung",
      imagesHeading: "Deine Bilder",
      imagesBody: "Die Werkzeuge von {siteName} verarbeiten Bilder direkt in deinem Browser. Deine Bilddateien werden nicht auf einen von uns betriebenen Server hochgeladen, übertragen oder gespeichert. Wir sehen, erhalten oder speichern niemals den Inhalt einer von dir verarbeiteten Datei.",
      cookiesHeading: "Cookies und deine Einwilligung",
      cookiesBody1: "{siteName} setzt selbst keine Cookies. Die einzigen Cookies, die diese Seite setzen kann, stammen von den unten beschriebenen Drittanbieter-Diensten, und sie werden erst geladen, nachdem du sie im Cookie-Banner akzeptiert hast. Lehnst du ab oder hast noch nicht geantwortet, wird keines dieser Skripte angefragt und kein Drittanbieter-Cookie gesetzt — jedes Werkzeug der Seite funktioniert in beiden Fällen exakt gleich.",
      cookiesBody2: "Deine Antwort wird im lokalen Speicher deines Browsers abgelegt (kein Cookie, wird nirgendwohin gesendet), damit du nicht bei jedem Besuch erneut gefragt wirst. Du kannst sie jederzeit über den Link Cookie-Einstellungen im Footer ändern; ein Widerruf lädt die Seite neu, damit die Skripte gestoppt werden.",
      analyticsHeading: "Analyse",
      analyticsBody: "Mit deiner Einwilligung nutzen wir Google Analytics, um die aggregierte Nutzung zu verstehen — etwa welche Werkzeuge genutzt werden, welche Seiten besucht werden, sowie allgemeine Standort- und Geräteinformationen. Diese Daten sind, wo möglich, anonymisiert/aggregiert und werden nie mit den von dir verarbeiteten Bildern verknüpft: Die erfassten Ereignisse beschreiben nur, was vom Werkzeug verlangt wurde (etwa „eine Datei wurde komprimiert“), niemals einen Dateinamen oder etwas aus dem Bildinhalt Abgeleitetes.",
      adsHeading: "Werbung",
      adsBody: "Mit deiner Einwilligung kann {siteName} Werbung von Drittanbieter-Netzwerken (wie Google AdSense) einblenden, um die Werkzeuge kostenlos zu halten. Diese Netzwerke können Cookies oder ähnliche Technologien nutzen, um relevante Anzeigen zu schalten, und Google kann diese Daten als eigenständig Verantwortlicher verarbeiten — siehe {{LINK1}}. Zusätzlich kannst du die Anzeigenpersonalisierung über deinen Browser oder über {{LINK2}} steuern. Ohne Einwilligung wird das Werbeskript nie geladen, und die reservierten Werbeflächen zeigen stattdessen eigene Inhalte.",
      adsLink1Text: "wie Google Informationen von Websites nutzt, die seine Dienste verwenden",
      adsLink2Text: "Google-Anzeigeneinstellungen",
      accountsHeading: "Konten und personenbezogene Daten",
      accountsBody: "{siteName} erfordert kein Konto, keinen Login und keine persönlichen Daten, um irgendein Werkzeug zu nutzen.",
      contactHeading: "Kontakt",
      contactBody: "Fragen zu dieser Erklärung können an {{LINK}} gesendet werden.",
    },
    terms: {
      title: "Nutzungsbedingungen",
      useHeading: "Nutzung des Dienstes",
      useBody: "{siteName} wird kostenlos, wie besehen, ohne jegliche Gewährleistung bereitgestellt. Du bist dafür verantwortlich sicherzustellen, dass du das Recht hast, jedes Bild zu verarbeiten, das du mit den Werkzeugen dieser Seite öffnest. Es wird nichts hochgeladen: Die Dateien bleiben durchgehend auf deinem eigenen Gerät.",
      noGuaranteesHeading: "Keine Garantien",
      noGuaranteesBody: "Auch wenn {siteName} auf genaue, korrekte Ergebnisse abzielt, garantieren wir nicht, dass die Ausgabe fehlerfrei oder für jeden konkreten Zweck geeignet ist. Prüfe das Ergebnis immer, bevor du dich bei einer kritischen Einreichung darauf verlässt (etwa einem rechtlichen Dokument oder einem offiziellen Antrag).",
      adsHeading: "Werbung und Inhalte Dritter",
      adsBody: "{siteName} finanziert sich über Werbung, die von Drittanbieter-Netzwerken erst nach deiner Zustimmung zu Werbe-Cookies ausgeliefert wird. Wir wählen die einzelnen angezeigten Anzeigen nicht aus, billigen oder kontrollieren sie nicht und sind nicht verantwortlich für den Inhalt der Seiten, auf die sie verlinken. Wie diese Netzwerke Daten nutzen und wie du sie abschaltest, steht in der {{LINK}}.",
      privacyLinkText: "Datenschutzerklärung",
      acceptableHeading: "Zulässige Nutzung",
      acceptableBody: "Du darfst {siteName} nicht nutzen, um illegale Inhalte zu verarbeiten, oder versuchen, den Dienst zu stören, zu überlasten oder zurückzuentwickeln.",
      changesHeading: "Änderungen",
      changesBody: "Diese Bedingungen können von Zeit zu Zeit aktualisiert werden. Die fortgesetzte Nutzung der Seite nach Änderungen gilt als Zustimmung zu den aktualisierten Bedingungen.",
      contactHeading: "Kontakt",
      contactBody: "Fragen können an {{LINK}} gesendet werden.",
    },
  },
  landings: {
    size: {
      h1: "Ein Bild auf {size} komprimieren",
      subtitle: "Lade ein JPG, PNG oder WebP hoch und erhalte es mit maximal {size} zurück, in der bestmöglichen Qualität. Es wird nichts hochgeladen.",
      q1: "Wie komprimiere ich ein Bild auf {size}?",
      a1: "Ziehe dein Bild auf diese Seite. Das Ziel {size} ist bereits aktiviert, das Ergebnis erscheint also sofort — dann einfach herunterladen. Wenn du zusätzlich bestimmte Abmessungen oder ein anderes Format brauchst, aktiviere diese Anforderungen, sie werden im selben Durchgang angewendet.",
      q2: "Wird das Ergebnis exakt {size} groß?",
      a2: "Es ist garantiert, dass es {size} oder weniger ist, nie mehr. Den Wert exakt zu treffen ist mit einem verlustbehafteten Encoder nicht möglich, daher bleiben wir immer unter dem Limit — genau das, was ein Upload-Formular ohnehin prüft.",
      q3: "Wer braucht {size}?",
      q4: "Was, wenn mein Foto {size} nicht erreichen kann?",
      a4: "Zuerst wird die Qualität reduziert; ist selbst die niedrigste sinnvolle Qualität noch zu groß, wird das Bild verkleinert und die Suche beginnt erneut. Ist das Ziel wirklich unerreichbar, bekommst du das kleinstmögliche Ergebnis, deutlich gekennzeichnet, statt eines stillen Fehlschlags.",
      q5: "Wird mein Bild auf einen Server hochgeladen?",
      a5: "Nein. Der gesamte Vorgang läuft in deinem Browser über die Canvas-API, außerhalb des Hauptthreads in einem Web Worker. Die Datei verlässt dein Gerät nie — es gibt also nichts, was wir sehen, speichern oder löschen könnten.",
    },
    whoAsks: {
      "20kb": "20 KB ist eines der strengsten gängigen Limits: Portale für staatliche Prüfungen und Visa verlangen für Unterschrift oder Foto oft genau dieses Limit, und manche älteren Foren begrenzen Avatare auf denselben Wert.",
      "50kb": "50 KB ist die übliche Obergrenze für Pass- und Ausweisfotos auf Behördenportalen sowie für gescannte Dokumente, die Online-Formularen angehängt werden.",
      "100kb": "100 KB ist das häufigste Upload-Limit bei Bewerbungsformularen, Uni-Portalen und älteren Content-Management-Systemen.",
      "200kb": "200 KB ist ein typisches Limit für E-Commerce-Produktfotos und Marktplatz-Angebote, wo die Plattform ein brauchbares Bild will, das auf dem Handy trotzdem schnell lädt.",
      "500kb": "500 KB ist ein komfortables Budget für Web-Performance: groß genug für ein breites Hero-Foto, klein genug, um die Ladezeit der Seite nicht zu dominieren.",
      "1mb": "1 MB ist das Anhang- und Upload-Limit bei vielen E-Mail-Systemen, Ticket-Tools und Versicherungs- oder Schadensformularen.",
    },
    passportPhotoSizePixels: {
      h1: "Ein Passfoto auf die richtige Pixelgröße bringen",
      subtitle: "413 × 531 Pixel entsprechen 35 × 45 mm bei 300 dpi — die ICAO-Größe, die die meisten Pass- und Visa-Portale erwarten. Bereits unten eingestellt.",
      faq: [
        {
          q: "Wie groß ist ein Passfoto in Pixeln?",
          a: "Der von den meisten Ländern verwendete ICAO-Standard ist 35 × 45 mm. Bei 300 dpi gedruckt sind das 413 × 531 Pixel, was diese Seite einstellt. Der US-Pass ist die Ausnahme: Er ist 2 × 2 Zoll groß, also 600 × 600 Pixel bei 300 dpi.",
        },
        {
          q: "Wie komme ich exakt auf 413 × 531, ohne das Gesicht zu verzerren?",
          a: "Erst zuschneiden, dann skalieren. Öffne den Zuschnitt-Editor, stelle ein benutzerdefiniertes Verhältnis von 35 : 45 ein, positioniere den Kopf darin und wende es an — die Skalierung trifft dann exakt die Pixelgröße, ohne Verzerrung. Lässt man nur die Seitenverhältnis-Sperre aktiv, ohne zuzuschneiden, wird das Foto stattdessen in 413 × 531 eingepasst — das erhält die Proportionen, füllt den Rahmen aber nicht.",
        },
        {
          q: "Das Portal hat auch ein Dateigrößenlimit — geht beides?",
          a: "Ja. Aktiviere zusätzlich 'Maximale Dateigröße' und wähle dein Limit; Abmessungen und Größenlimit werden gemeinsam in einem Durchgang angewendet, du musst also nicht in zwei verschiedenen Tools komprimieren und skalieren.",
        },
        {
          q: "Mein Foto ist eine HEIC-Datei von einem iPhone — funktioniert das?",
          a: "Ja. HEIC- und HEIF-Fotos werden automatisch konvertiert, sobald du sie hochlädst, noch bevor irgendetwas anderes angewendet wird, und du kannst als JPG, PNG oder WebP exportieren.",
        },
      ],
    },
    resizeImageTo1080x1080: {
      h1: "Ein Bild auf 1080 × 1080 skalieren",
      subtitle: "Das quadratische 1:1-Format, das Instagram, LinkedIn und die meisten Ad-Plattformen verlangen. Bereits eingestellt — Bild hochladen und herunterladen.",
      faq: [
        {
          q: "Warum 1080 × 1080?",
          a: "Das ist die native Auflösung eines quadratischen Social-Posts: Instagram, Facebook und LinkedIn zeigen 1:1-Bilder alle mit 1080 px auf der langen Seite an, daher vermeidet ein Upload genau in dieser Größe sowohl Vergrößerungsunschärfe als auch eine unnötige Neukodierung auf deren Seite.",
        },
        {
          q: "Mein Foto ist nicht quadratisch — was passiert dann?",
          a: "Bei gesperrtem Seitenverhältnis wird das Bild in 1080 × 1080 eingepasst, ohne verzerrt zu werden, die Proportionen bleiben also erhalten. Um das Quadrat wirklich zu füllen, öffne zuerst den Zuschnitt-Editor, wähle das Verhältnis Quadratisch und positioniere das Motiv — dann trifft die Skalierung exakt 1080 × 1080.",
        },
        {
          q: "Kann ich die Datei zusätzlich unter einem Größenlimit halten?",
          a: "Ja — aktiviere 'Maximale Dateigröße', beide Anforderungen werden gemeinsam in einem Durchgang angewendet, was meist genau dem entspricht, was ein Anforderungsblatt einer Ad-Plattform verlangt.",
        },
        {
          q: "Wird ein Bild durch Vergrößern schärfer?",
          a: "Nein. Vergrößern erfindet Pixel, die nicht vorhanden sind, ein 400-px-Foto auf 1080 skaliert wirkt daher weich. Starte immer vom größten Original, das du hast; beim Verkleinern bleibt die Qualität erhalten.",
        },
      ],
    },
    convertHeicToJpg: {
      h1: "Ein HEIC-Foto in JPG umwandeln",
      subtitle: "Lade ein iPhone-Foto hoch — HEIC wird automatisch dekodiert und dann als JPG gespeichert, das jeder öffnen kann.",
      faq: [
        {
          q: "Warum lässt sich mein iPhone-Foto auf dieser Website oder App nicht öffnen?",
          a: "iPhones speichern Fotos standardmäßig als HEIC (oder HEIF), ein Format, das die meiste Nicht-Apple-Software immer noch nicht lesen kann. Einmalig in JPG umzuwandeln behebt das überall, denn JPG öffnet sich buchstäblich auf allem.",
        },
        {
          q: "Muss ich etwas installieren, um HEIC umzuwandeln?",
          a: "Nein. Aktuelle Safari-Versionen können HEIC nativ dekodieren, und jeder andere Browser greift auf einen kleinen In-Browser-Decoder zurück, der nur heruntergeladen wird, wenn tatsächlich eine HEIC-Datei hochgeladen wird — in beiden Fällen wird nichts auf deinem Gerät installiert.",
        },
        {
          q: "Kann ich das Foto gleichzeitig auch skalieren oder komprimieren?",
          a: "Ja — aktiviere Abmessungen oder eine maximale Dateigröße zusätzlich zum Format, alle drei werden gemeinsam in einem Durchgang angewendet, was beim HEIC-Foto direkt vom Handy der Regelfall ist: Die sind meist auch groß.",
        },
        {
          q: "Wird mein Foto zum Umwandeln auf einen Server hochgeladen?",
          a: "Nein. Sowohl das Dekodieren als auch das erneute Kodieren laufen lokal in deinem Browser ab. Das Foto verlässt dein Gerät nie.",
        },
      ],
    },
    convertPngToJpg: {
      h1: "Ein PNG in JPG umwandeln",
      subtitle: "Lade ein PNG hoch und erhalte ein JPG zurück — meist nur ein Bruchteil der Dateigröße, bereit für Upload-Formulare, die kein PNG akzeptieren.",
      faq: [
        {
          q: "Warum ein PNG in JPG umwandeln?",
          a: "PNG ist verlustfrei, was Screenshots und Grafiken scharf, aber auch groß macht. JPG komprimiert fotografische Inhalte deutlich effizienter und ist das Format, das die meisten Formulare mit Größenlimit tatsächlich erwarten.",
        },
        {
          q: "Mein PNG hat einen transparenten Hintergrund — was passiert damit?",
          a: "JPG hat keinen Transparenzkanal, transparente Bereiche werden vor dem Speichern also weiß gefüllt. Wenn du die Transparenz behalten musst, wandle stattdessen in WebP statt in JPG um.",
        },
        {
          q: "Kann ich gleichzeitig eine genaue Dateigröße erreichen?",
          a: "Ja — aktiviere zusätzlich 'Maximale Dateigröße', Format und Größenziel werden gemeinsam in einem Durchgang angewendet.",
        },
        {
          q: "Verliere ich an Qualität?",
          a: "Etwas — JPG ist ein verlustbehaftetes Format. Bei der Standardqualität ist der Unterschied selten sichtbar; wenn du sie kontrollieren möchtest, aktiviere die manuelle Qualität und passe den Regler an.",
        },
      ],
    },
    convertWebpToJpg: {
      h1: "Ein WebP-Bild in JPG umwandeln",
      subtitle: "Lade eine WebP-Datei hoch und erhalte ein JPG, das sich überall öffnen lässt, auch in Tools, die WebP noch nicht unterstützen.",
      faq: [
        {
          q: "Warum müsste ich WebP in JPG umwandeln?",
          a: "Die meisten modernen Browser zeigen WebP problemlos an, aber viel ältere Software, manche Dokumenten-Editoren und einige Upload-Formulare akzeptieren immer noch nur JPG oder PNG. Einmalig umzuwandeln löst das überall, wo du die Datei als Nächstes brauchst.",
        },
        {
          q: "Ändert das Umwandeln in JPG die Bildqualität?",
          a: "JPG ist ebenfalls verlustbehaftet, es gibt also einen Neukodierungsschritt, aber bei der Standardqualität ist der Unterschied zu einem typischen WebP gering. Aktiviere die manuelle Qualität, wenn du diesen Kompromiss selbst steuern willst.",
        },
        {
          q: "Kann ich beim Umwandeln auch skalieren?",
          a: "Ja — aktiviere Abmessungen oder eine prozentuale Skalierung zusätzlich zur Formatänderung, beides wird im selben Durchgang angewendet.",
        },
        {
          q: "Ist das etwas anderes als ein Screenshot des Bildes?",
          a: "Ja — ein Screenshot erfasst deinen Bildschirm erneut in der Auflösung deines Displays und fügt zusätzliche Kompression hinzu. Hier werden die ursprünglichen Pixeldaten direkt neu kodiert, sodass die echte Auflösung und Qualität des Quellbilds erhalten bleibt.",
        },
      ],
    },
    convertJpgToWebp: {
      h1: "Ein JPG-Bild in WebP umwandeln",
      subtitle: "Lade ein JPG hoch und erhalte ein kleineres WebP zurück — meist 25–35 % leichter bei gleicher visueller Qualität, ideal für eine schnellere Website.",
      faq: [
        {
          q: "Warum JPG in WebP umwandeln?",
          a: "WebP erzeugt bei gleicher visueller Qualität in der Regel eine deutlich kleinere Datei als JPG, weshalb es zur Standardempfehlung bei Web-Performance-Audits geworden ist (auch bei Googles eigenem PageSpeed Insights).",
        },
        {
          q: "Wird WebP überall angezeigt?",
          a: "Jeder heute gängige Browser unterstützt WebP. Der Hauptgrund, ein JPG zu behalten, ist die Kompatibilität mit älterer Software außerhalb des Browsers — etwa manchen Desktop-Bildbearbeitungs- und Design-Tools.",
        },
        {
          q: "Kann ich für die WebP-Ausgabe eine maximale Dateigröße festlegen?",
          a: "Ja — aktiviere 'Maximale Dateigröße', sie wird gemeinsam mit der Formatänderung in einem Durchgang angewendet.",
        },
        {
          q: "Unterstützt WebP Transparenz wie PNG?",
          a: "Ja, im Gegensatz zu JPG. Wenn deine Quelle Transparenz hat und du von PNG statt von JPG umwandelst, bleibt sie in WebP erhalten.",
        },
      ],
    },
  },
};
