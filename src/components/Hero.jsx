import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 " />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Centro de Estética Amaranta 
        </h1>

        <p className="mt-4 text-base md:text-lg text-white/80">
          Tu belleza es única; protégela y realzala con procedimientos estéticos seguros.
          Fusionamos tecnología y cariño para que disfrutes de tu mejor versión con total confianza.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href=""
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Sobre nosotros
          </a>

          <a
            href=""
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Quiero mi cita
          </a>
        </div>
      </div>
    </section>
  );
}
