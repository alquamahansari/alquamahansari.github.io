// src/pages/Home.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import Experience from "../components/Experience";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ExperienceEducation from "../components/ExperienceEducation";

export default function Home() {
  return (
    <main className="bg-[#080E1E] text-[#dde2f9] antialiased">
      <Header />
      <Hero />
      <About />
      <FeaturedProjects />
      <ExperienceEducation />
      {/* <Experience /> */}
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}