import React from 'react';

const Gallery = () => {
  const images = Array.from({ length: 8 }).map((_, i) => `https://picsum.photos/seed/auto-${i}/600/400`);
  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-slate-900">Before & After Gallery</h2>
          <p className="mt-4 text-slate-600">Explore examples of car accident repair Melbourne drivers trust—from light scrapes to major restorations.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-200">
              <img src={src} alt={`Vehicle repair example ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;