import {
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiBootstrap,
  SiCodeigniter,
  SiTailwindcss,
  SiFlutter,
  SiJquery,
  SiNestjs,
  SiPrisma,
  SiReact,
  SiSearxng,
} from "react-icons/si";

type PortfolioItem = {
  title: string;
  tech: string[];
  status: string;
  time: string;
  description: string;
  link: string;
};

const portfolios: PortfolioItem[] = [
  {
    title:
      "Monitoring perkembangan residen di IPWL Mutiara Abadi Binjai",
    tech: ["Tailwind", "NextJs", "Laravel", "MySql"],
    status: "Proyek Mandiri",
    time: "Jun 2025 - Sekarang",
    description:
      "Sistem pemantauan harian untuk residen dan staf, mempermudah manajemen aktivitas dan laporan internal, termasuk catatan kemajuan terapi dan statistik harian.",
    link: "https://mab.rehab/",
  },
  {
    title: "Mobile Apss Mutiara Kids",
    tech: ["Bootstrap", "CodeIgniter", "Tailwind", "NextJs", "Laravel", "MySql", "Flutter"],
    status: "Proyek Mandiri",
    time: "Okt 2024 - Sekarang",
    description:
      "Platform untuk mengelola laporan terapi siswa dan absensi menggunakan flashcard. Membantu guru dan orangtua memantau kemajuan anak, menampilkan visualisasi progres belajar, dan memberikan ringkasan analisis secara real-time. Awalnya dibangun dengan CodeIgniter 3, kemudian diperbarui ke Fullstack Laravel, dimigrasi ke Next.js + Laravel API, dan akhirnya dioptimalkan dengan Next.js + Laravel API + Flutter untuk web dan mobile.",
    link: "https://mutiarakids.id/",
  },
  {
    title:
      "Pengelolaan stok obat Rumah Sakit dengan Pendekatan Supply Chain Management",
    tech: ["Tailwind", "NextJs", "NestJs", "Prisma"],
    status: "Proyek Mandiri",
    time: "Feb 2024 - Mei 2024",
    description:
      "Sistem inventaris obat yang mempermudah pengelolaan stok, pemesanan, distribusi, dan pelacakan di rumah sakit secara digital.",
    link: "",
  },
  {
    title: "Pencari Lokasi Terdekat dengan Algoritma Haversine",
    tech: ["Bootstrap", "CodeIgniter", "MySql"],
    status: "Proyek Mandiri",
    time: "Mei 2023",
    description:
      "Aplikasi untuk menemukan lokasi terdekat menggunakan algoritma Haversine untuk menghitung jarak secara akurat. Membantu pengguna dengan mudah menemukan layanan atau fasilitas terdekat secara real-time.",
    link: "",
  },
  {
    title: "Marketplace Pertanian untuk Kabupaten Tapanuli Utara",
    tech: ["Tailwind", "React", "Laravel", "MySql"],
    status: "Proyek Mandiri",
    time: "Agu 2021 - Nov 2021",
    description:
      "Platform marketplace yang menghubungkan petani dengan pembeli, memfasilitasi transaksi produk pertanian secara online, termasuk pemesanan, pelacakan, dan pembayaran digital.",
    link: "",
  },
  {
    title: "E-commerce Mandiri Advertising Binjai",
    tech: ["Bootstrap", "Jquery", "CodeIgniter", "MySql"],
    status: "Proyek Mandiri",
    time: "Des 2021 - Jan 2022",
    description:
      "Sistem e-commerce untuk Mandiri Advertising Binjai, mencakup katalog produk, pemesanan online, dan integrasi pembayaran digital untuk klien lokal.",
    link: "",
  },
  {
    title: "Sistem Booking Alat Berat untuk PT Dinamala Mitra Lestari",
    tech: ["Tailwind", "React", "Laravel", "MySql"],
    status: "Proyek Mandiri",
    time: "Mar 2021 - Mei 2021",
    description:
      "Sistem manajemen booking alat berat, mempermudah penjadwalan dan pencatatan transaksi, termasuk notifikasi jadwal dan laporan harian.",
    link: "",
  },
  {
    title:
      "Sistem Pembayaran Tambahan Penghasilan untuk Pegawai Negeri di BKAD Kabupaten Karo",
    tech: ["Bootstrap", "Jquery", "CodeIgniter", "MySql"],
    status: "Proyek Kolaboratif",
    time: "Jan 2020 - Des 2020",
    description:
      "Platform digital untuk pembayaran tunjangan pegawai negeri, dilengkapi manajemen administrasi, laporan transaksi, dan validasi otomatis untuk efisiensi dan transparansi.",
    link: "",
  },
];

