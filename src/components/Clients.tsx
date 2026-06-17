import React from 'react';
import { Container, Section } from './ui/LayoutBlocks';
import { Button } from './ui/Button';

function ClientLogoPlaceholder({ name }: { name: string }) {
  switch (name) {
    case 'CITRUS':
      return <div className="flex flex-col items-center"><span className="text-2xl font-bold text-[#5c3a21] tracking-[0.2em]">CITRUS</span><span className="text-[#2b8a3e] font-serif italic text-sm mt-1">l'orto italiano</span></div>;
    case 'PUMA ISDUE':
      return <div className="text-xl font-bold tracking-[0.2em] text-[#4267b2] flex items-center gap-2">PUMA<span className="text-3xl rotate-90 leading-none pb-2">🎙</span>ISDUE</div>;
    case 'URBINATI':
      return <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full border-2 border-red-600 flex items-center justify-center text-red-600 font-bold text-xl relative overflow-hidden"><span className="absolute bottom-[-4px] right-2 text-blue-500">U</span></div><div className="flex flex-col items-start"><span className="text-xl font-black italic tracking-tighter text-gray-900 leading-none">URBINATI</span><span className="text-[10px] text-[#2ba3d4] mt-0.5">Tecnologia delle Piante</span></div></div>;
    case 'Fondazione Santa Rita da Cascia':
      return <div className="flex items-center gap-3 text-left"><div className="text-yellow-500 text-4xl">❀</div><div className="flex flex-col"><span className="text-[#e2b852] text-[10px] tracking-widest">FONDAZIONE</span><span className="text-[#646465] text-xs font-bold leading-none mb-1 mt-0.5">SANTA RITA<br/>DA CASCIA <span className="font-normal text-[8px]">ets</span></span><span className="text-gray-500 text-[10px]">Fiore di carità</span></div></div>;
    case 'BE|LE':
      return <div className="flex flex-col items-center"><div className="text-4xl font-bold flex items-center"><span className="text-[#0f243b]">BE</span><div className="flex mx-1.5"><div className="w-2 h-8 bg-[#0eb3cd]"></div><div className="w-2 h-8 bg-[#0eb3cd] ml-1"></div></div><span className="text-[#0f243b]">LE</span></div><span className="text-[10px] tracking-[0.3em] text-[#0f243b] mt-2">VETRATE SCORREVOLI</span></div>;
    case 'Gruppo Carli':
      return <div className="text-2xl font-serif text-gray-800 flex items-center gap-2">Gruppo <div className="w-12 h-12 bg-[#a31b26] text-white rounded-full flex items-center justify-center font-bold text-lg font-serif">Carli</div></div>;
    case 'POLI.DESIGN':
      return <div className="flex flex-col"><div className="text-2xl tracking-[0.1em] text-[#555] flex items-center font-sans"><span className="font-black text-[#444]">POLI</span><span className="text-[#7ea9c8] mx-0.5 pb-2 text-4xl">.</span><span>DESIGN</span></div><span className="text-[9px] tracking-[0.1em] text-[#777] mt-1 font-sans">FOUNDED BY POLITECNICO DI MILANO</span></div>;
    case 'BABBI':
      return <div className="flex flex-col items-center"><span className="font-serif text-[#b69f70] text-3xl font-black tracking-widest" style={{ fontFamily: 'Georgia, serif' }}>BABBI</span><div className="flex items-center gap-2 mt-1"><div className="h-px w-6 bg-[#b69f70]"></div><span className="text-[#b69f70] text-xs font-serif font-bold">1952</span><div className="h-px w-6 bg-[#b69f70]"></div></div></div>;
    default:
      return <span className="font-bold text-gray-400 text-sm tracking-wider text-center">{name}</span>;
  }
}

export function Clients() {
  const CLIENT_LOGOS = [
    { name: 'BE|LE', file: '/logos/bele.png' },
    { name: 'BABBI', file: '/logos/babbi.png' },
    { name: 'POLI.DESIGN', file: '/logos/polidesign.png' },
    { name: 'Gruppo Carli', file: '/logos/gruppo-carli.png' },
    { name: 'Fondazione Santa Rita da Cascia', file: '/logos/santarita.png' },
    { name: 'URBINATI', file: '/logos/urbinati.png' },
    { name: 'PUMA ISDUE', file: '/logos/pumaisdue.png' },
    { name: 'CITRUS', file: '/logos/citrus.png' }
  ];

  return (
    <Section bg="white" className="border-t border-brand-border pb-[88px]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-400">Oltre 500 aziende ci hanno già scelto</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          {CLIENT_LOGOS.map((client, i) => (
            <div 
              key={i} 
              className="aspect-[3/2] bg-brand-tint border border-gray-100 rounded-lg flex items-center justify-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 overflow-hidden px-4"
            >
              <img 
                src={client.file} 
                alt={`${client.name} logo`} 
                className="max-w-[80%] max-h-[80%] object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full flex flex-col items-center justify-center scale-75 sm:scale-90 md:scale-100">
                <ClientLogoPlaceholder name={client.name} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button as="a" href="https://www.iconsulentiprivacy.it/clienti/" target="_blank" rel="noopener noreferrer" variant="secondary" className="!bg-white !text-gray-600 !border-gray-200 hover:!border-brand-purple hover:!text-brand-purple">
            Vedi tutti i clienti
          </Button>
        </div>
      </Container>
    </Section>
  );
}
