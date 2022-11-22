import { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './AlertBar.module.scss';
import DateCountdown from 'components/DateCountdown/DateCountdown';

const cx = classnames.bind(styles);

export interface AlertBarProps {
  variant: 'upcoming' | 'active' | 'past';
  time: Date | string | number;
}

const AlertBar = ({ variant, time }: AlertBarProps) => {
  const containerClasses = useMemo(
    () =>
      cx(`flex justify-center ${styles.alertbarContainer}`, {
        [styles.upcoming]: variant === 'upcoming',
        [styles.active]: variant === 'active',
      }),
    [variant]
  );
  const [text, setText] = useState('');

  useEffect(() => {
    if (variant === 'upcoming') {
      setText('starts in');
    } else if (variant === 'active') {
      setText('remaining time');
    }
  }, [variant]);

  return (
    <div className={containerClasses}>
      <span
        className={`uppercase h-10 py-3 px-28 font-helvetica-bold ${styles.alertTitle}`}
      >
        <span className="flex justify-center">
          <span className="mr-1">{text}</span>
          <DateCountdown time={time} />
        </span>
      </span>
    </div>
  );
};

export default AlertBar;
