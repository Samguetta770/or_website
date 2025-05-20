import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'אלינור',
    date: '20.1.2015',
    text: 'לכבוד ד"ר חנה שמואלביץ היקרה, שלום וברכה. ברצוני להודות לך על הטיפול המסור והמקצועי שלאורך הדרך. שמחה להכיר ולהמליץ, יחסית נעימה ומסור והסבלנות את כולם עושה בחיוך ובמקצועיות, ובעיקר כי הגעתי לתוצאות, הטיפולים שלך הם בעיניים שלי מוצלחות. תמשיכי כך גם הלאה.',
    image: '/remerciement_1.jpeg'
  },
  {
    id: 2,
    name: 'משפחת רוזנברג',
    text: 'לד"ר חנה המיוחדת! לעתיק מגיעה הערכה להתעקשות הפרטים הקטנים להגיע עד אליך ולעשות שירות מיוחד! תודה על כל הלב והנשמה שאת משקיעה בי את שליחה טובה שמביאה שמחה ובריאות לכל אחת ואחת! וכל נתינה מתוך לב אציל משפיעה בריאות',
    image: '/remerciement_2.jpeg'
  }
];

function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-rose/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center" data-aos="fade-up">חוות דעת מטופלות</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="card decorative-border relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute -top-6 right-8">
                <div className="bg-primary/20 w-12 h-12 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary" />
                </div>
              </div>
              <img 
                src={testimonial.image}
                alt={`המלצה מ${testimonial.name}`}
                className="w-full h-auto rounded-lg mb-6 shadow-lg"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                {testimonial.date && (
                  <p className="text-gray-500 text-sm mb-4">{testimonial.date}</p>
                )}
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;