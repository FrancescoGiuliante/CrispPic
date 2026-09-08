import type { Dictionary } from "./en";

const faqItem = (q: string, a: string) => ({ q, a });

export const es: Dictionary = {
  nav: { compress: "Comprimir", resize: "Redimensionar", crop: "Recortar", convert: "Convertir", faq: "FAQ" },
  footer: {
    tools: "Herramientas",
    company: "Empresa",
    legal: "Legal",
    compress: "Comprimir a un peso",
    resize: "Redimensionar",
    crop: "Recortar",
    convert: "Convertir formato",
    about: "Acerca de",
    contact: "Contacto",
    faq: "FAQ",
    privacy: "Privacidad",
    terms: "Términos",
    tagline: "Adapta tu imagen al requisito que necesitas.",
    privacyPill: "No se sube nada",
    copyright: "Todo el procesamiento ocurre en tu navegador.",
  },
  common: {
    faqHeading: "Preguntas frecuentes",
    relatedHeading: "Herramientas relacionadas",
    faqPageTitle: "Preguntas frecuentes",
    faqGeneral: "General",
    whyHeading: "Por qué CrispPic",
    trustPrivate: "Tus archivos nunca salen de tu dispositivo — no hay subida ni servidor.",
    trustFast: "Se ejecuta fuera del hilo principal: hasta las fotos grandes van instantáneas.",
    trustFree: "Sin cuenta, sin marca de agua y sin límite de imágenes.",
    howHeading: "Cómo funciona",
    step1: "Arrastra, pega o elige una imagen.",
    step2: "Activa los requisitos que debe cumplir.",
    step3: "Descarga. Nunca se subió nada.",
    shortcutTip: "Pulsa Ctrl/⌘ + S para guardar el resultado.",
    privacyTitle: "Privado por diseño",
    privacyBody: "Cada transformación ocurre en tu navegador. No podríamos ver tus imágenes ni queriendo.",
    skipToContent: "Ir al contenido",
    home: "Inicio",
    primaryNav: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  theme: { toLight: "Cambiar al tema claro", toDark: "Cambiar al tema oscuro" },
  home: {
    badge: "100% privado — tus archivos nunca salen de tu dispositivo",
    h1: "Adapta tu imagen al requisito que necesitas",
    subtitle:
      "Comprime a un peso exacto, redimensiona, recorta o convierte el formato — elige lo que necesitas, nosotros hacemos el resto.",
    faq: [
      faqItem(
        "¿Mi imagen se sube a algún sitio?",
        "No. Cada transformación — comprimir, redimensionar, recortar, convertir — ocurre por completo en tu navegador mediante la API Canvas. El archivo nunca sale de tu dispositivo."
      ),
      faqItem(
        "¿Qué formatos de imagen son compatibles?",
        "Puedes subir JPG, PNG, WebP, GIF, BMP, AVIF o HEIC (el formato predeterminado de las fotos de iPhone). La salida puede ser JPG, PNG o WebP."
      ),
      faqItem(
        "¿Puedo combinar peso, dimensiones y formato a la vez?",
        "Sí — esa es la idea. Activa cualquier combinación de peso máximo, ancho/alto, recorte, rotación y formato de salida, y CrispPic los aplica todos en un solo paso."
      ),
      faqItem("¿Es realmente gratis?", "Sí, sin cuenta, sin marca de agua y sin límite de imágenes que puedas procesar."),
    ],
  },
  toolPages: {
    compress: {
      badge: "100% privado — tus archivos nunca salen de tu dispositivo",
      h1: "Comprime tu imagen a un peso exacto",
      subtitle: "Elige un peso máximo y encontraremos la mayor calidad que aún encaje dentro de ese límite.",
      faq: [
        faqItem(
          "¿Cómo logra CrispPic un peso exacto?",
          "Busca mediante búsqueda binaria la calidad de codificación más alta que aún entra en tu objetivo. Si la imagen no cabe a ninguna calidad, se reduce de tamaño y la búsqueda se repite."
        ),
        faqItem(
          "¿Por qué mi resultado no es exactamente 100KB?",
          "El resultado siempre queda igual o por debajo de tu objetivo, pero acertar el número exacto no es posible — preferimos quedarnos por debajo antes que pasarnos."
        ),
        faqItem(
          "¿Qué sitios piden un peso máximo?",
          "Ejemplos habituales: trámites de visado o gobierno, formularios de empleo, fichas de producto en e-commerce, y foros o CMS con límites de subida."
        ),
      ],
    },
    resize: {
      badge: "100% privado — tus archivos nunca salen de tu dispositivo",
      h1: "Redimensiona tu imagen a las dimensiones exactas",
      subtitle:
        "Define ancho y alto en píxeles o escala en porcentaje — bloquea la proporción para evitar deformaciones.",
      faq: [
        faqItem(
          "¿Qué pasa si solo pongo el ancho?",
          "La altura se calcula automáticamente para mantener la proporción original — la imagen no se estirará ni se deformará."
        ),
        faqItem(
          "¿Puedo redimensionar a un ancho y alto exactos sin distorsión?",
          "Sí — con la proporción bloqueada, CrispPic ajusta tu imagen dentro del recuadro sin estirarla. Desbloquéala si de verdad quieres un tamaño exacto, aunque no sea proporcional."
        ),
        faqItem(
          "¿Puedo redimensionar y limitar el peso al mismo tiempo?",
          "Sí — activa también 'Peso máximo' y ambos requisitos se aplican juntos en un solo paso."
        ),
      ],
    },
    convert: {
      badge: "100% privado — tus archivos nunca salen de tu dispositivo",
      h1: "Convierte tu imagen a otro formato",
      subtitle: "JPG, PNG, WebP — y las fotos HEIC de iPhone se convierten automáticamente al subirlas.",
      faq: [
        faqItem(
          "¿A qué formatos puedo convertir?",
          "Salida como JPG, PNG o WebP. Como entrada aceptamos JPG, PNG, WebP, GIF, BMP, AVIF y HEIC/HEIF."
        ),
        faqItem(
          "¿Al convertir un PNG transparente a JPG pierdo la transparencia?",
          "Sí — el JPG no tiene canal de transparencia, así que las áreas transparentes se rellenan de blanco. CrispPic te avisa antes; elige PNG o WebP para conservarla."
        ),
        faqItem(
          "Mis fotos de iPhone son HEIC — ¿puedo convertirlas?",
          "Sí. Sube un archivo .heic y CrispPic lo convierte automáticamente antes de aplicar el formato que elijas."
        ),
      ],
    },
    crop: {
      badge: "100% privado — tus archivos nunca salen de tu dispositivo",
      h1: "Recorta tu imagen a la proporción que necesitas",
      subtitle: "Sube una imagen para abrir el editor de recorte — elige una proporción, arrastra para posicionar y aplica.",
      faq: [
        faqItem(
          "¿Qué proporciones de recorte hay disponibles?",
          "Libre, cuadrado (1:1), horizontal (4:3), vertical (3:4), panorámico (16:9), historia (9:16), o una proporción personalizada que escribas."
        ),
        faqItem(
          "¿Puedo ajustar el recorte después de aplicarlo?",
          "Sí — haz clic en el icono de lápiz junto a 'Recorte' para reabrir el editor, o en la × para quitar el recorte."
        ),
        faqItem(
          "¿Puedo recortar y comprimir a un peso concreto a la vez?",
          "Sí — activa 'Peso máximo' tras recortar y ambos se aplican juntos."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Arrastra una imagen, o haz clic para subirla",
    dropzoneDrag: "Suéltala donde quieras",
    dropzoneHint: "JPG, PNG, WebP, AVIF o HEIC — hasta 40 MB",
    dropzonePaste: "También puedes pegar una captura",
    panelHeading: "Requisitos de salida",
    maxFileSize: "Peso máximo",
    customSizeLabel: "Peso personalizado en kilobytes",
    dimensions: "Dimensiones",
    resizeUnit: "Unidad de redimensión",
    unitPixels: "Píxeles",
    unitPercent: "Porcentaje",
    width: "Ancho en píxeles",
    height: "Alto en píxeles",
    lockAspect: "Bloquear proporción",
    unlockAspect: "Desbloquear proporción",
    presetPlaceholder: "Tamaños habituales…",
    scale: "Escala",
    sourceSize: "Origen: {size} px",
    crop: "Recorte",
    transform: "Girar y voltear",
    rotateLeft: "Girar a la izquierda",
    rotateRight: "Girar a la derecha",
    flipHorizontal: "Voltear horizontalmente",
    flipVertical: "Voltear verticalmente",
    resetTransform: "Restablecer",
    outputFormat: "Formato de salida",
    quality: "Calidad",
    qualityValue: "Calidad {value}%",
    alphaWarning: "El JPG no tiene transparencia — las áreas transparentes se volverán blancas.",
    openCropEditor: "Abrir editor de recorte",
    editCrop: "Editar recorte",
    removeCrop: "Quitar recorte",
    reading: "Leyendo imagen…",
    processing: "Procesando…",
    passthrough: "No has pedido ningún cambio — recibirás tu archivo original.",
    download: "Descargar",
    downloadStarted: "Descarga iniciada.",
    newImage: "Nueva imagen",
    leaveConfirm: "Tu imagen sólo existe en esta pestaña. Si sales ahora, se perderá. ¿Continuar?",
    targetMissed: "No pudimos bajar de {size} sin perder demasiada calidad — este es el resultado más pequeño posible.",
    before: "Antes",
    after: "Después",
    compareLabel: "Comparar antes y después",
    compareValue: "{value}% antes, el resto después",
    custom: "Personal.",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Post cuadrado",
      portrait1350: "Post vertical",
      story1920: "Historia",
      og: "Vista previa social",
      avatar512: "Avatar",
      thumb256: "Miniatura",
      passport: "Foto de carnet",
    },
    formats: { auto: "Mantener", jpeg: "JPG", png: "PNG", webp: "WebP" },
  },
  errors: {
    fileTooLarge: "Ese archivo pesa {size} MB. Usa una imagen de menos de {max} MB.",
    unsupportedType: "Usa una imagen JPG, PNG, WebP, AVIF, GIF, BMP o HEIC.",
    decodeFailed: "No se pudo abrir este archivo como imagen — puede estar dañado.",
    heicFailed: "Parece una foto HEIC y no se pudo convertir. Prueba a exportarla antes como JPG.",
    encodeFailed: "Tu navegador no pudo guardar la imagen en este formato. Prueba con otro formato de salida.",
    formatUnsupported: "Tu navegador no puede escribir este formato. Prueba con JPG o PNG.",
    canvasUnavailable: "La edición de imágenes no está disponible en este navegador.",
    outOfMemory: "Esta imagen es demasiado grande para tu dispositivo. Prueba con una más pequeña.",
    unknown: "Algo salió mal al procesar esta imagen.",
  },
  cropModal: {
    title: "Recortar imagen",
    cancel: "Cancelar",
    apply: "Aplicar recorte",
    zoom: "Zoom",
    customWidth: "Ancho de proporción personalizada",
    customHeight: "Alto de proporción personalizada",
    ratios: {
      Free: "Libre",
      Square: "Cuadrado",
      Landscape: "Horizontal",
      Portrait: "Vertical",
      Widescreen: "Panorámico",
      Story: "Historia",
      Custom: "Personal.",
    },
  },
  language: { label: "Idioma" },
  consent: {
    title: "Cookies en este sitio",
    body: "Tus imágenes siempre se procesan en tu dispositivo — eso no cambia nunca. Además nos gustaría usar cookies de analítica y publicidad de Google, para medir el uso y mantener las herramientas gratis. Si las rechazas, todo sigue funcionando.",
    accept: "Aceptar",
    decline: "Rechazar",
    manage: "Preferencias de cookies",
    learnMore: "Política de privacidad",
    close: "Cerrar",
  },
  errorPage: {
    title: "Algo ha salido mal.",
    body: "Un error inesperado ha interrumpido esta página. Tus imágenes nunca se subieron, así que no se ha perdido nada: volver a intentarlo suele bastar.",
    retry: "Reintentar",
    home: "Volver al inicio",
  },
  notFound: {
    code: "404",
    title: "Esta página no existe.",
    body: "La herramienta o página que buscas puede haberse movido, o el enlace puede estar roto.",
    cta: "Volver al inicio",
  },
  legal: {
    updatedLabel: "Última actualización: {date}",
    about: {
      title: "Sobre {siteName}",
      p1: "{siteName} existe para resolver un problema concreto: tienes una imagen, y algo — un formulario, un sitio web, una aplicación — exige que cumpla una especificación precisa. Un peso máximo. Unas dimensiones exactas. Un formato concreto.",
      p2: "En lugar de hacer que averigües qué ajuste, en qué programa, te lleva hasta ahí, {siteName} te pide directamente el resultado que necesitas y se encarga del resto: redimensiona, comprime o convierte según haga falta.",
      howHeading: "Cómo funciona",
      howBody: "Todo el procesamiento de imágenes ocurre directamente en tu navegador usando tecnologías web estándar. Tus archivos nunca se suben a un servidor — sencillamente no tenemos la infraestructura para recibirlos, por diseño.",
      whyHeading: "Por qué es gratis",
      whyBody: "{siteName} se sostiene con publicidad mínima y no intrusiva. No hay cuentas, suscripciones ni funciones de pago en ninguna herramienta.",
    },
    contact: {
      title: "Contacto",
      intro: "Preguntas, informes de errores, peticiones de funciones, o cualquier cosa sobre privacidad y cómo tratamos tus datos — nos gustaría escucharlas.",
      emailBody: "Escríbenos a {{LINK}}. Leemos todo y normalmente respondemos en pocos días laborables.",
      reportHeading: "Informar de un problema con una herramienta",
      reportIntro: "Como todo ocurre dentro de tu navegador, no podemos ver qué falló en tu equipo — y nunca recibimos el archivo en el que estabas trabajando. Para poder reproducir el error, incluye por favor:",
      reportItem1: "en qué página estabas, y qué intentabas conseguir;",
      reportItem2: "tu navegador y sistema operativo, con sus versiones;",
      reportItem3: "el formato y el peso aproximado de la imagen original (por favor no adjuntes la imagen a menos que te la pidamos).",
      privacyHeading: "Privacidad y solicitudes sobre datos",
      privacyBody: "{siteName} no tiene cuentas ni almacena datos personales, así que normalmente no hay nada que exportar o eliminar. Si tienes alguna duda sobre la {{LINK}}, o sobre las cookies de terceros que se activan cuando las aceptas, escribe a la misma dirección.",
      privacyLinkText: "política de privacidad",
    },
    privacy: {
      title: "Política de privacidad",
      imagesHeading: "Tus imágenes",
      imagesBody: "Las herramientas de {siteName} procesan las imágenes directamente en tu navegador. Tus archivos de imagen no se suben, transmiten ni almacenan en ningún servidor operado por nosotros. Nunca vemos, accedemos ni conservamos el contenido de ningún archivo que proceses.",
      cookiesHeading: "Cookies y tu consentimiento",
      cookiesBody1: "{siteName} no instala cookies propias. Las únicas cookies que este sitio puede instalar son las de los servicios de terceros descritos abajo, y se cargan solo después de que las aceptes en el banner de cookies. Si las rechazas, o aún no has respondido, ninguno de esos scripts se solicita ni se crea ninguna cookie de terceros — todas las herramientas del sitio funcionan exactamente igual en ambos casos.",
      cookiesBody2: "Tu respuesta se guarda en el almacenamiento local de tu navegador (no es una cookie, y nunca se envía a ningún sitio) para que no se te pregunte en cada visita. Puedes cambiarla en cualquier momento con el enlace Preferencias de cookies en el pie de cualquier página; retirar el consentimiento recarga la página para que los scripts dejen de ejecutarse.",
      analyticsHeading: "Analítica",
      analyticsBody: "Con tu consentimiento usamos Google Analytics para entender el uso agregado — por ejemplo, qué herramientas se usan, qué páginas se visitan, y datos generales de ubicación y dispositivo. Estos datos están anonimizados/agregados cuando es posible y nunca se vinculan a las imágenes que procesas: los eventos que registramos describen solo lo que se le pidió a la herramienta (por ejemplo, \"se comprimió un archivo\"), nunca un nombre de archivo ni nada derivado del contenido de la imagen.",
      adsHeading: "Publicidad",
      adsBody: "Con tu consentimiento, {siteName} puede mostrar publicidad servida por redes de terceros (como Google AdSense) para mantener gratuitas las herramientas. Estas redes pueden usar cookies o tecnologías similares para mostrar anuncios relevantes, y Google puede tratar estos datos como responsable independiente — consulta {{LINK1}}. También puedes controlar la personalización de anuncios desde tu navegador o mediante {{LINK2}}. Sin tu consentimiento, el script publicitario nunca se carga y los espacios reservados muestran contenido nuestro en su lugar.",
      adsLink1Text: "cómo usa Google la información de los sitios que utilizan sus servicios",
      adsLink2Text: "Configuración de anuncios de Google",
      accountsHeading: "Cuentas y datos personales",
      accountsBody: "{siteName} no requiere una cuenta, inicio de sesión ni datos personales para usar ninguna herramienta.",
      contactHeading: "Contacto",
      contactBody: "Las preguntas sobre esta política pueden enviarse a {{LINK}}.",
    },
    terms: {
      title: "Términos de servicio",
      useHeading: "Uso del servicio",
      useBody: "{siteName} se ofrece de forma gratuita, tal cual, sin garantías de ningún tipo. Eres responsable de asegurarte de tener derecho a procesar cualquier imagen que abras con las herramientas de este sitio. No se sube nada: los archivos permanecen en tu propio dispositivo en todo momento.",
      noGuaranteesHeading: "Sin garantías",
      noGuaranteesBody: "Aunque {siteName} busca producir resultados precisos y correctos, no garantizamos que el resultado esté libre de errores ni sea apto para cualquier fin específico. Verifica siempre el resultado antes de confiar en él para un envío crítico (por ejemplo, un documento legal o una solicitud oficial).",
      adsHeading: "Publicidad y contenido de terceros",
      adsBody: "{siteName} se financia con publicidad, que es servida por redes de terceros solo después de que hayas aceptado las cookies publicitarias. No elegimos, respaldamos ni controlamos los anuncios concretos que aparecen, y no somos responsables del contenido de ningún sitio al que enlacen. Cómo usan los datos esas redes, y cómo desactivarlas, se describe en la {{LINK}}.",
      privacyLinkText: "política de privacidad",
      acceptableHeading: "Uso aceptable",
      acceptableBody: "No puedes usar {siteName} para procesar contenido ilegal, ni intentar interrumpir, sobrecargar o realizar ingeniería inversa del servicio.",
      changesHeading: "Cambios",
      changesBody: "Estos términos pueden actualizarse de vez en cuando. El uso continuado del sitio tras los cambios constituye la aceptación de los términos actualizados.",
      contactHeading: "Contacto",
      contactBody: "Las preguntas pueden enviarse a {{LINK}}.",
    },
  },
  landings: {
    size: {
      h1: "Comprime una imagen a {size}",
      subtitle: "Suelta un JPG, PNG o WebP y recupéralo con {size} o menos, con la mejor calidad posible. No se sube nada.",
      q1: "¿Cómo comprimo una imagen a {size}?",
      a1: "Suelta tu imagen en esta página. El objetivo de {size} ya está activado, así que el resultado aparece al instante — luego solo descárgalo. Si además necesitas unas dimensiones concretas o un formato distinto, actívalos y se aplican en el mismo paso.",
      q2: "¿El resultado será exactamente {size}?",
      a2: "Se garantiza que será igual o inferior a {size}, nunca superior. Alcanzar la cifra exacta no es posible con un codificador con pérdida, así que siempre nos quedamos por debajo del límite — que es justo lo que comprueba un formulario de carga.",
      q3: "¿Quién necesita {size}?",
      q4: "¿Qué pasa si mi foto no puede llegar a {size}?",
      a4: "Primero se reduce la calidad; si incluso la calidad mínima útil sigue siendo demasiado pesada, la imagen se reduce de tamaño y la búsqueda se repite. Si el objetivo es realmente inalcanzable, obtienes el resultado más pequeño posible, claramente indicado, en lugar de un fallo silencioso.",
      q5: "¿Se sube mi imagen a un servidor?",
      a5: "No. Todo el proceso ocurre en tu navegador mediante la API Canvas, fuera del hilo principal en un Web Worker. El archivo nunca sale de tu dispositivo, así que no hay nada que podamos ver, guardar ni borrar.",
    },
    whoAsks: {
      "20kb": "20 KB es uno de los límites más estrictos de uso habitual: los portales de exámenes oficiales y visados suelen imponer este límite para la firma o la foto, y algunos foros antiguos limitan los avatares a la misma cifra.",
      "50kb": "50 KB es el tope habitual para subir fotos de pasaporte y DNI en los portales de trámites administrativos, y para documentos escaneados adjuntos a formularios online.",
      "100kb": "100 KB es el límite de subida más común en formularios de empleo, portales universitarios y sistemas de gestión de contenidos más antiguos.",
      "200kb": "200 KB es un límite típico para fotos de producto de comercio electrónico y anuncios en marketplaces, donde la plataforma quiere una imagen aprovechable que cargue rápido en móvil.",
      "500kb": "500 KB es un presupuesto cómodo para el rendimiento web: suficientemente grande para una foto de cabecera a ancho completo, suficientemente pequeño como para no lastrar el tiempo de carga de la página.",
      "1mb": "1 MB es el límite de adjuntos y subida en muchos sistemas de correo, herramientas de tickets y formularios de seguros o reclamaciones.",
    },
    passportPhotoSizePixels: {
      h1: "Ajusta una foto de pasaporte al tamaño correcto en píxeles",
      subtitle: "413 × 531 píxeles equivale a 35 × 45 mm a 300 ppp — el tamaño ICAO que exigen la mayoría de los portales de pasaportes y visados. Ya está configurado abajo.",
      faq: [
        {
          q: "¿Cuál es el tamaño de la foto de pasaporte en píxeles?",
          a: "El estándar ICAO usado por la mayoría de los países es 35 × 45 mm. Impreso a 300 ppp equivale a 413 × 531 píxeles, que es lo que configura esta página. El pasaporte estadounidense es la excepción: mide 2 × 2 pulgadas, es decir, 600 × 600 píxeles a 300 ppp.",
        },
        {
          q: "¿Cómo consigo exactamente 413 × 531 sin deformar la cara?",
          a: "Recorta primero, luego redimensiona. Abre el editor de recorte, fija una proporción personalizada de 35 : 45, coloca la cabeza dentro y aplica — el redimensionado llegará entonces al tamaño exacto en píxeles sin distorsión. Dejar solo el bloqueo de proporción sin recortar ajusta la foto dentro de 413 × 531, lo que conserva las proporciones pero no llena el encuadre.",
        },
        {
          q: "El portal también tiene un límite de peso del archivo — ¿puedo hacer ambas cosas?",
          a: "Sí. Activa también 'Peso máximo del archivo' y elige tu límite; las dimensiones y el límite de peso se aplican juntos en un solo paso, así no tienes que comprimir y redimensionar en dos herramientas distintas.",
        },
        {
          q: "Mi foto es un archivo HEIC de un iPhone — ¿funcionará?",
          a: "Sí. Las fotos HEIC y HEIF se convierten automáticamente al soltarlas, antes de aplicar cualquier otra cosa, y puedes exportar a JPG, PNG o WebP.",
        },
      ],
    },
    resizeImageTo1080x1080: {
      h1: "Redimensiona una imagen a 1080 × 1080",
      subtitle: "El tamaño cuadrado 1:1 que piden Instagram, LinkedIn y la mayoría de las plataformas publicitarias. Ya configurado — suelta una imagen y descárgala.",
      faq: [
        {
          q: "¿Por qué 1080 × 1080?",
          a: "Es la resolución nativa de una publicación social cuadrada: Instagram, Facebook y LinkedIn muestran las imágenes 1:1 a 1080 px en el lado más largo, así que subir exactamente eso evita tanto el desenfoque por ampliación como una recodificación innecesaria en su lado.",
        },
        {
          q: "Mi foto no es cuadrada — ¿qué ocurre?",
          a: "Con la proporción bloqueada, la imagen se ajusta dentro de 1080 × 1080 sin deformarse, conservando las proporciones. Para llenar realmente el cuadrado, abre antes el editor de recorte, elige la proporción Cuadrado y coloca el sujeto — así el redimensionado llegará exactamente a 1080 × 1080.",
        },
        {
          q: "¿Puedo mantener también el archivo bajo un límite de peso?",
          a: "Sí — activa 'Peso máximo del archivo' y ambos requisitos se aplican juntos en un solo paso, que es normalmente lo que pide la ficha técnica de una plataforma publicitaria.",
        },
        {
          q: "¿Ampliar hará que una imagen pequeña se vea más nítida?",
          a: "No. Ampliar inventa píxeles que no existen, así que una foto de 400 px escalada a 1080 se verá borrosa. Parte siempre del original más grande que tengas; es al reducir cuando se conserva la calidad.",
        },
      ],
    },
    convertHeicToJpg: {
      h1: "Convierte una foto HEIC a JPG",
      subtitle: "Suelta una foto de iPhone — el HEIC se decodifica automáticamente y se guarda de nuevo como JPG, que cualquiera puede abrir.",
      faq: [
        {
          q: "¿Por qué no se abre mi foto de iPhone en esta web o app?",
          a: "Los iPhone guardan las fotos en HEIC (o HEIF) por defecto, un formato que la mayoría del software no Apple todavía no puede leer. Convertir a JPG una vez lo soluciona en todas partes, porque el JPG se abre literalmente en cualquier sitio.",
        },
        {
          q: "¿Necesito instalar algo para convertir un HEIC?",
          a: "No. Las versiones recientes de Safari pueden decodificar HEIC de forma nativa, y el resto de navegadores recurren a un pequeño decodificador integrado que solo se descarga cuando de verdad sueltas un archivo HEIC — en ambos casos, no se instala nada en tu dispositivo.",
        },
        {
          q: "¿Puedo redimensionar o comprimir la foto al mismo tiempo?",
          a: "Sí — activa dimensiones o un peso máximo de archivo junto con el formato, y los tres se aplican juntos en un solo paso, que es el caso habitual de las fotos HEIC recién salidas del móvil: también suelen ser pesadas.",
        },
        {
          q: "¿Se sube mi foto a un servidor para convertirla?",
          a: "No. Tanto la decodificación como la nueva codificación ocurren de forma local en tu navegador. La foto nunca sale de tu dispositivo.",
        },
      ],
    },
    convertPngToJpg: {
      h1: "Convierte un PNG a JPG",
      subtitle: "Suelta un PNG y recupera un JPG — normalmente una fracción del peso, listo para formularios de carga que no aceptan PNG.",
      faq: [
        {
          q: "¿Por qué convertir un PNG a JPG?",
          a: "El PNG no tiene pérdida, lo que hace que capturas de pantalla y gráficos se vean nítidos pero también pesados. El JPG comprime el contenido fotográfico de forma mucho más eficiente, y es el formato que espera la mayoría de los formularios con límite de peso.",
        },
        {
          q: "Mi PNG tiene fondo transparente — ¿qué le pasa?",
          a: "El JPG no tiene canal de transparencia, así que las áreas transparentes se rellenan de blanco antes de guardar. Si necesitas conservar la transparencia, convierte a WebP en lugar de JPG.",
        },
        {
          q: "¿Puedo alcanzar también un peso de archivo exacto?",
          a: "Sí — activa también 'Peso máximo del archivo' y tanto el formato como el objetivo de peso se aplican juntos en un solo paso.",
        },
        {
          q: "¿Perderé calidad?",
          a: "Algo — el JPG es un formato con pérdida. Con la calidad predeterminada la diferencia rara vez se nota; si necesitas controlarla, activa la calidad manual y ajusta el deslizador.",
        },
      ],
    },
    convertWebpToJpg: {
      h1: "Convierte una imagen WebP a JPG",
      subtitle: "Suelta un archivo WebP y recupera un JPG que se abre en cualquier sitio, incluidas herramientas que todavía no soportan WebP.",
      faq: [
        {
          q: "¿Por qué necesitaría convertir WebP a JPG?",
          a: "La mayoría de los navegadores modernos muestran WebP sin problema, pero bastante software antiguo, algunos editores de documentos y algunos formularios de carga todavía solo aceptan JPG o PNG. Convertir una vez lo soluciona en todos los sitios donde necesites usar el archivo después.",
        },
        {
          q: "¿Convertir a JPG cambia la calidad de la imagen?",
          a: "El JPG también es un formato con pérdida, así que hay una recodificación, pero con la calidad predeterminada la diferencia respecto a un WebP típico es mínima. Activa la calidad manual si quieres controlar tú el equilibrio.",
        },
        {
          q: "¿Puedo redimensionar mientras convierto?",
          a: "Sí — activa dimensiones o una escala en porcentaje junto con el cambio de formato, y ambos se aplican en el mismo paso.",
        },
        {
          q: "¿Es esto diferente de hacer una captura de pantalla de la imagen?",
          a: "Sí — una captura de pantalla vuelve a capturar tu pantalla a la resolución de tu monitor y añade compresión encima. Esto recodifica directamente los píxeles originales, así que conservas la resolución y calidad reales de la imagen fuente.",
        },
      ],
    },
    convertJpgToWebp: {
      h1: "Convierte una imagen JPG a WebP",
      subtitle: "Suelta un JPG y recupera un WebP más ligero — normalmente entre un 25 y un 35% más ligero con la misma calidad visual, ideal para una web más rápida.",
      faq: [
        {
          q: "¿Por qué convertir JPG a WebP?",
          a: "El WebP suele producir un archivo notablemente más pequeño que el JPG con la misma calidad visual, por lo que se ha convertido en la recomendación por defecto en las auditorías de rendimiento web (incluido el propio PageSpeed Insights de Google).",
        },
        {
          q: "¿Se verá el WebP en todas partes?",
          a: "Todos los navegadores de uso común hoy en día soportan WebP. El motivo principal para conservar un JPG es la compatibilidad con software antiguo fuera del navegador — por ejemplo, algunos editores de imagen de escritorio y herramientas de diseño.",
        },
        {
          q: "¿Puedo fijar un peso máximo para la salida en WebP?",
          a: "Sí — activa 'Peso máximo del archivo' y se aplica junto con el cambio de formato en un solo paso.",
        },
        {
          q: "¿El WebP soporta transparencia como el PNG?",
          a: "Sí, a diferencia del JPG. Si tu archivo de origen tiene transparencia y conviertes desde PNG en lugar de desde JPG, el WebP la conserva.",
        },
      ],
    },
  },
};
