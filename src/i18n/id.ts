// Bahasa Indonesia copy. Must match the shape of en.ts.
import type { Copy } from './en';

export const id: Copy = {
  lang: 'id',
  ogLocale: 'id_ID',
  langName: 'Bahasa Indonesia',
  meta: {
    title: 'Tim Penanganan Leads WhatsApp & Chat Pelanggan | Qustomer',
    description:
      'Qustomer adalah tim yang menyiapkan dan menjalankan chat WhatsApp, website, media sosial, dan email Anda sesuai proses bisnis. Balas cepat, booking, follow-up.',
  },
  a11y: { skip: 'Langsung ke konten', langSwitch: 'Bahasa', mainNav: 'Utama' },
  nav: [
    { label: 'Layanan kami', href: '/id/layanan-kami' },
    { label: 'Cara kerja', href: '#process' },
    { label: 'Tim', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Jadwalkan call',

  hero: {
    eyebrow: 'Tim leads & chat untuk bisnis jasa',
    h1: 'Kami balas, booking, dan follow-up chat pelanggan Anda.',
    lead: 'WhatsApp, website, Instagram, dan email. Disiapkan sesuai cara kerja Anda, lalu dijalankan bersama Anda.',
    differ: ['Bukan agensi.', 'Bukan kontraktor.', 'Bukan sekadar tools.', 'Bagian dari tim Anda.'],
    primary: 'Jadwalkan discovery call',
    secondary: 'Cara kerja kami',
    cloud: [
      { tag: 'WhatsApp', msg: 'Sabtu masih ada slot?' },
      { tag: 'WhatsApp', msg: 'Berapa harga sesi pertama?' },
      { tag: 'Website', msg: 'Bisa minta penawaran?' },
      { tag: 'Instagram', msg: 'Lokasinya di mana ya?' },
      { tag: 'Email', msg: 'Boleh ganti jadwal ke Jumat?' },
      { tag: 'WhatsApp', msg: 'Ada promo bulan ini?' },
      { tag: 'Website', msg: 'Saya mau booking kunjungan' },
      { tag: 'Instagram', msg: 'Buka jam berapa?' },
      { tag: 'WhatsApp', msg: 'Terima kasih, sampai besok ya!' },
      { tag: 'Email', msg: 'Ini data saya sesuai permintaan' },
      { tag: 'WhatsApp', msg: 'Parkirnya ada?' },
      { tag: 'Website', msg: 'Ada sesi percobaan?' },
    ],
    anchor: { tag: 'WhatsApp', msg: 'Halo, bisa booking kunjungan hari Sabtu?' },
  },

  channels: {
    eyebrow: 'Satu catatan per pelanggan',
    h2: 'Kami satukan semua channel ke satu catatan pelanggan',
    p: 'Pelanggan chat lewat WhatsApp hari Senin, mengisi form website hari Kamis, lalu membalas email hari Jumat. Kami menyiapkannya agar itu menjadi satu orang dengan satu riwayat, bukan tiga chat yang tercecer.',
    listTitle: 'Yang kami catat untuk setiap pelanggan',
    list: [
      'Nama dan kontak',
      'Dari mana mereka datang',
      'Seluruh percakapan, lintas channel',
      'Posisi mereka di pipeline Anda',
      'Langkah berikutnya dan kapan terjadinya',
    ],
    pills: ['WhatsApp', 'Chat website', 'Media sosial', 'Email'],
    laneCaption: 'Satu pelanggan, satu riwayat',
    anchor: { tag: 'WhatsApp', msg: 'Halo, bisa booking kunjungan hari Sabtu?' },
  },

  assistant: {
    h2: 'Kami bangun asisten sesuai bisnis Anda, lalu menjalankannya bersama Anda',
    items: [
      { t: 'Menjawab pertanyaan umum', d: 'Harga, jam buka, lokasi, alur layanan. Jawabannya kami susun bersama Anda, tanpa menebak di luar itu.' },
      { t: 'Follow-up terjadwal', d: 'Calon pelanggan yang diam diingatkan sesuai waktu yang Anda pilih, tidak pernah di luar jam tenang.' },
      { t: 'Penawaran terjadwal', d: 'Promo dan penawaran lanjutan sampai ke pelanggan yang cocok, sesuai waktu yang Anda tentukan.' },
      { t: 'Membantu booking', d: 'Asisten mengecek kalender, menawarkan slot kosong, lalu mengonfirmasi. Pengingat dikirim sebelum jadwal.' },
      { t: 'Serah terima ke tim Anda', d: 'Negosiasi harga, komplain, dan hal yang tidak pasti diteruskan ke orang, lengkap dengan ringkasan chat.' },
    ],
    note: 'Setiap jawaban, jadwal, dan aturan serah terima kami susun bersama Anda dan kami ubah saat bisnis Anda berubah. Asisten selalu mengaku otomatis jika ditanya. Ia tidak bernegosiasi dan tidak menutup penjualan. Itu tetap di tangan Anda.',
    laneCaption: 'Membalas dalam hitungan detik',
    anchor: { tag: 'Asisten', msg: 'Bisa! Sabtu jam 10.00 masih kosong. Mau saya tahan slotnya?' },
  },

  funnel: {
    h2: 'Dari pesan pertama sampai terjadwal, dan setelahnya',
    lead: 'Ikuti satu pertanyaan pelanggan menuruni funnel. Tahapannya kami sesuaikan dengan proses penjualan Anda, dan setiap langkah kami tangani, catat, serta tunjukkan kepada Anda.',
    step: 'Langkah',
    stages: [
      { t: 'Pertanyaan masuk', d: 'Dari WhatsApp, website, media sosial, atau email. Tersimpan begitu masuk.', tag: 'WhatsApp', msg: 'Halo, bisa booking kunjungan hari Sabtu?' },
      { t: 'Dibalas seketika', d: 'Asisten menjawab dalam hitungan detik, jam berapa pun.', tag: 'Asisten', msg: 'Dengan senang hati! Layanan apa yang Kakak cari?' },
      { t: 'Dikualifikasi', d: 'Beberapa pertanyaan ringan mencari tahu kebutuhan mereka dan apakah cocok.', tag: 'Terkualifikasi', msg: 'Kunjungan pertama, facial, Sabtu.' },
      { t: 'Terjadwal', d: 'Jadwal masuk ke kalender Anda. Pelanggan menerima konfirmasi dan pengingat.', tag: 'Terjadwal', msg: 'Sabtu 10.00 ✓' },
      { t: 'Ditindaklanjuti', d: 'Kami mengejar yang tidak hadir atau diam, sampai ada jawaban ya atau tidak yang jelas.', tag: 'Follow-up', msg: 'Terima kasih sudah datang! Bagaimana kunjungannya?' },
    ],
  },

  process: {
    eyebrow: 'Cara kerja kami',
    h2: 'Kami membangunnya mengikuti bisnis Anda, bukan sebaliknya',
    lead: 'Tidak ada paket baku yang harus Anda ikuti. Kami mempelajari cara Anda berjualan, menyiapkan semuanya agar cocok, dan tetap menjalankannya bersama Anda.',
    steps: [
      { t: 'Memahami cara kerja Anda', d: 'Kami duduk bersama Anda dan memetakan cara pertanyaan pelanggan ditangani saat ini: siapa yang membalas, apa yang ditanyakan, di mana leads hilang.' },
      { t: 'Membangun sesuai kebutuhan', d: 'Kami menyiapkan channel, catatan pelanggan, jawaban asisten, follow-up, dan aturan booking sesuai layanan, jam buka, dan gaya bicara Anda.' },
      { t: 'Berjalan bersama tim Anda', d: 'Kami mulai berjalan berdampingan dengan tim Anda, bukan menggantikannya. Anda melihat setiap percakapan dan bisa mengambil alih kapan saja.' },
      { t: 'Terus disempurnakan', d: 'Kami meninjau apa yang ditanyakan pelanggan dan di mana leads tersendat, lalu menyesuaikan skrip, waktu, dan penawaran seiring bisnis Anda berkembang.' },
    ],
    tailorTitle: 'Yang kami sesuaikan dengan bisnis Anda',
    tailor: ['Layanan dan harga', 'Jam buka dan jam tenang', 'Aturan booking dan kalender', 'Gaya dan bahasa', 'Waktu follow-up', 'Penawaran dan promo', 'Tahap pipeline', 'Aturan serah terima'],
  },

  team: {
    h2: 'Bagian dari tim Anda, bukan tool lain yang harus diurus',
    notsTitle: 'Yang bukan kami',
    nots: [
      'Chatbot yang harus Anda atur sendiri.',
      'Lisensi CRM.',
      'Dashboard yang harus Anda buka dan jalankan sendiri.',
      'Agensi iklan yang menyerahkan leads lalu menghilang.',
    ],
    we: 'Kami hadir di dalam percakapan pelanggan dan daftar pelanggan Anda yang sudah ada. Kami bertahan sampai setiap calon pelanggan terjadwal, datang, dan ditindaklanjuti lagi jika belum membeli. Hubungan dan penutupan penjualan tetap di tangan Anda.',
    storiesTitle: 'Dua cara bisnis datang kepada kami',
    stories: [
      { t: 'Anda beriklan', d: 'Anda membayar setiap klik, tapi balasan yang lambat membuat leads hilang. Kami membalas seketika dan langsung menjadwalkan.' },
      { t: 'Pelanggan datang dari mana-mana', d: 'Pelanggan potensial Anda sudah chat: setelah perawatan, di pameran, dari referensi. Kebanyakan mendingin karena tidak ada yang menindaklanjuti atau menawarkan langkah berikutnya. Kami yang melakukannya.' },
    ],
  },

  faq: {
    h2: 'Pertanyaan yang sering kami terima',
    items: [
      { q: 'Qustomer itu software atau layanan?', a: 'Layanan. Anda tidak membeli software atau belajar tool baru. Kami menyiapkan sistem untuk bisnis Anda dan menjalankan percakapan pelanggan bersama Anda.' },
      { q: 'Bisakah disesuaikan dengan proses bisnis kami?', a: 'Bisa, itulah tugas kami. Kami mulai dari cara Anda bekerja saat ini, lalu menyiapkan channel, jawaban, jadwal, dan aturan serah terima agar cocok. Jika ada yang tidak pas, kami ubah pengaturannya, bukan proses Anda.' },
      { q: 'Channel apa saja yang didukung?', a: 'WhatsApp adalah channel utama kami, lewat WhatsApp Business Platform resmi. Form dan chat website, media sosial, dan email disimpan ke catatan pelanggan yang sama.' },
      { q: 'Apakah asisten akan mengatakan hal yang belum saya setujui?', a: 'Tidak. Asisten hanya menjawab dari informasi yang Anda setujui, seperti layanan, jam buka, dan FAQ. Jika tidak tahu, ia meneruskan ke tim Anda, bukan menebak.' },
      { q: 'Bisakah pelanggan bicara dengan orang sungguhan?', a: 'Kapan saja. Pelanggan bisa meminta orang, dan asisten juga menyerahkan percakapan saat ada negosiasi harga, komplain, atau hal yang tidak ia yakini. Tim Anda menerima ringkasan chat.' },
      { q: 'Bahasa apa yang didukung?', a: 'Bahasa Indonesia dan English.' },
      { q: 'Apa yang saya perlukan untuk memulai?', a: 'Sebuah percakapan. Kami melihat bagaimana pertanyaan pelanggan Anda ditangani saat ini, menunjukkan apa yang terlewat, lalu merencanakan langkahnya.' },
    ],
  },

  finalCta: {
    h2: 'Lihat apa yang lolos dari chat Anda',
    p: 'Ceritakan dari mana pertanyaan pelanggan Anda datang. Kami lihat bagaimana semuanya ditangani sekarang, dan tunjukkan apa yang terlewat.',
    button: 'Jadwalkan discovery call',
    note: 'Tanpa pitch. Hanya ngobrol.',
  },

  services: {
    metaTitle: 'Layanan Kami: Penanganan Leads & Chat Pelanggan | Qustomer',
    metaDescription: 'Semua yang Qustomer siapkan dan jalankan untuk Anda: satu catatan pelanggan, balasan instan, kualifikasi, booking, follow-up, dan serah terima ke tim Anda.',
    label: 'Layanan kami',
    eyebrow: 'Layanan kami',
    h1: 'Semua yang kami siapkan dan jalankan untuk Anda',
    lead: 'Dari pesan pertama sampai follow-up setelah kunjungan. Setiap bagian kami bangun sesuai cara kerja Anda, lalu kami jalankan bersama Anda.',
    pointsLabel: 'Yang kami tangani',
    groups: [
      { t: 'Tangkap setiap pertanyaan', d: 'Tidak ada yang hilang di antara channel.', points: ['WhatsApp lewat WhatsApp Business Platform resmi', 'Chat dan form website, media sosial, dan email disimpan di tempat yang sama', 'Satu catatan pelanggan dengan riwayat lengkap lintas channel'], vis: ['WhatsApp', 'Website', 'Media sosial', 'Email', 'Satu catatan pelanggan'] },
      { t: 'Balas dalam hitungan detik', d: 'Pelanggan dijawab saat mereka masih tertarik.', points: ['Jawaban disusun bersama Anda dan disetujui Anda, tidak mengarang', 'Harga, jam buka, lokasi, cara kerja, kapan pun', 'Bahasa Indonesia dan English'], vis: ['Halo, Sabtu buka tidak?', 'Buka! 09.00 sampai 17.00. Mau saya buatkan jadwal?', 'Dibalas dalam detik'] },
      { t: 'Kualifikasi lead', d: 'Tim Anda berbicara dengan orang yang cocok.', points: ['Beberapa pertanyaan natural tentang kebutuhan mereka', 'Lead diberi label sesuai kriteria Anda sendiri', 'Tahapan mengikuti proses penjualan Anda'], vis: ['Halo, saya mau kunjungan pertama.', 'Layanan: facial', 'Kapan: Sabtu ini', 'Kunjungan pertama: ya', 'Terkualifikasi'] },
      { t: 'Booking jadwal', d: 'Dari "tertarik" sampai ada jam di kalender Anda.', points: ['Memeriksa kalender dan menawarkan slot yang kosong', 'Konfirmasi dan pengingat sebelum kunjungan', 'Ganti jadwal diurus di chat yang sama'], vis: ['Sabtu', '10.00', '11.00', '13.00', 'Terjadwal ✓'] },
      { t: 'Follow-up sampai ada jawaban jelas', d: 'Lead yang diam dan no-show tidak hilang begitu saja.', points: ['Pengingat dengan waktu pilihan Anda, tidak di luar jam tenang', 'Pemulihan no-show dan sapaan setelah kunjungan', 'Pesan win-back dan penawaran sesuai jadwal Anda'], vis: ['Hari 1', 'Terima kasih sudah bertanya! Mau pilih jadwal?', 'Hari 3', 'Masih tertarik? Sabtu masih kosong.', 'Ya, jam 10.00 ya!'] },
      { t: 'Serahkan ke tim Anda', d: 'Manusia mengambil alih saat itu penting.', points: ['Soal harga, komplain, dan topik sensitif diteruskan ke orang', 'Serah terima disertai ringkasan chat', 'Pelanggan bisa minta bicara dengan orang kapan saja'], vis: ['Bisa dapat diskon?', 'Diteruskan ke tim Anda', 'Menanyakan harga', 'Ringkasan chat dilampirkan'] },
      { t: 'Lihat apa yang terjadi', d: 'Anda tahu posisi setiap lead.', points: ['Tampilan funnel: pertanyaan, dibalas, terkualifikasi, booking, follow-up', 'Riwayat percakapan lengkap per pelanggan', 'Review berkala atas pertanyaan pelanggan dan titik lead berhenti'], vis: ['Pertanyaan', 'Dibalas', 'Terkualifikasi', 'Terjadwal', 'Di-follow-up'] },
      { t: 'Dibangun dan dijalankan bersama Anda', d: 'Tim, bukan tools yang harus Anda kelola.', points: ['Kami pelajari cara Anda menjual dan menyiapkan semuanya agar cocok', 'Kami mulai bersama tim Anda, bukan menggantikannya', 'Kami terus menyesuaikan skrip, waktu, dan penawaran mengikuti bisnis Anda'], vis: ['Pelajari', 'Bangun', 'Luncurkan', 'Perbaiki'] },
    ],
    notTitle: 'Yang tidak kami lakukan',
    nots: [
      'Menawar harga atau menutup penjualan. Itu tetap di tangan Anda.',
      'Memberi penawaran harga yang mengikat.',
      'Berpura-pura jadi manusia. Asisten menyebut dirinya otomatis saat ditanya.',
    ],
    industriesTitle: 'Cocok untuk',
    industriesLead: 'Dibuat untuk bisnis jasa yang penjualannya diawali percakapan.',
    industries: [
      { t: 'Klinik dan wellness', d: 'Pertanyaan soal perawatan, kunjungan pertama, dan perawatan lanjutan.' },
      { t: 'Properti', d: 'Permintaan viewing dan calon pembeli yang diam setelah kunjungan pertama.' },
      { t: 'Pendidikan dan kursus', d: 'Pertanyaan soal program, kelas percobaan, dan pendaftaran.' },
      { t: 'Jasa rumah dan profesional', d: 'Permintaan penawaran, survei lokasi, dan konsultasi.' },
    ],
    ctaTitle: 'Belum yakin apa yang Anda butuhkan?',
    ctaP: 'Ceritakan dari mana pertanyaan pelanggan masuk. Kami lihat cara penanganannya sekarang dan sarankan apa yang disiapkan lebih dulu.',
  },

  book: {
    metaTitle: 'Jadwalkan Discovery Call | Qustomer',
    metaDescription: 'Pilih waktu untuk discovery call dengan tim Qustomer. Kami melihat bagaimana pertanyaan pelanggan Anda dari WhatsApp, website, sosial media, dan email ditangani saat ini.',
    label: 'Jadwalkan discovery call',
    eyebrow: 'Discovery call',
    h1: 'Jadwalkan discovery call',
    lead: 'Pilih waktu yang cocok untuk Anda. Kami akan melihat bagaimana pertanyaan pelanggan Anda ditangani saat ini dan menunjukkan apa yang terlewat.',
    coverTitle: 'Yang akan kita bahas',
    cover: [
      'Dari mana pertanyaan pelanggan datang: WhatsApp, website, media sosial, dan email',
      'Siapa yang membalas, seberapa cepat, dan di mana leads sering terlewat',
      'Bagaimana follow-up dan booking berjalan sekarang',
      'Langkah berikutnya yang masuk akal untuk bisnis Anda',
    ],
    bringTitle: 'Yang perlu disiapkan',
    bring: 'Gambaran singkat bisnis Anda, serta satu atau dua percakapan pelanggan yang menurut Anda kurang tertangani.',
    note: 'Tanpa pitch. Hanya ngobrol.',
    calTitle: 'Pilih waktu',
    loading: 'Memuat kalender\u2026',
    fallback: 'Kalender tidak muncul?',
    openCal: 'Buka di tab baru',
    emailPrefix: 'Lebih suka menulis kepada kami?',
  },

  footer: {
    tagline: 'Tim yang menangani leads dan chat pelanggan Anda, disesuaikan dengan cara kerja bisnis Anda.',
    rights: 'Seluruh hak cipta dilindungi.',
    login: 'Login tim',
    cols: [
      {
        title: 'Layanan kami',
        links: [
          { label: 'Semua layanan kami', href: '/id/layanan-kami' },
          { label: 'Manajemen leads WhatsApp', href: '/id/manajemen-leads-whatsapp' },
          { label: 'Follow-up leads otomatis', href: '/id/follow-up-leads' },
          { label: 'Booking janji via WhatsApp', href: '/id/booking-via-whatsapp' },
          { label: 'Setup WhatsApp Business API', href: '/id/whatsapp-business-api' },
        ],
      },
      {
        title: 'Untuk siapa',
        links: [
          { label: 'Klinik kecantikan dan wellness', href: '/id/industri/kecantikan-wellness' },
          { label: 'Pendidikan dan kursus', href: '/id/industri/pendidikan' },
          { label: 'Panduan kecepatan respons leads', href: '/id/panduan/kecepatan-respons-leads' },
        ],
      },
      {
        title: 'Perusahaan',
        links: [
          { label: 'Kebijakan privasi', href: '/id/privasi' },
          { label: 'Syarat layanan', href: '/id/syarat' },
        ],
      },
    ],
  },

  notFound: { title: 'Halaman tidak ditemukan', back: 'Kembali ke beranda' },
};
