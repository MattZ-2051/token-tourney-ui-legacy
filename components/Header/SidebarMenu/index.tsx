import { ReactElement } from 'react';
import styles from './SidebarMenu.module.scss';

export interface SidebarMenuProps {
  children: ReactElement;
  open: boolean;
}

const SidebarMenu = ({ children, open }: SidebarMenuProps) => {
  return (
    <>
      <nav
        className={`${styles.sidebar} pb-8`}
        style={{ transform: open ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        {children}
      </nav>
      {open && (
        <div className="absolute top-[85px] bottom-0 right-0 left-0 bg-black opacity-50 z-20" />
      )}
    </>
  );
};
export default SidebarMenu;
