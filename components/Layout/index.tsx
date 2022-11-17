import { ReactElement } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Layout = ({ children }: { children: ReactElement }) => (
  <div className="px-28">
    <Head>
      <title>Token Tourney</title>
      <meta name="description" content="Token Tourney" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="mt-8">{children}</main>
    <Footer />
  </div>
);

export default Layout;
