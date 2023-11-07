import '../SigninForm/SignInForm.scss';

import { useAppSelector } from '../../hooks/customHooks';
import { useForm, SubmitHandler } from 'react-hook-form';
import { editCurrentUser, registerNewUser } from '../../../utils/utils';
import { user } from '../../../@types/user';
console.log();
const SigninForm = () => {
  const isLogged = useAppSelector((state) => state.userReducer.logged);
  const currentUserId = useAppSelector((state) => state.userReducer.user_id);
  const currentUserToken = useAppSelector((state) => state.userReducer.token);
  const userEmail = useAppSelector((state) => state.userReducer.user);
  const userRole = useAppSelector((state) => state.userReducer.role);
  const userData = useAppSelector((state) => state.userReducer.userData);
  const picture = '';
  const preloadedValues: user = {
    lastname: userData.lastname,
    firstname: userData.firstname,
    email: userData.email,
    phone: userData.phone,
    password: userData.password,
    description: userData.description,
    role: userData.role,
    picture: userData.picture,
    house_number: userData.house_number,
    street: userData.street,
    postal_code: userData.postal_code,
    region: userData.region,
    country: userData.country,
    siren: userData.siren,
    city: userData.city,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<user>({
    defaultValues: preloadedValues,
  });
  const onSubmit: SubmitHandler<user> = (data, event) => {
    event?.preventDefault();
    {
      isLogged
        ? editCurrentUser(
            data,
            currentUserId,
            currentUserToken,
            userEmail,
            userRole,
            picture
          )
        : registerNewUser(data);
    }
  };
  return (
    <main>
      <section className="main__container">
        <h2 className="edit__form__title">
          {isLogged ? 'Modifier mon profil' : 'Inscription'}
        </h2>
        <form className="edit__profile__form" onSubmit={handleSubmit(onSubmit)}>
          <br />
          {!isLogged && (
            <fieldset className="form__card__wrapper">
              <div className="form__card select__role">
                <label className="form__label role">Vous êtes :</label>
                <select className="role" {...register('role')}>
                  <option value="" selected>
                    Votre choix
                  </option>
                  <option value="ROLE_CUSTOMER">Consommateur</option>
                  <option value="ROLE_MAKER">Producteur</option>
                </select>
              </div>
            </fieldset>
          )}
          <fieldset className="form__card__wrapper">
            <div className="form__card">
              <div className="label__box">
                <label className="form__label">Prénom</label>
              </div>
              <input
                type="text"
                className="form__input"
                {...register('firstname')}
              />
            </div>

            <div className="form__card">
              <div className="label__box">
                <label className="form__label">Nom</label>
              </div>
              <input
                type="text"
                className="form__input"
                {...register('lastname')}
              />
            </div>
          </fieldset>

          <fieldset className="form__card__wrapper phone__number">
            <div className="form__card">
              <div className="label__box">
                <label className="form__label">Téléphone</label>
              </div>
              <input
                type="number"
                className="form__input"
                {...register('phone')}
              />
            </div>
          </fieldset>

          <fieldset className="select__region form__card__wrapper">
            <div className="form__card select__region">
              <select className="select__items" {...register('region')}>
                <option value="" selected>
                  Choisissez votre région
                </option>
                <option value="Auvergne-Rhône-Alpes">
                  Auvergne-Rhône-Alpes
                </option>
                <option value="Bourgogne-Franche-Comté">
                  Bourgogne-Franche-Comté
                </option>
                <option value="Bretagne">Bretagne</option>
                <option value="Centre-Val de Loire">Centre-Val de Loire</option>
                <option value="Corse">Corse</option>
                <option value="Grand Est">Grand Est</option>
                <option value="Hauts-de-France">Hauts-de-France</option>
                <option value="Île-de-France">Île-de-France</option>
                <option value="Normandie">Normandie</option>
                <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
                <option value="Occitanie">Occitanie</option>
                <option value="Pays de la Loire">Pays de la Loire</option>
                <option value="Provence-Alpes-Côte d'Azur">
                  Provence-Alpes-Côte d'Azur
                </option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Martinique">Martinique</option>
                <option value="Guyane">Guyane</option>
                <option value="La Réunion">La Réunion</option>
                <option value="Mayotte">Mayotte</option>
              </select>
            </div>
          </fieldset>
          {isLogged && (
            <>
              <fieldset className="form__card__wrapper">
                <div className="form__card">
                  <div className="label__box">
                    <label className="form__label">N°</label>
                  </div>
                  <input
                    type="number"
                    className="form__input"
                    {...register('house_number')}
                  />
                </div>

                <div className="form__card">
                  <div className="label__box">
                    <label className="form__label">Rue</label>
                  </div>
                  <input
                    type="text"
                    className="form__input"
                    {...register('street')}
                  />
                </div>
              </fieldset>
              <fieldset className="form__card__wrapper">
                <div className="form__card">
                  <div className="label__box">
                    <label className="form__label">Code postal</label>
                  </div>
                  <input
                    type="number"
                    className="form__input"
                    {...register('postal_code')}
                  />
                </div>
                <div className="form__card">
                  <div className="label__box">
                    <label className="form__label">Ville</label>
                  </div>
                  <input
                    type="text"
                    className="form__input"
                    {...register('city')}
                  />
                </div>
              </fieldset>

              <fieldset className="select__country form__card__wrapper">
                <div className="form__card select__country">
                  <select className="select__items" {...register('country')}>
                    <option value="" selected>
                      Choisissez votre pays
                    </option>
                    <option value="France">France</option>
                    <option value="Angleterre">Angleterre</option>
                  </select>
                </div>
              </fieldset>
              <fieldset className="form__card__wrapper">
                <div className="form__card profile__description">
                  <div className="label__box">
                    <label className="form__label">Description</label>
                  </div>
                  <textarea
                    className="form__textarea  form__input description"
                    rows={3}
                    {...register('description')}
                  ></textarea>
                </div>
              </fieldset>
            </>
          )}
          {!isLogged && (
            <>
              {' '}
              <fieldset className="form__card__wrapper">
                <div className="form__card">
                  <div className="label__box">
                    <label className="form__label">Email</label>
                  </div>
                  <input
                    type="email"
                    className="form__input"
                    {...register('email')}
                  />
                </div>
              </fieldset>
              <fieldset className="form__card__wrapper">
                <div className="form__card">
                  <div className="label__box">
                    <label className="form__label">Mot de passe</label>
                  </div>
                  <input
                    className="form__input"
                    type="password"
                    {...register('password')}
                  />
                </div>
              </fieldset>
            </>
          )}
          <div className="btn__wrap">
            <button className="submit__button" type="submit">
              {isLogged ? 'Modifier' : 'Valider'}
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
export default SigninForm;
