import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> my mentors</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-36 gap-3">
              <img src={img} alt={name} className="md:w-10 w-5"/>
              <img src={nameImg} alt={name} className="md:w-24 w-20"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
