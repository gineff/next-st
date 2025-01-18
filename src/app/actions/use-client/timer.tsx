'use client';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const [restTime, setRestTime] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(new Date());
      setRestTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{restTime > 0 && <p>{restTime}</p>}</div>;
};
