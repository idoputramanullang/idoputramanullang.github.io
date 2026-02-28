import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
    SiTailwindcss, SiBootstrap, SiJquery, SiPhp, SiCodeigniter,
    SiLaravel, SiNodedotjs, SiExpress, SiNestjs, SiMysql,
    SiPostgresql, SiSqlite, SiSupabase, SiMongodb, SiDart,
    SiFlutter, SiPrisma, SiBun
} from "react-icons/si";

import {
    Users,
    MessageCircle,
    ClipboardCheck,
    Milestone,
    HeartPulse,
    Zap,
    Activity,
    GitMerge
} from "lucide-react";

const engineeringSkills = [
    // --- FRONTEND FOUNDATION ---
    { title: "HTML", level: "Ahli" },
    { title: "CSS", level: "Ahli" },
    { title: "JavaScript", level: "Mahir" },
    { title: "TypeScript", level: "Mahir" },

    // --- MODERN FRONTEND ---
    { title: "React.js", level: "Mahir" },
    { title: "Next.js", level: "Mahir" },
    { title: "Tailwind", level: "Ahli" },
    { title: "Bootstrap", level: "Ahli" },
    { title: "jQuery", level: "Ahli" },

    // --- BACKEND & RUNTIME ---
    { title: "Node.js", level: "Menengah" },
    { title: "Bun", level: "Menengah" },
    { title: "NestJS", level: "Menengah" },
    { title: "Express.js", level: "Menengah" },
    { title: "PHP", level: "Ahli" },
    { title: "Laravel", level: "Ahli" },
    { title: "CodeIgniter", level: "Ahli" },

    // --- DATABASE & ORM ---
    { title: "PostgreSQL", level: "Mahir" },
    { title: "MySQL", level: "Ahli" },
    { title: "SQLite", level: "Mahir" },
    { title: "Prisma", level: "Pemula" },
    { title: "Supabase", level: "Pemula" },
    { title: "MongoDB", level: "Pemula" },

    // --- MOBILE DEVELOPMENT ---
    { title: "Flutter", level: "Pemula" },
    { title: "Dart", level: "Pemula" },
];

