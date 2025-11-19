import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2" aria-label="Auto body repair home">
            <div className="w-9 h-9 rounded bg-yellow-400 flex items-center justify-center font-extrabold text-slate-900">AU</div>
            <span className="font-semibold text-slate-800">AutoCare Melbourne</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 rounded px-2 py-1">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-yellow-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400">Book A Service</a>
          </div>

          <button className="md:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <Menu className="w-6 h-6 text-slate-800" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 hover:text-slate-900 px-2 py-2 rounded hover:bg-slate-50">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-yellow-300">Book A Service</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;