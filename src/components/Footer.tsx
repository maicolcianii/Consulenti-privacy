import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { Container } from './ui/LayoutBlocks';

export function Footer() {
  return (
    <footer className="bg-[#151233] text-white/70 py-16 text-sm">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Info */}
          <div className="lg:col-span-1">
             <div className="bg-white rounded-lg p-3 inline-flex items-center mb-6">
                <img src="/logos/logo-consulenti.png" alt="Consulenti Privacy" className="h-12 w-auto bg-white p-1 rounded" />
             </div>
             <p className="mb-4">Consulenti Privacy S.r.l.<br />P.IVA 04391970409</p>
             <div className="flex gap-4">
               {/* Social placeholders */}
               <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-purple-light transition-colors text-white">In</a>
               <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-purple-light transition-colors text-white">Fb</a>
             </div>
          </div>

          {/* Sedi */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-4 flex items-center gap-2"><MapPin size={16} className="text-brand-purple-light" /> Le nostre Sedi</h4>
            <ul className="space-y-3">
              <li><strong>Rimini</strong><br/>Via Valentini 11 (RN)</li>
              <li><strong>Bologna</strong><br/>Via Vittorio Lugli 4/A-D</li>
              <li><strong>Milano</strong><br/>Corso Europa 15</li>
              <li><strong>Roma</strong><br/>Via Mario Bianchini 51</li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold mb-4">Contatti</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:05411798723" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone size={16} className="text-brand-purple-light" /> 0541 1798723
                </a>
              </li>
              <li>
                <a href="mailto:info@iconsulentiprivacy.it" className="flex items-center gap-2 hover:text-white transition-colors break-all">
                  <Mail size={16} className="text-brand-purple-light shrink-0" /> info@iconsulentiprivacy.it
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1 border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0">
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white underline decoration-white/30">Informativa Privacy</a></li>
              <li><a href="#" className="hover:text-white underline decoration-white/30">Cookie Policy</a></li>
            </ul>
            <p className="mt-8 text-xs opacity-60">
              © {new Date().getFullYear()} Consulenti Privacy S.r.l. - Tutti i diritti riservati.
            </p>
          </div>

        </div>
      </Container>
    </footer>
  );
}
