import React from 'react';

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t-2 border-[#D4AF37] py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-3xl font-bold text-[#D4AF37] mb-4" style={{ fontFamily: 'Brittany, cursive' }}>
            Sara Quiros
          </h3>
          <p className="text-white/80" style={{ fontFamily: 'Times New Roman, serif' }}>
            Belleza con propósito, creada para inspirar
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-[#D4AF37] mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
            Navegación
          </h4>
          <div className="space-y-2">
            {['Inicio', 'Servicios', 'Formación', 'Productos', 'Galería'].map(item => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="block text-white/80 hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-[#D4AF37] mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
            Servicios
          </h4>
          <div className="space-y-2 text-white/80" style={{ fontFamily: 'Times New Roman, serif' }}>
            <p>Maquillaje Social</p>
            <p>Peinados</p>
            <p>Quinceañera</p>
            <p>Novia</p>
            <p>Sesiones Fotos</p>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold text-[#D4AF37] mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
            Contacto
          </h4>
          <div className="space-y-3">
            <a
              href="https://wa.me/50688888888"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-[#D4AF37] transition-colors"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              📱 WhatsApp
            </a>
            <a
              href="https://instagram.com/saraquiros"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-[#D4AF37] transition-colors"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-[#D4AF37]/30 text-center">
        <p className="text-white/60" style={{ fontFamily: 'Times New Roman, serif' }}>
          © 2025 Sara Quiros Makeup y Beauty. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
