import React, { useEffect, useState } from "react";

function Sale() {
  const [time, setTime] = useState({
    days: 5,
    hours: 23, // ✅ 0–23 range
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
    <section className="bg-[#E82600] text-white py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="assets/images/saleimage.png"
            alt="Sale"
            className="max-h-80 md:max-h-96 object-contain"
          />
        </div>

        {/* Timer + Text Section */}
        <div className="md:w-1/2 flex flex-col items-center text-center">
          {/* Countdown Timer */}
          <div className="bg-white rounded-lg shadow-md px-6 sm:px-12 md:px-16 lg:px-24 py-6 sm:py-8 flex gap-4 sm:gap-6">
            <div className="text-center">
              <div className="bg-[#A41B00] text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded">
                {String(time.days).padStart(2, "0")}
              </div>
              <span className="text-gray-600 text-xs sm:text-sm">Days</span>
            </div>
            <div className="text-center">
              <div className="bg-[#A41B00] text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded">
                {String(time.hours).padStart(2, "0")}
              </div>
              <span className="text-gray-600 text-xs sm:text-sm">Hours</span>
            </div>
            <div className="text-center">
              <div className="bg-[#A41B00] text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded">
                {String(time.minutes).padStart(2, "0")}
              </div>
              <span className="text-gray-600 text-xs sm:text-sm">Minutes</span>
            </div>
            <div className="text-center">
              <div className="bg-[#A41B00] text-white text-xl sm:text-2xl font-bold px-4 py-2 rounded">
                {String(time.seconds).padStart(2, "0")}
              </div>
              <span className="text-gray-600 text-xs sm:text-sm">Seconds</span>
            </div>
          </div>

          {/* Text under timer */}
          <p className="mt-4 text-base sm:text-lg font-medium text-center">
            For limited time in Flash Sale
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sale;
