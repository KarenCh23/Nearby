import '../LegalNotices/LegalNotices.scss';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <main>
      <section className="main__container">
        <div className="legal__notices__text">
          <h2>Mentions Légales</h2>
          <h4>Propriétaire / Éditeur du site</h4>
          <p>
            Conformément aux dispositions de l'article 6 III-1 de la loi n°
            2004-575 du 21 juin 2004 pour la confiance dans l'économie
            numérique, le présent site est édité par :
          </p>
          <h3>Nearby</h3>

          <ul>
            <li>Siège social :</li>
            <li></li>
            <li>RCS : 830 251 435</li>
          </ul>
          <h4>Hébergement</h4>
          <ul>
            <li>OVH</li>
            <li>Siège social :</li>
            <li>2, rue Kellermann BP 80157 59100 ROUBAIX FRANCE</li>
            <li>RCS Lille Metropole : 424 761 419</li>
            <li>Téléphone : 0 899 498 765</li>
          </ul>
          <h4>Liens hypertextes</h4>
          <p>
            Des liens hypertextes contenus sur ce site peuvent renvoyer vers
            d'autres sites web ou d'autres sources Internet. Dans la mesure où
            la société <strong> Nearby </strong> ne peut contrôler ces sites et
            ces sources externes,
            <strong> Nearby </strong> ne peut être tenue pour responsable de la
            mise à disposition de ces sites et sources externes, et ne peut
            supporter aucune responsabilité quant aux contenus, publicités,
            produits, services ou tout autre matériel disponibles sur ou à
            partir de ces sites ou sources externes.
          </p>
          <h4>Accès au site</h4>
          <p>
            Le site est accessible en tout endroit, 7j/7, 24h/24 sauf en cas de
            force majeure, interruption programmée ou non et découlant d'une
            nécessité de maintenance. En cas de modification, interruption ou
            suspension du site, l'Éditeur / Propriétaire ne saurait être tenu
            responsable.
          </p>
          <h4>Collecte des données</h4>
          <p>
            Le site assure à l'utilisateur une collecte et un traitement
            d'informations personnelles dans le respect de la vie privée
            conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés. En vertu de la loi
            Informatique et Libertés, en date du 6 janvier 1978, l'utilisateur
            dispose d'un droit d'accès, de rectification, de suppression et
            d'opposition de ses données personnelles. Toute utilisation,
            reproduction, diffusion, commercialisation, modification de toute ou
            une partie du site, sans autorisation de l'Éditeur est prohibée et
            pourra entraîner des actions et poursuites judiciaires telles que
            notamment prévues par le Code de la propriété intellectuelles et le
            Code civil. <br />
            Plus d'informations sur notre page : <br />
            <NavLink to="/politique-de-confidentialite" className="">
              Politique de confidentialité
            </NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
