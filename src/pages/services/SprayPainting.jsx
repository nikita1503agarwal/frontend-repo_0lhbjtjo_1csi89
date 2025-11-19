import React from 'react';

const SprayPainting = () => (
  <main className="bg-white">
    <section className="pt-28 pb-14 bg-slate-50 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">Spray Painting in Melbourne</h1>
        <p className="mt-4 max-w-3xl text-slate-600">Premium paint finishes with computerised colour matching and temperature-controlled spray booths.</p>
      </div>
    </section>
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">What to expect</h2>
          <ul className="mt-4 space-y-2 list-disc pl-6 text-slate-700">
            <li>Surface preparation and priming</li>
            <li>Colour matching and blending</li>
            <li>Clear coat and curing</li>
            <li>Polish and quality inspection</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <div className="aspect-[4/3] rounded-lg bg-slate-200" aria-hidden="true" />
          <p className="mt-3 text-sm text-slate-600">Spray painting image placeholder</p>
        </div>
      </div>
    </section>
  </main>
);

export default SprayPainting;