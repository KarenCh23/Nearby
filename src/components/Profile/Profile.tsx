import '../Profile/Profile.scss';
import { NavLink, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/customHooks';
import { logOut } from '../../store/actions/actions';
import { checkIsMaker } from '../../utils/utils';
import { useState } from 'react';
import ImageUpload from '../ImageUpload/ImageUpload';
const ProfileMaker = () => {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector((state) => state.userReducer.logged);
  const userRole = useAppSelector((state) => state.userReducer.role);
  const isMaker = checkIsMaker(userRole);
  const userData = useAppSelector((state) => state.userReducer.userData);
  const [isPageProfile, setPageProfile] = useState(false);

  return (
    <main>
      <section className="profile__section --hidden">
        <div className="header__section">
          <div className="profile__products__buttons">
            <NavLink
              to="/profil"
              className="profile__button"
              onClick={() => setPageProfile(true)}
            >
              Mon profil
            </NavLink>
            {isMaker ? (
              <NavLink
                to="/profil/mes-produits"
                className={({ isActive }) =>
                  isActive ? 'active' : 'profile__button'
                }
                onClick={() => setPageProfile(false)}
              >
                Mes produits
              </NavLink>
            ) : (
              <NavLink to="/profil/mes-produits" className="profile__button">
                Mes favoris
              </NavLink>
            )}

            {isLogged && (
              <Link
                to="/"
                onClick={() => dispatch(logOut())}
                className="profile__button disconnect__button"
              >
                Se déconnecter
              </Link>
            )}
          </div>
          <div className="profile__and__title">
            <p className="section__paragraph">Profil /</p>
            <h2 className="section__title">
              {isMaker ? 'Producteur' : 'Client'}
            </h2>
          </div>
        </div>

        <>
          <section className="image__upload__section">
            <ImageUpload />
          </section>
          <section className="informations__section">
            <p className="lastname">Nom</p>
            <p>{userData.lastname}</p>
            <p className="firstname">Prénom</p>
            <p>{userData.firstname}</p>
            <p className="contact">Contact</p>
            <p>{userData.email}</p>
            <p className="contact">Téléphone</p>
            <p>{userData.phone}</p>
            <p className="address">Adresse</p>
            {isMaker ? (
              <>
                <p>
                  {userData.house_number} {userData.street}{' '}
                  {userData.postal_code} {userData.city}
                  <br />
                  {userData.region}
                  <br />
                  {userData.country}
                </p>
              </>
            ) : (
              <p>{userData.region}</p>
            )}
          </section>
          {isMaker && (
            <>
              <p className="about">Description</p>
              <p className="about__maker">{userData.description}</p>
            </>
          )}
          <div className="edit__button__block">
            <Link
              to="/profil/modifier"
              className="profile__button edit__button"
            >
              Éditer mon profil
            </Link>
          </div>
        </>
      </section>
    </main>
  );
};
export default ProfileMaker;
