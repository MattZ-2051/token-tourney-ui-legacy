import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { TokenLinkType } from 'types/tokenLink.type';
import routes from 'constants/routes';
import Logo from 'assets/images/logo.svg';
import TokenLink from 'components/TokenLink';
import UserInfo from './UserInfo';

const headerLinks: TokenLinkType[] = [
  { href: routes.tournaments, label: 'Tournaments' },
  { href: routes.marketplace, label: 'Marketplace' },
  { href: routes.howToPlay, label: 'How to play' },
];

const Header = () => {
  const { isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <header className="flex flex-row py-6 justify-between">
      <div className="flex flex-row items-center justify-between w-full md:w-auto">
        <Link
          href={routes.home}
          className="pr-10 flex items-center w-[150px] h-[38px]"
        >
          <Image src={Logo} alt="Token Tourney Logo" width="150" height="38" />
        </Link>
        <div className="hidden md:flex">
          {headerLinks.map(({ href, label }) => (
            <TokenLink href={href} label={label} key={href} />
          ))}
        </div>
      </div>
      <UserInfo headerLinks={headerLinks} />
    </header>
  );
};

export default Header;
