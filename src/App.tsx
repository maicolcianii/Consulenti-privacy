import React, { useState } from 'react';
import { Topbar } from './components/Topbar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Paths } from './components/Paths';
import { NIS2Explanation } from './components/NIS2Explanation';
import { Sectors } from './components/Sectors';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Clients } from './components/Clients';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { GuideModal } from './components/GuideModal';

export default function App() {
  const [guideModalOpen, setGuideModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-brand-purple-light selection:text-white">
      <Topbar />
      <Header />
      
      <main>
        <Hero onOpenGuide={() => setGuideModalOpen(true)} />
        <Paths onOpenGuide={() => setGuideModalOpen(true)} />
        <NIS2Explanation />
        <Sectors />
        <Services />
        <WhyUs />
        <Clients />
        <Team />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      
      <GuideModal 
        isOpen={guideModalOpen} 
        onClose={() => setGuideModalOpen(false)} 
      />

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-brand-border p-3 z-40 shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
        <button 
          onClick={() => { document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('nome-finale')?.focus(); }}
          className="flex items-center justify-center w-full bg-brand-purple text-white py-3 rounded-full font-medium"
        >
          Parla con un esperto
        </button>
      </div>
    </div>
  );
}

