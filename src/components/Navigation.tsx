import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const menuItems = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Sobre Mí', id: 'about' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Formación', id: 'formacion' },
    { label: 'Productos', id: 'productos' },
    { label: 'Galería', id: 'galeria' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
       <h1
  className="text-3xl font-bold text-[#D4AF37] cursor-pointer"
  style={{ fontFamily: '"Tinos", "Times New Roman", Times, serif' }}
  onClick={() => scrollTo('hero')}
>
  Sara Quiros
</h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#D4AF37] text-3xl"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        
        <div className="hidden md:flex gap-6">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-white hover:text-[#D4AF37] transition-colors text-lg"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-[#D4AF37]">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left px-4 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
              style={{ fontFamily: 'Times New Roman, serif' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