const rehabSkills = [
    { title: "Manajemen Program Rehabilitasi", level: "Kepemimpinan Strategis" },
    { title: "Konseling & Pendampingan Klinis", level: "Praktisi Senior" },
    { title: "Asesmen & Evaluasi Klien", level: "Spesialis" },
    { title: "Perencanaan Intervensi Terstruktur", level: "Perancang Program" },
    { title: "Pendampingan Pemulihan", level: "Spesialis Rehabilitasi" },
    { title: "Intervensi Krisis", level: "Praktisi Lanjutan" },
    { title: "Monitoring & Evaluasi Program", level: "Pengawas Operasional" },
    { title: "Koordinasi Lintas Instansi", level: "Koordinator Eksekutif" },
];
const getIcon = (title: string, size = 32) => {
    const t = title.toLowerCase();

    // Engineering
    if (t === "html") return <SiHtml5 className="text-[#E34F26]" />;
    if (t === "css") return <SiCss3 className="text-[#1572B6]" />;
    if (t === "javascript") return <SiJavascript className="text-[#F7DF1E]" />;
    if (t === "typescript") return <SiTypescript className="text-[#3178C6]" />;
    if (t.includes("bootstrap")) return <SiBootstrap className="text-[#7952B3]" />;
    if (t.includes("tailwind")) return <SiTailwindcss className="text-[#06B6D4]" />;
    if (t.includes("react")) return <SiReact className="text-[#61DAFB]" />;
    if (t.includes("next")) return <SiNextdotjs className="text-white" />;
    if (t.includes("jquery")) return <SiJquery className="text-[#0769AD]" />;
    if (t === "php") return <SiPhp className="text-[#777BB4]" />;
    if (t.includes("codeigniter")) return <SiCodeigniter className="text-[#EF4223]" />;
    if (t.includes("laravel")) return <SiLaravel className="text-[#FF2D20]" />;
    if (t.includes("node")) return <SiNodedotjs className="text-[#339933]" />;
    if (t.includes("express")) return <SiExpress className="text-white opacity-60" />;
    if (t.includes("nest")) return <SiNestjs className="text-[#E0234E]" />;
    if (t.includes("mysql")) return <SiMysql className="text-[#4479A1]" />;
    if (t === "sqlite") return <SiSqlite className="text-[#003B57]" />;
    if (t.includes("postgresql")) return <SiPostgresql className="text-[#4169E1]" />;
    if (t.includes("supabase")) return <SiSupabase className="text-[#3ECF8E]" />;
    if (t.includes("mongodb")) return <SiMongodb className="text-[#47A248]" />;
    if (t === "dart") return <SiDart className="text-[#0175C2]" />;
    if (t === "flutter") return <SiFlutter className="text-[#02569B]" />;
    if (t === "prisma") return <SiPrisma className="text-[#5A67D8]" />;
    if (t === "bun") return <SiBun className="text-[#f9f1e1]" />;




    if (t.includes("manajemen"))
        return <Users size={size} strokeWidth={1.5} className="text-blue-400" />;

    if (t.includes("konseling"))
        return <MessageCircle size={size} strokeWidth={1.5} className="text-purple-400" />;

    if (t.includes("asesmen"))
        return <ClipboardCheck size={size} strokeWidth={1.5} className="text-rose-400" />;

    if (t.includes("perencanaan"))
        return <Milestone size={size} strokeWidth={1.5} className="text-emerald-400" />;

    if (t.includes("pemulihan"))
        return <HeartPulse size={size} strokeWidth={1.5} className="text-green-400" />;

    if (t.includes("intervensi"))
        return <Zap size={size} strokeWidth={1.5} className="text-amber-400" />;

    if (t.includes("monitoring"))
        return <Activity size={size} strokeWidth={1.5} className="text-red-400" />;

    if (t.includes("koordinasi"))
        return <GitMerge size={size} strokeWidth={1.5} className="text-sky-400" />;
};
export default function Skills() {
    return (
        <section className="bg-black text-white py-24 px-4">
            <div className="max-w-md mx-auto space-y-8">
                <div className="space-y-2 text-center relative fade-up">
                    <p className="font-title text-5xl font-black tracking-wider uppercase leading-tight bg-gradient-to-b from-blue-500 to-black bg-clip-text text-transparent relative z-10">
                        Skills
                    </p>

                    <p className="font-title text-4xl font-black tracking-wider uppercase leading-tight text-white -mt-12 relative z-20">
                        Skills
                    </p>
                </div>

                <div className="font-paragraf   space-y-1 tracking-wider text-md  text-white fade-up delay-1 text-justify  indent-8">
                    Saya memiliki keahlian di bidang teknologi digital, termasuk pengembangan frontend, backend, database, dan penerapan solusi digital untuk berbagai proyek di sektor swasta maupun instansi pemerintah.
                </div>
                <div className="space-y-8"> 
                    <div className="grid grid-cols-4 gap-6">
                        {engineeringSkills.map((skill) => (
                            <div key={skill.title} className="flex flex-col items-center justify-center p-2 text-center group fade-up delay-1 ">
                                <div className="text-4xl mb-2 transition-transform group-hover:scale-110">
                                    {getIcon(skill.title)}
                                </div>
                                <h3 className="text-xs font-black font-title  truncate w-full">{skill.title}</h3>
                                <p className="text-sm text-gray-200 font-paragraf tracking-tighter">{skill.level}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="font-paragraf   space-y-1 tracking-wider text-md  text-white fade-up delay-1 text-justify  indent-8">
                    Selain itu, saya berpengalaman dalam merancang, mendukung, dan mengelola program rehabilitasi yang berdampak nyata dan berkelanjutan, memberikan kontribusi positif bagi yayasan dan organisasi sosial.
                </div>
                {/* REHABILITATION */}
                <div className="space-y-8">
                    <div className="flex flex-col gap-5">
                        {rehabSkills.map((skill) => (
                            <div
                                key={skill.title}
                                className="flex items-center gap-5 p-4     border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group"
                            >
                                {/* ICON DI KIRI */}
                                <div className="shrink-0 p-3 fade-up delay-1  bg-white/5 rounded-xl group-hover:bg-blue-500/10 transition-colors">
                                    {getIcon(skill.title, 24)}
                                </div>

                                {/* TITLE DI KANAN */}
                                <div className="flex flex-col fade-up delay-1 ">
                                    <h3 className="text-sm font-pretitle tracking-tight   text-white group-hover:text-blue-400 transition-colors">
                                        {skill.title}
                                    </h3>
                                    <p className="text-sm font-paragraf text-gray-100 tracking-widest   mt-0.5">
                                        {skill.level}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}