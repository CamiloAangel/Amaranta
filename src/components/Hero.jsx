import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          Elizabeth Cambelt
        </h1>

        <p className="mt-4 text-base md:text-lg text-white/80">
          Soy apasionada por la vida y el color, creo en la expresión artística
          como una herramienta poderosa para reparar y transformar vidas y
          espacios.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#works"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Mis trabajos
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  );
}
