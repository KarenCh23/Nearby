import '../Footer/Footer.scss';
import { NavLink } from 'react-router-dom';
import { BsArrowUpCircle } from 'react-icons/bs';
import { useEffect, useState } from 'react';

import logoWhite from '../../assets/img/nearby__white__logo.png';

const Footer = () => {
  // Arrow ScrollToTop state + function scrollToTop //
  const [showTopArrow, setShowTopArrow] = useState(false);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopArrow(true);
      } else {
        setShowTopArrow(false);
      }
    });
  }, []);

  return (
    <footer>
      <NavLink to="/" className="footer__link">
        <img src={logoWhite} alt="logo nearby" className="logo" />
      </NavLink>

      <nav>
        <ul>
          <NavLink to="/faq" className="footer__link">
            FAQ
          </NavLink>
          <NavLink to="/cgu-cgv" className="footer__link">
            CGU-CGV
          </NavLink>
          <NavLink to="/contact" className="footer__link">
            Contact
          </NavLink>
          <NavLink to="/mentions-legales" className="footer__link">
            Mentions Légales
          </NavLink>
          <NavLink to="/politique-de-confidentialite" className="footer__link">
            Politique de confidentialité
          </NavLink>
        </ul>
      </nav>
      <div className="scroll__to__top fadeInDown">
        {showTopArrow && (
          <BsArrowUpCircle
            className="icon__position icon__scroll"
            onClick={ScrollToTop}
          />
        )}
      </div>
    </footer>
  );
};

export default Footer;
