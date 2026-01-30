import aboutBg from "../assets/sobremi.jpg"; // fondo (puedes usar otro)
import aboutme from "../assets/aboutme.jpg";

export function AboutMe() {
  return (
    <section
      className="relative w-full py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div
          className="
            grid md:grid-cols-2 gap-12 items-center
            rounded-3xl
            bg-white/30 dark:bg-black/30
            backdrop-blur-xl
            border border-white/20
            shadow-xl
            p-10
          "
        >
          {/* Texto */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sobre nosotros
            </h2>

            <p className="text-white/80 leading-relaxed text-base md:text-lg">
              Nos apasiona cuidar de ti. Somos un centro de estética integral donde la 
              tecnología avanzada se une a la calidez de un equipo experto para realzar 
              tu belleza natural con total seguridad. Desde tratamientos de piel y cabello 
              hasta cirugía estética en Cali, acompañamos a nuestros clientes en cada paso, 
              haciéndolos sentir radiantes, cómodos y en las mejores manos.
            </p>
          </div>

          {/* Imagen */}
          <div className="w-full">
            <img
              src={aboutme}
              alt="Sobre mí"
              className="
                w-full
                object-cover
                rounded-2xl
                aspect-square
                md:aspect-[4/5]
                shadow-lg
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
