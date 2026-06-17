import React, { useState } from 'react';
import { Button } from './ui/Button';

interface LeadFormProps {
  formId: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  dark?: boolean;
  downloadUrl?: string;
}

export function LeadForm({ formId, title = "Parla con un esperto", subtitle = "Ti ricontattiamo entro 24 ore lavorative.", buttonText = "Parla con un esperto", className = "", dark = false, downloadUrl }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // @ts-ignore
      window.dataLayer = window.dataLayer || [];
      // @ts-ignore
      window.dataLayer.push({ event: 'generate_lead', form_id: formId, value: 0 });
      
      // TODO: collegare l'invio al backend / CRM (es. ActiveCampaign) e agli eventi Meta Pixel e LinkedIn.
      
      if (downloadUrl) {
        window.location.href = downloadUrl;
      }
      
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  if (submitted) {
    return (
      <div className={`p-8 rounded-[16px] border border-brand-border text-center ${dark ? 'bg-white text-brand-black w-full' : 'bg-white shadow-xl shadow-brand-purple/5'} ${className}`}>
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-brand-purple">
          {downloadUrl ? "Download iniziato!" : "Richiesta inviata!"}
        </h3>
        <p className="text-gray-600">
          {downloadUrl 
            ? "Il download della tua guida dovrebbe partire in automatico." 
            : "Grazie! Ti ricontattiamo entro 24 ore lavorative."}
        </p>
      </div>
    );
  }

  return (
    <form id={formId} onSubmit={handleSubmit} className={`p-6 md:p-[30px] rounded-[16px] border border-brand-border ${dark ? 'bg-white text-brand-black w-full' : 'bg-white shadow-sm'} ${className}`}>
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-brand-purple mb-2">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>
      
      <div className="space-y-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`nome-${formId}`} className="block text-sm font-medium text-gray-700 mb-1">Nome*</label>
            <input required type="text" id={`nome-${formId}`} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple-light focus:border-brand-purple-light outline-none transition-all" placeholder="Mario" />
          </div>
          <div>
            <label htmlFor={`cognome-${formId}`} className="block text-sm font-medium text-gray-700 mb-1">Cognome*</label>
            <input required type="text" id={`cognome-${formId}`} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple-light focus:border-brand-purple-light outline-none transition-all" placeholder="Rossi" />
          </div>
        </div>
        
        <div>
          <label htmlFor={`email-${formId}`} className="block text-sm font-medium text-gray-700 mb-1">Email aziendale*</label>
          <input required type="email" id={`email-${formId}`} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple-light focus:border-brand-purple-light outline-none transition-all" placeholder="mario.rossi@azienda.it" />
        </div>
        
        <div>
          <label htmlFor={`tel-${formId}`} className="block text-sm font-medium text-gray-700 mb-1">Telefono*</label>
          <input required type="tel" id={`tel-${formId}`} className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple-light focus:border-brand-purple-light outline-none transition-all" placeholder="+39 000 0000000" />
        </div>

        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input required type="checkbox" className="mt-1 w-4 h-4 text-brand-purple rounded border-gray-300 focus:ring-brand-purple" />
            <span className="text-xs text-gray-500 leading-snug">
              Ho preso visione dell'<a href="#" className="underline hover:text-brand-purple">informativa privacy</a>.*
            </span>
          </label>
          
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="mt-1 w-4 h-4 text-brand-purple rounded border-gray-300 focus:ring-brand-purple" />
            <span className="text-xs text-gray-500 leading-snug">
              Acconsento a ricevere comunicazioni informative e commerciali in merito ai servizi.
            </span>
          </label>
        </div>
        
        <Button type="submit" className="w-full mt-4" disabled={loading}>
          {loading ? "Invio in corso..." : buttonText}
        </Button>
      </div>
    </form>
  );
}
