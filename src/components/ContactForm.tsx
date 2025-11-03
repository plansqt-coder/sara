import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      const whatsappMsg = `Hola Sara! Soy ${formData.name}. ${formData.message}. Email: ${formData.email}, Tel: ${formData.phone}`;
      window.open(`https://wa.me/50688888888?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input
        type="text"
        placeholder="Nombre completo"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
        className="w-full bg-black border-2 border-[#D4AF37] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white"
        style={{ fontFamily: 'Times New Roman, serif' }}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        required
        className="w-full bg-black border-2 border-[#D4AF37] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white"
        style={{ fontFamily: 'Times New Roman, serif' }}
      />
      <input
        type="tel"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        className="w-full bg-black border-2 border-[#D4AF37] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white"
        style={{ fontFamily: 'Times New Roman, serif' }}
      />
      <textarea
        placeholder="Mensaje"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        required
        rows={4}
        className="w-full bg-black border-2 border-[#D4AF37] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white"
        style={{ fontFamily: 'Times New Roman, serif' }}
      />
      <button
        type="submit"
        className="w-full bg-[#D4AF37] text-black py-3 rounded-full hover:bg-white transition-all font-bold text-lg"
        style={{ fontFamily: 'Times New Roman, serif' }}
      >
        Enviar Mensaje
      </button>
      {submitted && (
        <p className="text-[#D4AF37] text-center" style={{ fontFamily: 'Times New Roman, serif' }}>
          ✓ Mensaje enviado correctamente
        </p>
      )}
    </form>
  );
};

export default ContactForm;
