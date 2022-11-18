import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import Image from 'next/image';
import Button from 'components/Button/Button';
import routes from 'constants/routes';

const HeaderDropdown = () => {
  const router = useRouter();
  const { user } = useUser();
  const userPicture = useMemo(() => user?.picture || '', [user]);

  const onLogout = useCallback(() => {
    router.push(routes.logout);
  }, [router]);

  return (
    <Menu
      menuButton={
        <MenuButton className="flex flex-row items-center">
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
    >
      <MenuItem>
        <Button onClick={onLogout}>Log Out</Button>
      </MenuItem>
    </Menu>
  );
};

export default HeaderDropdown;
