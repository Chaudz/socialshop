"use client";
import React, { useEffect, useState } from "react";

const getTimeLeft = (endTime: Date) => {
  const now = new Date();
  const diff = endTime.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const FlashSaleBanner = ({ endTime }: { endTime: Date }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(endTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div
      className="w-full py-3 px-2 flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(90deg, #f85757 0%, #fca311 100%)",
      }}
    >
      <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-2xl">
        <span role="img" aria-label="fire">
          🔥
        </span>
        FLASH SALE KẾT THÚC TRONG
        <span role="img" aria-label="fire">
          🔥
        </span>
        <div className="flex items-center ml-4 gap-2">
          <div className="bg-white/90 rounded-lg px-2 py-1 text-center text-red-600 font-extrabold text-xl min-w-[40px]">
            {String(timeLeft.days).padStart(2, "0")}
            <div className="text-xs text-gray-700 font-semibold">NGÀY</div>
          </div>
          <div className="bg-white/90 rounded-lg px-2 py-1 text-center text-orange-500 font-extrabold text-xl min-w-[40px]">
            {String(timeLeft.hours).padStart(2, "0")}
            <div className="text-xs text-gray-700 font-semibold">GIỜ</div>
          </div>
          <div className="bg-white/90 rounded-lg px-2 py-1 text-center text-yellow-500 font-extrabold text-xl min-w-[40px]">
            {String(timeLeft.minutes).padStart(2, "0")}
            <div className="text-xs text-gray-700 font-semibold">PHÚT</div>
          </div>
          <div className="bg-white/90 rounded-lg px-2 py-1 text-center text-pink-500 font-extrabold text-xl min-w-[40px]">
            {String(timeLeft.seconds).padStart(2, "0")}
            <div className="text-xs text-gray-700 font-semibold">GIÂY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleBanner;
