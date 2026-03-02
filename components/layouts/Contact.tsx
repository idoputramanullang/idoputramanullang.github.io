import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

import { FaThreads } from "react-icons/fa6";
const contacts = [
  { info: "WhatsApp", icon: <FaWhatsapp size={40} color="#ffffff" />, link: "https://wa.me/6281265550852" },
  { info: "Instagram", icon: <FaInstagram size={40} color="#ffffff" />, link: "https://www.instagram.com/idomanullang?igsh=c3VhaGtramphcnFv" },
  { info: "TikTok", icon: <FaTiktok size={40} color="#ffffff" />, link: "https://www.tiktok.com/@idomanullang?_r=1&_t=ZS-94LQWZUpGC4" },
  { info: "GitHub", icon: <FaGithub size={40} color="#ffffff" />, link: "https://github.com/idoputramanullang" },
  { info: "LinkedIn", icon: <FaLinkedin size={40} color="#ffffff" />, link: "https://www.linkedin.com/in/ido-putra-amanta-manullang" },
  { info: "Threads", icon: <FaThreads size={40} color="#ffffff" />, link: "" },
  { info: "Telegram", icon: <FaTelegramPlane size={40} color="#ffffff" />, link: "" },
  { info: "Twitter", icon: <FaTwitter size={40} color="#ffffff" />, link: "" },
];
export default function Contact() {
  return (
    <section className="py-16   px-4 ">




      <div className="space-y-2 text-center relative  fade-up delay-1">
        <p className="font-title text-5xl font-black tracking-wider uppercase leading-tight bg-gradient-to-b from-blue-500 to-black bg-clip-text text-transparent relative z-10">
          KONTAK
        </p>

        <p className="font-title text-4xl font-black tracking-wider uppercase leading-tight text-white -mt-12 relative z-20">
          KONTAK
        </p>
      </div>
      <div className="font-paragraf   mt-6  tracking-wider text-md  text-white fade-up delay-1 text-justify  indent-8">
        Hubungi saya untuk mendiskusikan proyek pengembangan web, kolaborasi teknologi, konsultasi IT, atau untuk mendapatkan informasi terkait layanan rehabilitasi narkoba, manajemen data pasien, dan dukungan digital bagi yayasan serta lembaga sosial.
      </div>
      <div className="grid grid-cols-4 gap-4  my-12">
        {contacts.map((c) => {
          const isDisabled = !c.link;

          return (
            <a
              key={c.info}
              href={isDisabled ? undefined : c.link}
              target={isDisabled ? undefined : "_blank"}
              rel={isDisabled ? undefined : "noopener noreferrer"}
              className={`flex flex-col items-center justify-center gap-2 p-2 rounded-xl backdrop-blur-xl border border-white/10 transition-all duration-300
        ${isDisabled
                  ? "pointer-events-none"
                  : "hover:-translate-y-1 hover:shadow-lg"
                }`}
            >
              <div className="transition-transform duration-300 hover:scale-110">
                {c.icon}
              </div>
              <span className="text-gray-400 text-[10px] md:text-sm text-center font-paragraf">
                {c.info}
              </span>
            </a>
          );
        })}
      </div>

      {/* CONTACT FORM */}
      <div className="w-full max-w-md">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nama Lengkap"
            className="px-4 py-2 rounded-xl border border-white/20 bg-black/30 text-white focus:outline-none focus:border-blue-500  font-paragraf"
            required
          />
          <input
            type="email"
            placeholder="Email "
            className="px-4 py-2 rounded-xl border border-white/20 bg-black/30 text-white focus:outline-none focus:border-blue-500  font-paragraf"
            required
          />
          <textarea
            placeholder="Pesan"
            className="px-4 py-2 rounded-xl border border-white/20 bg-black/30 text-white focus:outline-none focus:border-blue-500 resize-none h-32  font-paragraf"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 border border-gray-500 rounded-xl font-semibold hover:bg-gray-600 transition-colors  font-pretitle"
          >
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}