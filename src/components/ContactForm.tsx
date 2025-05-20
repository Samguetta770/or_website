import React from 'react';
import { Phone, Mail, Clock, MapPin, Send, Heart } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
  treatment: string;
};

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  const treatments = [
    'עיצוב שפתיים',
    'בוטוקס',
    'סקין בוסטר',
    'מילוי שקעים',
    'פיסול קו לסת',
    'טיפול פלזמה',
    'חבילת אנטי-אייג\'ינג',
    'אחר'
  ];

  return (
    <section id="contact" className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="section-title">בואי נתחיל את המסע שלך</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            מוזמנת ליצור קשר לקביעת פגישת ייעוץ אישית. נשמח להקשיב, להבין את הצרכים שלך ולהתאים עבורך את הטיפול המושלם.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div 
            className="card decorative-border"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              <span>השאירי פרטים</span>
            </h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="form-label">שם מלא</label>
                <input
                  {...register('name', { required: 'שדה חובה' })}
                  className="input-field"
                  placeholder="השם שלך"
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
              </div>
              
              <div>
                <label className="form-label">טלפון</label>
                <input
                  {...register('phone', { 
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'מספר טלפון לא תקין'
                    }
                  })}
                  className="input-field"
                  placeholder="050-000-0000"
                />
                {errors.phone && <p className="error-message">{errors.phone.message}</p>}
              </div>
              
              <div>
                <label className="form-label">אימייל</label>
                <input
                  {...register('email', {
                    required: 'שדה חובה',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'כתובת אימייל לא תקינה'
                    }
                  })}
                  className="input-field"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </div>

              <div>
                <label className="form-label">סוג טיפול מבוקש</label>
                <select
                  {...register('treatment')}
                  className="input-field"
                  defaultValue=""
                >
                  <option value="" disabled>בחרי טיפול</option>
                  {treatments.map((treatment) => (
                    <option key={treatment} value={treatment}>
                      {treatment}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="form-label">תוכן ההודעה</label>
                <textarea
                  {...register('message')}
                  className="input-field"
                  rows={4}
                  placeholder="ספרי לנו במה נוכל לעזור..."
                />
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full flex items-center justify-center gap-2 mt-8"
              >
                <Send className="w-4 h-4" />
                שליחת הודעה
              </button>
            </form>
          </div>
          
          <div className="space-y-8" data-aos="fade-left">
            <div className="card card-hover bg-white/80 backdrop-blur">
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
            </div>
            
            <div className="card card-hover bg-white/80 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-6">שליחת הודעת WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                מעדיפה לדבר בוואטסאפ? אנחנו זמינות גם שם!
              </p>
              <a
                href="https://wa.me/972502504545"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                פתיחת WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;