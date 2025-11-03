import React, { useState } from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  isKit?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, isKit = false }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className="bg-black border-2 border-[#D4AF37] rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all transform hover:scale-105"
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        {showDetails && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center p-4 animate-fadeIn">
            <p className="text-white text-center" style={{ fontFamily: 'Times New Roman, serif' }}>
              {description}
            </p>
          </div>
        )}
      </div>
      <div className="p-4">
        <h4 className="text-xl font-bold text-[#D4AF37] mb-2" style={{ fontFamily: 'Brittany, cursive' }}>
          {name}
        </h4>
        <button
          onClick={() => window.open('https://wa.me/50688888888', '_blank')}
          className="w-full bg-[#D4AF37] text-black py-2 rounded-full hover:bg-white transition-all font-semibold"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          {isKit ? 'Reservar Kit' : 'Consultar'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
