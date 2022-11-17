import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import { useMemo } from 'react';
import routes from 'constants/routes';
import Logo from 'assets/images/logo.svg';
import Button from 'components/Button/Button';
import HeaderLink from './HeaderLink';

const headerLinks = [
  { href: routes.tournaments, label: 'TOURNAMENTS' },
  { href: routes.marketplace, label: 'MARKETPLACE' },
  { href: routes.howToPlay, label: 'HOW TO PLAY' },
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
          <span className="font-bold">Welcome {user?.name}!</span> <Link href={routes.logout}>Logout</Link>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <Button onClick={() => router.push(routes.login)} outlined={false} className="mr-5">LOGIN</Button>
          <Button onClick={() => router.push(routes.signUp)}>SIGN UP</Button>
        </div>
      )}
    </header>
  );
};

export default Header;
