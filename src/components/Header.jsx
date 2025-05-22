

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header-container">
        <a href="#" className="logo">Olyra<span className='systems'>systems</span></a>
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <FaBars />
        </button>
        <nav>
          <ul id="navMenu" className={mobileMenuOpen ? 'active' : ''}>
            <li><a href="#" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;





