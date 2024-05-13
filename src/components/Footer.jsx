import React from "react";
import { Link } from "react-scroll";

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
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="about"
                  className="transition duration-500 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="services"
                  className="transition duration-500 hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1NGRzfArCDIZCrj1nqkqR07IHJoZpfdAC/view?usp=sharing",
                      "_blank"
                    );
                  }}
                  activeClass="active"
                  smooth
                  spy
                  to="resume"
                  className="transition duration-500 hover:text-primary"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="skills"
                  className="transition duration-500 hover:text-primary"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  smooth
                  spy
                  to="projects"
                  className="transition duration-500 hover:text-primary"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  ctiveClass="active"
                  smooth
                  spy
                  to="hire"
                  className="transition duration-500 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
