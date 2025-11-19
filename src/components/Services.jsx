import React from 'react';
import { Car, CarFront, Hammer, Paintbrush, SprayCan, LifeBuoy } from 'lucide-react';

const items = [
  {
    slug: '/services/tesla-repair',
    title: 'Tesla Repair',
    icon: CarFront,
    desc: 'Specialised structural and cosmetic repairs for Tesla vehicles using EV-safe procedures.'
  },
  {
    slug: '/services/accident-assistance',
    title: 'Accident Assistance',
    icon: LifeBuoy,
    desc: 'Guidance with claims, towing, and assessment so you have support from first call to handover.'
  },
  {
    slug: '/services/paintless-dent-removal',
    title: 'Paintless Dent Removal',
    icon: Hammer,
    desc: 'Remove hail and door dings without repainting for an efficient, cost-effective result.'
  },
  {
    slug: '/services/panel-beating',
    title: 'Panel Beating',
    icon: Car,
    desc: 'Precision panel straightening and alignment for factory-spec fitment and safety.'
  },
  {
    slug: '/services/replacement-vehicles',
    title: 'Replacement Vehicles',
    icon: Car,
    desc: 'Stay mobile while your car is with us. Clean, reliable courtesy vehicles on request.'
  },
  {
    slug: '/services/spray-painting',
    title: 'Spray Painting',
    icon: SprayCan,
    desc: 'Computerised colour matching and premium finishes in our temperature-controlled spray booth.'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-4 text-slate-600">From minor dents to major crash repairs, our Melbourne smash repairs team delivers safe, reliable results.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ slug, title, icon: Icon, desc }) => (
            <a key={slug} href={slug} className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400">
              <Icon className="w-7 h-7 text-yellow-500" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <span className="mt-4 inline-block text-sm font-medium text-slate-900 group-hover:underline">Learn more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;