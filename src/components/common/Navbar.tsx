import { useState, useEffect } from 'react';
import BigNav from './Nav/BigNav';
import SmallNav from './Nav/SmallNav';

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isSmallScreen ? <SmallNav /> : <BigNav />}
    </>
  );
};

export default Navbar;