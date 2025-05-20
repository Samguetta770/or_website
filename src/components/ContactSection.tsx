import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Map from './Map';

function ContactSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-rose/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title" data-aos="fade-up">צרי קשר</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div 
            className="card card-hover"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold mb-6">פרטי הקליניקה</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">כתובת</h4>
                  <p>דוד בן גוריון 11, בני ברק</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">טלפון</h4>
                  <p>050-2504545</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">אימייל</h4>
                  <p>dr0502504545@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">שעות פעילות</h4>
                  <p>א'-ה' 9:00–19:00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="https://wa.me/972502504545"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                צרי קשר בוואטסאפ
              </a>
            </div>
          </div>
          
          <div 
            className="rounded-xl overflow-hidden shadow-lg"
            data-aos="fade-left"
          >
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;