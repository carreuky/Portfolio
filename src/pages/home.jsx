import React, { Fragment } from "react";
import Navbar from "../components/navbar";
import About from "../components/about";
import Intro from "../components/intro";
import Services from "../components/services";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Contact from "../components/contact";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <Fragment>
      <div className="bg-black px-12 ">
        <Navbar />
        <section>
          <Intro />
        </section>

        <section
          className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20 lg:my-20 my-5"
          data-aos="fade-up"
          id="about"
        >
          <About />
        </section>
        <section className="my-20" id="services" data-aos="fade-up">
          <Services />
        </section>
        <section data-aos="fade-up" id="skills">
          <Skills />
        </section>
        <section data-aos="fade-up" id="projects">
          <Projects />
        </section>
        <section data-aos="fade-up " id="hire">
          <Contact />
        </section>
      </div>
      <Footer />
    </Fragment>
  );
}
