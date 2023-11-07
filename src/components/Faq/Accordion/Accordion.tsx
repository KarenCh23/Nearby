import React from 'react';
import '../Accordion/Accordion.scss';

interface AccordionProps {
  faq: {
    open: boolean;
    question: string;
    answer: string;
  };
  index: number;
  toggleFaq: Function;
}

const Accordion = ({ faq, index, toggleFaq }: AccordionProps) => {
  return (
    <div
      className={'faq ' + (faq.open ? 'open' : '')}
      key={index}
      onClick={() => toggleFaq(index)}
    >
      <div className="faq-question">
        <h4>{faq.question}</h4>
      </div>
      <div className="faq-answer">
        <p>{faq.answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
