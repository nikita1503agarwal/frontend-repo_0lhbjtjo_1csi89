import React from 'react';
import { ShieldCheck, Wrench, Clock4, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Insurance Approved',
    desc: 'We work directly with major insurers to simplify your claim and get you back on the road sooner.'
  },
  {
    icon: Wrench,
    title: 'Modern Workshop',
    desc: 'State-of-the-art tools and OEM-approved methods for accurate, safe repairs on all makes and models.'
  },
  {
    icon: Clock4,
    title: 'Fast Turnaround',
    desc: 'Streamlined processes and proactive communication keep your downtime to a minimum.'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Guaranteed',
    desc: 'Every repair is finished to a high standard and backed by a lifetime workmanship warranty.'
  },
];

const TrustIntro = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">Trusted Car Smash Repair in Melbourne</h2>
          <p className="mt-4 text-slate-600">
            For decades we’ve helped Melbourne drivers with professional car accident repair. Our trained technicians combine craftsmanship with technology to deliver factory-quality finishes and hassle-free insurance support.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <Icon className="w-6 h-6 text-yellow-500" aria-hidden="true" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIntro;