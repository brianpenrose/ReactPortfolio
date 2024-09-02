import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; // Import your CSS file
import Logo from './assets/objects/logo-no-background.png';

const Navbar = ({ openModal, scrollToProjects }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (event, action) => {
    event.preventDefault();
    if (action === 'about' || action === 'contact') {
      openModal();
    } else if (action === 'projects') {
      scrollToProjects();
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
      <ul className={`navbar-nav ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={(e) => handleLinkClick(e, 'about')}>About</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={(e) => handleLinkClick(e, 'projects')}>Project</a>
        </li>
        <li className="nav-item">
          <a href="/reactPortfolio/BrianpenroseResumeNEW1.pdf" target="_blank" className="nav-link">Resume</a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a>
        </li>
      </ul>
      <div className="social-link">
        <a href="https://github.com/brianpenrose" target="_blank" rel="noopener noreferrer">
          <FaGithub size={26} />
        </a>
        <a href="https://www.linkedin.com/in/brian-penrose-3a021b1a0/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={26} />
        </a>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  openModal: PropTypes.func.isRequired,
  scrollToProjects: PropTypes.func.isRequired,
};

export default Navbar;
