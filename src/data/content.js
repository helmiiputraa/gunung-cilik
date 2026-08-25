// ============================================================
// Data konten website Gunung Cilik
// Edit harga, fasilitas, dan berita di sini
// ============================================================

export const siteConfig = {
  name: 'Gunung Cilik',
  tagline: 'Pesona Alam Tersembunyi di Desa Damarkasiyan',
  description:
    'Nikmati keindahan alam Gunung Cilik dengan pemandangan yang memukau, udara sejuk pegunungan, dan berbagai aktivitas wisata seru. Destinasi sempurna untuk melepas penat dari hiruk pikuk kota.',
  address: 'Desa Damarkasiyan, Kecamatan Kertek, Kabupaten Wonosobo, Jawa Tengah',
  phone: '+62 838-2274-4884',
  email: 'wisatagunungcilik@gmail.com',
  instagram: '@gunungcilik_kaliurip',
  instagramUrl: 'https://www.instagram.com/gunungcilik_kaliurip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  facebookUrl: 'https://web.facebook.com/people/Gunung-Cilik-Kaliurip-Wonosobo/61569772356097/?locale=id_ID',
  whatsappUrl: 'https://wa.me/6283822744884',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.0!2d109.9732625!3d-7.334916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a9fd4802a0ee9%3A0xf3a51e707e3f0721!2sGunung%20Cilik%20Kaliurip%20Wonosobo!5e0!3m2!1sid!2sid!4v1',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'fasilitas', label: 'Fasilitas' },
  { id: 'galeri', label: 'Galeri' },
  { id: 'lokasi', label: 'Lokasi' },
  { id: 'kontak', label: 'Kontak' },
];

export const hargaTiket = [
  {
    id: 1,
    icon: '🎫',
    kategori: 'Tiket Masuk',
    harga: 'Rp 5rb / 10rb',
    keterangan: 'Anak / Dewasa',
  },
  {
    id: 2,
    icon: '🅿️',
    kategori: 'Parkir Motor',
    harga: 'Rp 5.000',
    keterangan: 'Per kendaraan',
  },
  {
    id: 3,
    icon: '🚐',
    kategori: 'Camper Van',
    harga: 'Rp 20.000',
    keterangan: 'Per malam',
  },
  {
    id: 4,
    icon: '🏕️',
    kategori: 'Camping',
    harga: 'Rp 20.000',
    keterangan: 'Per tenda / malam',
  },
];

export const fasilitasList = [
  {
    id: 1,
    icon: 'parking',
    title: 'Area Parkir Luas',
    description: 'Tempat parkir yang luas dan aman untuk motor, mobil, hingga camper van.',
  },
  {
    id: 2,
    icon: 'camping',
    title: 'Area Camping',
    description: 'Nikmati pengalaman berkemah di alam terbuka dengan pemandangan yang memukau.',
  },
  {
    id: 3,
    icon: 'toilet',
    title: 'Toilet Umum',
    description: 'Fasilitas toilet umum yang bersih dan terawat untuk kenyamanan pengunjung.',
  },
  {
    id: 4,
    icon: 'food',
    title: 'Warung Makan',
    description: 'Tersedia warung makan dengan berbagai menu kuliner khas daerah.',
  },
  {
    id: 5,
    icon: 'photo',
    title: 'Spot Foto Instagramable',
    description: 'Berbagai spot foto menarik untuk mengabadikan momen liburanmu.',
  },
  {
    id: 6,
    icon: 'mosque',
    title: 'Musala',
    description: 'Tersedia fasilitas musala yang bersih dan nyaman untuk beribadah.',
  },
];

export const galeriImages = [
  { id: 1, src: 'Camp.png', alt: 'Camping Gunung Cilik', caption: 'Area Camping' },
  { id: 2, src: 'Campervan.PNG', alt: 'Campervan', caption: 'Campervan Spot' },
  { id: 3, src: 'Batu_exotis.PNG', alt: 'Batu Eksotis', caption: 'Batu Eksotis' },
  { id: 4, src: 'Pohon_estetik.PNG', alt: 'Pohon Estetik', caption: 'Pohon Estetik' },
  { id: 5, src: 'Citylight.PNG', alt: 'Pemandangan Kota', caption: 'Citylight' },
  { id: 6, src: 'Puncak.PNG', alt: 'Puncak Gunung Cilik', caption: 'Puncak Gunung Cilik' },
  { id: 7, src: 'Drone.PNG', alt: 'Pemandangan Udara', caption: 'Pemandangan Drone' },
  { id: 8, src: 'Kebun_teh.png', alt: 'Kebun Teh', caption: 'Hamparan Kebun Teh' },
];

