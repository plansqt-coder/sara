import React, { useState } from 'react';

interface GallerySectionProps {
  images: { url: string; category: string; alt: string }[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const [filter, setFilter] = useState('Todos');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const categories = ['Todos', 'Social', 'Quinceañera', 'Novia', 'Sesiones'];
  const filtered = filter === 'Todos' ? images : images.filter(img => img.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full transition-all ${
              filter === cat 
                ? 'bg-[#D4AF37] text-black' 
                : 'bg-black border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
            }`}
            style={{ fontFamily: 'Times New Roman, serif' }}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setLightbox(img.url)}
            className="relative overflow-hidden rounded-lg border-2 border-[#D4AF37] cursor-pointer hover:shadow-2xl hover:shadow-[#D4AF37]/30 transition-all"
          >
            <img src={img.url} alt={img.alt} className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
      {lightbox && (
        <div 
          onClick={() => setLightbox(null)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        >
          <img src={lightbox} alt="Gallery" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default GallerySection;
