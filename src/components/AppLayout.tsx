import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Footer from './Footer';
import ServiceCard from './ServiceCard';
import CourseCard from './CourseCard';
import ProductCard from './ProductCard';
import GallerySection from './GallerySection';
import ContactForm from './ContactForm';
import AboutSection from './AboutSection';
import SectionWrapper from './SectionWrapper';
import { galleryImages, kits, products } from '../data/siteData';


const AppLayout: React.FC = () => {
  const services = [
    { title: 'Maquillaje Social', icon: '💄', description: 'Ideal para eventos, celebraciones y reuniones especiales. Resalta tu belleza natural con armonía y un acabado impecable que perdura todo el día. Técnicas profesionales adaptadas a tu tipo de piel y estilo personal.' },
    { title: 'Peinados Sociales', icon: '✨', description: 'Estilos personalizados que complementan tu maquillaje y reflejan elegancia, frescura y seguridad. Desde recogidos sofisticados hasta ondas naturales, cada peinado está diseñado para realzar tu belleza única.' },
    { title: 'Quinceañera', icon: '👑', description: 'Una experiencia que combina juventud, estilo y dulzura. Incluye piel blindada, garantizando un acabado luminoso y duradero para que brilles en tu día especial. Maquillaje y peinado que capturan la magia de tus 15 años.' },
    { title: 'Novia', icon: '💍', description: 'Diseñado para reflejar amor, perfección y emoción. Con piel blindada, resistente a lágrimas y abrazos, para que tu look se mantenga impecable durante toda la boda. El día más importante de tu vida merece perfección absoluta.' },
    { title: 'Sesiones de Fotos', icon: '📸', description: 'Maquillaje y peinado profesional adaptado a la cámara. Incluye acompañamiento, retoques y apoyo detrás de cámaras para lograr contenido natural y auténtico. Perfecto para book, redes sociales o proyectos profesionales.' },
    { title: 'Colorimetría y Cuidado Capilar', icon: '🎨', description: 'Diagnóstico de tono y color de cabello según tu piel. Aplicación de color, tratamientos, hidrataciones, corte de cabello y alisados. Asesoría en imagen y cuidado capilar personalizado para mantener tu cabello saludable y radiante.' }
  ];

  const courses = [
    {
      title: 'Curso de Automaquillaje Presencial',
      duration: '1 día - 5 horas',
      description: 'Te guiaré paso a paso a resaltar tu belleza con técnicas profesionales adaptadas a tu tipo de piel, rostro y estilo.',
      techniques: ['Teoría – uso de productos', 'Preparación de la piel', 'Mezcla de bases', 'Contornos', 'Maquillaje de cejas', 'Maquillaje de ojos (2 técnicas: Ahumado, Cut crease, Semi cut crease, Smoking, Foxy)']
    },
    {
      title: 'Curso de Maquillaje Profesional',
      duration: '2 días - 4 horas cada día',
      description: 'Formación completa para quienes desean dedicarse al mundo del maquillaje. Aprende técnicas avanzadas, colorimetría y tendencias, con acompañamiento personalizado.',
      techniques: ['Teoría – uso de productos', 'Diferenciación de rostros y pieles', 'Como asesorar a tus clientas', 'Uso de redes sociales', 'Preparación de la piel', 'Mezcla de bases', 'Contornos', 'Maquillaje de cejas', 'Maquillaje de ojos (2 técnicas a elegir)']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>

      <AboutSection />
      
      <SectionWrapper 
        id="servicios" 
        title="💄 Servicios" 
        subtitle="Descubre nuestros servicios profesionales diseñados para realzar tu belleza natural"
        bgClass="bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper 
        id="formacion" 
        title="🎓 Formación" 
        subtitle="Aprende, avanza y destaca con nosotros"
        bgClass="bg-black"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper 
        id="productos" 
        title="✨ Productos" 
        subtitle="Kits de maquillaje personalizados con asesoría y clase virtual incluida"
        bgClass="bg-gradient-to-b from-black to-gray-900"
      >
        <h3 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center" style={{ fontFamily: 'Brittany, cursive' }}>
          Kits Personalizados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {kits.map((kit, idx) => (
            <ProductCard key={idx} {...kit} isKit={true} />
          ))}
        </div>
        
        <h3 className="text-3xl font-bold text-[#D4AF37] mb-8 text-center" style={{ fontFamily: 'Brittany, cursive' }}>
          Productos Individuales
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </SectionWrapper>
      
      <SectionWrapper 
        id="galeria" 
        title="📸 Galería" 
        subtitle="Explora nuestro trabajo y déjate inspirar"
        bgClass="bg-black"
      >
        <GallerySection images={galleryImages} />
      </SectionWrapper>
      
      <SectionWrapper 
        id="contacto" 
        title="💌 Contacto" 
        subtitle="¿Lista para transformar tu belleza? Contáctame"
        bgClass="bg-gradient-to-b from-gray-900 to-black"
      >
        <ContactForm />
      </SectionWrapper>
      
      <Footer />
    </div>
  );
};

export default AppLayout;
