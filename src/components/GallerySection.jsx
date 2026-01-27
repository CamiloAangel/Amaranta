import { useEffect, useRef, useState } from "react";
import { useColor } from "color-thief-react";

function toPastel(rgb, amount = 0.6) {
  const [r, g, b] = rgb;
  const mix = (c) => Math.round(c + (255 - c) * amount);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}

export function GallerySection({
  title,
  subtitle,
  description,
  images,
  section,
}) {
  const [index, setIndex] = useState(0);
  const touchStart = useRef(0);

  const { data: color } = useColor(images[index], "rgbArray", {
    crossOrigin: "anonymous",
    quality: 10,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  function handleTouchStart(e) {
    touchStart.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    const diff = touchStart.current - e.changedTouches[0].clientX;

    if (diff > 50) setIndex((prev) => (prev + 1) % images.length);
    if (diff < -50)
      setIndex((prev) => (prev - 1 + images.length) % images.length);
  }

  const message = `Hola Eli cómo estas ?, Estoy super interesado en "${section}", podemos cotizar?`;
  const whatsappUrl = `https://wa.me/573147733595?text=${encodeURIComponent(
    message
  )}`;

  const bgColor = color ? toPastel(color, 0.7) : "#ffffff";

  return (
    <section
      style={{ backgroundColor: bgColor }}
      className="w-full py-24 transition-colors duration-1000"
    >
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Text */}
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold text-black">{title}</h2>

          <h3 className="text-2xl mt-2 text-neutral-700">{subtitle}</h3>

          <p className="mt-4 text-black/80 leading-relaxed">{description}</p>
        </div>

        {/* Carousel */}
        <div
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`
                  absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-1000
                  ${i === index ? "opacity-100" : "opacity-0"}
                `}
              />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-2 w-2 rounded-full transition-all
                ${i === index ? "bg-black w-6" : "bg-black/30"}
              `}
            />
          ))}
        </div>

        {/* Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center mt-6
            px-6 py-3 rounded-xl
            bg-black/80 text-white font-medium
            hover:bg-black hover:scale-105
            transition-all
          "
        >
          Cotizar por wpp
        </a>
      </div>
    </section>
  );
}
