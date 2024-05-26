import React from "react";
import { Figma, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function socials() {
  return (
    <ul className="flex flex-wrap space-x-4">
      <li>
        <a
          href="https://github.com/carreuky"
          target="_blank"
          rel="noopener noreferrer"
          title="Github Profile"
        >
          <Github
            size={24}
            className="border border-primary rounded-md h-10 w-10 p-2 text-primary hover:bg-primary hover:text-white transition duration-500 hover:-translate-y-2"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/kelvin-nderitu-5845b3208/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin
            size={24}
            className="border border-primary rounded-md h-10 w-10 p-2 text-primary hover:bg-primary hover:text-white transition duration-500 hover:-translate-y-2"
          />
        </a>
      </li>
      <li>
        <a
          href="mailto:nderitukkariuki@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail
            size={24}
            className="border border-primary rounded-md h-10 w-10 p-2 text-primary hover:bg-primary hover:text-white transition duration-500 hover:-translate-y-2"
          />
        </a>
      </li>
    </ul>
  );
}
