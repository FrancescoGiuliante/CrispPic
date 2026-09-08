import type { Dictionary } from "./en";

const faqItem = (q: string, a: string) => ({ q, a });

export const pl: Dictionary = {
  nav: { compress: "Kompresuj", resize: "Zmień rozmiar", crop: "Przytnij", convert: "Konwertuj", faq: "FAQ" },
  footer: {
    tools: "Narzędzia",
    company: "Firma",
    legal: "Informacje prawne",
    compress: "Kompresja do rozmiaru",
    resize: "Zmiana rozmiaru",
    crop: "Przycinanie",
    convert: "Konwersja formatu",
    about: "O nas",
    contact: "Kontakt",
    faq: "FAQ",
    privacy: "Prywatność",
    terms: "Regulamin",
    tagline: "Dopasuj obraz do wymaganych parametrów.",
    privacyPill: "Nic nie jest wysyłane",
    copyright: "Całe przetwarzanie odbywa się w Twojej przeglądarce.",
  },
  common: {
    faqHeading: "Częste pytania",
    relatedHeading: "Powiązane narzędzia",
    faqPageTitle: "Najczęściej zadawane pytania",
    faqGeneral: "Ogólne",
    whyHeading: "Dlaczego CrispPic",
    trustPrivate: "Twoje pliki nigdy nie opuszczają urządzenia — brak wysyłki, brak serwera.",
    trustFast: "Działa poza głównym wątkiem: nawet duże zdjęcia pozostają natychmiastowe.",
    trustFree: "Bez konta, bez znaku wodnego, bez limitu liczby obrazów.",
    howHeading: "Jak to działa",
    step1: "Przeciągnij, wklej lub wybierz obraz.",
    step2: "Włącz wymagania, które ma spełnić.",
    step3: "Pobierz. Nic nigdy nie zostało wysłane.",
    shortcutTip: "Naciśnij Ctrl/⌘ + S, aby zapisać wynik.",
    privacyTitle: "Prywatność z założenia",
    privacyBody: "Każde przekształcenie dzieje się w Twojej przeglądarce. Nie moglibyśmy zobaczyć Twoich obrazów, nawet gdybyśmy chcieli.",
    skipToContent: "Przejdź do treści",
    home: "Strona główna",
    primaryNav: "Nawigacja główna",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
  },
  theme: { toLight: "Przełącz na jasny motyw", toDark: "Przełącz na ciemny motyw" },
  home: {
    badge: "100% prywatnie — Twoje pliki nigdy nie opuszczają urządzenia",
    h1: "Dopasuj obraz do wymaganych parametrów",
    subtitle:
      "Skompresuj do dokładnego rozmiaru, przeskaluj, przytnij lub zmień format — wybierz, czego potrzebujesz, resztą zajmiemy się my.",
    faq: [
      faqItem(
        "Czy mój obraz jest gdzieś wysyłany?",
        "Nie. Każde przekształcenie — kompresja, zmiana rozmiaru, przycinanie, konwersja — odbywa się w całości w Twojej przeglądarce przez Canvas API. Plik nigdy nie opuszcza urządzenia."
      ),
      faqItem(
        "Jakie formaty obrazów są obsługiwane?",
        "Możesz wgrać JPG, PNG, WebP, GIF, BMP, AVIF lub HEIC (domyślny format zdjęć z iPhone'a). Wynik jako JPG, PNG lub WebP."
      ),
      faqItem(
        "Czy mogę połączyć rozmiar pliku, wymiary i format za jednym razem?",
        "Tak — o to właśnie chodzi. Włącz dowolną kombinację maksymalnego rozmiaru pliku, szerokości/wysokości, przycięcia, obrotu i formatu wyjściowego: CrispPic zastosuje wszystko w jednym przebiegu."
      ),
      faqItem("Czy to naprawdę darmowe?", "Tak — bez konta, bez znaku wodnego i bez limitu przetwarzanych obrazów."),
    ],
  },
  toolPages: {
    compress: {
      badge: "100% prywatnie — Twoje pliki nigdy nie opuszczają urządzenia",
      h1: "Skompresuj obraz do dokładnego rozmiaru",
      subtitle: "Wybierz docelowy rozmiar pliku, a znajdziemy najwyższą jakość, która wciąż się w nim mieści.",
      faq: [
        faqItem(
          "Jak CrispPic trafia w dokładny rozmiar pliku?",
          "Wyszukiwaniem binarnym dobiera najwyższą jakość kodowania, która nadal mieści się w celu. Jeśli obraz nie mieści się przy żadnej jakości, jest zmniejszany i wyszukiwanie startuje ponownie."
        ),
        faqItem(
          "Dlaczego wynik nie ma dokładnie 100KB?",
          "Wynik jest gwarantowany na poziomie celu lub poniżej, ale trafienie idealnie w punkt nie jest możliwe — wolimy zostać poniżej niż przekroczyć."
        ),
        faqItem(
          "Które strony wymagają maksymalnego rozmiaru pliku?",
          "Typowe przykłady: portale urzędowe i wizowe, formularze rekrutacyjne, karty produktów w e-commerce oraz fora i CMS-y z limitami przesyłania."
        ),
      ],
    },
    resize: {
      badge: "100% prywatnie — Twoje pliki nigdy nie opuszczają urządzenia",
      h1: "Zmień rozmiar obrazu na dokładne wymiary",
      subtitle:
        "Ustaw szerokość i wysokość w pikselach albo skaluj procentowo — zablokuj proporcje, aby uniknąć zniekształceń.",
      faq: [
        faqItem(
          "Co się stanie, jeśli podam tylko szerokość?",
          "Wysokość zostanie obliczona automatycznie, aby zachować oryginalne proporcje — obraz nie zostanie rozciągnięty ani spłaszczony."
        ),
        faqItem(
          "Czy mogę zmienić rozmiar na dokładną szerokość i wysokość bez zniekształceń?",
          "Tak — przy zablokowanych proporcjach CrispPic dopasowuje obraz do ustawionej ramki bez rozciągania. Odblokuj je, jeśli naprawdę chcesz dokładny, możliwie nieproporcjonalny rozmiar."
        ),
        faqItem(
          "Czy mogę jednocześnie zmienić rozmiar i ustawić maksymalny rozmiar pliku?",
          "Tak — włącz także „Maksymalny rozmiar pliku”, a oba wymagania zostaną zastosowane razem w jednym przebiegu."
        ),
      ],
    },
    convert: {
      badge: "100% prywatnie — Twoje pliki nigdy nie opuszczają urządzenia",
      h1: "Konwertuj obraz na inny format",
      subtitle: "JPG, PNG, WebP — a zdjęcia HEIC z iPhone'a są konwertowane automatycznie przy wgrywaniu.",
      faq: [
        faqItem(
          "Na jakie formaty mogę konwertować?",
          "Wynik jako JPG, PNG lub WebP. Na wejściu akceptujemy JPG, PNG, WebP, GIF, BMP, AVIF oraz HEIC/HEIF."
        ),
        faqItem(
          "Czy konwersja przezroczystego PNG na JPG usunie przezroczystość?",
          "Tak — JPG nie ma kanału przezroczystości, więc przezroczyste obszary staną się białe. CrispPic ostrzeże Cię wcześniej; wybierz PNG lub WebP, aby ją zachować."
        ),
        faqItem(
          "Moje zdjęcia z iPhone'a to HEIC — czy mogę je konwertować?",
          "Tak. Wgraj plik .heic, a CrispPic skonwertuje go automatycznie przed zastosowaniem wybranego formatu."
        ),
      ],
    },
    crop: {
      badge: "100% prywatnie — Twoje pliki nigdy nie opuszczają urządzenia",
      h1: "Przytnij obraz do potrzebnych proporcji",
      subtitle: "Wgraj obraz, aby otworzyć edytor przycinania — wybierz proporcje, przeciągnij i zastosuj.",
      faq: [
        faqItem(
          "Jakie proporcje przycinania są dostępne?",
          "Dowolne, kwadrat (1:1), poziome (4:3), pionowe (3:4), panoramiczne (16:9), story (9:16) lub własne proporcje."
        ),
        faqItem(
          "Czy mogę zmienić przycięcie po jego zastosowaniu?",
          "Tak — kliknij ikonę ołówka obok „Przycięcie”, aby ponownie otworzyć edytor, albo ×, aby usunąć przycięcie."
        ),
        faqItem(
          "Czy mogę przyciąć i skompresować do rozmiaru naraz?",
          "Tak — po przycięciu włącz „Maksymalny rozmiar pliku”, a oba zostaną zastosowane razem."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Przeciągnij obraz lub kliknij, aby wgrać",
    dropzoneDrag: "Upuść w dowolnym miejscu",
    dropzoneHint: "JPG, PNG, WebP, AVIF lub HEIC — do 40 MB",
    dropzonePaste: "Możesz też wkleić zrzut ekranu",
    panelHeading: "Wymagania wyjściowe",
    maxFileSize: "Maksymalny rozmiar pliku",
    customSizeLabel: "Własny rozmiar w kilobajtach",
    dimensions: "Wymiary",
    resizeUnit: "Jednostka",
    unitPixels: "Piksele",
    unitPercent: "Procent",
    width: "Szerokość w pikselach",
    height: "Wysokość w pikselach",
    lockAspect: "Zablokuj proporcje",
    unlockAspect: "Odblokuj proporcje",
    presetPlaceholder: "Typowe rozmiary…",
    scale: "Skala",
    sourceSize: "Źródło: {size} px",
    crop: "Przycięcie",
    transform: "Obróć i odbij",
    rotateLeft: "Obróć w lewo",
    rotateRight: "Obróć w prawo",
    flipHorizontal: "Odbij w poziomie",
    flipVertical: "Odbij w pionie",
    resetTransform: "Resetuj",
    outputFormat: "Format wyjściowy",
    quality: "Jakość",
    qualityValue: "Jakość {value}%",
    alphaWarning: "JPG nie ma przezroczystości — przezroczyste obszary staną się białe.",
    openCropEditor: "Otwórz edytor przycinania",
    editCrop: "Edytuj przycięcie",
    removeCrop: "Usuń przycięcie",
    reading: "Wczytywanie obrazu…",
    processing: "Przetwarzanie…",
    passthrough: "Nie wybrano żadnych zmian — otrzymasz oryginalny plik.",
    download: "Pobierz",
    downloadStarted: "Pobieranie rozpoczęte.",
    newImage: "Nowy obraz",
    leaveConfirm: "Twój obraz istnieje tylko na tej karcie. Jeśli teraz wyjdziesz, zostanie utracony. Kontynuować?",
    targetMissed: "Nie udało się zejść poniżej {size} bez zbyt dużej straty jakości — to najmniejszy możliwy wynik.",
    before: "Przed",
    after: "Po",
    compareLabel: "Porównaj przed i po",
    compareValue: "{value}% przed, reszta po",
    custom: "Własny",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Post kwadratowy",
      portrait1350: "Post pionowy",
      story1920: "Story",
      og: "Podgląd w social media",
      avatar512: "Awatar",
      thumb256: "Miniatura",
      passport: "Zdjęcie do dokumentów",
    },
    formats: { auto: "Zachowaj", jpeg: "JPG", png: "PNG", webp: "WebP" },
  },
  errors: {
    fileTooLarge: "Ten plik ma {size} MB. Użyj obrazu poniżej {max} MB.",
    unsupportedType: "Użyj obrazu JPG, PNG, WebP, AVIF, GIF, BMP lub HEIC.",
    decodeFailed: "Nie udało się otworzyć tego pliku jako obrazu — może być uszkodzony.",
    heicFailed: "To wygląda na zdjęcie HEIC, którego nie udało się skonwertować. Wyeksportuj je najpierw jako JPG.",
    encodeFailed: "Twoja przeglądarka nie zapisała obrazu w tym formacie. Spróbuj innego formatu wyjściowego.",
    formatUnsupported: "Twoja przeglądarka nie potrafi zapisać tego formatu. Spróbuj JPG lub PNG.",
    canvasUnavailable: "Edycja obrazów jest niedostępna w tej przeglądarce.",
    outOfMemory: "Ten obraz jest zbyt duży dla Twojego urządzenia. Spróbuj mniejszego.",
    unknown: "Coś poszło nie tak podczas przetwarzania tego obrazu.",
  },
  cropModal: {
    title: "Przytnij obraz",
    cancel: "Anuluj",
    apply: "Zastosuj przycięcie",
    zoom: "Powiększenie",
    customWidth: "Szerokość własnych proporcji",
    customHeight: "Wysokość własnych proporcji",
    ratios: {
      Free: "Dowolne",
      Square: "Kwadrat",
      Landscape: "Poziome",
      Portrait: "Pionowe",
      Widescreen: "Panoramiczne",
      Story: "Story",
      Custom: "Własne",
    },
  },
  language: { label: "Język" },
  consent: {
    title: "Pliki cookie na tej stronie",
    body: "Twoje obrazy są zawsze przetwarzane na Twoim urządzeniu — to się nigdy nie zmienia. Chcielibyśmy dodatkowo zapisywać pliki cookie analityczne i reklamowe od Google, aby mierzyć użycie i utrzymać narzędzia za darmo. Jeśli odmówisz, wszystko nadal działa.",
    accept: "Akceptuję",
    decline: "Odrzuć",
    manage: "Ustawienia plików cookie",
    learnMore: "Polityka prywatności",
    close: "Zamknij",
  },
  errorPage: {
    title: "Coś poszło nie tak.",
    body: "Nieoczekiwany błąd przerwał działanie tej strony. Twoje obrazy nigdy nie zostały wysłane, więc nic nie zginęło — zwykle wystarczy spróbować ponownie.",
    retry: "Spróbuj ponownie",
    home: "Wróć na stronę główną",
  },
  notFound: {
    code: "404",
    title: "Ta strona nie istnieje.",
    body: "Narzędzie lub strona, której szukasz, mogła zostać przeniesiona albo link jest nieprawidłowy.",
    cta: "Wróć na stronę główną",
  },
  legal: {
    updatedLabel: "Ostatnia aktualizacja: {date}",
    about: {
      title: "O {siteName}",
      p1: "{siteName} powstał, by rozwiązać jeden konkretny problem: masz obraz, a coś — formularz, strona internetowa, aplikacja — wymaga, by spełniał dokładną specyfikację. Maksymalny rozmiar pliku. Dokładne wymiary. Konkretny format.",
      p2: "Zamiast każe Ci szukać, które ustawienie w którym programie da taki efekt, {siteName} pyta wprost o wynik, którego potrzebujesz, i zajmuje się resztą: zmienia rozmiar, kompresuje lub konwertuje według potrzeby.",
      howHeading: "Jak to działa",
      howBody: "Całe przetwarzanie obrazu odbywa się bezpośrednio w Twojej przeglądarce z użyciem standardowych technologii webowych. Twoje pliki nigdy nie są przesyłane na serwer — po prostu celowo nie mamy do tego infrastruktury.",
      whyHeading: "Dlaczego jest darmowy",
      whyBody: "{siteName} utrzymuje się z minimalnej, nienachalnej reklamy. Żadne narzędzie nie wymaga konta, subskrypcji ani płatnych funkcji.",
    },
    contact: {
      title: "Kontakt",
      intro: "Pytania, zgłoszenia błędów, propozycje nowych funkcji, albo cokolwiek dotyczące prywatności i sposobu przetwarzania Twoich danych — chętnie je poznamy.",
      emailBody: "Napisz do nas na {{LINK}}. Czytamy wszystko i zwykle odpowiadamy w ciągu kilku dni roboczych.",
      reportHeading: "Zgłaszanie problemu z narzędziem",
      reportIntro: "Ponieważ wszystko dzieje się w Twojej przeglądarce, nie widzimy, co poszło nie tak na Twoim urządzeniu — i nigdy nie otrzymujemy pliku, nad którym pracowałeś/aś. Aby błąd dało się odtworzyć, podaj proszę:",
      reportItem1: "na której stronie byłeś/aś i co próbowałeś/aś uzyskać;",
      reportItem2: "swoją przeglądarkę i system operacyjny wraz z wersjami;",
      reportItem3: "format i przybliżony rozmiar oryginalnego obrazu (proszę nie załączać samego obrazu, chyba że o to poprosimy).",
      privacyHeading: "Prywatność i wnioski dotyczące danych",
      privacyBody: "{siteName} nie ma kont i nie przechowuje danych osobowych, więc zwykle nie ma nic do wyeksportowania ani usunięcia. Jeśli masz pytanie dotyczące {{LINK}} lub plików cookie stron trzecich ustawianych po ich zaakceptowaniu, napisz na ten sam adres.",
      privacyLinkText: "polityki prywatności",
    },
    privacy: {
      title: "Polityka prywatności",
      imagesHeading: "Twoje obrazy",
      imagesBody: "Narzędzia {siteName} przetwarzają obrazy bezpośrednio w Twojej przeglądarce. Twoje pliki graficzne nie są przesyłane, transmitowane ani przechowywane na żadnym serwerze obsługiwanym przez nas. Nigdy nie widzimy, nie mamy dostępu ani nie zachowujemy treści żadnego przetwarzanego pliku.",
      cookiesHeading: "Pliki cookie i Twoja zgoda",
      cookiesBody1: "{siteName} nie ustawia własnych plików cookie. Jedyne pliki cookie, jakie ta strona może ustawić, pochodzą od opisanych poniżej usług stron trzecich i są ładowane dopiero po ich zaakceptowaniu w banerze cookie. Jeśli odmówisz lub jeszcze nie odpowiedziałeś/aś, żaden z tych skryptów nie jest wywoływany i żaden plik cookie strony trzeciej nie powstaje — każde narzędzie na stronie działa dokładnie tak samo w obu przypadkach.",
      cookiesBody2: "Twoja odpowiedź jest zapisywana w lokalnym magazynie Twojej przeglądarki (to nie plik cookie i nigdy nie jest nigdzie wysyłana), dzięki czemu nie pytamy Cię ponownie przy każdej wizycie. Możesz ją zmienić w dowolnym momencie za pomocą linku Preferencje plików cookie w stopce każdej strony; wycofanie zgody odświeża stronę, aby skrypty przestały działać.",
      analyticsHeading: "Statystyki",
      analyticsBody: "Za Twoją zgodą używamy Google Analytics, aby zrozumieć zagregowane korzystanie ze strony — na przykład jakie narzędzia są używane, jakie strony są odwiedzane oraz ogólne informacje o lokalizacji i urządzeniu. Dane te są, gdy to możliwe, anonimizowane/agregowane i nigdy nie są łączone z przetwarzanymi obrazami: rejestrowane przez nas zdarzenia opisują wyłącznie to, o co poproszono narzędzie (np. „plik został skompresowany”), nigdy nazwę pliku ani niczego wynikającego z treści obrazu.",
      adsHeading: "Reklamy",
      adsBody: "Za Twoją zgodą {siteName} może wyświetlać reklamy dostarczane przez sieci reklamowe stron trzecich (takie jak Google AdSense), aby narzędzia pozostały darmowe. Sieci te mogą używać plików cookie lub podobnych technologii do wyświetlania trafnych reklam, a Google może przetwarzać te dane jako niezależny administrator — zobacz {{LINK1}}. Możesz też kontrolować personalizację reklam poprzez przeglądarkę lub {{LINK2}}. Bez zgody skrypt reklamowy nigdy nie jest ładowany, a zarezerwowane miejsca pokazują zamiast tego naszą własną treść.",
      adsLink1Text: "jak Google wykorzystuje informacje z witryn korzystających z jego usług",
      adsLink2Text: "Ustawienia reklam Google",
      accountsHeading: "Konta i dane osobowe",
      accountsBody: "{siteName} nie wymaga konta, logowania ani danych osobowych do korzystania z żadnego narzędzia.",
      contactHeading: "Kontakt",
      contactBody: "Pytania dotyczące tej polityki można wysyłać na {{LINK}}.",
    },
    terms: {
      title: "Regulamin",
      useHeading: "Korzystanie z usługi",
      useBody: "{siteName} jest udostępniany bezpłatnie, w stanie takim, jaki jest, bez jakichkolwiek gwarancji. Odpowiadasz za upewnienie się, że masz prawo przetwarzać każdy obraz otwierany za pomocą narzędzi tej strony. Nic nie jest przesyłane: pliki przez cały czas pozostają na Twoim urządzeniu.",
      noGuaranteesHeading: "Brak gwarancji",
      noGuaranteesBody: "Choć {siteName} dąży do dokładnych, poprawnych wyników, nie gwarantujemy, że wynik będzie wolny od błędów lub odpowiedni do każdego konkretnego celu. Zawsze zweryfikuj wynik, zanim oprzesz się na nim przy krytycznym zgłoszeniu (np. dokumencie prawnym lub oficjalnym wniosku).",
      adsHeading: "Reklamy i treści stron trzecich",
      adsBody: "{siteName} jest finansowany z reklam, dostarczanych przez sieci stron trzecich dopiero po zaakceptowaniu przez Ciebie plików cookie reklamowych. Nie wybieramy, nie popieramy ani nie kontrolujemy poszczególnych wyświetlanych reklam i nie odpowiadamy za treść witryn, do których prowadzą. Sposób wykorzystania danych przez te sieci oraz jak je wyłączyć opisano w {{LINK}}.",
      privacyLinkText: "polityce prywatności",
      acceptableHeading: "Dozwolone użycie",
      acceptableBody: "Nie możesz używać {siteName} do przetwarzania nielegalnych treści ani próbować zakłócać, przeciążać czy poddawać inżynierii wstecznej tej usługi.",
      changesHeading: "Zmiany",
      changesBody: "Niniejszy regulamin może być od czasu do czasu aktualizowany. Dalsze korzystanie ze strony po wprowadzeniu zmian oznacza akceptację zaktualizowanego regulaminu.",
      contactHeading: "Kontakt",
      contactBody: "Pytania można wysyłać na {{LINK}}.",
    },
  },
  landings: {
    size: {
      h1: "Skompresuj obraz do {size}",
      subtitle: "Wrzuć plik JPG, PNG lub WebP i odbierz go w rozmiarze {size} lub mniejszym, w najlepszej możliwej jakości. Nic nie jest przesyłane na serwer.",
      q1: "Jak skompresować obraz do {size}?",
      a1: "Przeciągnij obraz na tę stronę. Cel {size} jest już włączony, więc wynik pojawia się od razu — wystarczy go pobrać. Jeśli potrzebujesz też konkretnych wymiarów lub innego formatu, włącz te opcje, a zostaną zastosowane w tym samym kroku.",
      q2: "Czy wynik będzie miał dokładnie {size}?",
      a2: "Gwarantujemy, że będzie równy {size} lub mniejszy, nigdy większy. Trafienie w dokładną wartość nie jest możliwe przy kompresji stratnej, dlatego zawsze zostajemy poniżej limitu — a to właśnie sprawdza formularz przesyłania plików.",
      q3: "Kto potrzebuje {size}?",
      q4: "Co jeśli moje zdjęcie nie może osiągnąć {size}?",
      a4: "Najpierw obniżana jest jakość; jeśli nawet najniższa sensowna jakość jest wciąż za duża, obraz jest zmniejszany i wyszukiwanie zaczyna się od nowa. Jeśli cel jest naprawdę nieosiągalny, otrzymujesz najmniejszy możliwy wynik, wyraźnie oznaczony, zamiast cichego niepowodzenia.",
      q5: "Czy mój obraz jest przesyłany na serwer?",
      a5: "Nie. Cały proces odbywa się w Twojej przeglądarce za pomocą API Canvas, poza głównym wątkiem, w Web Workerze. Plik nigdy nie opuszcza Twojego urządzenia, więc nie ma niczego, co moglibyśmy zobaczyć, zapisać czy usunąć.",
    },
    whoAsks: {
      "20kb": "20 KB to jeden z najbardziej rygorystycznych powszechnie stosowanych limitów: portale egzaminów państwowych i wizowe często narzucają ten limit na podpis lub zdjęcie, a niektóre starsze fora ograniczają awatary do tej samej wartości.",
      "50kb": "50 KB to zwykły limit przy przesyłaniu zdjęć do paszportu i dowodu osobistego na portalach urzędowych oraz dla zeskanowanych dokumentów dołączanych do formularzy online.",
      "100kb": "100 KB to najczęstszy limit przesyłania w formularzach rekrutacyjnych, na portalach uczelnianych i w starszych systemach zarządzania treścią.",
      "200kb": "200 KB to typowy limit dla zdjęć produktów w e-commerce i ogłoszeń na platformach handlowych, gdzie platforma chce użytecznego obrazu, który mimo to szybko wczytuje się na telefonie.",
      "500kb": "500 KB to komfortowy budżet pod kątem wydajności strony: wystarczająco duży dla zdjęcia hero na pełną szerokość, wystarczająco mały, by nie zdominować czasu ładowania strony.",
      "1mb": "1 MB to limit załączników i przesyłania w wielu systemach pocztowych, narzędziach do zgłoszeń oraz formularzach ubezpieczeniowych i szkodowych.",
    },
    passportPhotoSizePixels: {
      h1: "Dopasuj zdjęcie do paszportu do właściwego rozmiaru w pikselach",
      subtitle: "413 × 531 pikseli to 35 × 45 mm przy 300 dpi — rozmiar ICAO wymagany przez większość portali paszportowych i wizowych. Jest już ustawiony poniżej.",
      faq: [
        {
          q: "Jaki jest rozmiar zdjęcia do paszportu w pikselach?",
          a: "Standard ICAO stosowany w większości krajów to 35 × 45 mm. Wydrukowane przy 300 dpi daje to 413 × 531 pikseli, co ustawia ta strona. Wyjątkiem jest paszport amerykański: ma 2 × 2 cale, czyli 600 × 600 pikseli przy 300 dpi.",
        },
        {
          q: "Jak uzyskać dokładnie 413 × 531 bez rozciągania twarzy?",
          a: "Najpierw przytnij, potem zmień rozmiar. Otwórz edytor przycinania, ustaw niestandardowe proporcje 35 : 45, umieść w nich głowę i zatwierdź — zmiana rozmiaru trafi wtedy dokładnie w wymiary w pikselach, bez zniekształceń. Pozostawienie samej blokady proporcji bez przycinania dopasuje zamiast tego zdjęcie wewnątrz 413 × 531, co zachowuje proporcje, ale nie wypełnia kadru.",
        },
        {
          q: "Portal ma też limit rozmiaru pliku — czy mogę zrobić jedno i drugie?",
          a: "Tak. Włącz też 'Maksymalny rozmiar pliku' i wybierz swój limit; wymiary i limit rozmiaru są stosowane razem, w jednym kroku, więc nie musisz kompresować i zmieniać rozmiaru w dwóch różnych narzędziach.",
        },
        {
          q: "Moje zdjęcie to plik HEIC z iPhone'a — czy to zadziała?",
          a: "Tak. Zdjęcia HEIC i HEIF są konwertowane automatycznie zaraz po wrzuceniu, jeszcze zanim zostanie zastosowane cokolwiek innego, a wyeksportować możesz do JPG, PNG lub WebP.",
        },
      ],
    },
    resizeImageTo1080x1080: {
      h1: "Zmień rozmiar obrazu na 1080 × 1080",
      subtitle: "Kwadratowy format 1:1 wymagany przez Instagram, LinkedIn i większość platform reklamowych. Już ustawiony — wrzuć obraz i pobierz go.",
      faq: [
        {
          q: "Dlaczego akurat 1080 × 1080?",
          a: "To natywna rozdzielczość kwadratowego posta na portalu społecznościowym: Instagram, Facebook i LinkedIn wyświetlają obrazy 1:1 przy 1080 px na dłuższym boku, więc przesłanie dokładnie takiego rozmiaru zapobiega zarówno rozmyciu przez powiększanie, jak i niepotrzebnemu przekodowaniu po ich stronie.",
        },
        {
          q: "Moje zdjęcie nie jest kwadratowe — co się wtedy stanie?",
          a: "Przy zablokowanych proporcjach obraz zostanie dopasowany wewnątrz 1080 × 1080 bez rozciągania, więc proporcje zostają zachowane. Aby naprawdę wypełnić kwadrat, otwórz najpierw edytor przycinania, wybierz proporcje Kwadrat i ustaw kadr na obiekcie — wtedy zmiana rozmiaru trafi dokładnie w 1080 × 1080.",
        },
        {
          q: "Czy mogę też utrzymać plik poniżej limitu rozmiaru?",
          a: "Tak — włącz 'Maksymalny rozmiar pliku', a oba wymagania zostaną zastosowane razem w jednym kroku, co zwykle jest tym, czego wymaga specyfikacja platformy reklamowej.",
        },
        {
          q: "Czy powiększenie sprawi, że małe zdjęcie będzie ostrzejsze?",
          a: "Nie. Powiększanie wymyśla piksele, których nie ma, więc zdjęcie 400 px przeskalowane do 1080 będzie wyglądać nieostro. Zawsze zaczynaj od największego dostępnego oryginału; to przy zmniejszaniu jakość zostaje zachowana.",
        },
      ],
    },
    convertHeicToJpg: {
      h1: "Przekonwertuj zdjęcie HEIC na JPG",
      subtitle: "Wrzuć zdjęcie z iPhone'a — HEIC jest automatycznie dekodowany, a następnie zapisywany z powrotem jako JPG, który każdy może otworzyć.",
      faq: [
        {
          q: "Dlaczego moje zdjęcie z iPhone'a nie otwiera się na tej stronie lub w aplikacji?",
          a: "iPhone domyślnie zapisuje zdjęcia w formacie HEIC (lub HEIF), którego wciąż nie potrafi odczytać większość oprogramowania spoza ekosystemu Apple. Jednorazowa konwersja na JPG rozwiązuje to wszędzie, bo JPG otwiera się dosłownie wszędzie.",
        },
        {
          q: "Czy muszę coś zainstalować, żeby przekonwertować HEIC?",
          a: "Nie. Najnowsze wersje Safari potrafią natywnie dekodować HEIC, a każda inna przeglądarka korzysta z małego dekodera wbudowanego w stronę, który pobiera się dopiero, gdy naprawdę wrzucisz plik HEIC — w obu przypadkach na Twoim urządzeniu nic nie jest instalowane.",
        },
        {
          q: "Czy mogę jednocześnie zmienić rozmiar lub skompresować zdjęcie?",
          a: "Tak — włącz wymiary lub maksymalny rozmiar pliku obok formatu, a wszystkie trzy zostaną zastosowane razem w jednym kroku, co jest typowe dla zdjęć HEIC prosto z telefonu: zwykle też są duże.",
        },
        {
          q: "Czy moje zdjęcie jest przesyłane na serwer, aby je przekonwertować?",
          a: "Nie. Zarówno dekodowanie, jak i ponowne kodowanie odbywają się lokalnie w Twojej przeglądarce. Zdjęcie nigdy nie opuszcza Twojego urządzenia.",
        },
      ],
    },
    convertPngToJpg: {
      h1: "Przekonwertuj PNG na JPG",
      subtitle: "Wrzuć plik PNG i odbierz JPG — zwykle ułamek jego rozmiaru, gotowy do formularzy, które nie akceptują PNG.",
      faq: [
        {
          q: "Dlaczego warto przekonwertować PNG na JPG?",
          a: "PNG jest bezstratny, co sprawia, że zrzuty ekranu i grafiki są ostre, ale też duże. JPG kompresuje treści fotograficzne znacznie efektywniej i jest formatem, którego faktycznie oczekuje większość formularzy z limitem rozmiaru.",
        },
        {
          q: "Mój PNG ma przezroczyste tło — co się z nim stanie?",
          a: "JPG nie ma kanału przezroczystości, więc przezroczyste obszary przed zapisem zostaną wypełnione bielą. Jeśli musisz zachować przezroczystość, konwertuj do WebP zamiast do JPG.",
        },
        {
          q: "Czy mogę też trafić w dokładny rozmiar pliku?",
          a: "Tak — włącz też 'Maksymalny rozmiar pliku', a format i docelowy rozmiar zostaną zastosowane razem w jednym kroku.",
        },
        {
          q: "Czy stracę na jakości?",
          a: "Trochę — JPG to format stratny. Przy domyślnej jakości różnica rzadko jest widoczna; jeśli chcesz nad nią panować, włącz ręczną jakość i dostosuj suwak.",
        },
      ],
    },
    convertWebpToJpg: {
      h1: "Przekonwertuj obraz WebP na JPG",
      subtitle: "Wrzuć plik WebP i odbierz JPG, który otworzy się wszędzie, także w narzędziach, które jeszcze nie obsługują WebP.",
      faq: [
        {
          q: "Dlaczego miałbym konwertować WebP na JPG?",
          a: "Większość nowoczesnych przeglądarek wyświetla WebP bez problemu, ale wiele starszego oprogramowania, niektóre edytory dokumentów i kilka formularzy przesyłania wciąż akceptuje tylko JPG lub PNG. Jednorazowa konwersja rozwiązuje to wszędzie tam, gdzie później potrzebujesz użyć pliku.",
        },
        {
          q: "Czy konwersja na JPG zmienia jakość obrazu?",
          a: "JPG również jest formatem stratnym, więc dochodzi do ponownego kodowania, ale przy domyślnej jakości różnica względem typowego WebP jest niewielka. Włącz ręczną jakość, jeśli chcesz sam kontrolować ten kompromis.",
        },
        {
          q: "Czy mogę też zmienić rozmiar podczas konwersji?",
          a: "Tak — włącz wymiary lub skalę procentową obok zmiany formatu, a obie zostaną zastosowane w tym samym kroku.",
        },
        {
          q: "Czy to co innego niż zrzut ekranu obrazu?",
          a: "Tak — zrzut ekranu ponownie przechwytuje ekran w rozdzielczości Twojego monitora i dodaje na to kompresję. Ta konwersja koduje ponownie oryginalne dane pikseli bezpośrednio, więc zachowujesz prawdziwą rozdzielczość i jakość obrazu źródłowego.",
        },
      ],
    },
    convertJpgToWebp: {
      h1: "Przekonwertuj obraz JPG na WebP",
      subtitle: "Wrzuć plik JPG i odbierz lżejszy WebP — zwykle o 25–35% lżejszy przy tej samej jakości wizualnej, idealny dla szybszej strony.",
      faq: [
        {
          q: "Dlaczego warto przekonwertować JPG na WebP?",
          a: "WebP przy tej samej jakości wizualnej zazwyczaj daje wyraźnie mniejszy plik niż JPG, dlatego stał się domyślną rekomendacją w audytach wydajności stron (także we własnym PageSpeed Insights Google).",
        },
        {
          q: "Czy WebP wyświetli się wszędzie?",
          a: "Każda powszechnie używana dziś przeglądarka obsługuje WebP. Głównym powodem, by zachować JPG, jest kompatybilność ze starszym oprogramowaniem poza przeglądarką — na przykład niektórymi desktopowymi edytorami obrazów i narzędziami projektowymi.",
        },
        {
          q: "Czy mogę ustawić maksymalny rozmiar pliku dla wyniku WebP?",
          a: "Tak — włącz 'Maksymalny rozmiar pliku', a zostanie on zastosowany razem ze zmianą formatu, w jednym kroku.",
        },
        {
          q: "Czy WebP obsługuje przezroczystość tak jak PNG?",
          a: "Tak, w przeciwieństwie do JPG. Jeśli Twój plik źródłowy ma przezroczystość, a konwertujesz z PNG, a nie z JPG, WebP ją zachowuje.",
        },
      ],
    },
  },
};
