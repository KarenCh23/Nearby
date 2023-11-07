import React from 'react';
import '../About/About.scss';

const About = () => {
  return (
    <main>
      <section className="main__container">
        <div className="main__wrapper__about">
          <article id="mission">
            <div className="about__text">
              <h2 className="about__title">Notre Mission</h2>
              <p>
                Avec notre site Nearby, nous proposons aux professionnels
                d’avoir accès à une interface pour se faire connaître, exposer
                leurs produits et leur activité, tout en vous proposant une
                plateforme afin de découvrir les producteurs locaux, et ainsi
                avoir un impact sur le développement de nos Régions à travers
                votre façon de consommer.
              </p>
            </div>
            <div className="about__picture">
              <img
                src="https://images.pexels.com/photos/7457493/pexels-photo-7457493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </article>

          <article id="team">
            <div className="about__text">
              <h2 className="about__title">Notre Équipe</h2>
              <p>
                Notre équipe est motivée pour défendre et mettre en lumière le
                travail des producteurs locaux et la qualité de leurs produits.
                Nous travaillons en étroite collaboration afin d'améliorer
                chaque jour l'expérience utilisateur sur notre site.
              </p>
            </div>
            <div className="about__picture">
              <img
                src="https://images.pexels.com/photos/3228687/pexels-photo-3228687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;
