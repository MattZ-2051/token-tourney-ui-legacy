import { MouseEventHandler, ReactElement, useMemo } from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classnames.bind(styles);

export interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactElement | string;
  outlined?: boolean;
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button = ({
  onClick,
  children,
  outlined = true,
  disabled = false,
  className = '',
  variant = 'primary',
}: ButtonProps) => {
  const containerClasses = useMemo(
    () =>
      cx(
        `${className} ${styles.buttonContainer} font-bold font-helvetica-bold hover:opacity-70`,
        {
          [styles.outlinedButton]: outlined,
          [styles.primary]: variant === 'primary',
          [styles.secondary]: variant === 'secondary',
        }
      ),
    [outlined, className, variant]
  );

  return (
    <button onClick={onClick} disabled={disabled} className={containerClasses}>
      {children}
    </button>
  );
};

export default Button;
