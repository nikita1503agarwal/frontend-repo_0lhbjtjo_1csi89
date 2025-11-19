import React from 'react';

const About = () => {
  return (
    <main className="bg-white">
      <section className="pt-28 pb-14 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">About Us</h1>
          <p className="mt-4 max-w-3xl text-slate-600">We’re a Melbourne smash repairs specialist offering car accident repair, panel beating, spray painting, and paintless dent removal. Our workshop is equipped for modern vehicles and our team supports you through the insurance process from start to finish.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Craftsmanship, care, and clarity</h2>
            <p className="mt-4 text-slate-700">For over three decades, drivers have trusted us for safe, precise repairs and transparent communication. Whether it’s a minor scrape or a significant collision, we aim to make the experience stress-free and deliver a finish you’ll be proud of.</p>
            <ul className="mt-6 space-y-2 text-slate-700 list-disc pl-6">
              <li>Insurance assistance and assessment</li>
              <li>OEM-aligned repair methods</li>
              <li>Computerised colour matching</li>
              <li>Lifetime warranty on workmanship</li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <div className="aspect-[4/3] rounded-lg bg-slate-200" aria-hidden="true" />
            <p className="mt-3 text-sm text-slate-600">Workshop photo placeholder</p>
          </div>
        </div>
      </section>

      <section id="areas" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Areas We Serve</h2>
          <p className="mt-4 text-slate-700">Serving greater Melbourne including CBD, Bayside, South East, and Mornington Peninsula.</p>
        </div>
      </section>
    </main>
  );
};

export default About;