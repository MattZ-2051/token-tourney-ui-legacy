import Head from 'next/head';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Token Tourney</title>
        <meta name="description" content="Token Tourney" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {user && (
          <div>
            Welcome {user?.name}! <Link href="/api/auth/logout">Logout</Link>
          </div>
        )}
        {!user && <Link href="/api/auth/login">Login</Link>}
      </header>
    </div>
  )
};

export default Home;
