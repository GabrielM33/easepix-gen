'use client'

import ArrowIcon from '/public/assets/landing/arrow-right.svg';
import cogImage from '/public/assets/landing/cog.png';
import cylinderImage from '/public/assets/landing/cylinder.png';
import noodleImage from '/public/assets/landing/noodle.png';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';
import { useClerk } from '@clerk/nextjs';

export const Hero = () => {
  const heroRef = useRef(null);
  
  // Scroll-related hooks
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

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
      <section ref={heroRef} className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'>
        <div className="container">
          <div className='md:flex items-center'>
            <div className='md:w-[478px]'>
              <div className="tag">
                Version 2.0 is here
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
                Edit photos with a prompt
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Harness the power of cutting-edge AI to remove backgrounds, recolor objects, and restore old images.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
                <button onClick={handleButtonClick} className="btn btn-primary">Get started for free</button>
                <button  id="features-btn" className="btn btn-text gap-1" onClick={scrollToSection}>
                  <span>Learn more</span>
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img 
              src={cogImage.src}
              alt="Cog Image"
              className='md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0'
              animate={{ 
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            <motion.img
              src= {cylinderImage.src} 
              width={220} 
              height={220} 
              alt="Cylinder Image"
              className='hidden md:block -top-8 -left-32 md:absolute'
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle Image"
              className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]' 
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
