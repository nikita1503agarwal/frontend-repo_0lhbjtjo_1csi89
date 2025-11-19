import React from 'react';
import ContactSection from '../components/Contact';

const Contact = () => {
  return (
    <main className="bg-white">
      <section className="pt-28 pb-10 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Contact</h1>
          <p className="mt-4 max-w-3xl text-slate-600">Book a service, request a quote, or ask us about insurance claims and timelines.</p>
        </div>
      </section>
      <ContactSection />
    </main>
  );
};

export default Contact;