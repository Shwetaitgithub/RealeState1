import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Gallery from "../sections/Gallery";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}

export default Home;