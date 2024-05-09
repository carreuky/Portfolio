import { useEffect } from "react";
import AOS from "aos";
import { ChevronRight, CircleCheck } from "lucide-react";
import Socials from "./socials";
export default function about() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section
      className="grid lg:grid-cols-2 grid-cols-1 items-center gap-20 lg:my-20 my-5"
      id="about"
    >
      <div className=" h-auto border-t-4 border-b-4 border-primary-foreground transition duration-500 hover:border-primary">
        <img
          src="/per.svg"
          alt="About"
          className="w-auto h-auto object- "
          data-aos="fade-up"
        />
      </div>
      <div data-aos="fade-up mb-8">
        <p className="text-sm uppercase font-semibold tracking-wide">
          About Me
        </p>

        <h2 className="lg:text-4xl text-2xl my-5">
          <span className="text-primary">All-around IT Professional </span>| Web
          Developer |{" "}
          <span className="text-primary">Cybersecurity Specialist</span>
        </h2>
        <p className="sm:leading-1 my-5">
          Proficient in TypeScript, JavaScript, WordPress, and React, I excel in
          front-end development, system administration, and network maintenance.
          My expertise extends to log analysis, threat monitoring, and digital
          forensics, enabling me to effectively manage and mitigate modern cyber
          threats. With a strong commitment to innovation and continuous
          learning, I am dedicated to improving user experiences and resolving
          technical issues, making me a valuable asset to any technology-driven
          team.
        </p>
        <ul className="sm:space-y-3  mb-5 ml-8 list-disc">
          <li className="">
            Develop highly interactive Front end / User Interfaces for the web
          </li>
          <li className="">
            Implement and monitor advanced security protocols to safeguard
            digital assets.
          </li>
          <li className="">
            Passionate about leveraging technology to enhance user experiences
            and solve complex problems.
          </li>
          <li className="">
            Meticulously attentive to details, ensuring high-quality outcomes in
            technology deployment and troubleshooting.
          </li>
          <li className="">
            Provide reliable support and perform routine maintenance to prevent
            and resolve IT issues.
          </li>
          <li className="">
            Develop highly interactive Backend / API services
          </li>
        </ul>
        <Socials />
      </div>
    </section>
  );
}
