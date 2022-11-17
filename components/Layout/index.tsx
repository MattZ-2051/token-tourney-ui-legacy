import { ReactElement } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: { children: ReactElement }) => (
  <>
    <Head>
      <title>Token Tourney</title>
      <meta name="description" content="Token Tourney" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
