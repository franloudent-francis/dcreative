"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index || hoverIndex === index;
        return (
          <div
            className={`accordion-item${isOpen ? " accordion-open" : ""}`}
            key={faq.question}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <button
              className="accordion-trigger"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={isOpen}
            >
              <span>{faq.question}</span>
              <ChevronDown className="accordion-icon" aria-hidden="true" />
            </button>
            <div className="accordion-body" aria-hidden={!isOpen}>
              <div className="accordion-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
