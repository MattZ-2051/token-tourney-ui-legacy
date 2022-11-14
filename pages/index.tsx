import Head from 'next/head';
import Header from '../components/Header';

const Home = () => (
  <div>
    <Head>
      <title>Token Tourney</title>
      <meta name="description" content="Token Tourney" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
  </div>
);

export default Home;
