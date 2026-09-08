import type { Dictionary } from "./en";

const faqItem = (q: string, a: string) => ({ q, a });

export const id: Dictionary = {
  nav: { compress: "Kompres", resize: "Ubah ukuran", crop: "Potong", convert: "Konversi", faq: "FAQ" },
  footer: {
    tools: "Alat",
    company: "Perusahaan",
    legal: "Legal",
    compress: "Kompres ke ukuran",
    resize: "Ubah ukuran",
    crop: "Potong",
    convert: "Konversi format",
    about: "Tentang",
    contact: "Kontak",
    faq: "FAQ",
    privacy: "Privasi",
    terms: "Ketentuan",
    tagline: "Sesuaikan gambarmu dengan persyaratan.",
    privacyPill: "Tidak ada yang diunggah",
    copyright: "Semua pemrosesan terjadi di peramban kamu.",
  },
  common: {
    faqHeading: "Pertanyaan umum",
    relatedHeading: "Alat terkait",
    faqPageTitle: "Pertanyaan yang sering diajukan",
    faqGeneral: "Umum",
    whyHeading: "Kenapa CrispPic",
    trustPrivate: "Berkasmu tidak pernah meninggalkan perangkat — tanpa unggahan, tanpa server.",
    trustFast: "Berjalan di luar thread utama, jadi foto besar pun tetap instan.",
    trustFree: "Tanpa akun, tanpa watermark, tanpa batas jumlah gambar.",
    howHeading: "Cara kerjanya",
    step1: "Seret, tempel, atau pilih sebuah gambar.",
    step2: "Aktifkan persyaratan yang harus dipenuhi.",
    step3: "Unduh. Tidak ada yang pernah diunggah.",
    shortcutTip: "Tekan Ctrl/⌘ + S untuk menyimpan hasilnya.",
    privacyTitle: "Privat sejak rancangan",
    privacyBody: "Setiap transformasi berjalan di peramban kamu. Kami tidak bisa melihat gambarmu sekalipun ingin.",
    skipToContent: "Lewati ke konten",
    home: "Beranda",
    primaryNav: "Navigasi utama",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
  },
  theme: { toLight: "Beralih ke tema terang", toDark: "Beralih ke tema gelap" },
  home: {
    badge: "100% privat — berkasmu tidak pernah meninggalkan perangkat",
    h1: "Sesuaikan gambarmu dengan persyaratan",
    subtitle:
      "Kompres ke ukuran persis, ubah dimensi, potong, atau ganti format — pilih yang kamu butuhkan, sisanya kami urus.",
    faq: [
      faqItem(
        "Apakah gambar saya diunggah ke suatu tempat?",
        "Tidak. Setiap transformasi — kompresi, pengubahan ukuran, pemotongan, konversi — berjalan sepenuhnya di peramban kamu lewat Canvas API. Berkas tidak pernah meninggalkan perangkatmu."
      ),
      faqItem(
        "Format gambar apa saja yang didukung?",
        "Kamu bisa mengunggah JPG, PNG, WebP, GIF, BMP, AVIF, atau HEIC (format bawaan foto iPhone). Keluaran berupa JPG, PNG, atau WebP."
      ),
      faqItem(
        "Bisakah saya menggabungkan ukuran, dimensi, dan format sekaligus?",
        "Ya — justru itu intinya. Aktifkan kombinasi apa pun dari ukuran berkas maksimum, lebar/tinggi, pemotongan, rotasi, dan format keluaran: CrispPic menerapkan semuanya dalam satu proses."
      ),
      faqItem("Benar-benar gratis?", "Ya, tanpa akun, tanpa watermark, dan tanpa batas jumlah gambar yang diproses."),
    ],
  },
  toolPages: {
    compress: {
      badge: "100% privat — berkasmu tidak pernah meninggalkan perangkat",
      h1: "Kompres gambarmu ke ukuran yang persis",
      subtitle: "Pilih target ukuran berkas dan kami cari kualitas tertinggi yang masih muat di bawahnya.",
      faq: [
        faqItem(
          "Bagaimana CrispPic mencapai ukuran berkas yang persis?",
          "Ia melakukan pencarian biner pada kualitas enkoding sampai menemukan yang tertinggi namun masih di bawah targetmu. Jika gambar tetap tidak muat pada kualitas mana pun, ukurannya dikecilkan dan pencarian diulang."
        ),
        faqItem(
          "Kenapa hasil saya tidak tepat 100KB?",
          "Hasilnya dijamin sama dengan atau di bawah targetmu, tetapi mendarat tepat di angka itu tidak mungkin — kami selalu memilih aman di bawah daripada melewatinya."
        ),
        faqItem(
          "Situs apa saja yang meminta ukuran berkas maksimum?",
          "Contoh umum: portal pemerintah dan pengajuan visa, formulir lamaran kerja, daftar produk e-commerce, serta forum atau CMS dengan batas unggahan."
        ),
      ],
    },
    resize: {
      badge: "100% privat — berkasmu tidak pernah meninggalkan perangkat",
      h1: "Ubah gambarmu ke dimensi yang persis",
      subtitle: "Atur lebar dan tinggi dalam piksel atau skala dalam persen — kunci rasio agar tidak melar.",
      faq: [
        faqItem(
          "Apa yang terjadi jika saya hanya mengisi lebar?",
          "Tinggi dihitung otomatis untuk mempertahankan rasio aspek asli — gambar tidak akan melar atau gepeng."
        ),
        faqItem(
          "Bisakah saya mengubah ke lebar dan tinggi persis tanpa distorsi?",
          "Bisa — dengan rasio terkunci, CrispPic memasukkan gambarmu ke dalam kotak yang kamu tentukan tanpa meregangkannya. Buka kuncinya jika kamu memang ingin ukuran persis meski tidak proporsional."
        ),
        faqItem(
          "Bisakah mengubah ukuran dan menetapkan ukuran berkas maksimum sekaligus?",
          "Bisa — aktifkan juga 'Ukuran berkas maksimum' dan kedua syarat diterapkan bersamaan dalam satu proses."
        ),
      ],
    },
    convert: {
      badge: "100% privat — berkasmu tidak pernah meninggalkan perangkat",
      h1: "Konversi gambarmu ke format lain",
      subtitle: "JPG, PNG, WebP — dan foto HEIC dari iPhone dikonversi otomatis saat diunggah.",
      faq: [
        faqItem(
          "Ke format apa saja saya bisa mengonversi?",
          "Keluaran berupa JPG, PNG, atau WebP. Masukan menerima JPG, PNG, WebP, GIF, BMP, AVIF, dan HEIC/HEIF."
        ),
        faqItem(
          "Apakah mengonversi PNG transparan ke JPG menghilangkan transparansi?",
          "Ya — JPG tidak punya kanal transparansi, jadi area transparan menjadi putih. CrispPic memperingatkan lebih dulu; pilih PNG atau WebP untuk mempertahankannya."
        ),
        faqItem(
          "Foto iPhone saya berformat HEIC — bisa dikonversi?",
          "Bisa. Unggah berkas .heic dan CrispPic mengonversinya otomatis sebelum menerapkan format pilihanmu."
        ),
      ],
    },
    crop: {
      badge: "100% privat — berkasmu tidak pernah meninggalkan perangkat",
      h1: "Potong gambarmu ke rasio yang kamu butuhkan",
      subtitle: "Unggah gambar untuk membuka editor pemotongan — pilih rasio, seret untuk memposisikan, lalu terapkan.",
      faq: [
        faqItem(
          "Rasio pemotongan apa saja yang tersedia?",
          "Bebas, persegi (1:1), lanskap (4:3), potret (3:4), layar lebar (16:9), story (9:16), atau rasio khusus yang kamu ketik sendiri."
        ),
        faqItem(
          "Bisakah saya menyesuaikan potongan setelah diterapkan?",
          "Bisa — klik ikon pensil di samping 'Potongan' untuk membuka editor lagi, atau × untuk menghapus potongan sepenuhnya."
        ),
        faqItem(
          "Bisakah memotong dan mengompres ke ukuran target sekaligus?",
          "Bisa — aktifkan 'Ukuran berkas maksimum' setelah memotong dan keduanya diterapkan bersama."
        ),
      ],
    },
  },
  tool: {
    dropzoneIdle: "Seret gambar, atau klik untuk mengunggah",
    dropzoneDrag: "Lepaskan di mana saja",
    dropzoneHint: "JPG, PNG, WebP, AVIF, atau HEIC — hingga 40 MB",
    dropzonePaste: "Kamu juga bisa menempel tangkapan layar",
    panelHeading: "Persyaratan keluaran",
    maxFileSize: "Ukuran berkas maksimum",
    customSizeLabel: "Ukuran khusus dalam kilobita",
    dimensions: "Dimensi",
    resizeUnit: "Satuan",
    unitPixels: "Piksel",
    unitPercent: "Persen",
    width: "Lebar dalam piksel",
    height: "Tinggi dalam piksel",
    lockAspect: "Kunci rasio aspek",
    unlockAspect: "Buka kunci rasio aspek",
    presetPlaceholder: "Ukuran umum…",
    scale: "Skala",
    sourceSize: "Sumber: {size} px",
    crop: "Potongan",
    transform: "Putar & balik",
    rotateLeft: "Putar ke kiri",
    rotateRight: "Putar ke kanan",
    flipHorizontal: "Balik horizontal",
    flipVertical: "Balik vertikal",
    resetTransform: "Atur ulang",
    outputFormat: "Format keluaran",
    quality: "Kualitas",
    qualityValue: "Kualitas {value}%",
    alphaWarning: "JPG tidak punya transparansi — area transparan akan menjadi putih.",
    openCropEditor: "Buka editor pemotongan",
    editCrop: "Ubah potongan",
    removeCrop: "Hapus potongan",
    reading: "Membaca gambar…",
    processing: "Memproses…",
    passthrough: "Tidak ada perubahan yang diminta — kamu akan menerima berkas aslimu.",
    download: "Unduh",
    downloadStarted: "Unduhan dimulai.",
    newImage: "Gambar baru",
    leaveConfirm: "Gambar Anda hanya ada di tab ini. Jika keluar sekarang, gambar akan hilang. Lanjutkan?",
    targetMissed: "Tidak bisa turun di bawah {size} tanpa kehilangan terlalu banyak kualitas — ini hasil terkecil yang bisa kami capai.",
    before: "Sebelum",
    after: "Sesudah",
    compareLabel: "Bandingkan sebelum dan sesudah",
    compareValue: "{value}% sebelum, sisanya sesudah",
    custom: "Khusus",
    presets: {
      hd1080: "Full HD",
      hd720: "HD",
      square1080: "Post persegi",
      portrait1350: "Post potret",
      story1920: "Story",
      og: "Pratinjau sosial",
      avatar512: "Avatar",
      thumb256: "Miniatur",
      passport: "Pas foto",
    },
    formats: { auto: "Pertahankan", jpeg: "JPG", png: "PNG", webp: "WebP" },
  },
  errors: {
    fileTooLarge: "Berkas itu berukuran {size} MB. Gunakan gambar di bawah {max} MB.",
    unsupportedType: "Gunakan gambar JPG, PNG, WebP, AVIF, GIF, BMP, atau HEIC.",
    decodeFailed: "Berkas ini tidak bisa dibuka sebagai gambar — mungkin rusak.",
    heicFailed: "Ini tampak seperti foto HEIC dan tidak bisa dikonversi. Coba ekspor sebagai JPG dulu.",
    encodeFailed: "Peramban kamu tidak bisa menyimpan gambar dalam format ini. Coba format keluaran lain.",
    formatUnsupported: "Peramban kamu tidak bisa menulis format ini. Coba JPG atau PNG.",
    canvasUnavailable: "Penyuntingan gambar tidak tersedia di peramban ini.",
    outOfMemory: "Gambar ini terlalu besar untuk diproses perangkatmu. Coba yang lebih kecil.",
    unknown: "Terjadi kesalahan saat memproses gambar ini.",
  },
  cropModal: {
    title: "Potong gambar",
    cancel: "Batal",
    apply: "Terapkan potongan",
    zoom: "Zoom",
    customWidth: "Lebar rasio khusus",
    customHeight: "Tinggi rasio khusus",
    ratios: {
      Free: "Bebas",
      Square: "Persegi",
      Landscape: "Lanskap",
      Portrait: "Potret",
      Widescreen: "Layar lebar",
      Story: "Story",
      Custom: "Khusus",
    },
  },
  language: { label: "Bahasa" },
  consent: {
    title: "Cookie di situs ini",
    body: "Gambarmu selalu diproses di perangkatmu sendiri — itu tidak pernah berubah. Kami juga ingin memasang cookie analitik dan iklan dari Google, untuk mengukur penggunaan dan menjaga alat ini tetap gratis. Jika kamu menolak, semuanya tetap berfungsi.",
    accept: "Terima",
    decline: "Tolak",
    manage: "Preferensi cookie",
    learnMore: "Kebijakan Privasi",
    close: "Tutup",
  },
  errorPage: {
    title: "Ada yang salah.",
    body: "Kesalahan tak terduga menghentikan halaman ini. Gambarmu tidak pernah diunggah, jadi tidak ada yang hilang — biasanya cukup dicoba lagi.",
    retry: "Coba lagi",
    home: "Kembali ke beranda",
  },
  notFound: {
    code: "404",
    title: "Halaman ini tidak ada.",
    body: "Alat atau halaman yang kamu cari mungkin sudah dipindahkan, atau tautannya rusak.",
    cta: "Kembali ke beranda",
  },
  legal: {
    updatedLabel: "Terakhir diperbarui: {date}",
    about: {
      title: "Tentang {siteName}",
      p1: "{siteName} ada untuk menyelesaikan satu masalah spesifik: kamu punya gambar, dan sesuatu — formulir, situs web, aplikasi — mengharuskannya memenuhi spesifikasi yang tepat. Ukuran file maksimum. Dimensi yang pasti. Format tertentu.",
      p2: "Alih-alih membuatmu mencari tahu pengaturan mana, di software mana, yang akan membawamu ke sana, {siteName} langsung menanyakan hasil yang kamu butuhkan dan mengurus sisanya: mengubah ukuran, mengompres, atau mengonversi sesuai kebutuhan.",
      howHeading: "Cara kerjanya",
      howBody: "Semua pemrosesan gambar berjalan langsung di browser kamu menggunakan teknologi web standar. File kamu tidak pernah diunggah ke server — kami sengaja tidak memiliki infrastruktur untuk menerimanya.",
      whyHeading: "Kenapa gratis",
      whyBody: "{siteName} didukung oleh iklan minimal yang tidak mengganggu. Tidak ada akun, langganan, atau fitur berbayar di alat mana pun.",
    },
    contact: {
      title: "Kontak",
      intro: "Pertanyaan, laporan bug, permintaan fitur, atau apa pun soal privasi dan bagaimana data kamu diperlakukan — kami ingin mendengarnya.",
      emailBody: "Kirim email ke {{LINK}}. Kami membaca semuanya dan biasanya membalas dalam beberapa hari kerja.",
      reportHeading: "Melaporkan masalah pada sebuah alat",
      reportIntro: "Karena semuanya berjalan di dalam browser kamu, kami tidak bisa melihat apa yang salah di perangkatmu — dan kami tidak pernah menerima file yang sedang kamu kerjakan. Agar bug bisa direproduksi, sertakan:",
      reportItem1: "halaman mana yang kamu buka, dan apa yang ingin kamu hasilkan;",
      reportItem2: "browser dan sistem operasi kamu, beserta versinya;",
      reportItem3: "format dan perkiraan ukuran gambar asli (tolong jangan lampirkan gambarnya sendiri kecuali kami memintanya).",
      privacyHeading: "Privasi dan permintaan data",
      privacyBody: "{siteName} tidak memiliki akun dan tidak menyimpan data pribadi, jadi biasanya tidak ada yang perlu diekspor atau dihapus. Jika kamu punya pertanyaan tentang {{LINK}}, atau tentang cookie pihak ketiga yang diatur saat kamu menyetujuinya, tulis ke alamat yang sama.",
      privacyLinkText: "kebijakan privasi",
    },
    privacy: {
      title: "Kebijakan Privasi",
      imagesHeading: "Gambar kamu",
      imagesBody: "Alat-alat {siteName} memproses gambar langsung di browser kamu. File gambarmu tidak diunggah, dikirim, atau disimpan di server mana pun yang kami operasikan. Kami tidak pernah melihat, mengakses, atau menyimpan konten file apa pun yang kamu proses.",
      cookiesHeading: "Cookie dan persetujuanmu",
      cookiesBody1: "{siteName} tidak memasang cookie sendiri. Satu-satunya cookie yang bisa dipasang situs ini adalah milik layanan pihak ketiga yang dijelaskan di bawah, dan hanya dimuat setelah kamu menyetujuinya di banner cookie. Jika kamu menolak, atau belum menjawab, tidak ada skrip tersebut yang diminta dan tidak ada cookie pihak ketiga yang dibuat — setiap alat di situs ini bekerja persis sama di kedua kondisi tersebut.",
      cookiesBody2: "Jawabanmu disimpan di penyimpanan lokal browsermu (bukan cookie, dan tidak pernah dikirim ke mana pun) sehingga kamu tidak ditanya lagi setiap kunjungan. Kamu bisa mengubahnya kapan saja lewat tautan Preferensi cookie di footer setiap halaman; menarik persetujuan akan memuat ulang halaman agar skrip berhenti berjalan.",
      analyticsHeading: "Analitik",
      analyticsBody: "Dengan persetujuanmu, kami menggunakan Google Analytics untuk memahami penggunaan agregat — misalnya alat mana yang digunakan, halaman mana yang dikunjungi, dan informasi lokasi serta perangkat secara umum. Data ini dianonimkan/diagregasi bila memungkinkan dan tidak pernah dikaitkan dengan gambar yang kamu proses: peristiwa yang kami catat hanya menjelaskan apa yang diminta dari alat tersebut (misalnya \"sebuah file dikompres\"), bukan nama file atau apa pun yang berasal dari konten gambar.",
      adsHeading: "Iklan",
      adsBody: "Dengan persetujuanmu, {siteName} dapat menampilkan iklan yang disajikan oleh jaringan pihak ketiga (seperti Google AdSense) untuk menjaga alat-alat ini tetap gratis. Jaringan ini mungkin menggunakan cookie atau teknologi serupa untuk menampilkan iklan yang relevan, dan Google dapat memproses data ini sebagai pengontrol independen — lihat {{LINK1}}. Kamu juga bisa mengontrol personalisasi iklan lewat browsermu atau melalui {{LINK2}}. Tanpa persetujuan, skrip iklan tidak pernah dimuat dan area iklan yang dicadangkan menampilkan konten kami sendiri.",
      adsLink1Text: "bagaimana Google menggunakan informasi dari situs yang memakai layanannya",
      adsLink2Text: "Pengaturan Iklan Google",
      accountsHeading: "Akun dan data pribadi",
      accountsBody: "{siteName} tidak memerlukan akun, login, atau informasi pribadi untuk menggunakan alat apa pun.",
      contactHeading: "Kontak",
      contactBody: "Pertanyaan tentang kebijakan ini dapat dikirim ke {{LINK}}.",
    },
    terms: {
      title: "Ketentuan Layanan",
      useHeading: "Penggunaan layanan",
      useBody: "{siteName} disediakan gratis, apa adanya, tanpa jaminan dalam bentuk apa pun. Kamu bertanggung jawab memastikan kamu punya hak untuk memproses gambar apa pun yang kamu buka dengan alat di situs ini. Tidak ada yang diunggah: file tetap berada di perangkatmu sendiri sepanjang waktu.",
      noGuaranteesHeading: "Tidak ada jaminan",
      noGuaranteesBody: "Meski {siteName} bertujuan menghasilkan hasil yang akurat dan benar, kami tidak menjamin hasilnya bebas kesalahan atau cocok untuk setiap tujuan tertentu. Selalu periksa hasilnya sebelum mengandalkannya untuk pengajuan penting (misalnya dokumen hukum atau aplikasi resmi).",
      adsHeading: "Iklan dan konten pihak ketiga",
      adsBody: "{siteName} didanai oleh iklan, yang hanya disajikan oleh jaringan pihak ketiga setelah kamu menyetujui cookie iklan. Kami tidak memilih, mendukung, atau mengontrol iklan individual yang muncul, dan kami tidak bertanggung jawab atas konten situs mana pun yang mereka tautkan. Cara jaringan tersebut menggunakan data, dan cara mematikannya, dijelaskan di {{LINK}}.",
      privacyLinkText: "kebijakan privasi",
      acceptableHeading: "Penggunaan yang diperbolehkan",
      acceptableBody: "Kamu tidak boleh menggunakan {siteName} untuk memproses konten ilegal, atau mencoba mengganggu, membebani berlebihan, atau melakukan rekayasa balik terhadap layanan ini.",
      changesHeading: "Perubahan",
      changesBody: "Ketentuan ini dapat diperbarui dari waktu ke waktu. Penggunaan situs yang berlanjut setelah perubahan berarti menerima ketentuan yang diperbarui.",
      contactHeading: "Kontak",
      contactBody: "Pertanyaan dapat dikirim ke {{LINK}}.",
    },
  },
  landings: {
    size: {
      h1: "Kompres gambar menjadi {size}",
      subtitle: "Jatuhkan file JPG, PNG, atau WebP dan dapatkan kembali dengan ukuran {size} atau kurang, dengan kualitas terbaik yang masih muat. Tidak ada yang diunggah.",
      q1: "Bagaimana cara mengompres gambar menjadi {size}?",
      a1: "Jatuhkan gambarmu di halaman ini. Target {size} sudah aktif, jadi hasilnya langsung muncul — lalu tinggal unduh. Kalau kamu juga butuh dimensi tertentu atau format berbeda, aktifkan opsi itu dan akan diterapkan dalam langkah yang sama.",
      q2: "Apakah hasilnya akan tepat {size}?",
      a2: "Dijamin akan berukuran {size} atau kurang, tidak akan lebih. Mencapai angka yang tepat tidak mungkin dilakukan dengan encoder lossy, jadi kami selalu berada di bawah batas — yang memang persis diperiksa oleh formulir unggah.",
      q3: "Siapa yang membutuhkan {size}?",
      q4: "Bagaimana jika fotoku tidak bisa mencapai {size}?",
      a4: "Kualitas diturunkan terlebih dahulu; jika bahkan kualitas minimum yang masih layak tetap terlalu besar, gambar diperkecil dan pencarian diulang. Jika target memang benar-benar tidak bisa dicapai, kamu tetap mendapatkan hasil terkecil yang bisa dibuat, ditandai dengan jelas, bukan kegagalan diam-diam.",
      q5: "Apakah gambarku diunggah ke server?",
      a5: "Tidak. Seluruh proses berjalan di browsermu menggunakan Canvas API, di luar thread utama dalam sebuah Web Worker. File tidak pernah meninggalkan perangkatmu, jadi tidak ada yang bisa kami lihat, simpan, atau hapus.",
    },
    whoAsks: {
      "20kb": "20 KB adalah salah satu batas paling ketat yang umum digunakan: portal ujian pemerintah dan visa sering menetapkan batas ini untuk tanda tangan atau foto, dan beberapa forum lama membatasi avatar pada angka yang sama.",
      "50kb": "50 KB adalah batas atas umum untuk unggahan foto paspor dan KTP di portal permohonan pemerintah, serta untuk dokumen hasil pindai yang dilampirkan ke formulir online.",
      "100kb": "100 KB adalah batas unggah paling umum di formulir lamaran kerja, portal universitas, dan sistem manajemen konten yang lebih lama.",
      "200kb": "200 KB adalah batas umum untuk foto produk e-commerce dan listing marketplace, di mana platform menginginkan gambar yang tetap layak namun cepat dimuat di ponsel.",
      "500kb": "500 KB adalah anggaran yang nyaman untuk performa web: cukup besar untuk foto hero selebar penuh, cukup kecil agar tidak mendominasi waktu muat halaman.",
      "1mb": "1 MB adalah batas lampiran dan unggahan pada banyak sistem email, alat tiket, serta formulir asuransi atau klaim.",
    },
    passportPhotoSizePixels: {
      h1: "Sesuaikan foto paspor ke ukuran piksel yang tepat",
      subtitle: "413 × 531 piksel setara dengan 35 × 45 mm pada 300 dpi — ukuran ICAO yang diharapkan sebagian besar portal paspor dan visa. Sudah diatur di bawah.",
      faq: [
        {
          q: "Berapa ukuran foto paspor dalam piksel?",
          a: "Standar ICAO yang digunakan sebagian besar negara adalah 35 × 45 mm. Dicetak pada 300 dpi, itu setara dengan 413 × 531 piksel, yang diatur oleh halaman ini. Paspor AS adalah pengecualian: ukurannya 2 × 2 inci, atau 600 × 600 piksel pada 300 dpi.",
        },
        {
          q: "Bagaimana cara mendapatkan tepat 413 × 531 tanpa membuat wajah meregang?",
          a: "Potong dulu, baru ubah ukuran. Buka editor pemotongan, atur rasio kustom 35 : 45, posisikan kepala di dalamnya, lalu terapkan — pengubahan ukuran akan tepat mendarat di ukuran piksel tanpa distorsi. Membiarkan penguncian rasio saja tanpa memotong justru akan menyesuaikan foto agar pas di dalam 413 × 531, yang mempertahankan proporsi tapi tidak memenuhi bingkai.",
        },
        {
          q: "Portalnya juga punya batas ukuran file — bisakah saya melakukan keduanya?",
          a: "Bisa. Aktifkan juga 'Ukuran file maksimum' dan pilih batasmu; dimensi dan batas ukuran diterapkan bersamaan dalam satu langkah, jadi kamu tidak perlu mengompres dan mengubah ukuran di dua alat berbeda.",
        },
        {
          q: "Fotoku adalah file HEIC dari iPhone — apakah ini akan berfungsi?",
          a: "Ya. Foto HEIC dan HEIF dikonversi secara otomatis saat kamu menjatuhkannya, sebelum perubahan lain diterapkan, dan kamu bisa mengekspor ke JPG, PNG, atau WebP.",
        },
      ],
    },
    resizeImageTo1080x1080: {
      h1: "Ubah ukuran gambar menjadi 1080 × 1080",
      subtitle: "Ukuran persegi 1:1 yang diminta Instagram, LinkedIn, dan sebagian besar platform iklan. Sudah diatur — jatuhkan gambar dan unduh.",
      faq: [
        {
          q: "Kenapa 1080 × 1080?",
          a: "Ini adalah resolusi asli untuk postingan sosial berbentuk persegi: Instagram, Facebook, dan LinkedIn semuanya menampilkan gambar 1:1 pada 1080 px di sisi terpanjang, jadi mengunggah tepat ukuran itu menghindari baik buram akibat pembesaran maupun pengodean ulang yang tidak perlu di sisi mereka.",
        },
        {
          q: "Fotoku tidak persegi — apa yang terjadi?",
          a: "Dengan rasio aspek terkunci, gambar akan disesuaikan agar pas di dalam 1080 × 1080 tanpa meregang, sehingga proporsinya tetap terjaga. Untuk benar-benar memenuhi bentuk persegi, buka dulu editor pemotongan, pilih rasio Persegi, dan posisikan subjeknya — barulah pengubahan ukuran akan tepat mendarat di 1080 × 1080.",
        },
        {
          q: "Bisakah saya juga menjaga file tetap di bawah batas ukuran?",
          a: "Bisa — aktifkan 'Ukuran file maksimum' dan kedua persyaratan diterapkan bersamaan dalam satu langkah, yang biasanya memang diminta oleh lembar spesifikasi platform iklan.",
        },
        {
          q: "Apakah memperbesar akan membuat gambar kecil jadi lebih tajam?",
          a: "Tidak. Memperbesar mengarang piksel yang sebenarnya tidak ada, jadi foto 400 px yang diskalakan ke 1080 akan terlihat buram. Selalu mulai dari file asli terbesar yang kamu miliki; kualitas justru terjaga saat memperkecil.",
        },
      ],
    },
    convertHeicToJpg: {
      h1: "Konversi foto HEIC ke JPG",
      subtitle: "Jatuhkan foto iPhone — HEIC didekode secara otomatis, lalu disimpan kembali sebagai JPG yang bisa dibuka siapa saja.",
      faq: [
        {
          q: "Kenapa foto iPhone-ku tidak bisa dibuka di situs atau aplikasi ini?",
          a: "iPhone menyimpan foto sebagai HEIC (atau HEIF) secara default, format yang sebagian besar software non-Apple masih belum bisa membacanya. Mengonversi ke JPG sekali saja menyelesaikan ini di mana saja, karena JPG benar-benar bisa dibuka di apa pun.",
        },
        {
          q: "Apakah saya perlu menginstal sesuatu untuk mengonversi HEIC?",
          a: "Tidak. Versi Safari terbaru dapat mendekode HEIC secara native, dan browser lainnya menggunakan decoder kecil di dalam browser yang hanya diunduh saat file HEIC benar-benar dijatuhkan — dalam kedua kasus, tidak ada yang diinstal di perangkatmu.",
        },
        {
          q: "Bisakah saya juga mengubah ukuran atau mengompres foto pada saat yang sama?",
          a: "Bisa — aktifkan dimensi atau ukuran file maksimum bersamaan dengan format, dan ketiganya diterapkan bersama dalam satu langkah, yang memang biasa terjadi pada foto HEIC langsung dari ponsel: foto itu juga cenderung besar.",
        },
        {
          q: "Apakah fotoku diunggah ke server untuk dikonversi?",
          a: "Tidak. Baik dekode maupun pengodean ulang terjadi secara lokal di browsermu. Foto tidak pernah meninggalkan perangkatmu.",
        },
      ],
    },
    convertPngToJpg: {
      h1: "Konversi PNG ke JPG",
      subtitle: "Jatuhkan PNG dan dapatkan JPG — biasanya hanya sebagian kecil dari ukurannya, siap untuk formulir unggah yang tidak menerima PNG.",
      faq: [
        {
          q: "Kenapa mengonversi PNG ke JPG?",
          a: "PNG bersifat lossless, yang membuat tangkapan layar dan grafik terlihat tajam tapi juga besar. JPG mengompres konten fotografis jauh lebih efisien, dan merupakan format yang benar-benar diharapkan oleh sebagian besar formulir dengan batas ukuran.",
        },
        {
          q: "PNG-ku punya latar belakang transparan — apa yang terjadi padanya?",
          a: "JPG tidak memiliki kanal transparansi, jadi area transparan akan diisi warna putih sebelum disimpan. Jika kamu perlu mempertahankan transparansi, konversilah ke WebP alih-alih JPG.",
        },
        {
          q: "Bisakah saya juga mencapai ukuran file yang tepat?",
          a: "Bisa — aktifkan juga 'Ukuran file maksimum' dan format serta target ukuran diterapkan bersamaan dalam satu langkah.",
        },
        {
          q: "Apakah kualitasnya akan menurun?",
          a: "Sedikit — JPG adalah format lossy. Pada kualitas default, perbedaannya jarang terlihat; kalau kamu ingin mengontrolnya, aktifkan kualitas manual dan sesuaikan slider-nya.",
        },
      ],
    },
    convertWebpToJpg: {
      h1: "Konversi gambar WebP ke JPG",
      subtitle: "Jatuhkan file WebP dan dapatkan JPG yang bisa dibuka di mana saja, termasuk di alat yang belum mendukung WebP.",
      faq: [
        {
          q: "Kenapa saya perlu mengonversi WebP ke JPG?",
          a: "Sebagian besar browser modern menampilkan WebP dengan baik, tapi cukup banyak software lama, beberapa editor dokumen, dan beberapa formulir unggah masih hanya menerima JPG atau PNG. Mengonversi sekali saja menyelesaikan ini di mana pun kamu perlu menggunakan file itu selanjutnya.",
        },
        {
          q: "Apakah mengonversi ke JPG mengubah kualitas gambar?",
          a: "JPG juga format lossy, jadi ada langkah pengodean ulang, tapi pada kualitas default perbedaannya dari WebP yang umum cukup kecil. Aktifkan kualitas manual jika kamu ingin mengontrol sendiri kompromi ini.",
        },
        {
          q: "Bisakah saya mengubah ukuran sambil mengonversi?",
          a: "Bisa — aktifkan dimensi atau skala persentase bersamaan dengan perubahan format, dan keduanya diterapkan dalam langkah yang sama.",
        },
        {
          q: "Apakah ini berbeda dari mengambil tangkapan layar gambar?",
          a: "Ya — tangkapan layar menangkap ulang layarmu pada resolusi layarmu dan menambahkan kompresi di atasnya. Alat ini justru mengodekan ulang data piksel asli secara langsung, sehingga kamu mempertahankan resolusi dan kualitas asli gambar sumber.",
        },
      ],
    },
    convertJpgToWebp: {
      h1: "Konversi gambar JPG ke WebP",
      subtitle: "Jatuhkan JPG dan dapatkan WebP yang lebih kecil — biasanya 25–35% lebih ringan dengan kualitas visual yang sama, ideal untuk situs yang lebih cepat.",
      faq: [
        {
          q: "Kenapa mengonversi JPG ke WebP?",
          a: "WebP biasanya menghasilkan file yang jauh lebih kecil daripada JPG pada kualitas visual yang sama, sehingga menjadi rekomendasi default dalam audit performa web (termasuk PageSpeed Insights milik Google sendiri).",
        },
        {
          q: "Apakah WebP akan tampil di mana saja?",
          a: "Setiap browser yang umum digunakan saat ini mendukung WebP. Alasan utama untuk tetap menyimpan JPG adalah kompatibilitas dengan software lama di luar browser — misalnya beberapa editor gambar desktop dan alat desain.",
        },
        {
          q: "Bisakah saya menetapkan ukuran file maksimum untuk hasil WebP?",
          a: "Bisa — aktifkan 'Ukuran file maksimum' dan itu diterapkan bersamaan dengan perubahan format dalam satu langkah.",
        },
        {
          q: "Apakah WebP mendukung transparansi seperti PNG?",
          a: "Ya, tidak seperti JPG. Jika sumbermu memiliki transparansi dan kamu mengonversi dari PNG alih-alih dari JPG, WebP akan mempertahankannya.",
        },
      ],
    },
  },
};
