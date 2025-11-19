import React from 'react';
import ServicesSection from '../components/Services';

const Services = () => (
  <main className="bg-white">
    <section className="pt-28 pb-10 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Services</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Comprehensive car accident repair Melbourne drivers count on: panel beating, spray painting, paintless dent removal, and more.</p>
      </div>
    </section>
    <ServicesSection />
  </main>
);

export default Services;