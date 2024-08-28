'use client'

import avatar1 from "/public/assets/landing/avatar-1.png";
import avatar2 from "/public/assets/landing/avatar-2.png";
import avatar3 from "/public/assets/landing/avatar-3.png";
import avatar4 from "/public/assets/landing/avatar-4.png";
import avatar5 from "/public/assets/landing/avatar-5.png";
import avatar6 from "/public/assets/landing/avatar-6.png";
import avatar7 from "/public/assets/landing/avatar-7.png";
import avatar8 from "/public/assets/landing/avatar-8.png";
import avatar9 from "/public/assets/landing/avatar-9.png";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I’ve never had such an easy time editing photos. Easepix’s tools are both powerful and user-friendly.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "The ease of use and quality of results make Easepix my top choice for photo editing.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This tool is both powerful and user-friendly, making it perfect for anyone, regardless of their editing experience.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "It exceeded my expectations with its high-quality photo editing tools. The ability to quickly remove objects has streamlined my workflow significantly.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "I’m always impressed with how accurately it handles even the most intricate edits.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "I’m thrilled with how it handles everything from simple edits to restorations.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "The background removal and object recolor features are especially useful for my design work.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "The AI-powered tools in Easepix are simply amazing.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "The generative fill tool is impressive for adjusting image dimensions seamlessly.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { 
  className?: string; 
  testimonials: typeof testimonials;
  duration?: number;
  }) => (
  <div className={props.className}>
    <motion.div 
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
         {props.testimonials.map(({ text, imageSrc, name, username }, i) => (
          <div className="card" key={`${index}-${i}`}>
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div> 
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center gap-6 pb-6">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title mt-5">What our users say</h2>
          <p className="section-description mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
};
