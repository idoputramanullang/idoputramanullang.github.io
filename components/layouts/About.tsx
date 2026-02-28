import { FaCode, FaLayerGroup } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

export default function About() {
  const executiveRoles = [
    {
      icon: <GiBrain />,
      title: "Program Manager",
      period: "2025 – Sekarang",
    },
    {
      icon: <FaCode />,
      title: "Fullstack Developer",
      period: "2018 – Sekarang",
    },
    {
      icon: <FaLayerGroup />,
      title: "Proyek Selesai",
      period: "20+ Proyek Swasta & Pemerintahan",
    },
  ];

  return (
    <section
      id="about"
      className="flex justify-center py-20 text-white px-4"
    >
      <div className="max-w-md w-full space-y-10">

        {/* ===== HEADER ===== */}
        <div className="space-y-2 text-center relative  fade-up delay-1">
          <p className="font-title text-5xl font-black tracking-wider uppercase leading-tight bg-gradient-to-b from-blue-500 to-black bg-clip-text text-transparent relative z-10">
            About Me
          </p>

          <p className="font-title text-4xl font-black tracking-wider uppercase leading-tight text-white -mt-12 relative z-20">
            About Me
          </p>
        </div>

        {/* ===== NAME ===== */}
        <div className="space-y-1 tracking-wider fade-up delay-1">
          <h2 className="text-xs font-black text-white font-paragraf">
            Hi, My name is
          </h2>
          <h2 className="text-lg font-bold tracking-widest text-white font-pretitle">
            Ido Putra Manullang <span className="text-blue-500">S.Kom</span>
          </h2>
        </div>

        {/* ===== DESCRIPTION ===== */}
        <div className="space-y-4 text-white text-lg leading-relaxed font-paragraf fade-up delay-2">
          <div className="text-justify indent-8">
            Saya adalah seorang <span className="text-blue-500 font-semibold">Fullstack Developer</span>
            dengan latar belakang Teknik Informatika. Berpengalaman dalam merancang dan
            mengembangkan sistem informasi untuk berbagai kebutuhan, baik di sektor swasta
            maupun instansi pemerintahan.
          </div>

          <div className="text-justify indent-8">
            Saat ini, saya menjabat sebagai <span className="text-blue-500 font-semibold">Program Manager</span>,
            memimpin pengembangan dan transformasi program rehabilitasi secara terstruktur,
            terukur, dan berkelanjutan di IPWL Mutiara Abadi Binjai.
          </div>
        </div>

        {/* ===== ROLES ===== */}
        <div className="space-y-4">
          {executiveRoles.map((role, index) => (
            <div
              key={index}
              className={`flex items-center gap-5 fade-up delay-${index + 3}`}
            >
              <div className="p-2 text-3xl text-blue-500">
                {role.icon}
              </div>
              <div>
                <h5 className="font-semibold  text-white text-lg font-pretitle">
                  {role.title}
                </h5>
                <p className="text-gray-300 text-base font-paragraf">
                  {role.period}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}