import type { Dictionary } from "./en";

const faqItem = (q: string, a: string) => ({ q, a });

export const it: Dictionary = {
  nav: {
    compress: "Comprimi",
    resize: "Ridimensiona",
    crop: "Ritaglia",
    convert: "Converti",
    faq: "FAQ",
  },
  footer: {
    tools: "Strumenti",
    company: "Azienda",
    legal: "Legale",
    compress: "Comprimi a un peso preciso",
    resize: "Ridimensiona",
    crop: "Ritaglia",
    convert: "Converti formato",
    about: "Chi siamo",
    contact: "Contatti",
    faq: "FAQ",
    privacy: "Privacy",
    terms: "Termini",
    tagline: "Adatta la tua immagine al requisito richiesto.",
    privacyPill: "Nessun caricamento",
    copyright: "Tutta l'elaborazione avviene nel tuo browser.",
  },
  common: {
    faqHeading: "Domande frequenti",
    relatedHeading: "Strumenti correlati",
    faqPageTitle: "Domande frequenti",
    faqGeneral: "Generale",
    whyHeading: "Perché CrispPic",
    trustPrivate: "I tuoi file non lasciano mai il dispositivo — nessun upload, nessun server.",
    trustFast: "Elabora fuori dal thread principale: anche le foto grandi restano immediate.",
    trustFree: "Nessun account, nessun watermark, nessun limite al numero di immagini.",
    howHeading: "Come funziona",
    step1: "Trascina, incolla o scegli un'immagine.",
    step2: "Attiva i requisiti che deve rispettare.",
    step3: "Scarica. Nulla è mai stato caricato.",
    shortcutTip: "Premi Ctrl/⌘ + S per salvare il risultato.",
    privacyTitle: "Privato per progettazione",
    privacyBody: "Ogni trasformazione avviene nel tuo browser. Non potremmo vedere le tue immagini nemmeno volendo.",
    skipToContent: "Vai al contenuto",
    home: "Home",
    primaryNav: "Navigazione principale",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },
  theme: {
    toLight: "Passa al tema chiaro",
    toDark: "Passa al tema scuro",
  },
  home: {
    badge: "100% privato — i tuoi file non lasciano mai il tuo dispositivo",
    h1: "Adatta la tua immagine al requisito richiesto",
    subtitle:
      "Comprimi a un peso preciso, ridimensiona, ritaglia o converti formato — scegli cosa ti serve, pensiamo noi al resto.",
    faq: [
      faqItem(
        "La mia immagine viene caricata da qualche parte?",
        "No. Ogni trasformazione — compressione, ridimensionamento, ritaglio, conversione — avviene interamente nel tuo browser tramite le Canvas API. Il file non lascia mai il tuo dispositivo."
      ),
      faqItem(
        "Quali formati immagine sono supportati?",
        "Puoi caricare JPG, PNG, WebP, GIF, BMP, AVIF o HEIC (il formato predefinito delle foto iPhone). L'output può essere JPG, PNG o WebP."
      ),
      faqItem(
        "Posso combinare peso, dimensioni e formato in un solo passaggio?",
        "Sì — è proprio questo il punto. Attiva qualsiasi combinazione di peso massimo, larghezza/altezza, ritaglio, rotazione e formato di output: CrispPic li applica tutti in una sola passata."
      ),
      faqItem(
        "È davvero gratis?",
        "Sì, senza account, senza watermark e senza limiti al numero di immagini che puoi elaborare."
      ),
    ],
  },
  toolPages: {
    compress: {
      badge: "100% privato — i tuoi file non lasciano mai il tuo dispositivo",
      h1: "Comprimi la tua immagine a un peso esatto",
      subtitle: "Scegli un peso massimo e troviamo la qualità più alta che rientra comunque nel limite.",
      faq: [
        faqItem(
          "Come fa CrispPic a raggiungere un peso esatto?",
          "Cerca con ricerca binaria la qualità di codifica più alta che rientra ancora nel tuo obiettivo. Se l'immagine non ci sta a nessuna qualità, viene ridimensionata e la ricerca riparte."
        ),
        faqItem(
          "Perché il risultato non è esattamente 100KB?",
          "Il risultato è garantito uguale o inferiore al tuo obiettivo, ma centrarlo esattamente non è possibile — preferiamo sempre restare sotto il limite piuttosto che superarlo."
        ),
        faqItem(
          "Quali siti richiedono un peso massimo?",
          "Esempi comuni: portali di domande governative o per il visto, moduli di candidatura, schede prodotto e-commerce, forum o CMS con limiti di upload."
        ),
      ],
    },
    resize: {
      badge: "100% privato — i tuoi file non lasciano mai il tuo dispositivo",
      h1: "Ridimensiona la tua immagine alle dimensioni esatte",
      subtitle:
        "Imposta larghezza e altezza in pixel o scala in percentuale — blocca le proporzioni per evitare distorsioni.",
      faq: [
        faqItem(
          "Cosa succede se imposto solo la larghezza?",
          "L'altezza viene calcolata automaticamente per mantenere le proporzioni originali — l'immagine non verrà stirata o schiacciata."
        ),
        faqItem(
          "Posso ridimensionare a larghezza e altezza esatte senza distorsioni?",
          "Sì — con le proporzioni bloccate, CrispPic adatta l'immagine dentro il riquadro impostato senza stirarla. Sbloccale solo se vuoi davvero una dimensione esatta, anche non proporzionale."
        ),
        faqItem(
          "Posso ridimensionare e impostare un peso massimo insieme?",
          "Sì — attiva anche 'Peso massimo' ed entrambi i requisiti vengono applicati insieme in un solo passaggio."
        ),
      ],
    },
    convert: {
      badge: "100% privato — i tuoi file non lasciano mai il tuo dispositivo",
      h1: "Converti la tua immagine in un altro formato",
      subtitle: "JPG, PNG, WebP — e le foto HEIC di iPhone vengono convertite automaticamente al caricamento.",
      faq: [
        faqItem(
          "In quali formati posso convertire?",
          "Output disponibile come JPG, PNG o WebP. In input accettiamo JPG, PNG, WebP, GIF, BMP, AVIF e HEIC/HEIF."
        ),
        faqItem(
          "Convertendo un PNG trasparente in JPG perdo la trasparenza?",
          "Sì — il JPG non ha un canale di trasparenza, quindi le aree trasparenti diventano bianche. CrispPic ti avvisa prima che accada; scegli PNG o WebP per mantenerla."
        ),
        faqItem(
          "Le mie foto iPhone sono HEIC — posso convertirle?",
          "Sì. Carica un file .heic e CrispPic lo converte automaticamente prima di applicare il formato scelto."
        ),
      ],
    },
    crop: {
      badge: "100% privato — i tuoi file non lasciano mai il tuo dispositivo",
      h1: "Ritaglia la tua immagine nel formato che ti serve",
      subtitle:
        "Carica un'immagine per aprire l'editor di ritaglio — scegli un formato, trascina per posizionare e applica.",
      faq: [
        faqItem(
          "Quali proporzioni di ritaglio sono disponibili?",
          "Libero, quadrato (1:1), orizzontale (4:3), verticale (3:4), widescreen (16:9), storia (9:16), oppure una proporzione personalizzata a tua scelta."
        ),
        faqItem(
          "Posso modificare il ritaglio dopo averlo applicato?",
          "Sì — clicca sull'icona a matita accanto a 'Ritaglio' per riaprire l'editor, oppure sulla × per rimuoverlo completamente."
        ),
        faqItem(
          "Posso ritagliare e comprimere a un peso preciso insieme?",
          "Sì — attiva 'Peso massimo' dopo aver ritagliato ed entrambi vengono applicati insieme."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Trascina un'immagine, o clicca per caricarla",
    dropzoneDrag: "Rilasciala ovunque",
    dropzoneHint: "JPG, PNG, WebP, AVIF o HEIC — fino a 40 MB",
    dropzonePaste: "Puoi anche incollare uno screenshot",
    panelHeading: "Requisiti di output",
    maxFileSize: "Peso massimo",
    customSizeLabel: "Peso personalizzato in kilobyte",
    dimensions: "Dimensioni",
    resizeUnit: "Unità di ridimensionamento",
    unitPixels: "Pixel",
    unitPercent: "Percento",
    width: "Larghezza in pixel",
    height: "Altezza in pixel",
    lockAspect: "Blocca le proporzioni",
    unlockAspect: "Sblocca le proporzioni",
    presetPlaceholder: "Dimensioni comuni…",
    scale: "Scala",
    sourceSize: "Origine: {size} px",
    crop: "Ritaglio",
    transform: "Ruota e specchia",
    rotateLeft: "Ruota a sinistra",
    rotateRight: "Ruota a destra",
    flipHorizontal: "Specchia in orizzontale",
    flipVertical: "Specchia in verticale",
    resetTransform: "Ripristina",
    outputFormat: "Formato di output",
    quality: "Qualità",
    qualityValue: "Qualità {value}%",
    alphaWarning: "Il JPG non ha trasparenza — le aree trasparenti diventeranno bianche.",
    openCropEditor: "Apri editor di ritaglio",
    editCrop: "Modifica ritaglio",
    removeCrop: "Rimuovi ritaglio",
    reading: "Lettura immagine…",
    processing: "Elaborazione…",
    passthrough: "Nessuna modifica richiesta — otterrai il file originale.",
    download: "Scarica",
    downloadStarted: "Download avviato.",
    newImage: "Nuova immagine",
    leaveConfirm: "La tua immagine esiste solo in questa scheda. Se esci ora, andrà persa. Continuare?",
    targetMissed:
      "Non siamo riusciti a rientrare sotto {size} senza perdere troppa qualità — questo è il risultato più piccolo ottenibile.",
    before: "Prima",
    after: "Dopo",
    compareLabel: "Confronta prima e dopo",
    compareValue: "{value}% prima, il resto dopo",
    custom: "Personal.",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Post quadrato",
      portrait1350: "Post verticale",
      story1920: "Storia",
      og: "Anteprima social",
      avatar512: "Avatar",
      thumb256: "Miniatura",
      passport: "Foto tessera",
    },
    formats: {
      auto: "Mantieni",
      jpeg: "JPG",
      png: "PNG",
      webp: "WebP",
    },
  },
  errors: {
    fileTooLarge: "Questo file pesa {size} MB. Usa un'immagine sotto i {max} MB.",
    unsupportedType: "Usa un'immagine JPG, PNG, WebP, AVIF, GIF, BMP o HEIC.",
    decodeFailed: "Non è stato possibile aprire questo file come immagine — potrebbe essere danneggiato.",
    heicFailed: "Sembra una foto HEIC e non è stato possibile convertirla. Prova prima a esportarla in JPG.",
    encodeFailed: "Il tuo browser non è riuscito a salvare l'immagine in questo formato. Prova un altro formato.",
    formatUnsupported: "Il tuo browser non può scrivere questo formato. Prova con JPG o PNG.",
    canvasUnavailable: "La modifica delle immagini non è disponibile in questo browser.",
    outOfMemory: "Questa immagine è troppo grande per il tuo dispositivo. Provane una più piccola.",
    unknown: "Qualcosa è andato storto durante l'elaborazione di questa immagine.",
  },
  cropModal: {
    title: "Ritaglia immagine",
    cancel: "Annulla",
    apply: "Applica ritaglio",
    zoom: "Zoom",
    customWidth: "Larghezza proporzione personalizzata",
    customHeight: "Altezza proporzione personalizzata",
    ratios: {
      Free: "Libero",
      Square: "Quadrato",
      Landscape: "Orizzontale",
      Portrait: "Verticale",
      Widescreen: "Widescreen",
      Story: "Storia",
      Custom: "Personal.",
    },
  },
  language: {
    label: "Lingua",
  },
  consent: {
    title: "Cookie su questo sito",
    body: "Le tue immagini vengono sempre elaborate sul tuo dispositivo — questo non cambia mai. Vorremmo inoltre usare cookie di analisi e pubblicità di Google, per misurare l'utilizzo e mantenere gli strumenti gratuiti. Se rifiuti, tutto continua a funzionare.",
    accept: "Accetta",
    decline: "Rifiuta",
    manage: "Preferenze cookie",
    learnMore: "Informativa sulla privacy",
    close: "Chiudi",
  },
  errorPage: {
    title: "Qualcosa è andato storto.",
    body: "Un errore imprevisto ha interrotto questa pagina. Le tue immagini non sono mai state caricate, quindi non si è perso nulla: di solito basta riprovare.",
    retry: "Riprova",
    home: "Torna alla home",
  },
  notFound: {
    code: "404",
    title: "Questa pagina non esiste.",
    body: "Lo strumento o la pagina che cerchi potrebbe essere stato spostato, o il link potrebbe essere rotto.",
    cta: "Torna alla home",
  },
  legal: {
    updatedLabel: "Ultimo aggiornamento: {date}",
    about: {
      title: "Chi è {siteName}",
      p1: "{siteName} esiste per risolvere un problema preciso: hai un'immagine, e qualcosa — un modulo, un sito, un'applicazione — richiede che rispetti una specifica esatta. Un peso massimo. Dimensioni precise. Un formato particolare.",
      p2: "Invece di farti capire quale impostazione, in quale programma, ti porta al risultato, {siteName} ti chiede direttamente il risultato che ti serve e si occupa del resto: ridimensiona, comprime o converte secondo necessità.",
      howHeading: "Come funziona",
      howBody: "Tutta l'elaborazione delle immagini avviene direttamente nel tuo browser usando tecnologie web standard. I tuoi file non vengono mai caricati su un server — semplicemente non abbiamo l'infrastruttura per riceverli, per scelta.",
      whyHeading: "Perché è gratis",
      whyBody: "{siteName} si sostiene con pubblicità minima e non invasiva. Non ci sono account, abbonamenti o funzioni a pagamento su nessuno strumento.",
    },
    contact: {
      title: "Contatti",
      intro: "Domande, segnalazioni di bug, richieste di nuove funzioni, o qualsiasi cosa riguardi la privacy e come vengono trattati i tuoi dati — vogliamo sentirle.",
      emailBody: "Scrivici a {{LINK}}. Leggiamo tutto e di solito rispondiamo entro pochi giorni lavorativi.",
      reportHeading: "Segnalare un problema con uno strumento",
      reportIntro: "Dato che tutto avviene nel tuo browser, non possiamo vedere cosa è andato storto sul tuo dispositivo — e non riceviamo mai il file su cui stavi lavorando. Per rendere il bug riproducibile, includi per favore:",
      reportItem1: "in quale pagina ti trovavi, e cosa stavi cercando di ottenere;",
      reportItem2: "il tuo browser e sistema operativo, con le rispettive versioni;",
      reportItem3: "il formato e il peso approssimativo dell'immagine originale (per favore non allegare l'immagine stessa a meno che non te lo chiediamo).",
      privacyHeading: "Privacy e richieste sui dati",
      privacyBody: "{siteName} non ha account e non conserva dati personali, quindi normalmente non c'è nulla da esportare o cancellare. Se hai una domanda sulla {{LINK}}, o sui cookie di terze parti che vengono impostati quando li accetti, scrivi allo stesso indirizzo.",
      privacyLinkText: "informativa sulla privacy",
    },
    privacy: {
      title: "Informativa sulla privacy",
      imagesHeading: "Le tue immagini",
      imagesBody: "Gli strumenti di {siteName} elaborano le immagini direttamente nel tuo browser. I tuoi file immagine non vengono caricati, trasmessi o conservati su nessun server gestito da noi. Non vediamo, non accediamo e non conserviamo mai il contenuto di alcun file che elabori.",
      cookiesHeading: "Cookie e il tuo consenso",
      cookiesBody1: "{siteName} non imposta cookie propri. Gli unici cookie che questo sito può impostare sono quelli dei servizi di terze parti descritti sotto, e vengono caricati solo dopo che li accetti nel banner dei cookie. Se rifiuti, o non hai ancora risposto, nessuno di questi script viene richiesto e nessun cookie di terze parti viene creato — ogni strumento del sito funziona esattamente allo stesso modo in entrambi i casi.",
      cookiesBody2: "La tua risposta viene salvata nella memoria locale del tuo browser (non un cookie, e non viene mai inviata da nessuna parte) così non ti viene richiesta a ogni visita. Puoi cambiarla in qualsiasi momento con il link Preferenze cookie nel footer di ogni pagina; revocare il consenso ricarica la pagina così gli script smettono di funzionare.",
      analyticsHeading: "Analisi statistiche",
      analyticsBody: "Con il tuo consenso usiamo Google Analytics per capire l'utilizzo aggregato — ad esempio, quali strumenti vengono usati, quali pagine vengono visitate, e informazioni generali su posizione e dispositivo. Questi dati sono anonimizzati/aggregati dove possibile e non sono mai collegati alle immagini che elabori: gli eventi che registriamo descrivono solo cosa è stato chiesto allo strumento (ad esempio \"un file è stato compresso\"), mai un nome di file o qualcosa derivato dal contenuto dell'immagine.",
      adsHeading: "Pubblicità",
      adsBody: "Con il tuo consenso, {siteName} può mostrare pubblicità fornita da reti di terze parti (come Google AdSense) per mantenere gratuiti gli strumenti. Queste reti possono usare cookie o tecnologie simili per mostrare annunci pertinenti, e Google può trattare questi dati come titolare autonomo — vedi {{LINK1}}. Puoi inoltre controllare la personalizzazione degli annunci tramite il tuo browser o tramite {{LINK2}}. Senza consenso, lo script pubblicitario non viene mai caricato e gli spazi riservati mostrano invece contenuti nostri.",
      adsLink1Text: "come Google usa le informazioni dai siti che utilizzano i suoi servizi",
      adsLink2Text: "Impostazioni annunci Google",
      accountsHeading: "Account e dati personali",
      accountsBody: "{siteName} non richiede un account, un login o dati personali per usare nessuno strumento.",
      contactHeading: "Contatti",
      contactBody: "Le domande su questa informativa possono essere inviate a {{LINK}}.",
    },
    terms: {
      title: "Termini di servizio",
      useHeading: "Utilizzo del servizio",
      useBody: "{siteName} è fornito gratuitamente, così com'è, senza garanzie di alcun tipo. Sei responsabile di assicurarti di avere il diritto di elaborare qualsiasi immagine apri con gli strumenti di questo sito. Non viene caricato nulla: i file restano sul tuo dispositivo per tutto il tempo.",
      noGuaranteesHeading: "Nessuna garanzia",
      noGuaranteesBody: "Anche se {siteName} mira a produrre risultati accurati e corretti, non garantiamo che l'output sia privo di errori o adatto a ogni scopo specifico. Verifica sempre il risultato prima di affidarti ad esso per un invio critico (ad esempio un documento legale o una domanda ufficiale).",
      adsHeading: "Pubblicità e contenuti di terze parti",
      adsBody: "{siteName} è finanziato dalla pubblicità, che viene fornita da reti di terze parti solo dopo che hai accettato i cookie pubblicitari. Non scegliamo, approviamo o controlliamo i singoli annunci che appaiono, e non siamo responsabili del contenuto di alcun sito a cui rimandano. Come queste reti usano i dati, e come disattivarle, è descritto nella {{LINK}}.",
      privacyLinkText: "informativa sulla privacy",
      acceptableHeading: "Uso consentito",
      acceptableBody: "Non puoi usare {siteName} per elaborare contenuti illegali, né tentare di interrompere, sovraccaricare o decompilare il servizio.",
      changesHeading: "Modifiche",
      changesBody: "Questi termini possono essere aggiornati di tanto in tanto. L'uso continuato del sito dopo le modifiche costituisce accettazione dei termini aggiornati.",
      contactHeading: "Contatti",
      contactBody: "Le domande possono essere inviate a {{LINK}}.",
    },
  },
  landings: {
    size: {
      h1: "Comprimi un'immagine a {size}",
      subtitle: "Trascina un JPG, PNG o WebP e ottienilo a {size} o meno, con la migliore qualità possibile. Niente viene caricato online.",
      q1: "Come comprimo un'immagine a {size}?",
      a1: "Trascina la tua immagine in questa pagina. L'obiettivo di {size} è già attivo, quindi il risultato appare subito — poi basta scaricarlo. Se ti servono anche dimensioni specifiche o un formato diverso, attiva quei requisiti e vengono applicati nello stesso passaggio.",
      q2: "Il risultato sarà esattamente {size}?",
      a2: "È garantito che sia pari o inferiore a {size}, mai superiore. Centrare la cifra esatta non è possibile con un codificatore lossy, quindi restiamo sempre sotto il limite — che è comunque ciò che un modulo di caricamento verifica.",
      q3: "Chi ha bisogno di {size}?",
      q4: "Cosa succede se la mia foto non riesce a raggiungere {size}?",
      a4: "Prima viene abbassata la qualità; se anche la qualità minima utile è ancora troppo pesante, l'immagine viene rimpicciolita e la ricerca riparte. Se l'obiettivo è davvero irraggiungibile ottieni comunque il risultato più piccolo possibile, indicato chiaramente, invece di un errore silenzioso.",
      q5: "La mia immagine viene caricata su un server?",
      a5: "No. L'intero processo avviene nel tuo browser tramite le API Canvas, fuori dal thread principale in un Web Worker. Il file non lascia mai il tuo dispositivo, quindi non c'è nulla che possiamo vedere, salvare o cancellare.",
    },
    whoAsks: {
      "20kb": "20 KB è uno dei limiti più stretti in uso comune: i portali di concorsi pubblici e visti spesso impongono questo limite per firma o foto, e alcuni forum più datati limitano gli avatar alla stessa cifra.",
      "50kb": "50 KB è il tetto più comune per il caricamento di foto per passaporto e documenti d'identità sui portali delle pubbliche amministrazioni, e per documenti scansionati allegati a moduli online.",
      "100kb": "100 KB è il limite di caricamento più diffuso su moduli di candidatura per il lavoro, portali universitari e sistemi di gestione contenuti più datati.",
      "200kb": "200 KB è un limite tipico per le foto prodotto e-commerce e le inserzioni sui marketplace, dove la piattaforma vuole un'immagine utilizzabile che si carichi comunque in fretta da mobile.",
      "500kb": "500 KB è un budget confortevole per le prestazioni web: abbastanza grande per una foto hero a piena larghezza, abbastanza piccolo da non appesantire il tempo di caricamento della pagina.",
      "1mb": "1 MB è il limite di allegati e caricamento su molti sistemi di posta elettronica, strumenti di ticketing e moduli di richiesta assicurativa o sinistri.",
    },
    passportPhotoSizePixels: {
      h1: "Porta una foto tessera alla dimensione giusta in pixel",
      subtitle: "413 × 531 pixel corrispondono a 35 × 45 mm a 300 dpi — la dimensione ICAO richiesta dalla maggior parte dei portali per passaporti e visti. È già impostata qui sotto.",
      faq: [
        {
          q: "Qual è la dimensione in pixel di una foto tessera?",
          a: "Lo standard ICAO usato dalla maggior parte dei paesi è 35 × 45 mm. Stampato a 300 dpi corrisponde a 413 × 531 pixel, che è ciò che questa pagina imposta. Il passaporto statunitense è l'eccezione: è 2 × 2 pollici, ovvero 600 × 600 pixel a 300 dpi.",
        },
        {
          q: "Come ottengo esattamente 413 × 531 senza deformare il viso?",
          a: "Prima ritaglia, poi ridimensiona. Apri l'editor di ritaglio, imposta un rapporto personalizzato di 35 : 45, posiziona la testa al suo interno e applica — il ridimensionamento arriverà così esattamente alla dimensione in pixel senza distorsioni. Lasciare solo il blocco proporzioni attivo senza ritagliare adatta invece la foto dentro 413 × 531, mantenendo le proporzioni ma senza riempire il riquadro.",
        },
        {
          q: "Il portale ha anche un limite di peso del file — posso fare entrambe le cose?",
          a: "Sì. Attiva anche 'Peso massimo file' e scegli il tuo limite; dimensioni e peso massimo vengono applicati insieme in un unico passaggio, così non devi comprimere e ridimensionare in due strumenti diversi.",
        },
        {
          q: "La mia foto è un file HEIC di un iPhone — funzionerà?",
          a: "Sì. Le foto HEIC e HEIF vengono convertite automaticamente non appena le trascini nella pagina, prima di qualsiasi altra elaborazione, e puoi esportare in JPG, PNG o WebP.",
        },
      ],
    },
    resizeImageTo1080x1080: {
      h1: "Ridimensiona un'immagine a 1080 × 1080",
      subtitle: "La dimensione quadrata 1:1 richiesta da Instagram, LinkedIn e dalla maggior parte delle piattaforme pubblicitarie. Già impostata — trascina un'immagine e scaricala.",
      faq: [
        {
          q: "Perché proprio 1080 × 1080?",
          a: "È la risoluzione nativa di un post social quadrato: Instagram, Facebook e LinkedIn mostrano tutti le immagini 1:1 a 1080 px sul lato lungo, quindi caricare esattamente quella dimensione evita sia la sfocatura da ingrandimento sia una ricompressione inutile dal loro lato.",
        },
        {
          q: "La mia foto non è quadrata — cosa succede?",
          a: "Con le proporzioni bloccate, l'immagine viene adattata dentro 1080 × 1080 senza deformarsi, mantenendo le proporzioni. Per riempire davvero il quadrato, apri prima l'editor di ritaglio, scegli il rapporto Quadrato e posiziona il soggetto — così il ridimensionamento arriverà esattamente a 1080 × 1080.",
        },
        {
          q: "Posso anche mantenere il file sotto un certo peso?",
          a: "Sì — attiva 'Peso massimo file' ed entrambi i requisiti vengono applicati insieme in un unico passaggio, che è di solito ciò che chiedono le specifiche di una piattaforma pubblicitaria.",
        },
        {
          q: "Ingrandire renderà più nitida una foto piccola?",
          a: "No. Ingrandire inventa pixel che non esistono, quindi una foto da 400 px portata a 1080 risulterà sfocata. Parti sempre dall'originale più grande che hai; è nel rimpicciolimento che la qualità si mantiene.",
        },
      ],
    },
    convertHeicToJpg: {
      h1: "Converti una foto HEIC in JPG",
      subtitle: "Trascina una foto di iPhone — l'HEIC viene decodificato automaticamente, poi salvato di nuovo come JPG apribile da chiunque.",
      faq: [
        {
          q: "Perché la mia foto iPhone non si apre su questo sito o app?",
          a: "Gli iPhone salvano le foto in HEIC (o HEIF) per impostazione predefinita, un formato che gran parte dei software non Apple non riesce ancora a leggere. Convertire in JPG una volta risolve il problema ovunque, perché il JPG si apre letteralmente su tutto.",
        },
        {
          q: "Devo installare qualcosa per convertire un HEIC?",
          a: "No. Le versioni recenti di Safari decodificano l'HEIC in modo nativo, e ogni altro browser usa un piccolo decodificatore integrato che si scarica solo quando trascini davvero un file HEIC — in entrambi i casi, non si installa nulla sul tuo dispositivo.",
        },
        {
          q: "Posso anche ridimensionare o comprimere la foto allo stesso tempo?",
          a: "Sì — attiva dimensioni o peso massimo file insieme al formato, e tutti e tre vengono applicati insieme in un unico passaggio, che è il caso tipico delle foto HEIC appena scattate con il telefono: tendono anche a essere pesanti.",
        },
        {
          q: "La mia foto viene caricata su un server per convertirla?",
          a: "No. Sia la decodifica che la nuova codifica avvengono localmente nel tuo browser. La foto non lascia mai il tuo dispositivo.",
        },
      ],
    },
    convertPngToJpg: {
      h1: "Converti un PNG in JPG",
      subtitle: "Trascina un PNG e ottieni un JPG — di solito una frazione del peso, pronto per i moduli di caricamento che non accettano PNG.",
      faq: [
        {
          q: "Perché convertire un PNG in JPG?",
          a: "Il PNG è senza perdita di qualità, il che rende screenshot e grafiche nitide ma anche pesanti. Il JPG comprime i contenuti fotografici in modo molto più efficiente, ed è il formato che la maggior parte dei moduli con un limite di peso si aspetta davvero.",
        },
        {
          q: "Il mio PNG ha uno sfondo trasparente — cosa gli succede?",
          a: "Il JPG non ha un canale di trasparenza, quindi le aree trasparenti vengono riempite di bianco prima del salvataggio. Se ti serve mantenere la trasparenza, converti in WebP invece che in JPG.",
        },
        {
          q: "Posso raggiungere anche un peso file preciso?",
          a: "Sì — attiva anche 'Peso massimo file' e sia il formato che l'obiettivo di peso vengono applicati insieme in un unico passaggio.",
        },
        {
          q: "Perderò qualità?",
          a: "Un po' — il JPG è un formato lossy. Alla qualità predefinita la differenza è raramente visibile; se vuoi controllarla, attiva la qualità manuale e regola il cursore.",
        },
      ],
    },
    convertWebpToJpg: {
      h1: "Converti un'immagine WebP in JPG",
      subtitle: "Trascina un file WebP e ottieni un JPG apribile ovunque, anche in strumenti che non supportano ancora il WebP.",
      faq: [
        {
          q: "Perché dovrei convertire un WebP in JPG?",
          a: "La maggior parte dei browser moderni mostra il WebP senza problemi, ma molti software più datati, alcuni editor di documenti e alcuni moduli di caricamento accettano ancora solo JPG o PNG. Convertire una volta risolve il problema ovunque ti serva usare il file dopo.",
        },
        {
          q: "Convertire in JPG cambia la qualità dell'immagine?",
          a: "Anche il JPG è un formato lossy, quindi c'è una nuova codifica, ma alla qualità predefinita la differenza rispetto a un tipico WebP è minima. Attiva la qualità manuale se vuoi controllare tu il compromesso.",
        },
        {
          q: "Posso ridimensionare mentre converto?",
          a: "Sì — attiva dimensioni o una scala percentuale insieme al cambio di formato, ed entrambi vengono applicati nello stesso passaggio.",
        },
        {
          q: "È diverso da uno screenshot dell'immagine?",
          a: "Sì — uno screenshot ricattura lo schermo alla risoluzione del tuo display e aggiunge compressione. Questo strumento ricodifica direttamente i pixel originali, così mantieni la vera risoluzione e qualità dell'immagine sorgente.",
        },
      ],
    },
    convertJpgToWebp: {
      h1: "Converti un'immagine JPG in WebP",
      subtitle: "Trascina un JPG e ottieni un WebP più leggero — di solito il 25-35% più leggero alla stessa qualità visiva, ideale per un sito più veloce.",
      faq: [
        {
          q: "Perché convertire JPG in WebP?",
          a: "Il WebP produce tipicamente un file molto più leggero del JPG alla stessa qualità visiva, per questo è diventato il consiglio predefinito nelle analisi delle prestazioni web (incluso PageSpeed Insights di Google).",
        },
        {
          q: "Il WebP si vedrà ovunque?",
          a: "Ogni browser di uso comune oggi supporta il WebP. Il motivo principale per tenere un JPG è la compatibilità con software più datati al di fuori del browser — ad esempio alcuni editor di immagini desktop e strumenti di design.",
        },
        {
          q: "Posso impostare un peso massimo per l'output WebP?",
          a: "Sì — attiva 'Peso massimo file' e viene applicato insieme al cambio di formato in un unico passaggio.",
        },
        {
          q: "Il WebP supporta la trasparenza come il PNG?",
          a: "Sì, a differenza del JPG. Se il tuo file sorgente ha trasparenza e converti da PNG invece che da JPG, il WebP la mantiene.",
        },
      ],
    },
  },
};
