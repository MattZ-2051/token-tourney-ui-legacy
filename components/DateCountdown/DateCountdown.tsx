import { Fragment } from 'react';
import { useCountdown } from './useCountdown';

export interface DateCountdownProps {
  time: Date | string | number;
}

const DateCountdown = ({ time }: DateCountdownProps) => {
  const [timeLeft] = useCountdown(time);

  return (
    <Fragment>
      {timeLeft &&
        (timeLeft?.days ||
          timeLeft?.hours ||
          timeLeft?.minutes ||
          timeLeft?.seconds) && (
          <Fragment>
            {timeLeft?.days > 0 && (
              <span className="mr-1">{timeLeft?.days}D</span>
            )}
            <span className="mr-1">{timeLeft?.hours}H</span>
            <span className="mr-1">{timeLeft?.minutes}M</span>
            <span className="mr-1">{timeLeft?.seconds}S</span>
          </Fragment>
        )}
    </Fragment>
  );
};

export default DateCountdown;
