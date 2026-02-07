import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  children: ReactNode;
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#F15921] text-white px-8 py-4 hover:bg-[#D94A1A] shadow-md hover:shadow-lg hover:scale-[1.02]',
    secondary: 'bg-transparent border-2 border-[#0167B3] text-[#0167B3] px-8 py-4 hover:bg-[#0167B3] hover:text-white',
    text: 'text-[#0167B3] px-4 py-2 hover:text-[#F15921]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}