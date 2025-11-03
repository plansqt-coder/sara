import React, { useState } from 'react';

interface CourseCardProps {
  title: string;
  duration: string;
  description: string;
  techniques: string[];
  price?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, duration, description, techniques, price }) => {
  const [showTechniques, setShowTechniques] = useState(false);

  return (
    <div className="bg-gradient-to-br from-black to-gray-900 border-2 border-[#D4AF37] rounded-xl p-8 hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all">
      <h3 className="text-3xl font-bold text-[#D4AF37] mb-3" style={{ fontFamily: 'Brittany, cursive' }}>
        {title}
      </h3>
      <p className="text-white/80 text-lg mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
        ⏱️ {duration}
      </p>
      <p className="text-white/90 mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
        {description}
      </p>
      <button
        onClick={() => setShowTechniques(!showTechniques)}
        className="text-[#D4AF37] mb-3 hover:text-white transition-colors"
        style={{ fontFamily: 'Times New Roman, serif' }}
      >
        {showTechniques ? '▼ Ocultar técnicas' : '▶ Ver técnicas incluidas'}
      </button>
      {showTechniques && (
        <ul className="text-white/80 mb-4 space-y-1" style={{ fontFamily: 'Times New Roman, serif' }}>
          {techniques.map((tech, idx) => (
            <li key={idx}>✨ {tech}</li>
          ))}
        </ul>
      )}
      <button
        onClick={() => window.open('https://wa.me/50688888888', '_blank')}
        className="w-full bg-[#D4AF37] text-black py-3 rounded-full hover:bg-white transition-all font-bold text-lg"
        style={{ fontFamily: 'Times New Roman, serif' }}
      >
        Inscribirme Ahora
      </button>
    </div>
  );
};

export default CourseCard;
