import '../Header/Header.scss';
import { CgProfile } from 'react-icons/cg';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import Form from '../Form/LoginForm';
import logoBlue from '../../assets/img/nearby__blue__logo.png';
import { useAppSelector } from '../hooks/customHooks';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);
  const [menuBurgerOpen, setMenuBurgerState] = useState(false);
  const [menuCategoryOpen, setMenuCategoryState] = useState(false);

  const isLogged = useAppSelector((state) => state.userReducer.logged);
  const email = useAppSelector((state) => state.userReducer.loginUser.username);

  return (
    <>
      <header>
        <div className="welcome__message__logged">
          <Link to="/">
            <img src={logoBlue} alt="logo nearby" className="logo" />
          </Link>
        </div>
        <span
          className="menu__burger"
          onClick={() => {
            setMenuBurgerState(!menuBurgerOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
        {menuBurgerOpen && (
          <>
            <nav className="menu__burger__dropdown">
              <NavLink to="/produits">Produits</NavLink>
              <NavLink to="/producteurs">Producteurs</NavLink>
              <li
                onClick={() => {
                  setMenuCategoryState(!menuCategoryOpen);
                }}
              >
                Catégories {menuCategoryOpen ? '-' : '+'}
              </li>
              {menuCategoryOpen && (
                <div className="category__mobile__dropdown">
                  <NavLink to="/produits">. Fruits et légumes</NavLink>
                  <NavLink to="/produits">. Sâlé</NavLink>
                  <NavLink to="/produits">. Sucré</NavLink>
                  <NavLink to="/produits">. Viandes</NavLink>
                  <NavLink to="/produits">. Fromages</NavLink>
                  <NavLink to="/produits">. Boissons</NavLink>
                </div>
              )}
              <NavLink to="/a-propos">À propos</NavLink>
            </nav>
          </>
        )}
        <nav className="desktop__menu">
          <ul>
            <NavLink
              to="/produits"
              className="list__item"
              onMouseLeave={() => setIsHovered(false)}
            >
              Produits
            </NavLink>
            <NavLink
              to="/producteurs"
              className="list__item"
              onMouseEnter={() => setIsHovered(false)}
            >
              Producteurs
            </NavLink>
            <div className="dropdown">
              <li
                className="list__item dropbutton"
                onMouseEnter={() => setIsHovered(true)}
              >
                Catégories
              </li>
              <div
                className={
                  isHovered
                    ? 'categories__content'
                    : 'categories__content display--none'
                }
              >
                <div
                  className="category__items"
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="category__first__column">
                    <NavLink to="/produits">Fruits et légumes</NavLink>
                    <NavLink to="/produits">Sâlé</NavLink>
                    <NavLink to="/produits">Sucré</NavLink>
                  </div>
                  <div className="category__second__column">
                    <NavLink to="/produits">Viandes</NavLink>
                    <NavLink to="/produits">Fromages</NavLink>
                    <NavLink to="/produits">Boissons</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <NavLink
              to="/a-propos"
              className="list__item"
              onMouseEnter={() => setIsHovered(false)}
            >
              À propos
            </NavLink>
          </ul>
        </nav>
        {isLogged ? (
          <div className="header__logged__profile">
            <Link to="/profil">
              <CgProfile className="header__login__icon logged__profile" />
            </Link>
            <span>Connecté(e)</span>
          </div>
        ) : (
          <CgProfile
            className="header__login__icon"
            onClick={() => {
              setIsHoveredLogin(!isHoveredLogin);
            }}
          />
        )}

        {isHoveredLogin && <Form setIsHoveredLogin={setIsHoveredLogin} />}
      </header>
    </>
  );
};
export default Header;
