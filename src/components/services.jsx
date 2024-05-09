import React from "react";
import {
  Code,
  Globe,
  LaptopMinimal,
  GlobeLock,
  Network,
  Cable,
} from "lucide-react";

function services() {
  return (
    <section className="my-20" id="services" data-aos="fade-up">
      <p className="text-sm uppercase font-semibold tracking-wide text-center">
        Simplifying IT | Enhancing Business Through Innovation
      </p>
      <h4 className="text-center lg:text-4xl text-2xl my-5">
        My <span className="text-primary">Special Services</span> For your{" "}
        <br className="lg:block hidden" /> Business{" "}
        <span className="text-primary">& Project</span>
      </h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
        <div className="bg-agani px-4 py-5 text-center rounded-lg  shadow-sm bg-primary-foreground border-transparent p-4 transition duration-500 border hover:border-primary hover:-translate-y-4">
          <Globe size={60} className="text-primary mx-auto" />
          <h1 className="text-white uppercase font-bold pt-5 ">
            Web Development
          </h1>
          <p className="flex items-center p-3 text-xl ">
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>
        <div className="bg-agani px-4 py-5 text-center rounded-lg  shadow-sm bg-primary-foreground border-transparent p-4 transition duration-500 border hover:border-primary hover:-translate-y-4">
          <Code size={60} className="text-primary mx-auto" />
          <h1 className="text-white uppercase font-bold pt-5 ">
            API Design / Integration
          </h1>
          <p className="flex items-center p-3 text-xl ">
            Developing a highly secure, fast and scalable APIs both REST and
            GraphQL.
          </p>
        </div>
        <div className="bg-agani px-4 py-5 text-center rounded-lg  shadow-sm bg-primary-foreground border-transparent p-4 transition duration-500 border hover:border-primary hover:-translate-y-4">
          <Cable size={60} className="text-primary mx-auto" />
          <h1 className="text-white uppercase font-bold pt-5 ">IT Support</h1>
          <p className="flex items-center p-3 text-xl ">
            Enjoy continuous, reliable, and enjoyable IT support that keeps your
            systems running smoothly.
          </p>
        </div>
        <div className="bg-agani px-4 py-5 text-center rounded-lg  shadow-sm bg-primary-foreground border-transparent p-4 transition duration-500 border hover:border-primary hover:-translate-y-4">
          <GlobeLock size={60} className="text-primary mx-auto" />
          <h1 className="text-white uppercase font-bold pt-5 ">
            Cybersecurity Specialist
          </h1>
          <p className="flex items-center p-3 text-xl ">
            Extensive experience in identifying, evaluating, and mitigating
            security threats to maintain the integrity of information systems.
          </p>
        </div>
        <div className="bg-agani px-4 py-5 text-center rounded-lg  shadow-sm bg-primary-foreground border-transparent p-4 transition duration-500 border hover:border-primary hover:-translate-y-4">
          <LaptopMinimal size={60} className="text-primary mx-auto" />
          <h1 className="text-white uppercase font-bold pt-5 ">Wordpress</h1>
          <p className="flex items-center p-3 text-xl ">
            WordPress themes, plugins, and core functionalities to boost user
            engagement and improve site performance.
          </p>
        </div>
        <div className="bg-agani px-4 py-5 text-center rounded-lg  shadow-sm bg-primary-foreground border-transparent p-4 transition duration-500 border hover:border-primary hover:-translate-y-4">
          <Network size={60} className="text-primary mx-auto" />
          <h1 className="text-white uppercase font-bold pt-5 ">
            Network Engineer
          </h1>
          <p className="flex items-center p-3 text-xl ">
            Implementing, and maintaining robust network infrastructures.
          </p>
        </div>
      </div>
    </section>
  );
}

export default services;
