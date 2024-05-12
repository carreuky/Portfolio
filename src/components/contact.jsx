import React from "react";
import { ChevronRight, CircleCheck } from "lucide-react";
import Socials from "./socials";
import Form from "./form";
export default function contact() {
  return (
    <section>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 mt-20 pb-5 ">
        <div className="">
          <p className="text-sm uppercase font-semibold tracking-wide">
            Get In Touch
          </p>
          <h4 className="lg:text-4xl text-2xl my-5">
            Let's Take It To the
            <span className="text-primary"> Next Level</span>
          </h4>
          <p className="leading-10 my-5">
            Always eager to hear from you! Feel free to send us a message at any
            time, and we'll respond as quickly as we can.
          </p>
          <ul className="space-y-4 mb-5">
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Connect with me for
              expert solutions and dedicated support.
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Got questions?
              Ideas?
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Let’s innovate
              together.
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Contact me and let’s
              make things happen.
            </li>
            <li className="flex">
              <CircleCheck className="text-primary mr-3" /> Just want to say
              hello? Don’t be a stranger—get in touch!
            </li>
          </ul>
          <Socials/>
        </div>
        <div><Form/></div>
      </div>
    </section>
  );
}
