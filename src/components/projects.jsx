import React, { Fragment } from "react";
import { Link } from "lucide-react";

export default function projects() {
  const projects = [
    {
      title: "Entrust Productions",
      type: "Website",
      description:
        "Entrust Productions is more than an event planning company; they are a one-stop destination for all things event-related, from concept to execution.",
      image: "/img/projects/8.png",
      link: "https://entrustproductions.co.ke",
      imagePosition: "right",
    },
    {
      title: "Wachira Speaks",
      type: "Website",
      description:
        "Wachira Speaks Ltd is a company of young like-minded individuals who provide various top-notch capacity building services to businesses,organizations, groups, teams and individuals.",
      image: "/img/projects/6.png",
      link: "https://wachiraspeaks.com/",
      imagePosition: "left",
    },
    {
      title: "Lugha Link",
      type: "Website",
      description:
        "LughaLink is set to revolutionize the way businesses and language professionals collaborate. With a focus on industry-specific expertise, our platform promises a seamless, effective translation experience tailored to your unique business needs or linguistic skills.",
      image: "/img/projects/10.png",
      link: "https://lughalink.com/",
      imagePosition: "right",
    },
    {
      title: "Peakreach",
      type: "Website",
      description:
        "PeakReach is a Global call center where customer satisfaction, advanced technology, and sustainability converge. React and Bootstrap used to deliver the project",
      image: "/img/projects/9.png",
      link: "https://www.peakreach.co.ke/",
      imagePosition: "left",
    },
   
    {
      title: "Farmox GYM",
      type: "Website",
      description:
        "A leading manufacturer of high-quality strength gym equipment based in Kenya",
      image: "/img/projects/7.png",
      link: "https://farmoxgymequipment.com/",
      imagePosition: "right",
    },
    {
      title: "Coded Africa",
      type: "Website",
      description:
        "Coded Afrika a program for the next generation to equip them on crafting innovative solutions for Africa's most pressing challenges.",
      image: "/img/projects/5.png",
      link: "https://coded-africa.vercel.app/",
      imagePosition: "left",
    },
    {
      title: "Ed3D Prints",
      type: "Website",
      description:
        "ED3D is a 3D printing service that brings you the best design and highest quality products at an affordable price. We use all of our own technology to help you print your designs in record time, so you can get back to doing what you love.",
      image: "/img/projects/4.png",
      link: "https://bespoke-medovik-6801ad.netlify.app/",
      imagePosition: "right",
    },
   
  ];
  return (
    <Fragment>
      <h1 className="text-sm uppercase font-semibold tracking-wide text-center">
        RECENT HIGHLIGHTS
      </h1>
      <p className=" text-center lg:text-4xl text-2xl my-5 text-primary">
        Discover My Top Projects
      </p>
      {projects.map((project, index) => (
        <div
          key={index}
          className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center mt-20"
        >
          <div
            className={` sm:p-8 border-2 ounded-lg shadow-sm border-agani   transition duration-500 hover:border-primary hover:-translate-y-1 ${
              project.imagePosition === "left"
                ? "lg:order-1"
                : "lg:order-2 order-1"
            }`}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt="Javascript" className="h-60" />
            </a>
          </div>
          <div
            className={`${
              project.imagePosition === "left" ? "order-2" : "order-1"
            }`}
          >
            <a
              href={project.link}
              target="_blank"
              className="text-primary uppercase"
            >
              {project.type}
            </a>
            <h4 className="lg:text-4xl text-2xl my-5 font-bold hover:text-primary transition duration-500">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h4>
            <p className="leading-10">{project.description}</p>

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Link className="text-primary h-14 w-14 border-2 border-primary rounded-full p-2 my-5 hover:bg-primary hover:text-white transition duration-500" />
            </a>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
