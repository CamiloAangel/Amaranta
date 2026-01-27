import endImg from "../assets/End.jpg";
import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

export default function End() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${endImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            "Es la naturaleza que vive entre nuestras casas, ciudades, campos,
            memoria y entorno mi mayor inspiración".
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/80">
            Elizabeth Cambelt
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="
          relative z-10 w-full
          bg-neutral-900
          border-t border-white/10
          py-4
        "
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center gap-8">
          <a
            href="https://wa.me/573147733595"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-green-400 transition"
          >
            <IconBrandWhatsapp size={18} />
            <span className="text-sm">WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/studiocambelt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-pink-400 transition"
          >
            <IconBrandInstagram size={18} />
            <span className="text-sm">Instagram</span>
          </a>

          <a
            href="mailto:studiocambelt@gmail.com"
            className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition"
          >
            <IconMail size={18} />
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
