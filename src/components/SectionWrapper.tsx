import React from 'react';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bgClass?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  bgClass = 'bg-black' 
}) => {
  return (
    <section id={id} className={`py-20 px-4 ${bgClass}`}>
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-5xl md:text-6xl font-bold text-[#D4AF37] text-center mb-4" 
          style={{ fontFamily: 'Brittany, cursive' }}
        >
          {title}
        </h2>
        
        {subtitle && (
          <p 
            className="text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto" 
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            {subtitle}
          </p>
        )}
        
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
