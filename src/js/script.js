// Disable klik kanan
document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable tombol tertentu (Ctrl+U, F12, Ctrl+Shift+I, dll)
document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
    e.preventDefault();
  }
  if (e.key === 'F12') {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
    e.preventDefault();
  }
});
// text mengetik

const texts = ['Fullstack Developer', 'Drug Rehabilitation Center'];

let textIndex = 0; // index teks yang lagi ditampilkan
let charIndex = 0; // index huruf yang sedang diketik
const speed = 100; // kecepatan mengetik
const delayBetweenCycles = 1000; // jeda setelah selesai mengetik sebelum hapus
const typingElement = document.getElementById('text-typing');

function typeWriter() {
  const currentText = texts[textIndex];
  if (charIndex < currentText.length) {
    typingElement.innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    // selesai ngetik, tunggu sebelum menghapus
    setTimeout(deleteText, delayBetweenCycles);
  }
}

function deleteText() {
  const currentText = texts[textIndex];
  if (charIndex > 0) {
    typingElement.innerHTML = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, speed);
  } else {
    // pindah ke teks berikutnya
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function () {
  setTimeout(typeWriter, speed);
};

const skills = [
  { name: 'HTML', level: 'Ahli', img: '/img/skills/html.webp' },
  { name: 'CSS', level: 'Ahli', img: '/img/skills/css.webp' },
  {
    name: 'JavaScript',
    level: 'Mahir',
    img: '/img/skills/js.webp',
  },
  { name: 'Tailwind', level: 'Mahir', img: '/img/skills/tailwind.webp' },
  { name: 'Bootstrap', level: 'Ahli', img: '/img/skills/bootstrap.webp' },
  { name: 'PHP', level: 'Mahir', img: '/img/skills/php.webp' },
  { name: 'Laravel', level: 'Mahir', img: '/img/skills/laravel.webp' },
  { name: 'CodeIgniter', level: 'Ahli', img: '/img/skills/ci.webp' },
  { name: 'MySQL', level: 'Mahir', img: '/img/skills/mysql.webp' },
  { name: 'CorelDraw', level: 'Mahir', img: '/img/skills/corel.webp' },
  { name: 'Word', level: 'Ahli', img: '/img/skills/mw.webp' },
  { name: 'Excel', level: 'Mahir', img: '/img/skills/mx.webp' },
  { name: 'PowerPoint', level: 'Mahir', img: '/img/skills/mp.webp' },
];

const skillsContainer = document.getElementById('TechStack');

skills.forEach((skill) => {
  skillsContainer.innerHTML += `
    <div class="flex flex-col items-center">
      <div class="flex items-center justify-center p-4   rounded-lg  ">
        <img alt="${skill.name} logo" class="w-12 h-12 ${
    skill.extraClass || ''
  }" src="${skill.img}" />
      </div>
      <p class="mt-1.5 text-sm font-bold text-primary">${skill.name}</p>
      <p class="   text-xs font-serif">${skill.level}</p>
    </div>
  `;
});
const experience = [
  {
    title: 'Konselor Adiksi Narkoba',
    time: 'Jul/2024 - Sekarang',
    provider: 'Mutiara Abadi Binjai',
    img: '/img/skills/mab.webp',
  },
  {
    title: 'Relawan Backend Developer',
    time: 'Apr/2023 - Sep/2023',
    provider: 'BKAD Kabupaten Karo',
    img: '/img/skills/bkad.webp',
  },
  {
    title: 'Administrator Sekolah',
    time: 'Sep/2022 - Jul/2024',
    provider: 'Mutiara Kids',
    img: '/img/skills/mutiarakids.webp',
  },
  {
    title: 'Web Developer (PKL)',
    time: 'Mei/2021 - Okt/2021',
    provider: 'Dinas Pertanian Kabupaten Tapanuli Utara',
    img: '/img/skills/pertaniantaput.webp',
  },
  {
    title: 'Desain Grafis',
    time: 'Sep/2018 - Apr/2020',
    provider: 'Mandiri Advertising',
    img: '/img/skills/mandiri.webp',
  },
];

const certContainer = document.getElementById('experience');

certContainer.innerHTML = experience
  .map(
    (cert) => `
  <div class="flex items-center">
    <div>
      <img src="${cert.img}" alt="${cert.provider} logo" class="w-12 h-auto">
    </div>
    <div class="ml-4  w-full">
      <h2 class="text-md font-bold text-primary">${cert.title}</h2> 
      <p class="text-sm font-semibold  ">${cert.provider}</p>
      <p class="text-xs font-base  font-serif">${cert.time}</p> 
    </div>
  </div>
`,
  )
  .join('');
const portfolios = [
  {
    title:
      'Digitalisasi Aktivitas Residen dan Staf di IPWL Yayasan Rehabilitasi Narkoba Mutiara Abadi Binjai',
    img: '/img/portfolio/simulasi.jpg',
    tech: [
      '/img/skills/tailwind.webp',
      '/img/skills/laravel.webp',
      '/img/skills/mysql.webp',
    ],
    status: 'Proyek Mandiri',
    link: '/',
  },
  {
    title: 'Digitalisasi Laporan Terapi dan Murid di Mutiara Kids',
    img: '/img/portfolio/simulasi.jpg',
    tech: [
      '/img/skills/tailwind.webp',
      '/img/skills/ci.webp',
      '/img/skills/mysql.webp',
    ],
    status: 'Proyek Mandiri',
    link: '/',
  },
  {
    title: 'Booking Alat Berat PT Dinamala Mitra Lestari',
    img: '/img/portfolio/simulasi.jpg',
    tech: [
      '/img/skills/bootstrap.webp',
      '/img/skills/ci.webp',
      '/img/skills/mysql.webp',
    ],
    status: 'Proyek Mandiri',
    link: '/',
  },
  {
    title:
      'Sistem Informasi Pembayaran Tambahan Penghasilan Pegawai Negeri Sipil di Pemerintah Kabupaten Karo',
    img: '/img/portfolio/simulasi.jpg',
    tech: [
      '/img/skills/bootstrap.webp',
      '/img/skills/ci.webp',
      '/img/skills/mysql.webp',
    ],
    status: 'Proyek Kolaborasi',
    link: '/',
  },
  {
    title:
      'Sistem Persediaan Obat Rumah Sakit Bhayangkara dengan Pendekatan Supply Chain Management',
    img: '/img/portfolio/simulasi.jpg',
    tech: [
      '/img/skills/bootstrap.webp',
      '/img/skills/ci.webp',
      '/img/skills/mysql.webp',
    ],
    status: 'Proyek Mandiri',
    link: '/',
  },
  {
    title: 'Sistem Informasi Geografis Pengaduan Sampah Kota Medan',
    img: '/img/portfolio/simulasi.jpg',
    tech: [
      '/img/skills/tailwind.webp',
      '/img/skills/laravel.webp',
      '/img/skills/leafletjs.webp',
      '/img/skills/mysql.webp',
    ],
    status: 'Proyek Mandiri',
    link: '/',
  },
  {
    title: 'E-commerce Mandiri Advertising Binjai',
    img: '/img/portfolio/simulasi.jpg',
    tech: [
      '/img/skills/tailwind.webp',
      '/img/skills/laravel.webp',
      '/img/skills/midtrans.webp',
      '/img/skills/rajaongkir.webp',
      '/img/skills/mysql.webp',
    ],
    status: 'Proyek Mandiri',
    link: '/',
  },
  {
    title: 'Pencarian Lokasi Terdekat dengan Algoritma Haversine',
    img: '/img/portfolio/simulasi.jpg',
    tech: [
      '/img/skills/bootstrap.webp',
      '/img/skills/ci.webp',
      '/img/skills/leafletjs.webp',
      '/img/skills/mysql.webp',
    ],
    status: 'Proyek Mandiri',
    link: '/',
  },
  {
    title:
      'Marketplace Hasil Pertanian Dinas Pertanian Kabupaten Tapanuli Utara',
    img: '/img/portfolio/simulasi.jpg',
    tech: [
      '/img/skills/bootstrap.webp',
      '/img/skills/ci.webp',
      '/img/skills/midtrans.webp',
      '/img/skills/mysql.webp',
    ],
    status: 'Proyek Mandiri',
    link: '/',
  },
];

const container = document.getElementById('portfolio-container');

portfolios.forEach((p) => {
  container.innerHTML += `
      <div class="swiper-slide flex justify-center">
        <div class=" rounded-xl shadow-lg  border-b-2 border-primary">
          <div class="relative">
            <img alt="${
              p.title
            }" class="w-full card-image rounded-xl" height="400" src="${
    p.img
  }" width="600" />
          </div>
          <div class="px-6 pt-4 pb-2">
            <div class="text-xs font-serif text-primary">${p.status}</div>
          </div>
          <div class="px-6 pb-4">
            <div class="text-md font-semibold">${p.title}</div>
          </div>
          <div class="flex items-center justify-between px-6 mb-5">
            <div class="flex items-center justify-start gap-4">
              ${p.tech
                .map((t) => `<img src="${t}" alt="" class="w-6 h-6">`)
                .join('')}
            </div>
            <a href="${
              p.link
            }"><i class='text-3xl bx bx-search-alt-2 bx-tada-hover text-primary'></i></a>
          </div>
        </div>
      </div>
    `;
});

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
});
