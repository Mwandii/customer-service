import Hero         from "../components/sections/Hero";
import About        from "../components/sections/About";
import Services     from "../components/sections/Services";
import StatsBanner  from "../components/sections/StatsBanner";
import Testimonials from "../components/sections/Testimonials";
import Contact      from "../components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <StatsBanner />
      <Testimonials />
      <Contact />
    </main>
  );
}