const techIcons: any = {
  NextJs: { icon: <SiNextdotjs />, color: "#ffffff" },
  Laravel: { icon: <SiLaravel />, color: "#FF2D20" },
  MySql: { icon: <SiMysql />, color: "#4479A1" },
  Bootstrap: { icon: <SiBootstrap />, color: "#7952B3" },
  CodeIgniter: { icon: <SiCodeigniter />, color: "#ff0d00" },
  Tailwind: { icon: <SiTailwindcss />, color: "#38BDF8" },
  Flutter: { icon: <SiFlutter />, color: "#02569B" },
  Jquery: { icon: <SiJquery />, color: "#0769AD" },
  NestJs: { icon: <SiNestjs />, color: "#E0234E" },
  Prisma: { icon: <SiPrisma />, color: "#015788" },
  React: { icon: <SiReact />, color: "#61DAFB" },
};

export default function Portfolio() {
  const utama = portfolios.slice(0, 2);
  const lainnya = portfolios.slice(2);

  return (
    <section className="relative py-28 bg-black text-white px-4 overflow-hidden">
      <div className="absolute inset-0  pointer-events-none" />

      <div className="relative max-w-md mx-auto space-y-12">



        <div className="space-y-2 text-center fade-up delay-1">
          <p className="font-title  leading-tight text-5xl font-black uppercase tracking-tight bg-gradient-to-b from-blue-500 to-black bg-clip-text text-transparent">
            PORTFOLIO
          </p>
          <p className="font-title  leading-tight text-4xl font-black text-white -mt-12 ">
            PORTFOLIO
          </p>
        </div>

        <div className="font-paragraf text-md text-white fade-up delay-1 text-justify indent-8">
       Portofolio ini menampilkan berbagai produk digital yang dirancang untuk meningkatkan efisiensi operasional, mempermudah monitoring secara real-time, dan mentransformasi sistem berbasis teknologi modern, yang telah diterapkan baik di sektor swasta maupun instansi pemerintah. Setiap proyek mencerminkan solusi yang praktis dan profesional untuk kebutuhan organisasi.
        </div>



        {/* Proyek Utama */}
        <div className="grid  grid-cols-1 gap-5 fade-up delay-1">
          {utama.map((p, i) => (
            <details
              key={i}
              className="group relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <summary className="list-none cursor-pointer space-y-5">

                <h3 className="text-md font-semibold leading-snug group-hover:text-blue-400 transition-colors font-pretitle">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1  text-[9px] mx-1 font-title"
                      style={{ color: techIcons[t].color }}
                    >
                      {techIcons[t].icon}
                      {t}
                    </span>
                  ))}
                </div>
              </summary>

              <div className="flex items-center justify-between text-xs text-gray-500 mt-5  ">
                <div className=" ">
                  <div className="text-white font-paragraf">{p.time}</div>
                  <div className="text-blue-500 font-paragraf"> {p.status} </div>
                </div>
                <div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 rounded-md border border-blue-500 p-2 text-white"
                  >
                    <SiSearxng />
                  </a>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-300 leading-relaxed font-paragraf">
                {p.description}
              </div>
            </details>
          ))}

          {lainnya.length > 0 && (
            <>
              {/* Checkbox sebagai toggle */}
              <input
                type="checkbox"
                id="toggle-projects"
                className="hidden peer"
              />
              {/* Tombol */}
              <label
                htmlFor="toggle-projects"
                className="font-pretitle block cursor-pointer text-center mt-8 px-6 py-3 rounded-xl border border-white/10 bg-white/[0.05] hover:bg-white/[0.08] transition text-sm font-semibold tracking-wide select-none peer-checked:hidden"
              >
                Lihat Proyek Lainnya
              </label>

              {/* Proyek Tambahan */}
              <div className="grid  grid-cols-1 gap-5 max-h-0 overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-full">
                {lainnya.map((p, i) => (
                  <details
                    key={i}
                    className="group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 transition-all duration-500 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
                  >
                    <summary className="list-none cursor-pointer space-y-5">
                      <h3 className="text-md font-semibold leading-snug group-hover:text-blue-400 transition-colors font-pretitle">
                        {p.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {p.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="flex items-center gap-1   text-[9px] mx-1 font-title"
                            style={{ color: techIcons[t].color }}
                          >
                            {techIcons[t].icon}
                            {t}
                          </span>
                        ))}
                      </div>
                    </summary>
                    <div className="mt-4  text-xs text-gray-500  max-h-0 overflow-hidden transition-[max-height] duration-500 ease-in-out group-open:max-h-full space-y-5">
                      <div className="flex justify-between text-xs  ">
                        <span className="text-white font-paragraf">{p.time}</span>
                        <span className="text-blue-500 font-paragraf">{p.status}</span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed font-paragraf">{p.description}</p>
                    </div>
                  </details>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}