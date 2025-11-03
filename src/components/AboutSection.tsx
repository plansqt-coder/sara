import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-[#D4AF37] text-center mb-12" style={{ fontFamily: 'Brittany, cursive' }}>
          Sobre Mí
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://i.ibb.co/kgVTq6Hy/Whats-App-Image-2025-10-28-at-3-16-43-PM.jpg"
              alt="Sara Quiros"
              className="rounded-lg border-4 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/30 w-full"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
              Soy <span className="text-[#D4AF37] font-bold">Sara Quiros</span>, profesional en belleza con más de seis años de experiencia en maquillaje, colorimetría y formación.
            </p>
            
            <p className="text-xl text-white/90 leading-relaxed" style={{ fontFamily: 'Times New Roman, serif' }}>
              Soy una mujer soñadora y apasionada que trabaja con el propósito de inspirar a otras mujeres a descubrir su estilo y brillar con autenticidad.
            </p>
            
            <div className="bg-black/50 border-2 border-[#D4AF37] rounded-lg p-6">
              <p className="text-2xl text-[#D4AF37] text-center italic" style={{ fontFamily: 'Brittany, cursive' }}>
                "La belleza es confianza y amor propio"
              </p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/50688888888', '_blank')}
                className="bg-[#D4AF37] text-black px-8 py-3 rounded-full hover:bg-white transition-all font-bold"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                Contáctame
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
