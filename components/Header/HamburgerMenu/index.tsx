import styles from './Hamburger.module.scss';

export interface HamburgerMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const HamburgerMenu = ({ open, setOpen }: HamburgerMenuProps) => (
  <div
    className={styles.hamburger}
    onClick={() => {
      setOpen(!open);
    }}
  >
    <div style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }} />
    <div
      style={{
        transform: open ? 'translateX(20px)' : 'translateX(0)',
        opacity: open ? '0' : '1',
      }}
    />
    <div style={{ transform: open ? 'rotate(-45deg)' : 'rotate(0)' }} />
  </div>
);

export default HamburgerMenu;
