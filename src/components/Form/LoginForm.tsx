import './LoginForm.scss';
import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/customHooks';
import { checkLogin, getUserData } from '../../store/thunks/user';
import {
  setConnectionEmail,
  setConnectionPassword,
} from '../../store/actions/actions';
import { Link } from 'react-router-dom';
interface FormProps {
  setIsHoveredLogin: Function;
}
const LoginForm = ({ setIsHoveredLogin }: FormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await dispatch(setConnectionEmail(email));
    await dispatch(setConnectionPassword(password));
    await dispatch(checkLogin());
    await dispatch(getUserData());
    setIsHoveredLogin(false);
  };
  const isLogged = useAppSelector((state) => state.userReducer.logged);
  const userData = useAppSelector((state) => state.userReducer.userData);
  const userId = useAppSelector((state) => state.userReducer.user_id);

  return (
    <section className="form__section">
      <form className="login__form" onSubmit={handleSubmit}>
        {/*         <button
          className="closing__button"
          onClick={() => {
            setIsHoveredLogin(false);
          }}
        >
          X
        </button> */}
        <h2 className="form__title">Connexion</h2>
        <fieldset className="connection__info">
          <div className="email">
            <input
              className="form__input"
              type="email"
              value={email}
              placeholder="votre email"
              onChange={(event) => {
                setEmail(event.currentTarget.value);
              }}
            />
          </div>
          <div className="password">
            <input
              className="form__input"
              type="password"
              value={password}
              placeholder="votre mot de passe"
              onChange={(event) => {
                setPassword(event.currentTarget.value);
              }}
            />
          </div>
          <div className="create__account">
            <span>Pas encore de compte ?</span>
            <Link
              to="/inscription"
              className="subscribe"
              onClick={() => setIsHoveredLogin(false)}
            >
              Inscrivez-vous
            </Link>
          </div>
        </fieldset>
        <button className="submit__button">Valider</button>
      </form>
    </section>
  );
};
export default LoginForm;
