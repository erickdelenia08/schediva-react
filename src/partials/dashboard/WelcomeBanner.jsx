import React, { useEffect } from 'react';
import { useState } from 'react';

const getTime = () => {
  const temp = Number(new Date().getHours());
  if (temp < 11) {
    return 'Pagi'
  }
  else if (temp >= 11 && temp <= 14) {
    return 'Siang'
  }
  else if (temp > 14 && temp < 18) {
    return 'Sore'
  }
  return 'Malam'

}

function WelcomeBanner() {
  const [time, setTime] = useState('');
  useEffect(() => {
    setTime(getTime());
  }, [])
  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-lg overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Selamat {time}, bro. 👋</h1>
        <p className="dark:text-indigo-200">sudah makan belum?</p>
      </div>
    </div>
  );
}
export default WelcomeBanner;
