import logo from '@/public/assets/landing/easepix-favicon.png';
import SocialX from '@/public/assets/landing/social-x.svg';
import SocialInsta from '@/public/assets/landing/social-insta.svg'
import SocialLinkedIn from '@/public/assets/landing/social-linkedin.svg'
import SocialPin from '@/public/assets/landing/social-pin.svg'
import SocialYouTube from '@/public/assets/landing/social-youtube.svg'
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer id="footer" className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:absolute">
          <Image
            src={logo}
            alt="Logo"
            height={40}
            className='relative'
          />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="#">About</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Customers</a>
          <a href="#footer">Help</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <SocialX onClick={() => window.open('https://x.com/Gabbbe33')}/>
          <SocialInsta onClick={() => window.open('https://www.instagram.com/gabriel.moraes3')}/>
          <SocialLinkedIn onClick={() => window.open('https://linkedin.com/in/g-moraes')}/>
        </div>
        <p className='mt-6'>  
          &copy; 2024 Easepix, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
