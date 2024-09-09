"use client";
import React, { useEffect, useState } from "react";

const TimerSection = () => {
  const [weddingTime, setWeddingTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("12/20/2024 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && 0 <= m && s <= 0) {
        setWeddingTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="">
      {weddingTime ? (
        <>
          <h1>¡Es nuestro día!</h1>
          <h2>¡Nos casamos!</h2>
        </>
      ) : (
        <>
          <div className="">
            <div className="mb-4">
              <p className="text-center text-lg font-bold text-primary-950">
                Faltan:
              </p>
            </div>
            <div className="flex flex-row items-center justify-center text-center gap-4">
              <div className="flex flex-col bg-gradient-to-r from-primary-700 to bg-primary-900 text-primary-200 p-2 rounded-lg">
                <span className="text-md font-semibold md:text-2xl">
                  {days}
                </span>
                <span className="text-md font-semibold md:text-2xl">Días</span>
              </div>
              <div className="flex flex-col bg-gradient-to-r from-primary-700 to bg-primary-900 text-primary-200 p-2 rounded-lg">
                <span className="text-md font-semibold md:text-2xl">
                  {hours}
                </span>
                <span className="text-md font-semibold md:text-2xl">Horas</span>
              </div>
              <div className="flex flex-col bg-gradient-to-r from-primary-700 to bg-primary-900 text-primary-200 p-2 rounded-lg">
                <span className="text-md font-semibold md:text-2xl">
                  {minutes}
                </span>
                <span className="text-md font-semibold md:text-2xl">
                  Minutos
                </span>
              </div>
              <div className="flex flex-col bg-gradient-to-r from-primary-700 to bg-primary-900 text-primary-200 p-2 rounded-lg">
                <span className="text-md font-semibold md:text-2xl">
                  {seconds}
                </span>
                <span className="text-md font-semibold md:text-2xl">
                  Segundos
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TimerSection;
