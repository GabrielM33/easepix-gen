'use client'

import ArrowRight from "@/public/assets/landing/arrow-right.svg"
import starImage from "@/public/assets/landing/star.png"
import springImage from "@/public/assets/landing/spring.png"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useClerk } from '@clerk/nextjs';

export const CallToAction = () => {
  
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  // Clerk-related hook
  const { openSignUp } = useClerk();

  // Button click handler
  const handleButtonClick = () => {
    openSignUp();
  };

  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById('features');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">
        Start with free credits and see how easy photo editing can be. Your journey to stunning photos begins now.
        </p>
        <motion.img 
          src={starImage.src}
          alt="Start Image"
          width={360}
          className="absolute -left-[350px] -top-[137px]"
          style={{
            translateY,
          }}
        />
        <motion.img 
          src={springImage.src}
          alt="Spring Image"
          width={360}
          className="absolute -right-[331px] -top-[19px]"
          style={{
            translateY,
          }}
        />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button onClick={handleButtonClick} className="btn btn-primary">Get started for free</button>
          <button id="features-btn" className="btn btn-text gap-1" onClick={scrollToSection}>
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
