import type { Dictionary } from "./en";

const faqItem = (q: string, a: string) => ({ q, a });

export const tr: Dictionary = {
  nav: { compress: "Sıkıştır", resize: "Boyutlandır", crop: "Kırp", convert: "Dönüştür", faq: "SSS" },
  footer: {
    tools: "Araçlar",
    company: "Şirket",
    legal: "Yasal",
    compress: "Boyuta sıkıştır",
    resize: "Yeniden boyutlandır",
    crop: "Kırp",
    convert: "Format dönüştür",
    about: "Hakkımızda",
    contact: "İletişim",
    faq: "SSS",
    privacy: "Gizlilik",
    terms: "Şartlar",
    tagline: "Görselini istenen şarta uygun hale getir.",
    privacyPill: "Hiçbir şey yüklenmiyor",
    copyright: "Tüm işlemler tarayıcında gerçekleşir.",
  },
  common: {
    faqHeading: "Sık sorulanlar",
    relatedHeading: "İlgili araçlar",
    faqPageTitle: "Sıkça sorulan sorular",
    faqGeneral: "Genel",
    whyHeading: "Neden CrispPic",
    trustPrivate: "Dosyaların cihazından asla ayrılmaz — yükleme yok, sunucu yok.",
    trustFast: "Ana iş parçacığının dışında çalışır: büyük fotoğraflar bile anında.",
    trustFree: "Hesap yok, filigran yok, görsel sayısında sınır yok.",
    howHeading: "Nasıl çalışır",
    step1: "Bir görsel sürükle, yapıştır ya da seç.",
    step2: "Karşılaması gereken şartları aç.",
    step3: "İndir. Hiçbir şey yüklenmedi.",
    shortcutTip: "Sonucu kaydetmek için Ctrl/⌘ + S.",
    privacyTitle: "Tasarımı gereği gizli",
    privacyBody: "Her dönüşüm tarayıcında olur. İstesek bile görsellerini göremeyiz.",
    skipToContent: "İçeriğe geç",
    home: "Ana sayfa",
    primaryNav: "Ana gezinme",
    openMenu: "Menüyü aç",
    closeMenu: "Menüyü kapat",
  },
  theme: { toLight: "Açık temaya geç", toDark: "Koyu temaya geç" },
  home: {
    badge: "%100 gizli — dosyaların cihazından asla ayrılmaz",
    h1: "Görselini istenen şarta uygun hale getir",
    subtitle:
      "Tam boyuta sıkıştır, yeniden boyutlandır, kırp veya formatını değiştir — neye ihtiyacın olduğunu seç, gerisini biz halledelim.",
    faq: [
      faqItem(
        "Görselim bir yere yükleniyor mu?",
        "Hayır. Sıkıştırma, boyutlandırma, kırpma, dönüştürme — her işlem Canvas API ile tamamen tarayıcında yapılır. Dosya cihazından asla ayrılmaz."
      ),
      faqItem(
        "Hangi görsel formatları destekleniyor?",
        "JPG, PNG, WebP, GIF, BMP, AVIF veya HEIC (iPhone fotoğraflarının varsayılan formatı) yükleyebilirsin. Çıktı JPG, PNG veya WebP olabilir."
      ),
      faqItem(
        "Boyut, ölçü ve formatı tek seferde birleştirebilir miyim?",
        "Evet — bütün mesele bu. Maksimum dosya boyutu, genişlik/yükseklik, kırpma, döndürme ve çıktı formatının herhangi bir kombinasyonunu aç: CrispPic hepsini tek geçişte uygular."
      ),
      faqItem("Gerçekten ücretsiz mi?", "Evet — hesap yok, filigran yok ve işleyebileceğin görsel sayısında sınır yok."),
    ],
  },
  toolPages: {
    compress: {
      badge: "%100 gizli — dosyaların cihazından asla ayrılmaz",
      h1: "Görselini tam olarak istediğin boyuta sıkıştır",
      subtitle: "Bir hedef dosya boyutu seç, altında kalan en yüksek kaliteyi biz bulalım.",
      faq: [
        faqItem(
          "CrispPic tam dosya boyutunu nasıl tutturuyor?",
          "İkili arama ile hedefinin altında kalan en yüksek kodlama kalitesini bulur. Görsel hiçbir kalitede sığmazsa küçültülür ve arama yeniden başlar."
        ),
        faqItem(
          "Sonucum neden tam olarak 100KB değil?",
          "Sonuç hedefine eşit ya da ondan küçük olmayı garanti eder, ama tam üstüne oturmak mümkün değil — sınırı aşmaktansa hep altında kalmayı tercih ederiz."
        ),
        faqItem(
          "Hangi siteler maksimum dosya boyutu ister?",
          "Yaygın örnekler: devlet ve vize başvuru portalları, iş başvuru formları, e-ticaret ürün sayfaları ve yükleme sınırı olan forumlar veya CMS'ler."
        ),
      ],
    },
    resize: {
      badge: "%100 gizli — dosyaların cihazından asla ayrılmaz",
      h1: "Görselini tam ölçülere getir",
      subtitle:
        "Genişlik ve yüksekliği piksel olarak gir ya da yüzdeyle ölçekle — bozulmayı önlemek için en boy oranını kilitle.",
      faq: [
        faqItem(
          "Sadece genişlik girersem ne olur?",
          "Yükseklik, orijinal en boy oranını korumak için otomatik hesaplanır — görsel ne uzar ne de ezilir."
        ),
        faqItem(
          "Bozulma olmadan tam genişlik ve yüksekliğe getirebilir miyim?",
          "Evet — en boy oranı kilitliyken CrispPic görselini belirlediğin kutunun içine uzatmadan yerleştirir. Gerçekten tam, gerekirse orantısız bir ölçü istiyorsan kilidi aç."
        ),
        faqItem(
          "Aynı anda hem boyutlandırıp hem maksimum dosya boyutu verebilir miyim?",
          "Evet — 'Maksimum dosya boyutu'nu da aç, iki şart tek geçişte birlikte uygulanır."
        ),
      ],
    },
    convert: {
      badge: "%100 gizli — dosyaların cihazından asla ayrılmaz",
      h1: "Görselini başka bir formata dönüştür",
      subtitle: "JPG, PNG, WebP — iPhone'un HEIC fotoğrafları yüklenirken otomatik dönüştürülür.",
      faq: [
        faqItem(
          "Hangi formatlara dönüştürebilirim?",
          "Çıktı JPG, PNG veya WebP. Girdi olarak JPG, PNG, WebP, GIF, BMP, AVIF ve HEIC/HEIF kabul edilir."
        ),
        faqItem(
          "Şeffaf bir PNG'yi JPG'ye çevirirsem şeffaflık kaybolur mu?",
          "Evet — JPG'de şeffaflık kanalı yoktur, şeffaf alanlar beyaza döner. CrispPic önceden uyarır; şeffaflığı korumak için PNG veya WebP seç."
        ),
        faqItem(
          "iPhone fotoğraflarım HEIC — onları dönüştürebilir miyim?",
          "Evet. Bir .heic dosyası yükle, CrispPic seçtiğin formatı uygulamadan önce otomatik olarak dönüştürsün."
        ),
      ],
    },
    crop: {
      badge: "%100 gizli — dosyaların cihazından asla ayrılmaz",
      h1: "Görselini ihtiyacın olan orana kırp",
      subtitle: "Kırpma düzenleyicisini açmak için bir görsel yükle — oran seç, sürükleyerek konumlandır ve uygula.",
      faq: [
        faqItem(
          "Hangi kırpma oranları var?",
          "Serbest, kare (1:1), yatay (4:3), dikey (3:4), geniş ekran (16:9), hikâye (9:16) veya kendi yazdığın özel oran."
        ),
        faqItem(
          "Uyguladıktan sonra kırpmayı değiştirebilir miyim?",
          "Evet — düzenleyiciyi yeniden açmak için 'Kırpma' yanındaki kalem simgesine, kırpmayı tamamen kaldırmak için × işaretine tıkla."
        ),
        faqItem(
          "Aynı anda hem kırpıp hem hedef boyuta sıkıştırabilir miyim?",
          "Evet — kırptıktan sonra 'Maksimum dosya boyutu'nu aç, ikisi birlikte uygulanır."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Bir görsel sürükle veya yüklemek için tıkla",
    dropzoneDrag: "İstediğin yere bırak",
    dropzoneHint: "JPG, PNG, WebP, AVIF veya HEIC — 40 MB'a kadar",
    dropzonePaste: "Ekran görüntüsü de yapıştırabilirsin",
    panelHeading: "Çıktı şartları",
    maxFileSize: "Maksimum dosya boyutu",
    customSizeLabel: "Kilobayt cinsinden özel boyut",
    dimensions: "Ölçüler",
    resizeUnit: "Birim",
    unitPixels: "Piksel",
    unitPercent: "Yüzde",
    width: "Piksel cinsinden genişlik",
    height: "Piksel cinsinden yükseklik",
    lockAspect: "En boy oranını kilitle",
    unlockAspect: "En boy oranı kilidini aç",
    presetPlaceholder: "Yaygın ölçüler…",
    scale: "Ölçek",
    sourceSize: "Kaynak: {size} px",
    crop: "Kırpma",
    transform: "Döndür ve çevir",
    rotateLeft: "Sola döndür",
    rotateRight: "Sağa döndür",
    flipHorizontal: "Yatay çevir",
    flipVertical: "Dikey çevir",
    resetTransform: "Sıfırla",
    outputFormat: "Çıktı formatı",
    quality: "Kalite",
    qualityValue: "Kalite %{value}",
    alphaWarning: "JPG'de şeffaflık yoktur — şeffaf alanlar beyaza dönecek.",
    openCropEditor: "Kırpma düzenleyicisini aç",
    editCrop: "Kırpmayı düzenle",
    removeCrop: "Kırpmayı kaldır",
    reading: "Görsel okunuyor…",
    processing: "İşleniyor…",
    passthrough: "Hiçbir değişiklik istenmedi — orijinal dosyanı geri alacaksın.",
    download: "İndir",
    downloadStarted: "İndirme başladı.",
    newImage: "Yeni görsel",
    leaveConfirm: "Görseliniz yalnızca bu sekmede. Şimdi ayrılırsanız kaybolur. Devam edilsin mi?",
    targetMissed: "Çok fazla kalite kaybetmeden {size} altına inemedik — bu ulaşabildiğimiz en küçük sonuç.",
    before: "Önce",
    after: "Sonra",
    compareLabel: "Önce ve sonrayı karşılaştır",
    compareValue: "%{value} önce, kalanı sonra",
    custom: "Özel",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Kare gönderi",
      portrait1350: "Dikey gönderi",
      story1920: "Hikâye",
      og: "Sosyal medya önizlemesi",
      avatar512: "Avatar",
      thumb256: "Küçük resim",
      passport: "Vesikalık",
    },
    formats: { auto: "Koru", jpeg: "JPG", png: "PNG", webp: "WebP" },
  },
  errors: {
    fileTooLarge: "Bu dosya {size} MB. Lütfen {max} MB altında bir görsel kullan.",
    unsupportedType: "Lütfen JPG, PNG, WebP, AVIF, GIF, BMP veya HEIC bir görsel kullan.",
    decodeFailed: "Bu dosya görsel olarak açılamadı — bozuk olabilir.",
    heicFailed: "Bu bir HEIC fotoğrafına benziyor ve dönüştürülemedi. Önce JPG olarak dışa aktarmayı dene.",
    encodeFailed: "Tarayıcın görseli bu formatta kaydedemedi. Farklı bir çıktı formatı dene.",
    formatUnsupported: "Tarayıcın bu formatı yazamıyor. JPG veya PNG dene.",
    canvasUnavailable: "Bu tarayıcıda görsel düzenleme kullanılamıyor.",
    outOfMemory: "Bu görsel cihazının işleyebileceğinden büyük. Daha küçük birini dene.",
    unknown: "Bu görsel işlenirken bir şeyler ters gitti.",
  },
  cropModal: {
    title: "Görseli kırp",
    cancel: "İptal",
    apply: "Kırpmayı uygula",
    zoom: "Yakınlaştırma",
    customWidth: "Özel oran genişliği",
    customHeight: "Özel oran yüksekliği",
    ratios: {
      Free: "Serbest",
      Square: "Kare",
      Landscape: "Yatay",
      Portrait: "Dikey",
      Widescreen: "Geniş ekran",
      Story: "Hikâye",
      Custom: "Özel",
    },
  },
  language: { label: "Dil" },
  consent: {
    title: "Bu sitedeki çerezler",
    body: "Görsellerin her zaman kendi cihazında işlenir — bu asla değişmez. Ayrıca kullanımı ölçmek ve araçları ücretsiz tutmak için Google'ın analiz ve reklam çerezlerini kullanmak istiyoruz. Reddedersen her şey yine çalışır.",
    accept: "Kabul et",
    decline: "Reddet",
    manage: "Çerez tercihleri",
    learnMore: "Gizlilik Politikası",
    close: "Kapat",
  },
  errorPage: {
    title: "Bir şeyler ters gitti.",
    body: "Beklenmeyen bir hata bu sayfayı kesintiye uğrattı. Görsellerin hiçbir zaman yüklenmedi, yani hiçbir şey kaybolmadı — genellikle yeniden denemek yeterli.",
    retry: "Tekrar dene",
    home: "Ana sayfaya dön",
  },
  notFound: {
    code: "404",
    title: "Bu sayfa mevcut değil.",
    body: "Aradığın araç ya da sayfa taşınmış olabilir veya bağlantı bozuk olabilir.",
    cta: "Ana sayfaya dön",
  },
  legal: {
    updatedLabel: "Son güncelleme: {date}",
    about: {
      title: "{siteName} hakkında",
      p1: "{siteName}, tek bir sorunu çözmek için var: elinde bir görsel var ve bir şey — bir form, bir web sitesi, bir uygulama — bu görselin kesin bir şartı karşılamasını istiyor. Azami dosya boyutu. Tam ölçüler. Belirli bir format.",
      p2: "Hangi programda hangi ayarın seni oraya götüreceğini bulmanı beklemek yerine {siteName} doğrudan ihtiyacın olan sonucu sorar ve gerisini halleder: gerektiğinde yeniden boyutlandırır, sıkıştırır veya dönüştürür.",
      howHeading: "Nasıl çalışır",
      howBody: "Tüm görsel işleme, standart web teknolojileri kullanılarak doğrudan tarayıcında gerçekleşir. Dosyaların asla bir sunucuya yüklenmez — bunları almak için altyapımız kasıtlı olarak yok.",
      whyHeading: "Neden ücretsiz",
      whyBody: "{siteName}, minimal ve rahatsız etmeyen reklamlarla ayakta durur. Hiçbir araçta hesap, abonelik veya ücretli özellik yok.",
    },
    contact: {
      title: "İletişim",
      intro: "Sorular, hata bildirimleri, özellik istekleri veya gizlilik ile verilerinin nasıl işlendiğine dair her şey — bunları duymak isteriz.",
      emailBody: "Bize {{LINK}} adresinden yaz. Her şeyi okuyoruz ve genellikle birkaç iş günü içinde yanıtlıyoruz.",
      reportHeading: "Bir araçla ilgili sorun bildirme",
      reportIntro: "Her şey tarayıcında gerçekleştiği için cihazında neyin yanlış gittiğini göremeyiz — ve üzerinde çalıştığın dosyayı asla almayız. Hatanın tekrarlanabilir olması için lütfen şunları ekle:",
      reportItem1: "hangi sayfada olduğun ve ne elde etmeye çalıştığın;",
      reportItem2: "tarayıcın ve işletim sistemin, sürümleriyle birlikte;",
      reportItem3: "orijinal görselin formatı ve yaklaşık boyutu (biz istemediğimiz sürece lütfen görselin kendisini eklemeyin).",
      privacyHeading: "Gizlilik ve veri talepleri",
      privacyBody: "{siteName}'in hesabı yoktur ve kişisel veri saklamaz, bu yüzden normalde dışa aktarılacak veya silinecek bir şey yoktur. {{LINK}} hakkında bir sorun varsa, ya da kabul ettiğinde ayarlanan üçüncü taraf çerezleri hakkında, aynı adrese yaz.",
      privacyLinkText: "gizlilik politikası",
    },
    privacy: {
      title: "Gizlilik Politikası",
      imagesHeading: "Görsellerin",
      imagesBody: "{siteName} araçları görselleri doğrudan tarayıcında işler. Görsel dosyaların bizim işlettiğimiz herhangi bir sunucuya yüklenmez, aktarılmaz veya saklanmaz. İşlediğin hiçbir dosyanın içeriğini asla görmeyiz, erişmeyiz veya tutmayız.",
      cookiesHeading: "Çerezler ve rızan",
      cookiesBody1: "{siteName} kendi çerezlerini oluşturmaz. Bu sitenin oluşturabileceği tek çerezler aşağıda açıklanan üçüncü taraf hizmetlerine aittir ve yalnızca çerez bannerında onları kabul ettikten sonra yüklenirler. Reddedersen veya henüz yanıt vermediysen, bu betiklerden hiçbiri istenmez ve hiçbir üçüncü taraf çerezi oluşturulmaz — sitedeki her araç her iki durumda da tamamen aynı şekilde çalışır.",
      cookiesBody2: "Cevabın, tarayıcının yerel depolamasında saklanır (çerez değildir ve hiçbir yere gönderilmez), böylece her ziyarette tekrar sorulmazsın. Bunu istediğin zaman herhangi bir sayfanın altbilgisindeki Çerez tercihleri bağlantısıyla değiştirebilirsin; rızanı geri çekmek, betiklerin durması için sayfayı yeniden yükler.",
      analyticsHeading: "Analitik",
      analyticsBody: "Rızanla, toplu kullanımı anlamak için Google Analytics kullanırız — örneğin hangi araçların kullanıldığı, hangi sayfaların ziyaret edildiği ve genel konum ile cihaz bilgisi. Bu veriler mümkün olduğunda anonimleştirilir/toplulaştırılır ve işlediğin görsellerle asla ilişkilendirilmez: kaydettiğimiz olaylar yalnızca araçtan ne istendiğini (örneğin \"bir dosya sıkıştırıldı\") açıklar, asla bir dosya adını veya görsel içeriğinden türetilen herhangi bir şeyi değil.",
      adsHeading: "Reklamcılık",
      adsBody: "Rızanla, {siteName} araçları ücretsiz tutmak için üçüncü taraf ağlar (Google AdSense gibi) tarafından sunulan reklamlar gösterebilir. Bu ağlar ilgili reklamlar sunmak için çerezler veya benzer teknolojiler kullanabilir ve Google bu verileri bağımsız bir veri sorumlusu olarak işleyebilir — bkz. {{LINK1}}. Reklam kişiselleştirmesini tarayıcın üzerinden veya {{LINK2}} aracılığıyla da kontrol edebilirsin. Rıza olmadan reklam betiği asla yüklenmez ve ayrılan alanlar bunun yerine kendi içeriğimizi gösterir.",
      adsLink1Text: "Google'ın hizmetlerini kullanan sitelerden gelen bilgileri nasıl kullandığı",
      adsLink2Text: "Google Reklam Ayarları",
      accountsHeading: "Hesaplar ve kişisel veriler",
      accountsBody: "{siteName}, herhangi bir aracı kullanmak için hesap, giriş veya kişisel bilgi gerektirmez.",
      contactHeading: "İletişim",
      contactBody: "Bu politikayla ilgili sorular {{LINK}} adresine gönderilebilir.",
    },
    terms: {
      title: "Kullanım Şartları",
      useHeading: "Hizmetin kullanımı",
      useBody: "{siteName}, hiçbir garanti verilmeksizin, olduğu gibi ve ücretsiz olarak sunulur. Bu sitedeki araçlarla açtığın herhangi bir görseli işleme hakkına sahip olduğundan emin olmak senin sorumluluğundadır. Hiçbir şey yüklenmez: dosyalar sürekli kendi cihazında kalır.",
      noGuaranteesHeading: "Garanti yok",
      noGuaranteesBody: "{siteName} doğru ve isabetli sonuçlar üretmeyi hedeflese de çıktının hatasız olacağını veya her özel amaca uygun olacağını garanti etmeyiz. Kritik bir başvuru için (örneğin bir hukuki belge veya resmi bir başvuru) sonuca güvenmeden önce her zaman doğrula.",
      adsHeading: "Reklamcılık ve üçüncü taraf içerikler",
      adsBody: "{siteName}, reklam çerezlerini kabul ettikten sonra ancak üçüncü taraf ağlar tarafından sunulan reklamlarla finanse edilir. Görünen tek tek reklamları biz seçmeyiz, onaylamayız veya kontrol etmeyiz ve bağlantı verdikleri herhangi bir sitenin içeriğinden sorumlu değiliz. Bu ağların verileri nasıl kullandığı ve nasıl kapatılacağı {{LINK}}'nda açıklanmıştır.",
      privacyLinkText: "gizlilik politikası",
      acceptableHeading: "Kabul edilebilir kullanım",
      acceptableBody: "{siteName}'i yasa dışı içerik işlemek veya hizmeti bozmaya, aşırı yüklemeye ya da tersine mühendislik yapmaya çalışmak için kullanamazsın.",
      changesHeading: "Değişiklikler",
      changesBody: "Bu şartlar zaman zaman güncellenebilir. Değişikliklerden sonra siteyi kullanmaya devam etmen, güncellenmiş şartları kabul ettiğin anlamına gelir.",
      contactHeading: "İletişim",
      contactBody: "Sorular {{LINK}} adresine gönderilebilir.",
    },
  },
  landings: {
    size: {
      h1: "Bir görseli {size} boyutuna sıkıştır",
      subtitle: "Bir JPG, PNG veya WebP dosyası bırak, en iyi kalitede {size} veya altında geri al. Hiçbir şey sunucuya yüklenmez.",
      q1: "Bir görseli {size} boyutuna nasıl sıkıştırırım?",
      a1: "Görselini bu sayfaya bırak. {size} hedefi zaten açık, bu yüzden sonuç hemen görünür — sonra sadece indir. Belirli boyutlara veya farklı bir formata da ihtiyacın varsa, bu gereksinimleri aç; aynı adımda uygulanırlar.",
      q2: "Sonuç tam olarak {size} mi olacak?",
      a2: "{size} veya altında olacağı garanti edilir, asla üstünde değil. Kayıplı bir kodlayıcıyla tam o rakama denk gelmek mümkün değil, bu yüzden her zaman sınırın altında kalırız — zaten bir yükleme formunun kontrol ettiği de tam olarak budur.",
      q3: "Kimler {size} boyutuna ihtiyaç duyar?",
      q4: "Fotoğrafım {size} boyutuna ulaşamazsa ne olur?",
      a4: "Önce kalite düşürülür; en düşük kullanılabilir kalite bile hâlâ çok büyükse, görsel küçültülür ve arama yeniden başlar. Hedef gerçekten ulaşılamaz durumdaysa, sessiz bir hatayla değil, açıkça belirtilmiş şekilde elde edilebilecek en küçük sonucu alırsın.",
      q5: "Görselim bir sunucuya yükleniyor mu?",
      a5: "Hayır. Tüm işlem, Web Worker içinde ana iş parçacığı dışında Canvas API kullanılarak tarayıcında gerçekleşir. Dosya cihazından asla ayrılmaz, yani görebileceğimiz, saklayabileceğimiz veya silebileceğimiz hiçbir şey yoktur.",
    },
    whoAsks: {
      "20kb": "20 KB, yaygın kullanılan en sıkı sınırlardan biridir: devlet sınavı ve vize portalları imza veya fotoğraf yüklemesinde sıkça bu sınırı koyar, bazı eski forumlar da avatarları aynı rakamla sınırlar.",
      "50kb": "50 KB, devlet başvuru portallarında pasaport ve kimlik fotoğrafı yüklemeleri için olağan üst sınırdır, ayrıca çevrimiçi formlara eklenen taranmış belgeler için de geçerlidir.",
      "100kb": "100 KB, iş başvuru formlarında, üniversite portallarında ve daha eski içerik yönetim sistemlerinde en sık görülen yükleme sınırıdır.",
      "200kb": "200 KB, platformun mobilde yine de hızlı yüklenen kullanılabilir bir görsel istediği e-ticaret ürün fotoğrafları ve pazar yeri ilanları için tipik bir sınırdır.",
      "500kb": "500 KB, web performansı açısından rahat bir bütçedir: tam genişlikte bir hero fotoğrafı için yeterince büyük, sayfanın yüklenme süresine hâkim olmayacak kadar küçük.",
      "1mb": "1 MB, birçok e-posta sisteminde, destek talebi araçlarında ve sigorta veya hasar başvuru formlarında ek ve yükleme sınırıdır.",
    },
    passportPhotoSizePixels: {
      h1: "Bir vesikalık fotoğrafı doğru piksel boyutuna getir",
      subtitle: "413 × 531 piksel, 300 dpi'de 35 × 45 mm'ye eşittir — çoğu pasaport ve vize portalının beklediği ICAO boyutu. Aşağıda zaten ayarlı.",
      faq: [
        {
          q: "Piksel cinsinden vesikalık fotoğraf boyutu nedir?",
          a: "Çoğu ülkenin kullandığı ICAO standardı 35 × 45 mm'dir. 300 dpi'de basıldığında bu, bu sayfanın ayarladığı 413 × 531 piksele karşılık gelir. ABD pasaportu istisnadır: 2 × 2 inç, yani 300 dpi'de 600 × 600 pikseldir.",
        },
        {
          q: "Yüzümü germeden tam olarak 413 × 531'e nasıl ulaşırım?",
          a: "Önce kırp, sonra boyutlandır. Kırpma düzenleyicisini aç, özel oran olarak 35 : 45'i ayarla, başını içine yerleştir ve uygula — böylece boyutlandırma bozulma olmadan tam piksel boyutuna denk gelir. Kırpma yapmadan sadece oran kilidini açık bırakmak, fotoğrafı bunun yerine 413 × 531 içine sığdırır; bu oranları korur ama kareyi doldurmaz.",
        },
        {
          q: "Portalın bir de dosya boyutu sınırı var — ikisini birden yapabilir miyim?",
          a: "Evet. 'Maksimum dosya boyutu'nu da aç ve sınırını seç; boyutlar ve boyut sınırı tek bir adımda birlikte uygulanır, böylece iki farklı araçta sıkıştırıp boyutlandırmak zorunda kalmazsın.",
        },
        {
          q: "Fotoğrafım bir iPhone'dan gelen HEIC dosyası — çalışır mı?",
          a: "Evet. HEIC ve HEIF fotoğrafları, başka herhangi bir işlem uygulanmadan önce, bıraktığın anda otomatik olarak dönüştürülür ve JPG, PNG veya WebP olarak dışa aktarabilirsin.",
        },
      ],
    },
    resizeImageTo1080x1080: {
      h1: "Bir görseli 1080 × 1080 boyutuna getir",
      subtitle: "Instagram, LinkedIn ve çoğu reklam platformunun istediği kare 1:1 boyut. Zaten ayarlı — bir görsel bırak ve indir.",
      faq: [
        {
          q: "Neden 1080 × 1080?",
          a: "Bu, kare bir sosyal medya gönderisinin doğal çözünürlüğüdür: Instagram, Facebook ve LinkedIn 1:1 görselleri uzun kenarda 1080 px olarak gösterir, bu yüzden tam bu boyutta yüklemek hem büyütme bulanıklığını hem de onların tarafında gereksiz yeniden kodlamayı önler.",
        },
        {
          q: "Fotoğrafım kare değil — ne olur?",
          a: "En boy oranı kilitliyken görsel, bozulmadan 1080 × 1080 içine sığdırılır, yani oranlar korunur. Kareyi gerçekten doldurmak için önce kırpma düzenleyicisini aç, Kare oranını seç ve konuyu konumlandır — böylece boyutlandırma tam olarak 1080 × 1080'e denk gelir.",
        },
        {
          q: "Dosyayı aynı zamanda bir boyut sınırının altında da tutabilir miyim?",
          a: "Evet — 'Maksimum dosya boyutu'nu aç, her iki gereksinim de tek bir adımda birlikte uygulanır; bu genellikle bir reklam platformunun teknik şartnamesinin istediği şeydir.",
        },
        {
          q: "Büyütmek küçük bir görseli daha keskin yapar mı?",
          a: "Hayır. Büyütmek var olmayan pikseller uydurur, bu yüzden 1080'e ölçeklenen 400 px'lik bir fotoğraf yumuşak görünecektir. Her zaman elindeki en büyük orijinalden başla; kalitenin korunduğu yer küçültmedir.",
        },
      ],
    },
    convertHeicToJpg: {
      h1: "Bir HEIC fotoğrafını JPG'ye dönüştür",
      subtitle: "Bir iPhone fotoğrafı bırak — HEIC otomatik olarak çözülür, ardından herkesin açabileceği bir JPG olarak yeniden kaydedilir.",
      faq: [
        {
          q: "iPhone fotoğrafım neden bu sitede veya uygulamada açılmıyor?",
          a: "iPhone'lar fotoğrafları varsayılan olarak HEIC (veya HEIF) formatında kaydeder; bu format Apple dışı yazılımların çoğu tarafından hâlâ okunamaz. Bir kez JPG'ye dönüştürmek bunu her yerde çözer, çünkü JPG gerçekten her yerde açılır.",
        },
        {
          q: "HEIC dönüştürmek için bir şey yüklemem gerekir mi?",
          a: "Hayır. Safari'nin son sürümleri HEIC'i yerel olarak çözebilir, diğer tüm tarayıcılar ise yalnızca gerçekten bir HEIC dosyası bırakıldığında indirilen küçük, tarayıcı içi bir çözücüye başvurur — her iki durumda da cihazına hiçbir şey kurulmaz.",
        },
        {
          q: "Fotoğrafı aynı zamanda boyutlandırabilir veya sıkıştırabilir miyim?",
          a: "Evet — formatın yanında boyutları veya maksimum dosya boyutunu aç, üçü de tek bir adımda birlikte uygulanır; bu, telefondan yeni çıkmış HEIC fotoğrafları için olağan durumdur: genellikle boyutları da büyük olur.",
        },
        {
          q: "Fotoğrafım dönüştürülmek için bir sunucuya yükleniyor mu?",
          a: "Hayır. Hem çözme hem de yeniden kodlama, tarayıcında yerel olarak gerçekleşir. Fotoğraf cihazından asla ayrılmaz.",
        },
      ],
    },
    convertPngToJpg: {
      h1: "Bir PNG'yi JPG'ye dönüştür",
      subtitle: "Bir PNG bırak ve bir JPG geri al — genellikle boyutunun bir kısmı kadar, PNG kabul etmeyen yükleme formları için hazır.",
      faq: [
        {
          q: "Bir PNG'yi neden JPG'ye dönüştürmeli?",
          a: "PNG kayıpsızdır, bu da ekran görüntülerini ve grafikleri keskin ama aynı zamanda büyük yapar. JPG, fotoğrafik içeriği çok daha verimli sıkıştırır ve boyut sınırı olan çoğu formun gerçekten beklediği formattır.",
        },
        {
          q: "PNG'imin şeffaf bir arka planı var — ona ne olur?",
          a: "JPG'de şeffaflık kanalı yoktur, bu yüzden şeffaf alanlar kaydedilmeden önce beyazla doldurulur. Şeffaflığı korumana gerekiyorsa, JPG yerine WebP'ye dönüştür.",
        },
        {
          q: "Aynı zamanda tam bir dosya boyutuna da ulaşabilir miyim?",
          a: "Evet — 'Maksimum dosya boyutu'nu da aç, format ve boyut hedefi tek bir adımda birlikte uygulanır.",
        },
        {
          q: "Kalite kaybeder miyim?",
          a: "Biraz — JPG kayıplı bir formattır. Varsayılan kalitede fark nadiren fark edilir; kontrol etmek istersen, manuel kaliteyi aç ve kaydırıcıyı ayarla.",
        },
      ],
    },
    convertWebpToJpg: {
      h1: "Bir WebP görselini JPG'ye dönüştür",
      subtitle: "Bir WebP dosyası bırak ve WebP'yi henüz desteklemeyen araçlar dahil her yerde açılan bir JPG geri al.",
      faq: [
        {
          q: "WebP'yi neden JPG'ye dönüştürmem gerekir?",
          a: "Çoğu modern tarayıcı WebP'yi sorunsuz gösterir, ancak birçok eski yazılım, bazı belge düzenleyiciler ve bazı yükleme formları hâlâ yalnızca JPG veya PNG kabul eder. Bir kez dönüştürmek, dosyayı sonrasında ihtiyaç duyduğun her yerde bu sorunu çözer.",
        },
        {
          q: "JPG'ye dönüştürmek görsel kalitesini değiştirir mi?",
          a: "JPG de kayıplı bir formattır, bu yüzden yeniden kodlama adımı vardır, ancak varsayılan kalitede tipik bir WebP'ye göre fark azdır. Bu dengeyi kendin kontrol etmek istersen manuel kaliteyi aç.",
        },
        {
          q: "Dönüştürürken boyutlandırma da yapabilir miyim?",
          a: "Evet — format değişikliğinin yanında boyutları veya bir yüzde ölçeğini aç, ikisi de aynı adımda uygulanır.",
        },
        {
          q: "Bu, görselin ekran görüntüsünü almaktan farklı mı?",
          a: "Evet — bir ekran görüntüsü, ekranını görüntü çözünürlüğünde yeniden yakalar ve üstüne sıkıştırma ekler. Bu araç ise orijinal piksel verisini doğrudan yeniden kodlar, böylece kaynak görselin gerçek çözünürlüğünü ve kalitesini korursun.",
        },
      ],
    },
    convertJpgToWebp: {
      h1: "Bir JPG görselini WebP'ye dönüştür",
      subtitle: "Bir JPG bırak ve daha küçük bir WebP geri al — genellikle aynı görsel kalitede %25-35 daha hafif, daha hızlı bir site için ideal.",
      faq: [
        {
          q: "JPG'yi neden WebP'ye dönüştürmeli?",
          a: "WebP, aynı görsel kalitede genellikle JPG'den belirgin şekilde daha küçük bir dosya üretir; bu yüzden web performansı denetimlerinde (Google'ın kendi PageSpeed Insights'ı dahil) varsayılan öneri haline gelmiştir.",
        },
        {
          q: "WebP her yerde görüntülenecek mi?",
          a: "Bugün yaygın olarak kullanılan her tarayıcı WebP'yi destekler. Bir JPG'yi elde tutmanın başlıca nedeni, tarayıcı dışındaki eski yazılımlarla uyumluluktur — örneğin bazı masaüstü görsel düzenleyicileri ve tasarım araçları.",
        },
        {
          q: "WebP çıktısı için maksimum dosya boyutu ayarlayabilir miyim?",
          a: "Evet — 'Maksimum dosya boyutu'nu aç, format değişikliğiyle birlikte tek bir adımda uygulanır.",
        },
        {
          q: "WebP, PNG gibi şeffaflığı destekler mi?",
          a: "Evet, JPG'nin aksine. Kaynağında şeffaflık varsa ve JPG yerine PNG'den dönüştürüyorsan, WebP bunu korur.",
        },
      ],
    },
  },
};
