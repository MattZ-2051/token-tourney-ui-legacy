import { useCallback, useMemo, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import Image from 'next/image';
import { TokenLinkType } from 'types/tokenLink.type';
import Button from 'components/Button';
import TokenLink from 'components/TokenLink';
import routes from 'constants/routes';
import useMobile from 'hooks/useMobile';
import HamburgerMenu from '../HamburgerMenu';
import SidebarMenu from '../SidebarMenu';
import styles from './UserInfo.module.scss';

export interface UserInfoProps {
  headerLinks: TokenLinkType[];
}

const UserInfo = ({ headerLinks }: UserInfoProps) => {
  const { user } = useUser();
  const { isMobile } = useMobile();
  const router = useRouter();
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const userPicture = useMemo(() => user?.picture || '', [user]);
  const isAuthenticated = useMemo(() => !!user, [user]);

  const onLogout = useCallback(() => {
    router.push(routes.logout);
  }, [router]);

  const authButtons = useCallback(
    () => (
      <div className="flex flex-col-reverse items-center w-full md:flex-row">
        <Button
          onClick={() => router.push(routes.login)}
          outlined={isMobile}
          className="py-5 px-8 mt-4 w-[90%] md:py-3.25 md:px-4.25 md:w-auto md:mt-0 md:mr-5 uppercase font-helvetica-bold"
          variant="secondary"
        >
          Sign in
        </Button>
        <Button
          onClick={() => router.push(routes.signUp)}
          className="py-5 px-8 md:py-3.25 md:px-4.25 uppercase font-helvetica-bold  w-[90%] md:w-auto"
          variant={isMobile ? 'primary' : 'secondary'}
        >
          Sign Up
        </Button>
      </div>
    ),
    [isMobile, router]
  );

  return (
    <>
      {isAuthenticated && (
        <div>
          <Menu
            menuButton={
              <MenuButton className="flex flex-row items-center hidden md:flex">
                <span className="mr-5 text-xs uppercase font-helvetica-bold">
                  My Account
                </span>
                <Image
                  src={userPicture}
                  width="32"
                  height="32"
                  alt="User Avatar"
                  className="rounded-2xl"
                />
              </MenuButton>
            }
            menuClassName={styles.menu}
          >
            <MenuItem>
              <Button
                onClick={onLogout}
                variant="secondary"
                className={styles.logoutButton}
              >
                Log Out
              </Button>
            </MenuItem>
          </Menu>
        </div>
      )}
      {!isAuthenticated && (
        <div className="hidden md:flex">{authButtons()}</div>
      )}
      <div className={`flex md:hidden ${styles.background}`}>
        <HamburgerMenu
          setOpen={() => setSidebarOpened(!sidebarOpened)}
          open={sidebarOpened}
        />
        <SidebarMenu open={sidebarOpened}>
          <>
            <div
              className={`${styles.borderSeparator} flex flex-col w-full items-center pt-10 pb-2`}
            >
              {headerLinks.map(({ href, label }) => (
                <TokenLink
                  href={href}
                  label={label}
                  key={href}
                  className={`${styles.link} text-base pr-0 pb-8 md:pr-8`}
                />
              ))}
            </div>
            <div
              className={`${
                isAuthenticated && styles.borderSeparator
              } flex flex-col w-full items-center`}
            >
              {isAuthenticated && (
                <div className="flex flex-col items-center mt-10 w-full">
                  <Image
                    src={userPicture}
                    width="32"
                    height="32"
                    alt="User Avatar"
                    className="rounded-2xl mb-8"
                  />
                  <Button
                    onClick={onLogout}
                    outlined
                    variant="secondary"
                    className="w-[90%]"
                  >
                    Log Out
                  </Button>
                </div>
              )}
              {!isAuthenticated && authButtons()}
            </div>
          </>
        </SidebarMenu>
      </div>
    </>
  );
};

export default UserInfo;
