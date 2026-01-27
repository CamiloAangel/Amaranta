import {
  IconBrandWhatsapp,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

export function Contact() {
  return (
    <section id="contact" className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contacto
          </h2>
          <p className="text-neutral-700 text-lg">
            Hablemos sobre tu proyecto, colaboraciones o intervenciones artísticas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/573147733595?text=Hola%20Eli,%20me%20gustaría%20cotizar%20un%20proyecto"
            target="_blank"
            className="group rounded-2xl border border-neutral-200 p-6 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-green-50 hover:border-green-300 hover:shadow-lg active:scale-95"
          >
            <IconBrandWhatsapp className="h-8 w-8 text-neutral-800 mb-4 transition group-hover:text-green-600 group-hover:scale-110" />
            <h3 className="font-semibold text-black mb-1">WhatsApp</h3>
            <p className="text-neutral-600 text-sm">
              Escríbeme directamente para cotizar tu idea.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:studiocambelt@gmail.com"
            className="group rounded-2xl border border-neutral-200 p-6 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-sky-50 hover:border-sky-300 hover:shadow-lg active:scale-95"
          >
            <IconMail className="h-8 w-8 text-neutral-800 mb-4 transition group-hover:text-sky-600 group-hover:scale-110" />
            <h3 className="font-semibold text-black mb-1">Email</h3>
            <p className="text-neutral-600 text-sm">
              studiocambelt@gmail.com
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/studiocambelt"
            target="_blank"
            className="group rounded-2xl border border-neutral-200 p-6 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-pink-50 hover:border-pink-300 hover:shadow-lg active:scale-95"
          >
            <IconBrandInstagram className="h-8 w-8 text-neutral-800 mb-4 transition group-hover:text-pink-600 group-hover:scale-110" />
            <h3 className="font-semibold text-black mb-1">Instagram Studio Cambelt</h3>
            <p className="text-neutral-600 text-sm">
              @studiocambelt
            </p>
          </a>
          {/* Instagram  flow primavera*/}
          <a
            href="https://www.instagram.com/flowprimavera?igsh=MTB1ZnlhYnd1bnZ3Ng=="
            target="_blank"
            className="group rounded-2xl border border-neutral-200 p-6 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-pink-50 hover:border-pink-300 hover:shadow-lg active:scale-95"
          >
            <IconBrandInstagram className="h-8 w-8 text-neutral-800 mb-4 transition group-hover:text-pink-600 group-hover:scale-110" />
            <h3 className="font-semibold text-black mb-1">Instagram Flow Primavera</h3>
            <p className="text-neutral-600 text-sm">
              @studiocambelt
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
