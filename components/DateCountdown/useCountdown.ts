import { useEffect, useState } from 'react';

export interface useCountdownProps {
  targetDate: Date | string | number;
}

type Counter = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const useCountdown = (targetDate: Date | string | number) => {
  const [timeLeft, setTimeLeft] = useState({} as Counter);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);
  }, [timeLeft, targetDate]);

  return [timeLeft];
};

const calculateTimeLeft = (targetDate: Date | string | number): Counter => {
  const difference = +new Date(targetDate) - +new Date();
  let checkRemainingTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    checkRemainingTime = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return checkRemainingTime;
};

export { useCountdown };
