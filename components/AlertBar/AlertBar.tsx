import { useEffect, useMemo, useState } from 'react';
import classnames from 'classnames/bind';
import styles from './AlertBar.module.scss';
import DateCountdown from 'components/DateCountdown/DateCountdown';
import { TournamentStatus } from 'types/tournament.types';

const cx = classnames.bind(styles);

export interface AlertBarProps {
  variant: TournamentStatus;
  time: Date | string | number;
  className?: string;
}

const AlertBar = ({ variant, time, className = '' }: AlertBarProps) => {
  const containerClasses = useMemo(
    () =>
      cx(`flex justify-center ${styles.alertbarContainer} ${className}`, {
        [styles.upcoming]: variant === 'upcoming',
        [styles.active]: variant === 'active',
      }),
    [variant, className]
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
        className={`uppercase h-10 py-3 px-5 font-helvetica ${styles.alertTitle}`}
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
