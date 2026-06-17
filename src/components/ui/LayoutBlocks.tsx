import React from 'react';

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-[1120px] mx-auto px-[22px] ${className}`}>
      {children}
    </div>
  );
}

export function Section({ children, className = '', id, bg = 'white' }: { children: React.ReactNode; className?: string; id?: string; bg?: 'white' | 'tint' | 'dark' }) {
  const bgClass = bg === 'tint' ? 'bg-brand-tint' : bg === 'dark' ? 'bg-brand-purple text-white' : 'bg-white';
  
  return (
    <section id={id} className={`py-[52px] md:py-[88px] ${bgClass} ${className}`}>
      {children}
    </section>
  );
}
