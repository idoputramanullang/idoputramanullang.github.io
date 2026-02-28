"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Navbar() {
  const [show, setShow] = useState(false); // mulai hidden
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // jika scroll ke atas (current < last) dan sudah scroll lebih dari 100px
      if (currentScroll < lastScroll && currentScroll > 100) {
        setShow(true);
      } else if (currentScroll > lastScroll) {
        setShow(false); // scroll ke bawah hide
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
      }`}
    >
      <div className="relative max-w-md w-[95vw]">
        <div className="relative flex items-center gap-4 
                        bg-black/80 backdrop-blur-xl
                        rounded-2xl px-6 py-3">
          {/* Logo */}
          <div className="relative z-10">
            <Image
              src="/hero.webp"
              alt="Logo"
              width={42}
              height={42}
            />
          </div>

          {/* Typing Text */}
          <div className="relative z-10 text-lg  text-white font-title">
            <TypeAnimation
              sequence={[
                "Drug Rehabilitation Center",
                2000,
                "Fullstack Developer",
                2000,
              ]}
              speed={60}
              repeat={Infinity}
            /> 
          </div>
        </div>
      </div>
    </nav>
  );
}