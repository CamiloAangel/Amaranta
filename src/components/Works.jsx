import { GallerySection } from "./GallerySection";

/* Murales */
import mural1 from "../assets/Mural1.png";
import mural2 from "../assets/Mural2.png";
import mural3 from "../assets/Mural3.png";

/* Colaboraciones */
import cni1 from "../assets/Cni1.png";
import cni2 from "../assets/Cni2.png";
import cni3 from "../assets/Cni3.png";

/* Experiencias */
import ec1 from "../assets/Ec1.png";
import ec2 from "../assets/Ec2.png";
import ec3 from "../assets/Ec3.png";

export function Works() {
  return (
    <section id="works">
      <GallerySection
        title="Obras"
        subtitle="Muralismo"
        section="Muralismo"
        description="Elizabeth Cambelt, artista caucana que explora el muralismo como una herramienta de memoria, identidad y transformación social."
        images={[mural1, mural2, mural3]}
      />

      <GallerySection
        title="Colaboraciones"
        subtitle="Nacionales e internacionales"
        section="Colaboraciones"
        description="Procesos creativos compartidos con comunidades, marcas y artistas."
        images={[cni1, cni2, cni3]}
      />

      <GallerySection
        title="Experiencias"
        subtitle="Comunitarias"
        section="Experiencias comunitarias"
        description="Arte que transforma territorios desde lo social y lo ambiental."
        images={[ec1, ec2, ec3]}
      />
      <GallerySection
        title="Talleres"
        subtitle=""
        section="Talleres"
        description="Deja salir el artista que hay en ti."
        images={[ec1, ec2, ec3]}
      />
    </section>
  );
}
