import React, { useEffect, useState } from "react";

function Sale() {
  // Countdown state
  const [time, setTime] = useState({
    days: 5,
    hours: 25,
    minutes: 45,
    seconds: 59,
  });

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-red-600 text-white py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        <div className="flex justify-center md:w-1/4">
          <img
            src="https://images.pexels.com/photos/5868730/pexels-photo-5868730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Sale"
            className="max-h-96 object-contain"
          />
        </div>

        <div className="md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0">
          <div className="bg-white rounded-lg shadow-md px-24 py-10 flex gap-4">
            <div className="text-center">
              <div className="bg-red-700 text-white text-2xl font-bold px-4 py-2 rounded">
                {String(time.days).padStart(2, "0")}
              </div>
              <span className="text-gray-600 text-sm">Days</span>
            </div>
            <div className="text-center">
              <div className="bg-red-700 text-white text-2xl font-bold px-4 py-2 rounded">
                {String(time.hours).padStart(2, "0")}
              </div>
              <span className="text-gray-600 text-sm">Hours</span>
            </div>
            <div className="text-center">
              <div className="bg-red-700 text-white text-2xl font-bold px-4 py-2 rounded">
                {String(time.minutes).padStart(2, "0")}
              </div>
              <span className="text-gray-600 text-sm">Minutes</span>
            </div>
            <div className="text-center">
              <div className="bg-red-700 text-white text-2xl font-bold px-4 py-2 rounded">
                {String(time.seconds).padStart(2, "0")}
              </div>
              <span className="text-gray-600 text-sm">Seconds</span>
            </div>
          </div>
            <p className="mt-4 text-lg font-medium text-start w-full">
                For limited time in Flash Sale
            </p>
        </div>
      </div>
    </section>
  );
}

export default Sale;
