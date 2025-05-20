import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

function Success() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-rose/30">
      <div className="max-w-md w-full mx-4">
        <div className="card text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-2xl font-bold mb-4">תודה על הרכישה!</h1>
          <p className="text-gray-600 mb-6">
            ההזמנה שלך התקבלה בהצלחה. ניצור איתך קשר בהקדם לתיאום המשלוח.
          </p>
          <p className="text-sm text-gray-500">
            מועברת לדף הבית בעוד {countdown} שניות...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;