import React from "react";
import ReactRotatingText from "react-rotating-text";
import Socials from "./socials";
import { Link } from "react-scroll";

export default function intro() {
  return (
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
          <span className="text-primary">3 years</span> experience in Web
          Development, Cybersecurity, and IT.
        </p>
        <div className="lg:flex lg:gap-5 my-10 lg:space-y-0 space-y-3">
          <button
            className="lg:w-auto w-full border-primary border p-4"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1NGRzfArCDIZCrj1nqkqR07IHJoZpfdAC/view?usp=sharing",
                "_blank"
              );
            }}
          >
            Download Resume
          </button>
          <Link
            activeClass="active"
            smooth
            spy
            to="hire"
            className="lg:w-auto w-full bg-primary p-4 cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
        <Socials />
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
  );
}
