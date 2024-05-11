import React from "react"

export default function Footer() {
  return (
    <footer className="bg-agani py-5  px-12">
      <div className="container max-auto">
        <div className="lg:flex justify-between lg:text-left text-center font-semibold">
          <p>
            Copyright © {new Date().getFullYear()},{" "}
            <a href={"/"} className={` text-primary`}>
              Kelvin Nderitu
            </a>{" "}
            All Rights Reserved
          </p>
          <div>
            <ul className="lg:flex hidden space-x-5">
              <li>
                <a
                  href="#about"
                  className="transition duration-500 hover:text-primary"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition duration-500 hover:text-primary"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className="transition duration-500 hover:text-primary"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="transition duration-500 hover:text-primary"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition duration-500 hover:text-primary"
                >
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
