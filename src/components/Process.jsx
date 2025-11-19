import React from 'react';
import { Phone, ClipboardCheck, Wrench, KeyRound } from 'lucide-react';

const steps = [
  { icon: Phone, title: 'Contact Us', desc: 'Call or book online to start your claim and schedule an assessment.' },
  { icon: ClipboardCheck, title: 'Assessment', desc: 'We inspect your vehicle, liaise with insurers, and outline the plan.' },
  { icon: Wrench, title: 'Repair', desc: 'Our technicians complete structural and cosmetic repairs to factory spec.' },
  { icon: KeyRound, title: 'Pick Up', desc: 'Quality check, clean, and handover—ready for the road.' },
];

const Process = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-4 text-slate-600">A simple, transparent process from first call to handover.</p>
        </div>

        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-xl border border-slate-200 p-6">
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-yellow-400 text-slate-900 font-bold grid place-items-center">{idx + 1}</div>
              <Icon className="w-7 h-7 text-yellow-500" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;