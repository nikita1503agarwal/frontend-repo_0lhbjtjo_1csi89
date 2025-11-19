import React from 'react';

const LogosStrip = () => {
  const items = new Array(8).fill(0);
  return (
    <section aria-label="Partner logos" className="py-10 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center opacity-70">
          {items.map((_, i) => (
            <div key={i} className="h-10 rounded bg-slate-200/80 border border-slate-300" aria-hidden="true" />)
          )}
        </div>
      </div>
    </section>
  );
};

export default LogosStrip;