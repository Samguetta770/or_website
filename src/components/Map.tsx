import React from 'react';

function Map() {
  return (
    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg" data-aos="fade-up">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.5889339317095!2d34.83110!3d32.08430!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b70a5813505%3A0x1d0987e2a7704b3!2sHayarden%2037%2C%20Bnei%20Brak!5e0!3m2!1sen!2sil!4v1647870001234!5m2!1sen!2sil"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="מיקום הקליניקה"
      />
    </div>
  );
}

export default Map;