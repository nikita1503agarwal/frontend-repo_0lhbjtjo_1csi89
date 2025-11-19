import React from 'react';

const Footer = () => {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
    { label: 'Areas We Serve', href: '/about#areas' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-yellow-400 flex items-center justify-center font-extrabold text-slate-900">AU</div>
              <span className="text-white font-semibold">AutoCare Melbourne</span>
            </div>
            <p className="mt-4 text-sm">123 Workshop Road, Melbourne VIC 3000</p>
            <p className="mt-1 text-sm">Phone: <a className="underline" href="tel:0397727411">03 9772 7411</a></p>
            <p className="mt-1 text-sm">Email: <a className="underline" href="mailto:hello@autocaremelbourne.com">hello@autocaremelbourne.com</a></p>
            <p className="mt-4 text-sm">Mon–Fri: 8:00am–5:30pm • Sat: 8:30am–12:30pm</p>
          </div>

          <div>
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {links.map((l) => (
                <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold">Follow</h3>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded bg-slate-800 grid place-items-center">f</a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded bg-slate-800 grid place-items-center">ig</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-400">© {new Date().getFullYear()} AutoCare Melbourne. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;