import React from 'react';
import { Heart, Flower, Leaf, Calendar, ShieldCheck } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'שמירת הריון',
    description: 'טיפול מקיף ומעקב מקצועי לשמירה על בריאות האם והעובר',
    benefits: [
      'מעקב רפואי צמוד',
      'בדיקות תקופתיות',
      'ייעוץ תזונתי',
      'טיפול בתופעות לוואי'
    ],
    image: '/image_14.jpeg'
  },
  {
    id: 2,
    name: 'מעקב הריון',
    description: 'ליווי מקצועי ותומך לאורך כל תקופת ההיריון',
    benefits: [
      'בדיקות שגרתיות',
      'מעקב התפתחות העובר',
      'הכנה ללידה',
      'ייעוץ והדרכה'
    ],
    image: '/Image_18.jpeg'
  },
  {
    id: 3,
    name: 'גינקולוגיה',
    description: 'טיפול מקיף בבריאות האישה בכל הגילאים',
    benefits: [
      'בדיקות תקופתיות',
      'אבחון וטיפול',
      'מניעה וייעוץ',
      'טיפול בבעיות שכיחות'
    ],
    image: '/Image_19.jpeg'
  },
  {
    id: 4,
    name: 'גינקולוגיה רפואית',
    description: 'טיפול מתקדם בבעיות גינקולוגיות מורכבות',
    benefits: [
      'אבחון מדויק',
      'טיפולים מתקדמים',
      'מעקב רפואי',
      'פתרונות מותאמים אישית'
    ],
    image: '/Image_20.jpeg'
  }
];

function WomensHealth() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-overlay">
        <img
          src="/Image_19.jpeg"
          alt="בריאות נשים"
          className="w-auto h-[80vh] object-cover mx-auto"
/>
        <div className="absolute inset-0 flex items-center justify-center hero-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              בריאות האישה בגישה הוליסטית
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              אנו מאמינים בטיפול מקיף המשלב בין בריאות פיזית, נפשית ואסתטית,
              המותאם במיוחד לצרכים הייחודיים של כל אישה.
            </p>
            <a 
              href="#consultation" 
              className="btn-primary inline-flex items-center gap-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Calendar className="w-5 h-5" />
              קביעת ייעוץ
            </a>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gradient-to-b from-white to-rose/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title" data-aos="fade-up">הגישה שלנו</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">טיפול אישי</h3>
              <p className="text-gray-600">
                התאמה מדויקת של הטיפול לצרכים האישיים והייחודיים שלך
              </p>
            </div>
            <div className="card card-hover text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flower className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">גישה הוליסטית</h3>
              <p className="text-gray-600">
                שילוב של טיפולים רפואיים ואסתטיים לתוצאות מיטביות
              </p>
            </div>
            <div className="card card-hover text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">איכות חיים</h3>
              <p className="text-gray-600">
                שיפור משמעותי באיכות החיים בכל גיל ובכל שלב
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title" data-aos="fade-up">השירותים שלנו</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="card card-hover overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 -mx-8 -mt-8 mb-6">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-primary" />
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
            <h2 className="text-3xl font-bold mb-6">נשמח ללוות אותך בדרך לבריאות מיטבית</h2>
            <p className="text-xl text-gray-600 mb-8">
              בואי לפגישת ייעוץ אישית עם ד"ר חנה שמואלביץ לבניית תכנית טיפול מותאמת במיוחד עבורך
            </p>
            <a 
              href="https://wa.me/972502504545" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              לקביעת ייעוץ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WomensHealth;