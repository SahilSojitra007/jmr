import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logojmrr.png';
import Menu_Icon from '../../assets/menu-icon.png';
import { Link as RouterLink, useLocation} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    const handleScroll = () => {
      // Only set sticky based on scroll if not on the service page
      if (location.pathname !== '/services') {
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]); // Re-run effect when the location changes

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <nav className={`container ${sticky || location.pathname === '/services' ? 'dark-nav' : ''}`}>
      <RouterLink to="/" className="nav-link">
        <img src={logo} alt='Logo' className='logo' />
      </RouterLink>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        {location.pathname === '/services' ? (
          <>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/services" className="nav-link">Service</RouterLink></li>
          </>
        ) : (
          <>
            <li><ScrollLink to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to='program' smooth={true} offset={-260} duration={500}>Program</ScrollLink></li>
            <li><ScrollLink to='about' smooth={true} offset={-150} duration={500}>About us</ScrollLink></li>
            <li><ScrollLink to='campus' smooth={true} offset={-260} duration={500}>Campus</ScrollLink></li>
            <li><ScrollLink to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</ScrollLink></li>
            <li><RouterLink to="/services" className="nav-link">Service</RouterLink></li>
            <li><ScrollLink to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</ScrollLink></li>
          </>
        )}
      </ul>
      <img src={Menu_Icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
