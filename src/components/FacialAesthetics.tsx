import React from 'react';
import { Sparkles, Clock, Heart, Star, ArrowLeft, Calendar, Phone } from 'lucide-react';

const treatments = [
  {
    id: 1,
    name: 'הזרקת חומרי מילוי',
    description: 'טיפול מתקדם למילוי קמטים והחזרת הנפח הטבעי לפנים',
    benefits: [
      'תוצאות טבעיות ומיידיות',
      'שיפור מרקם העור',
      'החזרת נפח ורעננות',
      'ללא זמן החלמה'
    ],
    image: '/image_10.jpeg'
  },
  {
    id: 2,
    name: 'בוטוקס',
    description: 'הצערת מראה הפנים והפחתת קמטי הבעה באופן טבעי ומדויק',
    benefits: [
      'הפחתת קמטים וקמטוטים',
      'מראה רענן וצעיר יותר',
      'טיפול מהיר ויעיל',
      'תוצאות נראות תוך 3-14 ימים'
    ],
    image: '/image_12.jpeg'
  },
  {
    id: 3,
    name: 'מזותרפיה לפנים',
    description: 'טיפול להתחדשות העור והענקת זוהר טבעי באמצעות ויטמינים וחומרים מזינים',
    benefits: [
      'שיפור מרקם העור',
      'הגברת ייצור קולגן',
      'הענקת לחות ורעננות',
      'טיפול ללא זמן החלמה'
    ],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

function FacialAesthetics() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative hero-overlay">
        <img
  src="/image_13.jpeg"
  alt="טיפולי פנים אסתטיים"
  className="w-auto h-[80vh] object-cover mx-auto"
/>
        <div className="absolute inset-0 flex items-center justify-center hero-content">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-aos="fade-up">
              הדרך שלך ליופי טבעי ומושלם
            </h1>
            <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
              אנו מזמינות אותך לייעוץ חינם עם ד"ר חנה שמואלביץ, מומחית ברפואה אסתטית,
              לגלות את הדרך המושלמת להשיג את התוצאות שתמיד חלמת עליהן.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="400">
              <a href="#book-consultation" className="btn-primary flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" />
                קביעת ייעוץ חינם
              </a>
              <a href="#treatments" className="text-gray-700 hover:text-primary px-6 py-3 rounded-full border-2 border-gray-300 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2">
                גלי עוד
                <ArrowLeft className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-white to-rose/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title" data-aos="fade-up">למה לבחור בנו?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card card-hover text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">מומחיות ומקצועיות</h3>
              <p className="text-gray-600">
                ד"ר חנה שמואלביץ, בעלת ניסיון רב בתחום הרפואה האסתטית, מתמחה בטיפולים מתקדמים ובטוחים
              </p>
            </div>
            <div className="card card-hover text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">תוצאות מיידיות</h3>
              <p className="text-gray-600">
                טיפולים מתקדמים המעניקים תוצאות מיידיות וטבעיות, בהתאמה אישית לכל מטופלת
              </p>
            </div>
            <div className="card card-hover text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">יחס אישי ומסור</h3>
              <p className="text-gray-600">
                אווירה חמה ומקצועית, ליווי אישי לאורך כל הדרך והקשבה מלאה לצרכים שלך
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title" data-aos="fade-up">הטיפולים שלנו</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={treatment.id} 
                className="card card-hover overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative h-48 -mx-8 -mt-8 mb-6">
                  <img 
                    src={treatment.image} 
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{treatment.name}</h3>
                <p className="text-gray-600 mb-6">{treatment.description}</p>
                <div className="space-y-3">
                  {treatment.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <a 
                    href="#book-consultation" 
                    className="btn-primary w-full text-center inline-block"
                  >
                    קביעת ייעוץ חינם
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section id="book-consultation" className="py-16 gradient-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="card decorative-border" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6">ייעוץ חינם - הצעד הראשון ליופי שלך</h2>
            <p className="text-xl text-gray-600 mb-8">
              מוזמנת לפגישת ייעוץ חינם עם ד"ר חנה שמואלביץ. נבין יחד את הצרכים שלך ונבנה תכנית טיפול מותאמת אישית.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/972502504545" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                קביעת ייעוץ בוואטסאפ
              </a>
              <a 
                href="tel:0502504545" 
                className="text-gray-700 hover:text-primary px-6 py-3 rounded-full border-2 border-gray-300 hover:border-primary transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                התקשרי עכשיו
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FacialAesthetics;