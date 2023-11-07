import React, { useEffect, useState } from 'react';
import '../Faq/Faq.scss';
import Accordion from './Accordion/Accordion';
import { faqDatasTab } from '../../assets/data/faqDatas';
import { Link } from 'react-router-dom';
import ArrowButton from '../ArrowButton/ArrowButton';

const Faq = () => {
  // ? Faq fake datas State //
  const [faqDatas, setFaqDatas] = useState(faqDatasTab);

  const toggleFaq = (index: number) => {
    setFaqDatas(
      faqDatas.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <main>
      <section className="main__container__faq">
        <div className="faq__wrapper">
          <h2>Faq</h2>
          <div className="faq__notfound__question">
            <h3>Votre question ne se trouve pas parmi notre Faq ?</h3>
            <ArrowButton />

            {/* <button className="contact__us">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span> */}
            {/* <Link to="/contact" className="button__text">
                Contactez-nous
              </Link> */}
            {/* </button> */}
          </div>
          <div className="faqs">
            {faqDatas.map((faq, index) => (
              <Accordion
                faq={faq}
                index={index}
                key={index}
                toggleFaq={toggleFaq}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
