import { SiteNavbar } from "../components/Navbar";
import Hero from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import { Works } from "../components/Works";
import End from "../components/End";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white">
      <SiteNavbar />
      <Hero />
      <AboutMe />
      <Contact/>
      <Works />
      <End />
    </main>
  );
}
