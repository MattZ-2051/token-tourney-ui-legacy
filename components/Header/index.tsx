import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const Header = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <header>
      {user && (
        <div>
          <span className="font-bold">Welcome {user?.name}!</span> <Link href="/api/auth/logout">Logout</Link>
        </div>
      )}
      {!user && <Link href="/api/auth/login">Login</Link>}
    </header>
  );
};

export default Header;
