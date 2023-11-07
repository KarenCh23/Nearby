import '../PrivacyPolicy/PrivacyPolicy.scss';
import { NavLink } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <main>
      <section className="main__container">
        <div className="privacy__policy__text">
          <h2>Politique de confidentialité</h2>
          <h3> Données personnelles : </h3>
          <p>
            Le site <strong>Nearby</strong> s’engage à ce que les traitements de
            données personnelles effectués sur
            <NavLink to="/"> www.nearby.fr</NavLink> soient conformes au
            règlement général sur la protection des données (RGPD) et à la loi
            Informatique et Libertés.
          </p>
          <h4> Quelles données recueillons-nous ?</h4>
          <p>
            Nous recevons, collectons et stockons toute information que vous
            saisissez sur notre site web ou que vous nous fournissez de toute
            autre manière. En outre, nous recueillons l'adresse de protocole
            Internet (IP) utilisée pour connecter votre ordinateur, le login,
            l'adresse e-mail, le mot de passe, la géolocalisation. Nous pouvons
            utiliser des outils logiciels pour mesurer et collecter des
            informations de session, y compris les temps de réponse des pages,
            la durée des visites sur certaines pages, les informations sur
            l'interaction entre les pages et les méthodes utilisées pour
            naviguer hors de la page. Nous recueillons également des
            informations d'identification personnelle (y compris le nom,
            l'adresse électronique, le mot de passe, les communications), les
            commentaires, les réactions, les évaluations de produits et le
            profil personnel.
          </p>
          <h4> Exercer vos droits</h4>
          <p>
            En vertu du RGPD, les utilisateurs du site ont les droits suivants
            (chapitre 3 article 12-23) :
          </p>
          <ul className="rgpd__rights">
            <li>droit d'accès</li>
            <li>droit de rectification</li>
            <li>droit à la suppression</li>
            <li>droit à la restriction du traitement</li>
            <li>droit à la portabilité des données</li>
            <li>droit d'objection</li>
          </ul>
          <p>
            Pour toute information ou exercice de vos droits Informatique et
            Libertés sur les traitements de données personnelles gérés par
            <strong> Nearby</strong>, vous pouvez nous contacter via notre
            <br />
            <NavLink to="/contact">Page Contact</NavLink>
          </p>
          <h3> Cookies : </h3>
          <h4> Qu’est-ce qu’un « cookie » ? </h4>
          <p>
            Un « cookie » est une suite d’informations, généralement de petite
            taille et identifié par un nom, qui peut être transmis à votre
            navigateur par un site web sur lequel vous vous connectez. Votre
            navigateur web le conservera pendant une certaine durée, et le
            renverra au serveur web chaque fois que vous vous y re-connecterez.
            Les cookies ont de multiples usages : ils peuvent servir à mémoriser
            votre identifiant client auprès d’un site marchand, le contenu
            courant de votre panier d’achat, un identifiant permettant de tracer
            votre navigation pour des finalités statistiques ou publicitaires,
            etc.
          </p>
          <p>Nous utilisons les cookies suivants pour notre site :</p>
          <ul className="cookies__types">
            <li>Cookies fonctionnels :</li>
            <li>
              Nous les utilisons pour mémoriser toutes les sélections que vous
              faites sur notre site afin qu'elles soient sauvegardées pour vos
              prochaines visites.
            </li>
            <li>Cookies Analytiques :</li>
            <li>
              Ils permettent d'améliorer la conception et la fonctionnalité de
              notre site en recueillant des données sur le contenu auquel vous
              accédez en utilisant notre site. Vous pouvez de désactiver les
              cookies entièrement sur votre navigateur Internet, mais cela peut
              diminuer la qualité de votre expérience d'utilisation.
            </li>
          </ul>
          <h3> Mise à jour de la politique de confidentialité : </h3>
          <p>
            Nous nous réservons le droit de modifier cette politique de
            confidentialité à tout moment, aussi nous vous invitons à la
            consulter fréquemment. Les modifications et les clarifications
            prendront effet dès leur publication sur le site
            <strong> Nearby</strong>. Si nous apportons des modifications
            importantes à la présente politique, nous vous informerons ici de sa
            mise à jour, afin que vous sachiez quelles informations sont
            recueillies et utilisées.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
