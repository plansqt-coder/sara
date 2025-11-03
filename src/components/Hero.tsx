import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/69011896dba3d97b4483e291_1761679601720_67217305.webp)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <img 
            src="https://d64gsuwffb70l.cloudfront.net/688f79fd386758b8b20a69d2_1761679446379_f29ebf63.png"
            alt="Sara Quiros"
            className="w-48 h-48 rounded-full mx-auto border-4 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/50 object-cover"
          />
        </div>
        
        <h1
  className="text-6xl md:text-8xl font-bold text-[#D4AF37] mb-4"
  style={{ fontFamily: '"Tinos","Times New Roman",Times,serif' }}
>
  Sara Quiros
</h1>

        <p className="text-3xl md:text-4xl text-white mb-6" style={{ fontFamily: 'Brittany, cursive' }}>
          Makeup y Beauty
        </p>
        
        <h2 className="text-3xl md:text-5xl text-white mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
          💖 Belleza con propósito,<br/>creada para inspirar
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'Times New Roman, serif' }}>
          Maquillaje profesional, clases personalizadas y productos que realzan tu belleza
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('servicios')}
            className="bg-[#D4AF37] text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-white transition-all transform hover:scale-105"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Reserva tu Cita
          </button>
          <button
            onClick={() => scrollTo('formacion')}
            className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#D4AF37] hover:text-black transition-all"
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            Ver Cursos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
