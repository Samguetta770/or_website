import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Zap, Microscope, Shield, Calendar } from 'lucide-react';

const equipment = [
  {
    id: 1,
    name: 'אולטרפורמר - מיצוק והצערת העור',
    description: 'טיפול חדשני להצערת העור ומיצוק באמצעות גלי רדיו',
    benefits: [
      'מיצוק העור',
      'הפחתת קמטים',
      'עידוד ייצור קולגן',
      'שיפור מרקם העור'
    ],
    image: '/image_15.jpeg'
  },
  {
    id: 2,
    name: 'טיקסל - התחדשות עור מתקדמת',
    description: 'טכנולוגיה מתקדמת להחדרת חומרים פעילים לעומק העור',
    benefits: [
      'החדרת חומרים פעילים',
      'שיפור זרימת הדם',
      'הגברת ייצור קולגן',
      'תוצאות ארוכות טווח'
    ],
    image: '/image_17.jpeg'
  },
  {
    id: 3,
    name: 'פלזמה - טיפול חדשני לפנים ולגוף',
    description: 'טיפולי פלזמה מתקדמים להצערת העור והתחדשות תאים בפנים ובגוף',
    benefits: [
      'הפחתת קמטים',
      'טיפול באזור העיניים והריסים',
      'טיפולי גוף מתקדמים',
      'חידוש תאי עור'
    ],
    image: '/image_16.jpeg'
  }
];

function MedicalEquipment() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-overlay">
  <img
    src="/image_7.jpeg"
    alt="מכשור רפואי מתקדם"
    className="w-auto h-[80vh] object-cover mx-auto"
/>
  <div className="absolute inset-0 flex items-center justify-center hero-content">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              טכנולוגיה מתקדמת לתוצאות מושלמות
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              בקליניקה שלנו משתמשים במכשור הרפואי המתקדם ביותר, המאושר על ידי ה-FDA,
              להשגת תוצאות מיטביות ובטוחות עבור המטופלות שלנו.
            </p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl" data-aos="fade-right">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <h2 className="text-3xl font-bold">הטכנולוגיה שלנו בפעולה</h2>
              <p className="text-gray-600 text-lg">
                צפי בסרטון להכרת המכשור המתקדם בקליניקה שלנו והטיפולים שאנו מציעים.
                כל הציוד שלנו מאושר FDA ועומד בסטנדרטים הגבוהים ביותר של בטיחות ויעילות.
              </p>
              <a 
                href="https://wa.me/972502504545"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                קביעת ייעוץ חינם
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-b from-white to-rose/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">בטיחות מקסימלית</h3>
              <p className="text-gray-600">
                כל המכשירים מאושרים על ידי ה-FDA ועומדים בתקנים המחמירים ביותר
              </p>
            </div>
            <div className="card card-hover text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">טכנולוגיה מתקדמת</h3>
              <p className="text-gray-600">
                שימוש במכשור החדיש ביותר להשגת תוצאות מיטביות
              </p>
            </div>
            <div className="card card-hover text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">דיוק מרבי</h3>
              <p className="text-gray-600">
                טיפולים מדויקים ומותאמים אישית לכל מטופלת
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">המכשור המתקדם שלנו</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div 
                key={item.id} 
                className="card card-hover overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.name}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <div className="space-y-3">
                  {item.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a 
                    href="https://wa.me/972502504545"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    קביעת תור
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section id="consultation" className="py-16 gradient-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card decorative-border" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">גלי את הטיפול המתאים לך</h2>
            <p className="text-xl text-gray-600 mb-8">
              בפגישת ייעוץ אישית נתאים עבורך את הטיפול המדויק בעזרת הטכנולוגיה המתקדמת ביותר
            </p>
            <a 
              href="https://wa.me/972502504545" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              לקביעת ייעוץ חינם
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MedicalEquipment;