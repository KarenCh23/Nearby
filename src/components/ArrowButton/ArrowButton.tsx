import { Link } from 'react-router-dom';

import '../ArrowButton/ArrowButton.scss';

const ArrowButton = () => {
  // Url pathname = / => Join us, if /faq => Contact us
  const pathname = window.location.pathname;

  return (
    <button className="join__us contact__us">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <Link
        to={pathname === '/' ? '/inscription' : '/contact'}
        className="button__join__text button__text"
      >
        <span>{pathname === '/' ? 'Rejoignez-nous' : 'Contactez-nous'}</span>
      </Link>
    </button>
  );
};

export default ArrowButton;
