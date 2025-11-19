import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIntro from './components/TrustIntro';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import LogosStrip from './components/LogosStrip';
import Process from './components/Process';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TrustIntro />
        <Services />
        <WhyUs />
        <LogosStrip />
        <Process />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;