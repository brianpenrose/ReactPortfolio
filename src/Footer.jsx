import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import LogoWhite from './assets/logoWhite.png';

const Footer = () => {
  // Scroll to the top of the page with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer__row">
          <a
            href="#"
            className="footer__anchor"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default anchor behavior
              scrollToTop(); // Call the scrollToTop function
            }}
          >
            <figure className="footer__logo">
              <img
                src={LogoWhite}
                className="footer__logo--img"
                alt="Footer Logo"
              />
            </figure>
            <span className="footer__logo--popper">
              Top <FontAwesomeIcon icon={faArrowUp} />
            </span>
          </a>
          <div className="footer__social--list">
            <a
              href="https://github.com/brianpenrose"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/brian-penrose-3a021b1a0"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              LinkedIn
            </a>
            <a
              href="../public/BrianpenroseResumeNEW1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2024 Brian Penrose
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
