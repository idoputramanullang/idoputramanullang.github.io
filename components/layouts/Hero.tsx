import { FaReact, FaNodeJs, FaLaravel } from "react-icons/fa";
import {
    SiNextdotjs,
    SiNestjs, 
    SiFlutter,
    SiExpress, 
    SiCodeigniter,
} from "react-icons/si";

const icons = [
    { icon: <SiFlutter size={36} color="#02569B" />, radius: 165, speed: 15, start: 0, zIndex: 40 },  
    { icon: <FaReact size={36} color="#61dafb" />, radius: 175, speed: 15, start: 90, zIndex: 40 },   
    { icon: <FaLaravel size={36} color="#ff2d20" />, radius: 150, speed: 22, start: 225, zIndex: 40},  
    { icon: <SiNextdotjs size={36} color="#ffffff" />, radius: 165, speed: 15, start: 180, zIndex: 40 },  
    { icon: <SiCodeigniter size={36} color="#ee4323" />, radius: 145, speed: 20, start: 45, zIndex: 40 },  
    { icon: <SiNestjs size={36} color="#e0234e" />, radius: 135, speed: 22, start: 315, zIndex: 40}, // SE
    { icon: <FaNodeJs size={36} color="#8cc84b" />, radius: 140, speed: 20, start: 135, zIndex: 40  }, // Utara (270°)
    { icon: <SiExpress size={36} color="#ffffff" />, radius: 175, speed: 15, start: 270, zIndex: 10},  // NW
];
export default function Hero() {
    return (
        <section className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
            <div className="relative w-full flex items-center justify-center">
                {/* CENTER IMAGE */}
                <div className="relative z-20 p-14">
                    <img
                        src="/hero.webp"
                        alt="Hero"
                        className="w-full h-full"
                    />
                </div>

                {/* ORBITING ICONS */}
                {icons.map((item, index) => (
                    <div
                        key={index}
                        className="absolute  "
                        style={{
                            transform: `rotate(${item.start}deg) translate(${item.radius}px) rotate(${-item.start}deg)`,
                            animation: `orbit ${item.speed}s linear infinite`,
                            transformOrigin: 'center center',
                            zIndex: item.zIndex,
                        }}
                    >
                        <div
                            style={{
                                animation: `float ${1.5 + (index % 3) * 0.5}s ease-in-out infinite alternate,
                            pulse ${2 + (index % 4) * 0.5}s ease-in-out infinite`,
                            }}
                            className="p-3 bg-white/10 border border-white/20 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-transform duration-300 hover:scale-125"
                        >
                            {item.icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}