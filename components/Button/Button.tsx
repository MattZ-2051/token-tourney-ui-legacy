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
}

const Button = ({ onClick, children, outlined = true, disabled = false, className = '' }: ButtonProps) => {
  const containerClasses = useMemo(() =>
    cx(`${className} ${styles.buttonContainer} text-xs`, { [styles.outlinedButton]: outlined }),
  [outlined, className]
  );

  return (
    <button onClick={onClick} disabled={disabled} className={containerClasses}>
      {children}
    </button>
  );
}

export default Button;
