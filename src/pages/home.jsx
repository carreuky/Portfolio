import React from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import ReactRotatingText from "react-rotating-text";
import About from "../components/about";
import Socials from "../components/socials";
import Services from "../components/services";
import Skills from "../components/skills";
import Projects from "../components/projects";
export default function Home() {
  return (
    <div className="bg-black px-12">
      <Navbar />
      <section className="grid lg:grid-cols-2 grid-cols-1 items-center lg:text-left text-center sm:h-screen pt-20 sm:py-2">
        <div className="lg:order-1 order-2 lg:my-0 my-10">
          <p className="text-sm uppercase font-semibold tracking-wide">
            HELLO, I&apos;M
          </p>
          <h1 className="lg:text-5xl text-2xl font-black tracking-[0.1rem] lg:my-5 my-2">
            <span className="text-primary">Kelvin</span> Nderitu
          </h1>
          <p className="lg:text-4xl text-xl text-primary font-semibold tracking-wide">
            <ReactRotatingText
              items={[
                "Frontend Developer",
                "Web developer",
                "Network Engineer",
                "SOC Analyst",
                "Tech enthusiast",
              ]}
            />
          </p>
          <p className="lg:my-10 my-5 leading-10">
            From Nairobi, Kenya. I have more than{" "}
            <span className="text-primary">3 years</span> experience in
            Web Development, Cybersecurity, and IT. 
          </p>
          <div className="lg:flex lg:gap-5 my-10 lg:space-y-0 space-y-3">
            <button
              className="lg:w-auto w-full border-primary border p-4"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1ULybJIrMYilUrdxzONjkiPeswp4mD0N7/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Download Resume
            </button>
            <button className="lg:w-auto w-full bg-primary p-4">Contact Me</button>
          </div>
          <Socials/>
        </div>
        <img
          src="/profile.svg"
          alt="svg"
          // width={500}
          // height={500}
          className="w-full lg:h-[30rem] h-64 object-contain lg:order-2 order-1 "
          // unoptimized={true}
        />
      </section>
      <About />
      <Services/>
      <Skills/>
      <Projects/>
    </div>
  );
}
