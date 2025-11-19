import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Get In Touch</h2>
            <p className="mt-4 text-slate-600">Speak with our team about car accident repair Melbourne drivers rely on. We’ll help with bookings, insurance, and timelines.</p>

            <form className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input id="name" type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400" placeholder="Your name" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input id="email" type="email" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400" placeholder="name@example.com" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
                <input id="phone" type="tel" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400" placeholder="04xx xxx xxx" />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="time" className="block text-sm font-medium text-slate-700">Preferred Booking Time</label>
                <input id="time" type="text" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400" placeholder="e.g. Weekday morning" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" rows="4" className="mt-1 w-full rounded-md border-slate-300 shadow-sm focus:border-yellow-400 focus:ring-yellow-400" placeholder="Tell us about your vehicle and damage" />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="inline-flex items-center rounded-md bg-yellow-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-yellow-300">Send Enquiry</button>
              </div>
            </form>

            <div className="mt-8 grid sm:grid-cols-2 gap-6 text-sm text-slate-700">
              <div>
                <h3 className="font-semibold text-slate-900">Contact</h3>
                <p className="mt-2">Phone: <a className="underline" href="tel:0397727411">03 9772 7411</a></p>
                <p>Email: <a className="underline" href="mailto:hello@autocaremelbourne.com">hello@autocaremelbourne.com</a></p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Visit</h3>
                <p className="mt-2">123 Workshop Road, Melbourne VIC 3000</p>
                <p className="mt-1">Mon–Fri: 8:00am–5:30pm • Sat: 8:30am–12:30pm</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
            <div className="aspect-[4/3] w-full bg-slate-200 grid place-items-center">
              <p className="text-slate-600">Map placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;