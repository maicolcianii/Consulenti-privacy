import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  target?: string;
  rel?: string;
  onClick?: (e: any) => void;
}

export function Button({ variant = 'primary', children, as = 'button', href, className = '', ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-100 text-center";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-purple-mid to-brand-purple-light text-white px-8 py-3.5 shadow-md shadow-brand-purple/20 hover:shadow-lg focus:ring-4 focus:ring-brand-purple-light/20 outline-none",
    secondary: "bg-white text-brand-purple border border-brand-border px-7 py-3 hover:border-brand-purple-light focus:ring-4 focus:ring-brand-purple-light/20 outline-none",
    ghost: "bg-transparent text-white border border-white/50 px-7 py-3 hover:bg-white/10 focus:ring-4 focus:ring-white/20 outline-none"
  };

  const finalClassName = `${baseClasses} ${variants[variant]} ${className}`;

  if (as === 'a') {
    return (
      <a href={href} className={finalClassName} {...(props as any)}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
