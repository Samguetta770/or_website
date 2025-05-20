import React from 'react';
import { Calendar } from 'lucide-react';

const treatments = [
  {
    id: 1,
    name: 'עיצוב שפתיים',
    description: 'עיצוב שפתיים עדין להשגת מראה הרמוני ומושלם',
    image: '/image_2.jpeg'
  },
  {
    id: 2,
    name: 'בוטוקס',
    description: 'טיפול יעיל להפחתת קמטים והצערת מראה העור',
    image: '/image_3.jpeg'
  },
  {
    id: 3,
    name: 'סקין בוסטר',
    description: 'טיפול מתקדם להענקת לחות עמוקה וזוהר טבעי לעור',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'מילוי שקעים',
    description: 'פתרון מקצועי למראה עייף ושקעים מתחת לעיניים',
    image: '/image_4.jpeg'
  },
  {
    id: 5,
    name: 'פיסול קו לסת',
    description: 'עיצוב וחידוד קו הלסת ליצירת מראה מוגדר ואסתטי',
    image: '/image_5.jpeg'
  },
  {
    id: 6,
    name: 'טיפול פלזמה',
    description: 'טיפול חדשני להתחדשות והצערת המראה',
    image: '/image_6.jpeg'
  },
  {
    id: 7,
    name: 'חבילת אנטי-אייג\'ינג',
    description: 'שילוב של בוטוקס, סקין בוסטר ופיסול לתוצאות מקסימליות',
    image: '/image_11.jpeg'
  }
];

function Treatments() {
  return (
    <section id="treatments" className="py-16 bg-gradient-to-b from-white to-rose/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center" data-aos="fade-up">הטיפולים שלנו</h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <div 
              key={treatment.id} 
              className="card overflow-hidden"
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
              <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
              <p className="text-gray-600 mb-6">{treatment.description}</p>
              <a 
                href="https://wa.me/972502504545"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-primary w-full text-center inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                הזמיני תור
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Treatments