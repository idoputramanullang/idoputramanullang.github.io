import Image from "next/image";

const certifications = [
  {
    title: "Junior Web Developer",
    institution: "University of Methodist Indonesia",
    year: "Apr 2022",
    icon: "/hero.webp",
  },
  {
    title: "Fullstack Web Developer",
    institution: "Kampus Merdeka",
    year: "Ags 2021",
    icon: "/hero.webp",
  },
  {
    title: "Backend Developer",
    institution: "Dicoding",
    year: "May 2020",
    icon: "/hero.webp",
  },
  {
    title: "Frontend Developer",
    institution: "Dicoding",
    year: "Jan 2020",
    icon: "/hero.webp",
  },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-black text-white flex justify-center px-4">
      <div className="max-w-md w-full space-y-8">


        <div className="space-y-2 text-center relative fade-up">
          <p className="font-title text-5xl font-black tracking-wider uppercase leading-tight bg-gradient-to-b from-blue-500 to-black bg-clip-text text-transparent relative z-10">
            Sertifikat
          </p>

          <p className="font-title text-4xl font-black tracking-wider uppercase leading-tight text-white -mt-12 relative z-20">
            Sertifikat
          </p>
        </div>

        {/* ===== NAME ===== */}
        <div className="font-paragraf   space-y-1 tracking-wider text-md  text-white fade-up delay-1 text-justify  indent-8">
          Pencapaian resmi melalui berbagai sertifikasi di bidang teknologi digital serta sertifikasi dan pelatihan profesional di bidang rehabilitasi, menunjukkan kompetensi dan pengalaman saya dalam mengelola proyek yang berdampak nyata dan berkelanjutan.
        </div>
        {/* LIST */}
        <div className="space-y-4">
          {certifications.map((c, index) => (
            <div
              key={c.title}
              className="fade-up delay-1  rounded-2xl p-5 bg-white/5 border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 flex items-center gap-4">
              <div>
                <Image
                  src={c.icon}
                  alt={c.title}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </div>

              <div className="flex-1">
                <h5 className="font-semibold text-base font-pretitle">
                  {c.title}
                </h5>
                <div className="flex justify-between items-center font-paragraf">
                  <p className="text-sm text-gray-400  ">{c.institution}</p>
                  <p className="text-xs text-gray-200">{c.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}