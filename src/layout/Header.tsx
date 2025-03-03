import React, { useEffect, useState } from 'react';
import CompanyLogo from '../components/CompanyLogo';
import HamburgerIcon2 from '../components/HamburgerIcon2';
import MobileNav from '../components/MobileNav';
import Button from '../components/Button';
import Nav from '../components/Nav';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1152) {
        setNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-myBlue text-myWhite fixed w-full top-0 z-50">
      <div className="default-margin flex justify-between items-center h-[4.1rem] md:h-[5.75rem] relative">
        <CompanyLogo />
        <Nav />
        <div className="flex items-center">
          <div className="px-4 py-2 md:flex gap-2 hidden">
            <Button className="bg-dullYellow text-myBlue" text="Login" />
            <Button
              className="bg-faintBlue text-myWhite"
              text="Try Whitepace free"
              icon
            />
          </div>
          <HamburgerIcon2 isOpen={navOpen} onClick={toggleNav} />
        </div>
        <MobileNav isOpen={navOpen} />
      </div>
    </header>
  );
};

export default Header;
