import '../ProducerDetails/ProducerDetails.scss';
import { NavLink, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/customHooks';
import picture from '../../assets/img/producteur.jpeg';
import { useEffect } from 'react';
import { getProducerData } from '../../store/thunks/producer';
const ProfileMaker = () => {
  const dispatch = useAppDispatch();
  const producerData = useAppSelector(
    (state) => state.producerListReducer.producerData
  );

  useEffect(() => {
    dispatch(getProducerData());
  }, []);

  return (
    <main>
      <section className="profile__section --hidden">
        <div className="header__section">
          <div className="profile__products__buttons">
            <NavLink
              to="/producteurs"
              className="profile__button return__button"
            >
              Retour
            </NavLink>
          </div>
          <div className="profile__and__title">
            <p className="section__paragraph">À propos /</p>
            <h2 className="section__title">Producteur</h2>
          </div>
        </div>

        <>
          <img
            className="profile__picture"
            src={`https://nearbyfiles.s3.eu-west-3.amazonaws.com/users/${producerData.picture}`}
          />
          <section className="informations__section">
            <p className="lastname">Nom</p>
            <p>{producerData.lastname}</p>
            <p className="firstname">Prénom</p>
            <p>{producerData.firstname}</p>
            <p className="contact">Contact</p>
            <p>{producerData.email}</p>
            <p className="contact">Téléphone</p>
            <p>{producerData.phone}</p>
            <p className="address">Adresse</p>

            <p>
              {producerData.house_number} {producerData.street}{' '}
              {producerData.postal_code} {producerData.city}
              <br />
              {producerData.region}
              <br />
              {producerData.country}
            </p>
          </section>

          <section className="description__section">
            <p className="about">Description</p>
            <p className="about__maker">{producerData.description}</p>
          </section>
          <div className="edit__button__block">
            <Link
              to={`/producteur/${producerData.firstname}${producerData.lastname}/produits`}
              className="profile__button edit__button"
            >
              Nos produits
            </Link>
          </div>
        </>
      </section>
    </main>
  );
};
export default ProfileMaker;
