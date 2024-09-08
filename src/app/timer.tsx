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
          <div className="timer-wrapper">
            <div className="timer-inner">
              <div className="timer-segment">
                <span className="time">{days}</span>
                <span className="label">Días</span>
              </div>
              <div className="timer-segment">
                <span className="time">{hours}</span>
                <span className="label">Horas</span>
              </div>
              <div className="timer-segment">
                <span className="time">{minutes}</span>
                <span className="label">Minutos</span>
              </div>
              <div className="timer-segment">
                <span className="time">{seconds}</span>
                <span className="label">Segundos</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TimerSection;
