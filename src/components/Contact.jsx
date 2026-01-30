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
            ¡Contactanos!
          </h2>
          <p className="text-neutral-700 text-lg">
          Tu bienestar comienza con una conversación. Contáctanos para 
          reservar tu cita o recibir más información sobre nuestros 
          servicios en estética facial, corporal y cirugía. ¡Te esperamos!
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/573155305185?text=Hola%20doc,%20estoy%20interesado%20en%20tus%20servicios"
            target="_blank"
            className="group rounded-2xl border border-neutral-200 p-6 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-green-50 hover:border-green-300 hover:shadow-lg active:scale-95"
          >
            <IconBrandWhatsapp className="h-8 w-8 text-neutral-800 mb-4 transition group-hover:text-green-600 group-hover:scale-110" />
            <h3 className="font-semibold text-black mb-1">WhatsApp</h3>
            <p className="text-neutral-600 text-sm">
              Escríbenos para agendar tu cita y resaltar tu belleza natural.
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/dra.sandravelasquez?igsh=OHdhcXppemxsaHY2"
            target="_blank"
            className="group rounded-2xl border border-neutral-200 p-6 transform transition-all duration-300 ease-out hover:scale-105 hover:bg-pink-50 hover:border-pink-300 hover:shadow-lg active:scale-95"
          >
            <IconBrandInstagram className="h-8 w-8 text-neutral-800 mb-4 transition group-hover:text-pink-600 group-hover:scale-110" />
            <h3 className="font-semibold text-black mb-1">Instagram Dra. Sandra Velásquez</h3>
            <p className="text-neutral-600 text-sm">
              Mira casos reale y testimonios de nuestros pacientes.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
