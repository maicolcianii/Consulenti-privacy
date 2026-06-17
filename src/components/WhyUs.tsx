import React from 'react';
import { Target, Compass, Heart } from 'lucide-react';
import { Container, Section } from './ui/LayoutBlocks';
import { Button } from './ui/Button';

export function WhyUs() {
  return (
    <Section id="perche-noi">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Mission */}
          <div className="bg-white p-8 md:p-10 rounded-[20px] border border-brand-border text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-tint text-brand-purple rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 font-sans text-brand-black">La nostra Mission</h3>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Semplifichiamo il lavoro delle aziende, rendendo i processi legati alla compliance e alla sicurezza più chiari, più sicuri e davvero funzionali al business.
            </p>
          </div>

          {/* Vision (Highlighted) */}
          <div className="bg-gradient-to-b from-brand-purple to-brand-purple-mid text-white p-8 md:p-10 rounded-[20px] text-center flex flex-col items-center shadow-2xl scale-[1.02] z-10">
            <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-6 border border-white/20">
              <Compass size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 font-sans">La nostra Vision</h3>
            <p className="text-white/90 leading-relaxed max-w-sm font-medium">
              Guidiamo le aziende con competenza e innovazione, proiettandole verso il futuro per trasformare obblighi normativi e complessità tecnologica in opportunità di crescita.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 md:p-10 rounded-[20px] border border-brand-border text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-brand-tint text-brand-purple rounded-2xl flex items-center justify-center mb-6">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-4 font-sans text-brand-black">I nostri Valori</h3>
            <p className="text-gray-600 leading-relaxed max-w-sm">
              Ridisegnare il modo in cui le organizzazioni vivono la multicompliance, diventando il partner unico e di riferimento per chi vuole guardare avanti sereno e protetto.
            </p>
          </div>

        </div>

        {/* Stats Strip */}
        <div className="bg-brand-tint rounded-[20px] p-8 lg:p-12 border border-brand-border flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center md:text-left">
            <h4 className="text-4xl font-extrabold text-brand-purple mb-1">500+</h4>
            <p className="font-semibold text-gray-700">Clienti attivi</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>
          <div className="text-center md:text-left">
            <h4 className="text-4xl font-extrabold text-brand-purple mb-1">4</h4>
            <p className="font-semibold text-gray-700">Sedi fisiche</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-extrabold text-brand-purple mb-1 leading-tight border-b-2 border-brand-purple-light inline-block w-max">Legal + IT</h4>
            <p className="font-semibold text-gray-700">Team multidisciplinare</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-extrabold text-brand-purple mb-1 leading-tight">ISO 27001</h4>
            <p className="font-semibold text-gray-700">Auditor interno certificato</p>
          </div>
        </div>

        <div className="text-center">
          <Button as="a" href="#contatti" onClick={(e) => { e.preventDefault(); document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); document.getElementById('nome-finale')?.focus(); }}>Parla con un esperto</Button>
        </div>
      </Container>
    </Section>
  );
}
