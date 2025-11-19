import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white pointer-events-none" />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-32 md:pb-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                Accident Repairs With a Lifetime Repair Warranty
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Premium Melbourne smash repairs, seamless insurance assistance, and craftsmanship you can trust. From minor bumps to major collisions, we restore your vehicle to showroom condition.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="/contact" className="inline-flex items-center rounded-md bg-yellow-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">
                  Book A Service
                </a>
                <a href="tel:0397727411" className="text-base font-semibold text-slate-900 hover:text-slate-700">
                  Call: 03 9772 7411
                </a>
                <a href="#services" className="text-base font-medium text-slate-600 hover:text-slate-900 underline underline-offset-4">Explore services</a>
              </div>
            </div>
            <div className="aspect-[4/3] md:aspect-[16/10] rounded-2xl bg-slate-200/70 border border-slate-300 shadow-inner grid place-items-center">
              <div className="text-center p-6">
                <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-slate-300" aria-hidden="true" />
                <p className="text-sm text-slate-600">Hero image placeholder (vehicle, workshop, or before/after)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;