"use client"

import { useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components//sections/Hero';
import { LogoTicker } from '@/components/sections/LogoTicker';
import { ProductShowcase } from '@/components//sections/ProductShowcase';
import { Pricing } from '@/components/sections/Pricing';
import { Testimonials } from '@/components/sections/Testimonials';
import { CallToAction } from '@/components/sections/CallToAction';
import { Footer } from '@/components/sections/Footer';

export default function LandingPage() {
  const { isSignedIn } = useAuth();

  useEffect(() => {
    if (isSignedIn) {
      window.location.href = '/home'; // Redirect to the Home page if already signed in
    }
  }, [isSignedIn]);

  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction /> 
      <Footer />
    </>
  );
}