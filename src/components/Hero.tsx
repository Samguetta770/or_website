import { Sparkles } from 'lucide-react';

function Hero() {
  return (
    <div className="relative hero-overlay">
      <div className="relative">
        <img
          src="/orphoto.jpg"
          alt="קליניקה אסתטית"
          className="w-auto h-[80vh] object-cover mx-auto"
/>
        <div className="absolute inset-0 flex items-center justify-center">
      </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center hero-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6" data-aos="fade-up">
            היופי שלך מתחיל כאן
          </h1>
          <p className="text-xl sm:text-2xl text-gray-800 mb-8 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            ברוכה הבאה לקליניקה הפרטית של ד"ר חנה שמואלביץ – 
            המקום שבו אסתטיקה רפואית פוגשת מקצועיות ואיכות ללא פשרות
          </p>
          <div className="flex gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
            <a href="#contact" className="btn-primary">
              קביעת תור
            </a>
            <a href="#treatments" className="text-gray-700 hover:text-primary px-6 py-3 rounded-lg border border-gray-300 hover:border-primary transition-all duration-300">
              הטיפולים שלנו
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;