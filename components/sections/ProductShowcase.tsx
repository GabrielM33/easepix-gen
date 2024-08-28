'use client'

import productImage from "/public/assets/landing/product.png";
import pyramidImage from "/public/assets/landing/pyramid.png";
import tubeImage from "/public/assets/landing/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
    });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={sectionRef} id="features" className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflox-x-clip">
      <div className="container">
        <div className="section-heading">
        <div className="flex justify-center">
          <div className="tag">Boost Productivity</div>
        </div>
        <h2 className="text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
          An easier way to edit photos
        </h2>
        <p className="section-description mt-5">
          Recolor elements, and eliminate backgrounds to create stunning pictures - no skill required.
        </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="Product Image"
            className="mt-10"

          />
          <motion.img 
            src={pyramidImage.src} 
            alt=" Pyramid Image" 
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />
          <motion.img 
            src={tubeImage.src}
            alt="Tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
