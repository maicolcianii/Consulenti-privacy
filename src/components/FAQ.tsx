import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container, Section } from './ui/LayoutBlocks';
import { FAQS } from '../data/content';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section bg="white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Domande Frequenti (FAQ)</h2>
            <p className="text-lg text-gray-600">Hai dubbi sulla NIS2? Ecco le risposte degli esperti.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? 'border-brand-purple shadow-md bg-white' : 'border-brand-border bg-brand-tint hover:border-brand-purple-light'
                  }`}
                >
                  <button 
                    onClick={() => toggle(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 outline-none"
                  >
                    <span className={`font-bold text-lg md:text-xl pr-8 ${isOpen ? 'text-brand-purple' : 'text-gray-800'}`}>
                      {faq.q}
                    </span>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-brand-purple text-white rotate-180' : 'bg-white text-gray-500'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out px-6 overflow-hidden ${
                      isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 py-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
