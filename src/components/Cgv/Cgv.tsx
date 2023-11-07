import { NavLink } from 'react-router-dom';

import '../Cgv/Cgv.scss';

const Cgv = () => {
  return (
    <main>
      <section className="main__container">
        <div className="cgv__cgu__text">
          <h2>CGU-CGV</h2>
          <h4>
            Conditions Générales d'Utilisation et Conditions Générales de Vente
          </h4>
          <h3>Préambule</h3>

          <p>
            La société <strong> Nearby</strong>, immatriculée au
            {/* mettre ici le RCS + adresse société + président entreprise */},
            édite un site internet de mise en relation entre des artisans et des
            utilisateurs, accessible à l’adresse http://www.nearby.fr/. Le site
            <strong> Nearby </strong>,destiné à promouvoir la productions locale
            en France, a pour objet mettre en relation des producteurs (ci-après
            les « Producteurs ») et des personnes souhaitant bénéficier et
            découvrir les produits de ces derniers (ci-après les « Utilisateurs
            »). Les Producteurs proposent aux Utilisateurs, par l’intermédiaire
            du site
            <strong> Nearby</strong>, une sélection de leur produits et une
            description de leur activité. L’Entreprise met ainsi à disposition
            des Utilisateurs des outils et moyens techniques leur permettant
            d’entrer en relation avec les Producteurs via le site Nearby.
          </p>
          <p>
            Les présentes conditions générales d'utilisation (les « Conditions
            Générales » ou le « Contrat ») ont pour objet de déterminer les
            conditions dans lesquelles l’Utilisateur peut utiliser le site
            <strong> Nearby</strong> et y contacter des Producteurs.
            L’utilisation et/ou le recours aux Service proposés par le site
            <strong> Nearby</strong> par l’Utilisateur implique son acceptation
            sans réserve des Condition Générales. Le seul fait de naviguer sur
            le site et/ou d'utiliser les Services entraîne l'acceptation
            irrévocable et pure et simple des Conditions Générales.
          </p>
          <p>
            {' '}
            L’Utilisateur déclare et reconnaît, en conséquence, avoir lu et
            accepté irrévocablement les présentes Conditions Générales lors de
            l’utilisation des Services. Les Conditions Générales sont
            systématiquement communiquées à tout Utilisateur et accessibles à
            tout moment sur le site Internet
            <NavLink to="/"> www.nearby.fr</NavLink> et prévaudront, le cas
            échéant, sur toute autre version ou tout autre document
            contradictoire. Les Conditions Générales pouvant faire l'objet de
            modifications ultérieures, la version applicable à l’utilisation des
            Services par l’Utilisateur est celle en vigueur au jour de
            l'utilisation du site.
          </p>

          <h3>Définitions</h3>
          <h4> Les termes ci-dessous ont la signification suivante :</h4>
          <p>
            « Producteur » désigne la personne physique ou morale, exerçant son
            activité à titre professionnel et proposant des produits sur le
            site. Le Producteur est un professionnel au sens de l’article
            liminaire du Code de la consommation.
          </p>
          <p>
            « Utilisateur » désigne la personne physique qui utilise le site
            <strong> Nearby</strong> et qui, le cas échéant, souhaite visualiser
            et entrer en contact avec les Producteurs. L’Utilisateur est un
            consommateur au sens de l’article liminaire du Code de la
            consommation.
          </p>
          <p>
            « Compte » désigne le Compte personnel qui doit être créé par
            l’Utilisateur pour créer un profil et accéder à un espace personnel.
          </p>
          <p>
            <strong> Nearby</strong> désigne le site de mise en relation entre
            les Producteurs et les Utilisateurs, édité et mis en ligne à partir
            de l’URL nearby.fr.
          </p>
          <p>
            « Services » désigne l'ensemble des services gratuits ou payants
            proposés par l’Entreprise via le site <strong> Nearby</strong>.
          </p>

          <h3>Objet du Contrat</h3>
          <p>
            Les présentes Conditions Générales ont pour objet d’encadrer les
            conditions contractuelles applicables à l’utilisation du site
            <strong> Nearby</strong> par l’Utilisateur et à la mise en relation
            entre l’Utilisateur et le Producteur.
          </p>

          <h3>Obligation d'information de l'entreprise</h3>
          <p>
            Conformément aux dispositions du Code de la consommation, et en tant
            qu’opérateur de plateforme en ligne proposant un service de mise en
            relation, <strong> Nearby</strong> porte à la connaissance des
            Utilisateurs les d’informations suivantes :
          </p>
          <p>
            Les Producteurs autorisés à déposer des produits sur le site
            <strong> Nearby</strong> sont des professionnels. Le site
            <strong> Nearby</strong> permet la mise en relation entre des
            professionnels et des consommateurs, elle met ainsi à la disposition
            des Producteurs l'espace nécessaire sur le site
            <strong> Nearby</strong>, pour la communication des informations
            préalables à la fourniture d'un service, prévues par les articles L.
            221-5 et L. 221-6 du Code de la consommation. Il est précisé que
            l’insertion et le classement des Producteurs et de leurs produits
            dans les résultats de recherche sur le site
            <strong> Nearby</strong> dépendent de différents facteurs (critères
            de référencement et de déréférencement) tels que :
          </p>
          <ul className="research__ordering">
            <li>
              La proximité géographique du lieu d'activité du Producteur en
              fonction du choix des utilisateurs et de leur géolocalisation
            </li>
            <li>Les arrivages des produits mis en ligne par les Producteurs</li>
            <li>Les commentaires attribués aux Producteurs</li>
          </ul>
          <h3>Création et gestion du compte personnel</h3>
          <p>
            L’accès au site <strong> Nearby</strong> par les Utilisateurs et la
            consultation des différents Producteurs et produits disponibles
            n’est pas conditionnée à l’inscription de l’Utilisateur. L'ajout de
            commentaires, l'ajout de produits et Producteurs en favoris, la mise
            en ligne de produits, la modification et suppression de produits,
            ainsi que l'accès à un espace profil est, en revanche,conditionné à
            la création d’un Compte par l’Utilisateur. L’ouverture d’un Compte
            donne accès à un espace personnel permettant à l’Utilisateur de
            gérer ses informations personnelles, de poster des commentaires sur
            les produits, de mettre en favoris des produits ou Producteurs, de
            mettre en ligne des produits, de gérer la modification ou
            suppression de ces derniers.
          </p>
          <h4>Création d'un compte</h4>
          <p>
            Pour créer un Compte, les Utilisateurs ont le choix de : créer un
            Compte propre au site <strong> Nearby</strong> en remplissant des
            champs obligatoires (prénom, nom, addresse postale, adresse email,
            téléphone, code postal et mot de passe). L’Utilisateur s’engage à
            fournir des informations véritables et sincères le concernant.
            L’Utilisateur doit en outre procéder à une vérification régulière de
            ses données afin de s’assurer de leur exactitude. Une fois la
            création de Compte validée, l’Entreprise adresse à l’Utilisateur (à
            l’adresse électronique renseignée par ce dernier lors de la création
            de son Compte) un e-mail de confirmation. Cet e-mail ne nécessite
            aucune réponse de la part de l’Utilisateur. Toute création de
            Compte, quel qu’en soit le mode, nécessite la prise de connaissance
            et l’acceptation par l’Utilisateur des présentes Conditions
            Générales.
          </p>
          <h4>Mot de passe</h4>
          <p>
            La création du Compte entraine l’attribution d’un identifiant à
            l'Utilisateur lui permettant d'accéder à son Compte grâce à un mot
            de passe que l’Utilisateur est ensuite tenu de configurer. Le mot de
            passe est personnel, confidentiel et incessible. L’Utilisateur
            s’engage ainsi à ne jamais le communiquer à des tiers. Afin de
            protéger au maximum la sécurité des Comptes des Utilisateurs du site
            <strong> Nearby</strong>, l’Utilisateur doit veiller à ne pas
            réutiliser le même mot de passe que celui associé à d’autres comptes
            lui permettant d’accéder à des services tiers fournis par des
            sociétés tierces. L’Utilisateur s’engage à signaler à l’Entreprise,
            à l’adresse électronique suivante : contact@nearby.fr et dans les
            plus brefs délais, toute utilisation frauduleuse de son Compte
            personnel ou toute perte, vol ou divulgation de son mot de passe. Le
            mot de passe est modifiable via le site <strong> Nearby </strong>{' '}
            par l’Utilisateur dans la rubrique « Mon profil ». L’Entreprise se
            réserve en tout état de cause la possibilité de refuser une demande
            d'inscription aux services du site en cas de non-respect par
            l'Utilisateur des dispositions des présentes Conditions Générales.
          </p>
          <p></p>
          <h4>Fermeture du compte à l'initiative de L'Utilisateur</h4>
          <p>
            L’Utilisateur peut à tout moment et de manière discrétionnaire,
            solliciter la fermeture de son Compte auprès du site
            <strong> Nearby</strong>. La demande peut être faite à l’adresse
            suivante : contact@nearby.fr. <strong> Nearby </strong> s’engage à
            fermer définitivement le Compte de l’Utilisateur et ce, sans délai,
            à compter de la réception de la demande.
          </p>
          <h4>Fermeture du Compte à l’initiative de l’Entreprise</h4>
          <p>
            se réverse le droit de supprimer le Compte personnel de
            l’Utilisateur dans l’hypothèse où ce dernier ne respecte pas les
            présentes Conditions Générales et ce notamment en cas de non-respect
            des droits de propriété intellectuelle de
            <strong> Nearby</strong>, contournement ou tentative de
            contournement des mesures techniques de protection mises en place
            par <strong> Nearby</strong>, fourniture de fausses informations
            lors de la création du Compte, ou tout agissement contraire aux
            intérêts de <strong> Nearby</strong>.
          </p>
          <h4>Notations et commentaires</h4>
          <p>
            À la consultation des produits et Producteurs mis en ligne et à la
            suite de la création d'un compte personnel sur le site
            <strong> Nearby</strong>, l’Entreprise encourage les Utilisateurs à
            commenter. Les Utilisateurs s’engagent à n’avoir aucun propos ou
            comportement de nature à discriminer ou harceler toute personne en
            raison de son origine ethnique ou nationale, de sa religion, de son
            sexe, de son identité sexuelle, de son handicap physique ou mental,
            de son état de santé, de son état civil, de son âge ou de son
            orientation sexuelle. En cas de propos excessifs, l’Entreprise se
            réserve le droit de ne pas publier ou de supprimer tout commentaire
            jugé contraire aux présentes Conditions Générales, de supprimer le
            Compte de l’Utilisateur dans les conditions prévues des présentes
            Conditions Générales.
          </p>
          <h3>Propriété intellectuelle</h3>
          <p>
            Le site <strong> Nearby</strong>, sa structure générale, ses
            contenus, et notamment les photos et vidéos des Producteurs et
            Utilisateurs, de leurs produits et la documentation les concernant,
            sont protégés par des droits de propriété intellectuelle et sont la
            propriété exclusive <strong> Nearby</strong>. Les présentes
            Conditions Générales ne confèrent à l’Utilisateur aucun droit de
            propriété sur le site <strong> Nearby</strong>, son contenu, et
            notamment les photos et vidéos des Producteurs, autres Utilisateurs
            du site et sur la documentation transmise dans le cadre du présent
            contrat. L’utilisation temporaire du site <strong> Nearby </strong>
            dans les conditions prévues dans les présentes Conditions Générales
            ne saurait être analysée comme la cession ou une licence d’un droit
            quelconque de propriété intellectuelle au bénéfice de l’Utilisateur.
          </p>
          <p>
            Par conséquent, l’Utilisateur s’interdit toute utilisation non
            autorisée par <strong> Nearby </strong> des éléments cités ci-avant,
            et plus largement de tous les éléments protégés, et notamment sur
            des sites concurrents. Le logo et le nom de
            <strong> Nearby </strong>
            présent sur le site sont des marques déposées et appartiennent à
            <strong> Nearby </strong>. Toute représentation, reproduction et/ou
            exploitation, totale ou partielle, des marques, de quelque nature
            que ce soit, est interdite sauf accord écrit et préalable de
            <strong> Nearby </strong>. L’Utilisateur s’interdit de déposer ou
            enregistrer des marques et/ou noms de domaines incluant l’expression
            « Nearby », seuls ou avec des éléments figuratifs, de modifier leur
            dénomination sociale, leur nom commercial ou leur enseigne pour une
            appellation incluant l’expression « Nearby ».
          </p>
          <h3>Modification des conditions générales</h3>
          <p>
            <strong> Nearby </strong>se réserve le droit de réviser les
            présentes Conditions Générales. Toute modification des présentes
            Conditions Générales sera notifiée aux Utilisateurs par une
            publication sur le site <NavLink to="/"> www.nearby.fr</NavLink>.
          </p>
          <h3>Loi applicable</h3>
          <p>
            Le présent contrat est régi par la loi française. Si l'Utilisateur
            est un Consommateur, les dispositions réglementaires impératives
            relatives à la protection des Consommateurs de son pays de résidence
            sont applicables.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Cgv;
