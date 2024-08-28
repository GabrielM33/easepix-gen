import ArrowRight from "/public/assets/landing/arrow-right.svg";
import Logo from "/public/assets/landing/logo-no-background.png";
import Image from "next/image";
import MenuIcon from '/public/assets/landing/menu.svg';
import { useClerk } from '@clerk/nextjs';


export const Navbar = () => {
  const { openSignIn } = useClerk();
  const { openSignUp } = useClerk();

  const handleSignIn = () => {
    openSignIn();
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Edit photos with a prompt
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Logo" height={120} width={120} />
            <div className="flex items-center gap-4 md:hidden">
              <button onClick={handleSignIn} className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight text-sm">Log in</button>
              <MenuIcon className="h-5 w-5 hidden" />
            </div>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#features">Features</a> 
              <a href="#pricing">Pricing</a>
              <a href="#testimonials">Customers</a>
              <a href="#footer">Help</a>
              <button onClick={handleSignIn} className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex alingn-items justify-center tracking-tight">Log in</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};