'use client'

import CheckIcon from "/public/assets/landing/check.svg"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"
import { useClerk } from '@clerk/nextjs';

const pricingTiers = [
  {
    title: "Starter",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "3 Credits",
      "Full Access to Services",
      "Priority Customer Support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 7,
    buttonText: "Sign up now",
    popular: false,
    inverse: true,
    features: [
      "20 Credits (35¢ per Edit)",
      "Full Access to Services",
      "Priority Customer Support",
      "Priority Updates",
    ],
  },
  {
    title: "Premium",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: true,
    inverse: false,
    features: [
      "60 Credits (32¢ per Edit)",
      "Full Access to Services",
      "Priority Customer Support",
      "Priority Updates",
      "Advanced Security features",
    ],
  },
];

export const Pricing = () => {
  // Clerk-related hook
  const { openSignUp } = useClerk();

  // Button click handler
  const handleButtonClick = () => {
    openSignUp();
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">
            Pricing
          </h2>
          <p className="section-description mt-5">
            Discover the perfect plan for your photo editing needs. Choose the credit package that suits you best.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({
            title, 
            monthlyPrice, 
            buttonText, 
            popular, 
            inverse, 
            features,
          }, index) => (
            <div 
              key={title}
              className={twMerge("card", inverse === true && 'border-black bg-black text-white/60')}
            >
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && "text-white/60")}> {title}</h3>
                {popular === true && (
                  <div className="inline-flex text-sm px-3 py-1.5 rounded-lg border border-white/60 bg-black">
                  <motion.span
                    className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium whitespace-nowrap"
                    animate={{
                      backgroundPositionX: '100%',
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop",
                    }}
                    >
                    10% OFF
                  </motion.span>
                </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-[30px]">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  ${monthlyPrice}
                </span>
                <span className="tracking-tight font-bold text-black/50"></span>
              </div>
              <button onClick={handleButtonClick} className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && "bg-white text-black")}>{buttonText}</button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                     </li>
                    ))}
                  </ul>
            </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
