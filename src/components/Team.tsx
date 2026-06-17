import React, { useState } from 'react';
import { Container, Section } from './ui/LayoutBlocks';
import { TEAM_MEMBERS } from '../data/content';
import { Button } from './ui/Button';
import { Plus } from 'lucide-react';

export function Team() {
  const [expanded, setExpanded] = useState(false);

  // Take the first 3 for default view, or all if expanded
  const visibleMembers = expanded ? TEAM_MEMBERS : TEAM_MEMBERS.slice(0, 3);

  return (
    <Section id="team" bg="tint">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Il nostro team di esperti</h2>
          <p className="text-lg text-gray-600">
            Per governare la NIS2 non basta l'avvocato, né basta il tecnico. Serve una visione congiunta tra compliance legale e architettura IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {visibleMembers.map((member, i) => (
            <div key={i} className="group flip-card h-[380px] w-full cursor-pointer">
              <div className="flip-card-inner relative w-full h-full rounded-[20px] shadow-sm group-hover:shadow-xl transition-all">
                
                {/* Front Side */}
                <div className="flip-card-front absolute w-full h-full bg-white rounded-[20px] border border-brand-border overflow-hidden flex flex-col justify-end p-6">
                  {/* Image */}
                  <div className="absolute inset-0 bg-gray-100 z-0 flex items-center justify-center">
                    <span className="font-medium text-gray-400 absolute text-sm">Foto {member.name.split(' ')[1]}</span>
                    <img 
                      src={`/team/${member.id}.png`} 
                      alt={member.name} 
                      className="relative w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 z-10" 
                      onError={(e) => { 
                        if (e.currentTarget.src.includes('.png')) {
                          e.currentTarget.src = `/team/${member.id}.webp`;
                          return;
                        }
                        if (e.currentTarget.src.includes('.webp')) {
                          e.currentTarget.src = `/team/${member.id}.jpg`;
                          return;
                        }
                        const target = e.currentTarget;
                        target.style.opacity = '0'; 
                        setTimeout(() => {
                           if (target.parentElement) {
                             target.style.display = 'none';
                           }
                        }, 500);
                      }}
                    />
                  </div>
                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
                  <div className="relative z-20 text-left mt-auto">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-brand-purple-light font-medium text-sm mb-3">{member.role}</p>
                    <span className="inline-block text-xs text-white/70 uppercase tracking-wider font-bold group-hover:text-white transition-colors">Scopri di più</span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="flip-card-back absolute w-full h-full bg-brand-purple text-white rounded-[20px] border border-brand-purple p-8 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <div className="w-10 h-0.5 bg-brand-purple-light mx-auto mb-6"></div>
                  <p className="text-sm text-purple-100/90 leading-relaxed max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">{member.bio}</p>
                </div>

              </div>
            </div>
          ))}
        </div>

        {!expanded && (
          <div className="text-center mt-10">
            <Button variant="secondary" onClick={() => setExpanded(true)} className="gap-2">
              Vedi tutto il team <Plus size={18} />
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
