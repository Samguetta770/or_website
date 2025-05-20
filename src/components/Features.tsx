import React from 'react';
import { Shield, Heart, Star, Users } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Shield,
    title: 'טיפולים בטוחים ויעילים',
    description: 'טיפולים מתקדמים על ידי רופאה מוסמכת ומנוסה'
  },
  {
    id: 2,
    icon: Heart,
    title: 'התאמה אישית מלאה',
    description: 'כל טיפול מותאם באופן מדויק לצרכים האישיים של כל מטופלת'
  },
  {
    id: 3,
    icon: Star,
    title: 'אווירה רגועה ודיסקרטית',
    description: 'סביבה מקצועית, נעימה ומכבדת לכל המטופלות'
  },
  {
    id: 4,
    icon: Users,
    title: 'מאות לקוחות מרוצות',
    description: 'צעירות, אמהות, כלות ונשים בגיל המעבר נהנות מהטיפולים שלנו'
  }
];

function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center" data-aos="fade-up">למה לבחור בנו?</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="card text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;