import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { useMemo } from 'react';
import routes from 'constants/routes';
import Logo from 'assets/images/logo.svg';
import Button from 'components/Button/Button';
import HeaderMenu from 'components/Header/HeaderMenu';
import HeaderLink from './HeaderLink';

const headerLinks = [
  { href: routes.tournaments, label: 'Tournaments' },
  { href: routes.marketplace, label: 'Marketplace' },
  { href: routes.howToPlay, label: 'How to play' },
];

const Header = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const isAuthenticated = useMemo(() => !!user, [user]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="flex flex-row pt-5 justify-between items-center">
      <div className="flex flex-row items-center">
        <Link href={routes.home} className="pr-10">
          <Image src={Logo} alt="Token Tourney Logo" />
        </Link>
        {headerLinks.map(({ href, label }) => (
          <HeaderLink href={href} label={label} key={href} />
        ))}
      </div>
      {isAuthenticated && (
        <div>
          <HeaderMenu />
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <Button onClick={() => router.push(routes.login)} outlined={false} className="mr-5 uppercase font-helvetica-bold">Login</Button>
          <Button onClick={() => router.push(routes.signUp)} className="uppercase font-helvetica-bold">Sign Up</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
