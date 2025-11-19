import React from 'react';
import { ShieldCheck, Car, BadgeCheck, Award, Truck, Clock } from 'lucide-react';

const points = [
  { icon: Award, text: '30+ Years of Experience' },
  { icon: Car, text: 'Replacement Car Available' },
  { icon: BadgeCheck, text: 'VACC Approved' },
  { icon: ShieldCheck, text: 'Lifetime Warranty on Repairs' },
  { icon: Clock, text: 'Convenient Pick-Up & Drop-Off' },
  { icon: Truck, text: '24-Hour Towing Service' },
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">Why We’re Melbourne’s Top Choice For Smash Repairs</h2>
          <p className="mt-4 text-slate-600">Trusted workmanship, clear communication, and genuine care for your car and your time.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-start gap-3 rounded-xl border border-slate-200 p-5">
              <Icon className="w-6 h-6 text-yellow-500" aria-hidden="true" />
              <p className="text-slate-800 font-medium">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;