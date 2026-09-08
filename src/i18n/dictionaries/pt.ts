import type { Dictionary } from "./en";

const faqItem = (q: string, a: string) => ({ q, a });

export const pt: Dictionary = {
  nav: { compress: "Comprimir", resize: "Redimensionar", crop: "Recortar", convert: "Converter", faq: "FAQ" },
  footer: {
    tools: "Ferramentas",
    company: "Empresa",
    legal: "Jurídico",
    compress: "Comprimir para um tamanho",
    resize: "Redimensionar",
    crop: "Recortar",
    convert: "Converter formato",
    about: "Sobre",
    contact: "Contacto",
    faq: "FAQ",
    privacy: "Privacidade",
    terms: "Termos",
    tagline: "Adapte a sua imagem ao requisito exigido.",
    privacyPill: "Nada é enviado",
    copyright: "Todo o processamento acontece no seu navegador.",
  },
  common: {
    faqHeading: "Perguntas frequentes",
    relatedHeading: "Ferramentas relacionadas",
    faqPageTitle: "Perguntas frequentes",
    faqGeneral: "Geral",
    whyHeading: "Porquê o CrispPic",
    trustPrivate: "Os seus ficheiros nunca saem do dispositivo — não há upload nem servidor.",
    trustFast: "Corre fora da thread principal: mesmo fotos grandes ficam instantâneas.",
    trustFree: "Sem conta, sem marca de água, sem limite de imagens.",
    howHeading: "Como funciona",
    step1: "Arraste, cole ou escolha uma imagem.",
    step2: "Ative os requisitos que ela tem de cumprir.",
    step3: "Transfira. Nada foi enviado.",
    shortcutTip: "Prima Ctrl/⌘ + S para guardar o resultado.",
    privacyTitle: "Privado por design",
    privacyBody: "Cada transformação acontece no seu navegador. Não conseguiríamos ver as suas imagens nem que quiséssemos.",
    skipToContent: "Ir para o conteúdo",
    home: "Início",
    primaryNav: "Navegação principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  theme: { toLight: "Mudar para o tema claro", toDark: "Mudar para o tema escuro" },
  home: {
    badge: "100% privado — os seus ficheiros nunca saem do dispositivo",
    h1: "Adapte a sua imagem ao requisito exigido",
    subtitle:
      "Comprima para um tamanho exato, redimensione, recorte ou converta o formato — escolha o que precisa, tratamos do resto.",
    faq: [
      faqItem(
        "A minha imagem é enviada para algum lado?",
        "Não. Cada transformação — comprimir, redimensionar, recortar, converter — acontece inteiramente no seu navegador através da API Canvas. O ficheiro nunca sai do seu dispositivo."
      ),
      faqItem(
        "Que formatos de imagem são suportados?",
        "Pode carregar JPG, PNG, WebP, GIF, BMP, AVIF ou HEIC (o formato predefinido das fotos do iPhone). A saída pode ser JPG, PNG ou WebP."
      ),
      faqItem(
        "Posso combinar tamanho, dimensões e formato de uma só vez?",
        "Sim — é precisamente essa a ideia. Ative qualquer combinação de tamanho máximo, largura/altura, recorte, rotação e formato de saída: o CrispPic aplica tudo numa só passagem."
      ),
      faqItem("É mesmo gratuito?", "Sim, sem conta, sem marca de água e sem limite de imagens que pode processar."),
    ],
  },
  toolPages: {
    compress: {
      badge: "100% privado — os seus ficheiros nunca saem do dispositivo",
      h1: "Comprima a sua imagem para um tamanho exato",
      subtitle: "Escolha um tamanho-alvo e encontramos a maior qualidade que ainda cabe abaixo dele.",
      faq: [
        faqItem(
          "Como é que o CrispPic atinge um tamanho exato?",
          "Faz uma pesquisa binária da qualidade de codificação até encontrar a mais alta que ainda fica abaixo do seu objetivo. Se a imagem não couber com qualidade nenhuma, é reduzida e a pesquisa recomeça."
        ),
        faqItem(
          "Porque é que o resultado não tem exatamente 100KB?",
          "O resultado fica sempre igual ou abaixo do seu objetivo, mas acertar exatamente não é possível — preferimos ficar do lado seguro do que ultrapassar."
        ),
        faqItem(
          "Que sites exigem um tamanho máximo?",
          "Exemplos comuns: portais governamentais e de pedidos de visto, formulários de candidatura, fichas de produto de e-commerce, e fóruns ou CMS com limites de upload."
        ),
      ],
    },
    resize: {
      badge: "100% privado — os seus ficheiros nunca saem do dispositivo",
      h1: "Redimensione a sua imagem para dimensões exatas",
      subtitle:
        "Defina largura e altura em pixels ou escale em percentagem — bloqueie a proporção para evitar distorções.",
      faq: [
        faqItem(
          "O que acontece se eu definir apenas a largura?",
          "A altura é calculada automaticamente para preservar a proporção original — a imagem não fica esticada nem achatada."
        ),
        faqItem(
          "Posso redimensionar para largura e altura exatas sem distorção?",
          "Sim — com a proporção bloqueada, o CrispPic ajusta a imagem dentro da caixa definida sem a esticar. Desbloqueie se quiser mesmo um tamanho exato, ainda que não proporcional."
        ),
        faqItem(
          "Posso redimensionar e definir um tamanho máximo ao mesmo tempo?",
          "Sim — ative também 'Tamanho máximo' e ambos os requisitos são aplicados juntos numa só passagem."
        ),
      ],
    },
    convert: {
      badge: "100% privado — os seus ficheiros nunca saem do dispositivo",
      h1: "Converta a sua imagem para outro formato",
      subtitle: "JPG, PNG, WebP — e as fotos HEIC do iPhone são convertidas automaticamente no carregamento.",
      faq: [
        faqItem(
          "Para que formatos posso converter?",
          "Saída em JPG, PNG ou WebP. Na entrada aceitamos JPG, PNG, WebP, GIF, BMP, AVIF e HEIC/HEIF."
        ),
        faqItem(
          "Converter um PNG transparente para JPG perde a transparência?",
          "Sim — o JPG não tem canal de transparência, por isso as áreas transparentes ficam brancas. O CrispPic avisa antes; escolha PNG ou WebP para a manter."
        ),
        faqItem(
          "As minhas fotos de iPhone são HEIC — posso convertê-las?",
          "Sim. Carregue um ficheiro .heic e o CrispPic converte-o automaticamente antes de aplicar o formato escolhido."
        ),
      ],
    },
    crop: {
      badge: "100% privado — os seus ficheiros nunca saem do dispositivo",
      h1: "Recorte a sua imagem na proporção que precisa",
      subtitle: "Carregue uma imagem para abrir o editor de recorte — escolha uma proporção, arraste para posicionar e aplique.",
      faq: [
        faqItem(
          "Que proporções de recorte estão disponíveis?",
          "Livre, quadrado (1:1), horizontal (4:3), vertical (3:4), panorâmico (16:9), story (9:16), ou uma proporção personalizada à sua escolha."
        ),
        faqItem(
          "Posso ajustar o recorte depois de aplicado?",
          "Sim — clique no ícone do lápis ao lado de 'Recorte' para reabrir o editor, ou no × para remover o recorte."
        ),
        faqItem(
          "Posso recortar e comprimir para um tamanho de uma só vez?",
          "Sim — ative 'Tamanho máximo' depois de recortar e ambos são aplicados juntos."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Arraste uma imagem, ou clique para carregar",
    dropzoneDrag: "Largue em qualquer sítio",
    dropzoneHint: "JPG, PNG, WebP, AVIF ou HEIC — até 40 MB",
    dropzonePaste: "Também pode colar uma captura de ecrã",
    panelHeading: "Requisitos de saída",
    maxFileSize: "Tamanho máximo",
    customSizeLabel: "Tamanho personalizado em kilobytes",
    dimensions: "Dimensões",
    resizeUnit: "Unidade de redimensionamento",
    unitPixels: "Pixels",
    unitPercent: "Percentagem",
    width: "Largura em pixels",
    height: "Altura em pixels",
    lockAspect: "Bloquear proporção",
    unlockAspect: "Desbloquear proporção",
    presetPlaceholder: "Tamanhos comuns…",
    scale: "Escala",
    sourceSize: "Origem: {size} px",
    crop: "Recorte",
    transform: "Rodar e espelhar",
    rotateLeft: "Rodar para a esquerda",
    rotateRight: "Rodar para a direita",
    flipHorizontal: "Espelhar horizontalmente",
    flipVertical: "Espelhar verticalmente",
    resetTransform: "Repor",
    outputFormat: "Formato de saída",
    quality: "Qualidade",
    qualityValue: "Qualidade {value}%",
    alphaWarning: "O JPG não tem transparência — as áreas transparentes ficarão brancas.",
    openCropEditor: "Abrir editor de recorte",
    editCrop: "Editar recorte",
    removeCrop: "Remover recorte",
    reading: "A ler a imagem…",
    processing: "A processar…",
    passthrough: "Não pediu nenhuma alteração — vai receber o ficheiro original.",
    download: "Transferir",
    downloadStarted: "Transferência iniciada.",
    newImage: "Nova imagem",
    leaveConfirm: "A tua imagem só existe neste separador. Se saíres agora, será perdida. Continuar?",
    targetMissed: "Não conseguimos ficar abaixo de {size} sem perder demasiada qualidade — este é o resultado mais pequeno possível.",
    before: "Antes",
    after: "Depois",
    compareLabel: "Comparar antes e depois",
    compareValue: "{value}% antes, o resto depois",
    custom: "Personal.",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Post quadrado",
      portrait1350: "Post vertical",
      story1920: "Story",
      og: "Pré-visualização social",
      avatar512: "Avatar",
      thumb256: "Miniatura",
      passport: "Foto tipo passe",
    },
    formats: { auto: "Manter", jpeg: "JPG", png: "PNG", webp: "WebP" },
  },
  errors: {
    fileTooLarge: "Esse ficheiro tem {size} MB. Use uma imagem com menos de {max} MB.",
    unsupportedType: "Use uma imagem JPG, PNG, WebP, AVIF, GIF, BMP ou HEIC.",
    decodeFailed: "Não foi possível abrir este ficheiro como imagem — pode estar corrompido.",
    heicFailed: "Parece uma foto HEIC e não foi possível convertê-la. Tente exportá-la primeiro como JPG.",
    encodeFailed: "O seu navegador não conseguiu guardar a imagem neste formato. Experimente outro formato de saída.",
    formatUnsupported: "O seu navegador não consegue escrever este formato. Experimente JPG ou PNG.",
    canvasUnavailable: "A edição de imagens não está disponível neste navegador.",
    outOfMemory: "Esta imagem é demasiado grande para o seu dispositivo processar. Experimente uma mais pequena.",
    unknown: "Algo correu mal ao processar esta imagem.",
  },
  cropModal: {
    title: "Recortar imagem",
    cancel: "Cancelar",
    apply: "Aplicar recorte",
    zoom: "Zoom",
    customWidth: "Largura da proporção personalizada",
    customHeight: "Altura da proporção personalizada",
    ratios: {
      Free: "Livre",
      Square: "Quadrado",
      Landscape: "Horizontal",
      Portrait: "Vertical",
      Widescreen: "Panorâmico",
      Story: "Story",
      Custom: "Personal.",
    },
  },
  language: { label: "Idioma" },
  consent: {
    title: "Cookies neste site",
    body: "As suas imagens são sempre processadas no seu dispositivo — isso nunca muda. Também gostaríamos de usar cookies de análise e publicidade da Google, para medir a utilização e manter as ferramentas gratuitas. Se recusar, tudo continua a funcionar.",
    accept: "Aceitar",
    decline: "Recusar",
    manage: "Preferências de cookies",
    learnMore: "Política de privacidade",
    close: "Fechar",
  },
  errorPage: {
    title: "Algo correu mal.",
    body: "Um erro inesperado interrompeu esta página. As suas imagens nunca foram enviadas, por isso nada se perdeu — tentar de novo costuma resolver.",
    retry: "Tentar de novo",
    home: "Voltar ao início",
  },
  notFound: {
    code: "404",
    title: "Esta página não existe.",
    body: "A ferramenta ou página que procura pode ter mudado, ou o link pode estar quebrado.",
    cta: "Voltar ao início",
  },
  legal: {
    updatedLabel: "Última atualização: {date}",
    about: {
      title: "Sobre o {siteName}",
      p1: "O {siteName} existe para resolver um problema concreto: tem uma imagem, e algo — um formulário, um site, uma aplicação — exige que ela cumpra uma especificação precisa. Um tamanho máximo. Dimensões exatas. Um formato específico.",
      p2: "Em vez de o obrigar a descobrir qual a definição, em que programa, o leva até lá, o {siteName} pede-lhe diretamente o resultado de que precisa e trata do resto: redimensiona, comprime ou converte conforme necessário.",
      howHeading: "Como funciona",
      howBody: "Todo o processamento de imagens acontece diretamente no seu navegador usando tecnologias web padrão. Os seus ficheiros nunca são enviados para um servidor — simplesmente não temos a infraestrutura para os receber, por design.",
      whyHeading: "Porque é gratuito",
      whyBody: "O {siteName} sustenta-se com publicidade mínima e não intrusiva. Não há contas, subscrições nem funcionalidades pagas em nenhuma ferramenta.",
    },
    contact: {
      title: "Contacto",
      intro: "Perguntas, relatórios de erros, pedidos de funcionalidades, ou qualquer coisa sobre privacidade e como tratamos os seus dados — gostaríamos de as ouvir.",
      emailBody: "Escreva-nos para {{LINK}}. Lemos tudo e normalmente respondemos em poucos dias úteis.",
      reportHeading: "Reportar um problema com uma ferramenta",
      reportIntro: "Como tudo acontece dentro do seu navegador, não conseguimos ver o que correu mal no seu dispositivo — e nunca recebemos o ficheiro em que estava a trabalhar. Para tornar o erro reproduzível, inclua por favor:",
      reportItem1: "em que página estava, e o que estava a tentar produzir;",
      reportItem2: "o seu navegador e sistema operativo, com as respetivas versões;",
      reportItem3: "o formato e o tamanho aproximado da imagem original (por favor não anexe a imagem em si, a menos que pedimos).",
      privacyHeading: "Privacidade e pedidos sobre dados",
      privacyBody: "O {siteName} não tem contas nem guarda dados pessoais, por isso normalmente não há nada para exportar ou eliminar. Se tiver alguma questão sobre a {{LINK}}, ou sobre os cookies de terceiros que são definidos quando os aceita, escreva para o mesmo endereço.",
      privacyLinkText: "política de privacidade",
    },
    privacy: {
      title: "Política de privacidade",
      imagesHeading: "As suas imagens",
      imagesBody: "As ferramentas do {siteName} processam as imagens diretamente no seu navegador. Os seus ficheiros de imagem não são enviados, transmitidos ou guardados em nenhum servidor operado por nós. Nunca vemos, acedemos ou conservamos o conteúdo de nenhum ficheiro que processe.",
      cookiesHeading: "Cookies e o seu consentimento",
      cookiesBody1: "O {siteName} não define cookies próprios. Os únicos cookies que este site pode definir são os dos serviços de terceiros descritos abaixo, e só são carregados depois de os aceitar no banner de cookies. Se recusar, ou ainda não tiver respondido, nenhum desses scripts é solicitado nem é criado qualquer cookie de terceiros — todas as ferramentas do site funcionam exatamente da mesma forma em ambos os casos.",
      cookiesBody2: "A sua resposta é guardada no armazenamento local do seu navegador (não é um cookie, e nunca é enviada para lado nenhum) para não lhe voltarmos a perguntar a cada visita. Pode alterá-la a qualquer momento através do link Preferências de cookies no rodapé de qualquer página; retirar o consentimento recarrega a página para que os scripts deixem de funcionar.",
      analyticsHeading: "Análise estatística",
      analyticsBody: "Com o seu consentimento, usamos o Google Analytics para perceber a utilização agregada — por exemplo, que ferramentas são usadas, que páginas são visitadas, e informação geral de localização e dispositivo. Estes dados são anonimizados/agregados sempre que possível e nunca são associados às imagens que processa: os eventos que registamos descrevem apenas o que foi pedido à ferramenta (por exemplo, \"um ficheiro foi comprimido\"), nunca um nome de ficheiro ou algo derivado do conteúdo da imagem.",
      adsHeading: "Publicidade",
      adsBody: "Com o seu consentimento, o {siteName} pode mostrar publicidade fornecida por redes de terceiros (como o Google AdSense) para manter as ferramentas gratuitas. Estas redes podem usar cookies ou tecnologias semelhantes para mostrar anúncios relevantes, e a Google pode tratar estes dados como responsável independente — veja {{LINK1}}. Pode ainda controlar a personalização de anúncios através do seu navegador ou de {{LINK2}}. Sem consentimento, o script publicitário nunca é carregado e os espaços reservados mostram o nosso próprio conteúdo.",
      adsLink1Text: "como a Google usa informação de sites que utilizam os seus serviços",
      adsLink2Text: "Definições de anúncios da Google",
      accountsHeading: "Contas e dados pessoais",
      accountsBody: "O {siteName} não exige conta, início de sessão ou dados pessoais para usar nenhuma ferramenta.",
      contactHeading: "Contacto",
      contactBody: "Perguntas sobre esta política podem ser enviadas para {{LINK}}.",
    },
    terms: {
      title: "Termos de serviço",
      useHeading: "Utilização do serviço",
      useBody: "O {siteName} é fornecido gratuitamente, tal como está, sem garantias de qualquer tipo. É responsável por garantir que tem o direito de processar qualquer imagem que abra com as ferramentas deste site. Nada é enviado: os ficheiros permanecem sempre no seu próprio dispositivo.",
      noGuaranteesHeading: "Sem garantias",
      noGuaranteesBody: "Embora o {siteName} procure produzir resultados precisos e corretos, não garantimos que o resultado esteja isento de erros ou seja adequado a todos os fins específicos. Verifique sempre o resultado antes de confiar nele para um envio crítico (por exemplo, um documento legal ou uma candidatura oficial).",
      adsHeading: "Publicidade e conteúdo de terceiros",
      adsBody: "O {siteName} é financiado por publicidade, que é fornecida por redes de terceiros apenas depois de ter aceitado os cookies publicitários. Não escolhemos, aprovamos nem controlamos os anúncios individuais que aparecem, e não somos responsáveis pelo conteúdo de nenhum site para o qual apontem. A forma como essas redes usam os dados, e como as desativar, está descrita na {{LINK}}.",
      privacyLinkText: "política de privacidade",
      acceptableHeading: "Utilização aceitável",
      acceptableBody: "Não pode usar o {siteName} para processar conteúdo ilegal, nem tentar interromper, sobrecarregar ou fazer engenharia inversa do serviço.",
      changesHeading: "Alterações",
      changesBody: "Estes termos podem ser atualizados periodicamente. A utilização continuada do site após alterações constitui aceitação dos termos atualizados.",
      contactHeading: "Contacto",
      contactBody: "As perguntas podem ser enviadas para {{LINK}}.",
    },
  },
  landings: {
    size: {
      h1: "Comprimir uma imagem para {size}",
      subtitle: "Solte um JPG, PNG ou WebP e receba-o com {size} ou menos, com a melhor qualidade possível. Nada é enviado para servidores.",
      q1: "Como comprimo uma imagem para {size}?",
      a1: "Solte a sua imagem nesta página. O objetivo de {size} já está ativado, por isso o resultado aparece de imediato — depois basta descarregar. Se também precisar de dimensões específicas ou de outro formato, ative esses requisitos e são aplicados no mesmo passo.",
      q2: "O resultado será exatamente {size}?",
      a2: "Está garantido que fica igual ou abaixo de {size}, nunca acima. Atingir exatamente esse valor não é possível com um codificador com perdas, por isso ficamos sempre abaixo do limite — que é precisamente o que um formulário de envio verifica.",
      q3: "Quem precisa de {size}?",
      q4: "E se a minha foto não conseguir atingir {size}?",
      a4: "A qualidade é reduzida primeiro; se mesmo a qualidade mínima útil ainda for demasiado pesada, a imagem é redimensionada para baixo e a procura recomeça. Se o objetivo for genuinamente inatingível, obtém o resultado mais pequeno possível, claramente identificado, em vez de uma falha silenciosa.",
      q5: "A minha imagem é enviada para um servidor?",
      a5: "Não. Todo o processo ocorre no seu navegador através da API Canvas, fora da thread principal, num Web Worker. O ficheiro nunca sai do seu dispositivo, por isso não há nada que possamos ver, guardar ou eliminar.",
    },
    whoAsks: {
      "20kb": "20 KB é um dos limites mais apertados de uso comum: os portais de exames públicos e de vistos frequentemente impõem este limite para a assinatura ou a foto, e alguns fóruns mais antigos limitam os avatares à mesma medida.",
      "50kb": "50 KB é o teto habitual para o envio de fotos de passaporte e de identificação nos portais de candidatura das administrações públicas, e para documentos digitalizados anexados a formulários online.",
      "100kb": "100 KB é o limite de envio mais comum em formulários de candidatura a emprego, portais universitários e sistemas de gestão de conteúdos mais antigos.",
      "200kb": "200 KB é um limite típico para fotos de produtos de e-commerce e anúncios em marketplaces, onde a plataforma quer uma imagem utilizável que carregue rapidamente no telemóvel.",
      "500kb": "500 KB é um orçamento confortável para o desempenho web: suficientemente grande para uma foto de destaque a largura total, suficientemente pequeno para não dominar o tempo de carregamento da página.",
      "1mb": "1 MB é o limite de anexos e envio em muitos sistemas de email, ferramentas de tickets e formulários de seguros ou de sinistros.",
    },
    passportPhotoSizePixels: {
      h1: "Ajuste uma foto de passaporte ao tamanho certo em pixels",
      subtitle: "413 × 531 pixels equivale a 35 × 45 mm a 300 dpi — o tamanho ICAO exigido pela maioria dos portais de passaportes e vistos. Já está definido abaixo.",
      faq: [
        {
          q: "Qual é o tamanho da foto de passaporte em pixels?",
          a: "O padrão ICAO usado pela maioria dos países é 35 × 45 mm. Impresso a 300 dpi equivale a 413 × 531 pixels, que é o que esta página define. O passaporte dos EUA é a exceção: mede 2 × 2 polegadas, ou seja, 600 × 600 pixels a 300 dpi.",
        },
        {
          q: "Como obtenho exatamente 413 × 531 sem esticar o rosto?",
          a: "Recorte primeiro, depois redimensione. Abra o editor de recorte, defina uma proporção personalizada de 35 : 45, posicione a cabeça dentro dela e aplique — o redimensionamento chegará então exatamente ao tamanho em pixels, sem distorção. Deixar apenas o bloqueio de proporção ativo sem recortar ajusta a foto dentro de 413 × 531, o que mantém as proporções mas não preenche o enquadramento.",
        },
        {
          q: "O portal também tem um limite de peso do ficheiro — posso fazer as duas coisas?",
          a: "Sim. Ative também 'Peso máximo do ficheiro' e escolha o seu limite; as dimensões e o limite de peso são aplicados em conjunto, num único passo, para não ter de comprimir e redimensionar em duas ferramentas diferentes.",
        },
        {
          q: "A minha foto é um ficheiro HEIC de um iPhone — vai funcionar?",
          a: "Sim. As fotos HEIC e HEIF são convertidas automaticamente assim que as solta, antes de qualquer outra alteração, e pode exportar para JPG, PNG ou WebP.",
        },
      ],
    },
    resizeImageTo1080x1080: {
      h1: "Redimensionar uma imagem para 1080 × 1080",
      subtitle: "O tamanho quadrado 1:1 pedido pelo Instagram, LinkedIn e pela maioria das plataformas publicitárias. Já definido — solte uma imagem e descarregue-a.",
      faq: [
        {
          q: "Porquê 1080 × 1080?",
          a: "É a resolução nativa de uma publicação social quadrada: Instagram, Facebook e LinkedIn mostram todos imagens 1:1 a 1080 px no lado maior, por isso enviar exatamente essa medida evita tanto o desfoque de ampliação como uma recodificação desnecessária do lado deles.",
        },
        {
          q: "A minha foto não é quadrada — o que acontece?",
          a: "Com a proporção bloqueada, a imagem é ajustada dentro de 1080 × 1080 sem esticar, mantendo as proporções. Para realmente preencher o quadrado, abra primeiro o editor de recorte, escolha a proporção Quadrado e posicione o sujeito — assim o redimensionamento chegará exatamente a 1080 × 1080.",
        },
        {
          q: "Também posso manter o ficheiro abaixo de um limite de peso?",
          a: "Sim — ative 'Peso máximo do ficheiro' e ambos os requisitos são aplicados em conjunto num único passo, que é normalmente o que pedem as especificações de uma plataforma publicitária.",
        },
        {
          q: "Ampliar vai tornar uma imagem pequena mais nítida?",
          a: "Não. Ampliar inventa pixels que não existem, por isso uma foto de 400 px escalada para 1080 vai ficar desfocada. Comece sempre pelo original maior que tiver; é ao reduzir que a qualidade se mantém.",
        },
      ],
    },
    convertHeicToJpg: {
      h1: "Converter uma foto HEIC em JPG",
      subtitle: "Solte uma foto de iPhone — o HEIC é descodificado automaticamente e depois guardado novamente como JPG, que qualquer pessoa consegue abrir.",
      faq: [
        {
          q: "Porque é que a minha foto do iPhone não abre neste site ou app?",
          a: "Os iPhone guardam as fotos em HEIC (ou HEIF) por predefinição, um formato que a maioria do software não Apple ainda não consegue ler. Converter para JPG uma vez resolve isto em qualquer lugar, porque o JPG abre literalmente em tudo.",
        },
        {
          q: "Preciso de instalar algo para converter HEIC?",
          a: "Não. As versões recentes do Safari conseguem descodificar HEIC de forma nativa, e todos os outros navegadores recorrem a um pequeno descodificador integrado que só é descarregado quando um ficheiro HEIC é realmente solto — em ambos os casos, nada é instalado no seu dispositivo.",
        },
        {
          q: "Também posso redimensionar ou comprimir a foto ao mesmo tempo?",
          a: "Sim — ative dimensões ou um peso máximo de ficheiro juntamente com o formato, e todos os três são aplicados em conjunto num único passo, que é o caso habitual das fotos HEIC diretamente do telemóvel: também costumam ser grandes.",
        },
        {
          q: "A minha foto é enviada para um servidor para a converter?",
          a: "Não. Tanto a descodificação como a nova codificação acontecem localmente no seu navegador. A foto nunca sai do seu dispositivo.",
        },
      ],
    },
    convertPngToJpg: {
      h1: "Converter um PNG em JPG",
      subtitle: "Solte um PNG e receba um JPG — normalmente uma fração do peso, pronto para formulários de envio que não aceitam PNG.",
      faq: [
        {
          q: "Porque converter um PNG em JPG?",
          a: "O PNG não tem perdas, o que torna capturas de ecrã e gráficos nítidos mas também grandes. O JPG comprime conteúdo fotográfico de forma muito mais eficiente, e é o formato que a maioria dos formulários com limite de peso realmente espera.",
        },
        {
          q: "O meu PNG tem fundo transparente — o que lhe acontece?",
          a: "O JPG não tem canal de transparência, por isso as áreas transparentes são preenchidas de branco antes de guardar. Se precisar de manter a transparência, converta para WebP em vez de JPG.",
        },
        {
          q: "Também posso atingir um peso de ficheiro exato?",
          a: "Sim — ative também 'Peso máximo do ficheiro' e tanto o formato como o objetivo de peso são aplicados em conjunto num único passo.",
        },
        {
          q: "Vou perder qualidade?",
          a: "Alguma — o JPG é um formato com perdas. Na qualidade predefinida a diferença raramente é visível; se precisar de a controlar, ative a qualidade manual e ajuste o cursor.",
        },
      ],
    },
    convertWebpToJpg: {
      h1: "Converter uma imagem WebP em JPG",
      subtitle: "Solte um ficheiro WebP e receba um JPG que abre em qualquer lugar, incluindo em ferramentas que ainda não suportam WebP.",
      faq: [
        {
          q: "Porque é que precisaria de converter WebP para JPG?",
          a: "A maioria dos navegadores modernos mostra WebP sem problemas, mas bastante software mais antigo, alguns editores de documentos e alguns formulários de envio ainda só aceitam JPG ou PNG. Converter uma vez resolve isto em qualquer sítio onde precise de usar o ficheiro a seguir.",
        },
        {
          q: "Converter para JPG altera a qualidade da imagem?",
          a: "O JPG também é um formato com perdas, por isso há uma nova codificação, mas na qualidade predefinida a diferença face a um WebP típico é mínima. Ative a qualidade manual se quiser controlar esse equilíbrio.",
        },
        {
          q: "Posso redimensionar enquanto converto?",
          a: "Sim — ative dimensões ou uma escala em percentagem juntamente com a mudança de formato, e ambas são aplicadas no mesmo passo.",
        },
        {
          q: "Isto é diferente de tirar uma captura de ecrã da imagem?",
          a: "Sim — uma captura de ecrã volta a captar o seu ecrã na resolução do seu monitor e acrescenta compressão por cima. Isto recodifica diretamente os pixels originais, por isso mantém a resolução e qualidade reais da imagem de origem.",
        },
      ],
    },
    convertJpgToWebp: {
      h1: "Converter uma imagem JPG em WebP",
      subtitle: "Solte um JPG e receba um WebP mais leve — normalmente 25–35% mais leve com a mesma qualidade visual, ideal para um site mais rápido.",
      faq: [
        {
          q: "Porque converter JPG para WebP?",
          a: "O WebP produz tipicamente um ficheiro visivelmente mais pequeno do que o JPG com a mesma qualidade visual, e é por isso que se tornou a recomendação predefinida nas auditorias de desempenho web (incluindo o próprio PageSpeed Insights da Google).",
        },
        {
          q: "O WebP vai ser exibido em qualquer lugar?",
          a: "Todos os navegadores de uso comum atualmente suportam WebP. A principal razão para manter um JPG é a compatibilidade com software mais antigo fora do navegador — por exemplo, alguns editores de imagem de ambiente de trabalho e ferramentas de design.",
        },
        {
          q: "Posso definir um peso máximo para o resultado em WebP?",
          a: "Sim — ative 'Peso máximo do ficheiro' e é aplicado em conjunto com a mudança de formato, num único passo.",
        },
        {
          q: "O WebP suporta transparência como o PNG?",
          a: "Sim, ao contrário do JPG. Se a sua origem tiver transparência e converter a partir de PNG em vez de JPG, o WebP mantém-na.",
        },
      ],
    },
  },
};
