import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-black border-2 border-[#D4AF37] rounded-lg p-6 hover:shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-[#D4AF37] mb-3" style={{ fontFamily: 'Brittany, cursive' }}>
        {title}
      </h3>
      <p className="text-white/90 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
        {isExpanded ? description : `${description.substring(0, 100)}...`}
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#D4AF37] hover:text-white transition-colors"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </button>
        <button
          onClick={() => window.open('https://wa.me/50688888888', '_blank')}
          className="bg-[#D4AF37] text-black px-6 py-2 rounded-full hover:bg-white transition-all font-semibold"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          Reservar
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
