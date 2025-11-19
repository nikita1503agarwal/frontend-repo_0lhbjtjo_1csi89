import React from 'react';

const faqs = [
  {
    q: 'Do you handle insurance claims?',
    a: 'Yes. We guide you through the process, liaise with your insurer, and keep you updated from assessment to completion.'
  },
  {
    q: 'How long do repairs typically take?',
    a: 'Timeframes vary by damage. Minor repairs can be completed in days, while structural work may take longer. We provide a clear estimate after assessment.'
  },
  {
    q: 'Is there a warranty on repairs?',
    a: 'All workmanship is covered by a lifetime warranty for as long as you own the vehicle.'
  },
  {
    q: 'Can I get a replacement car?',
    a: 'Yes, courtesy vehicles are available on request and subject to availability and eligibility.'
  },
  {
    q: 'Do you offer paintless dent removal?',
    a: 'Absolutely. For suitable dents and hail damage, PDR is a fast, cost-effective solution that avoids repainting.'
  },
  {
    q: 'Are you certified for Tesla and modern vehicles?',
    a: 'Our team follows OEM procedures and uses EV-safe equipment to repair late-model and electric vehicles.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600">Get answers to common questions about Melbourne smash repairs, insurance, and timelines.</p>
        </div>

        <div className="mt-8 divide-y divide-slate-200 border border-slate-200 rounded-xl bg-white">
          {faqs.map((item, i) => (
            <div key={i}>
              <button
                className="w-full text-left px-6 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 flex items-center justify-between"
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
                id={`faq-header-${i}`}
                onClick={() => toggle(i)}
              >
                <span className="font-medium text-slate-900">{item.q}</span>
                <span className="ml-4 text-slate-500">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div
                id={`faq-panel-${i}`}
                role="region"
                aria-labelledby={`faq-header-${i}`}
                className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-300 ease-in-out ${openIndex === i ? 'max-h-40 pb-4' : 'max-h-0'}`}
              >
                <p className="text-sm text-slate-600">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;