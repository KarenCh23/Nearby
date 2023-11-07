import '../Error/Error.scss';
import { FaTools } from 'react-icons/fa';

interface ErrorProps {
  error: string | null;
}

const Error = ({ error }: ErrorProps) => {
  return (
    <main className="main__section__error">
      <section className="error__section">
        <h3 className="error__title">Erreur {error}</h3>
        <FaTools className="error__icon" />
        <p className="error__message">Une erreur s'est produite</p>
      </section>
    </main>
  );
};

export default Error;
