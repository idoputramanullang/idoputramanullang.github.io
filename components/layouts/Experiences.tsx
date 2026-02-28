import Image from "next/image";

const experiences = [
  {
    title: "Program Manager",
    company: "Mutiara Abadi Binjai",
    period: "Jul 2024 - Sekarang",
    icon: "/mab.webp",
  },
  {
    title: "Fullstack Developer",
    company: "Mutiara Kids",
    period: "Sep 2022 - Sekarang",
    icon: "/mutiarakids.webp",
  },
  {
    title: "Backend Developer (Relawan)",
    company: "BKAD Kabupaten Karo",
    period: "Apr 2023 - Sep 2023",
    icon: "/bkad.webp",
  },
  {
    title: "Web Developer (PKL)",
    company: "Dinas Pertanian Tapanili Utara",
    period: "May 2021 - Oct 2021",
    icon: "/pertaniantaput.webp",
  },
  {
    title: "Desain Grafis",
    company: "Mandiri Advertising",
    period: "Sep 2018 - Apr 2020",
    icon: "/mandiri.webp",
  },
];

export default function Experiences() {
  return (
    <section className="py-16 flex justify-center bg-black to-slate-900 text-white px-6">
      <div className="max-w-md w-full space-y-14">

        {/* HEADER */}
        <div className="space-y-2 text-center fade-up">
          <p className="font-title text-5xl font-black  leading-tight uppercase tracking-tight bg-gradient-to-b from-blue-500 to-black bg-clip-text text-transparent">
            PENGALAMAN
          </p>
          <p className="font-title text-4xl font-black text-white  leading-tight -mt-12">
            PENGALAMAN
          </p>
        </div>

        <div className="font-paragraf text-md text-white fade-up delay-1 text-justify indent-8">
          Pengalaman saya meliputi  bidang desain grafis, pengembangan teknologi digital, serta program rehabilitasi yang berdampak nyata dan berkelanjutan, diterapkan untuk kebutuhan organisasi di sektor swasta maupun instansi pemerintah.
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`fade-up delay-${idx + 2} p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 `}
            >

              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 relative">
                  <Image
                    src={exp.icon}
                    alt={exp.title}
                    width={48}
                    height={48}
                    className="rounded-md object-contain"
                  />
                </div>

                <div className="flex-1">
                  <h5 className="font-semibold text-md font-pretitle">
                    {exp.title}
                  </h5>
                  <p className="text-gray-400 text-xs font-pretitle">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 text-xs font-paragraf  ">
                    {exp.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}