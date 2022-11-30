import { Fragment, ReactElement } from 'react';
import Head from 'next/head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: ReactElement }) => (
  <Fragment>
    <div className={`container mx-auto px-4 ${styles.layoutContainer}`}>
      <Head>
        <title>Token Tourney</title>
        <meta name="description" content="Token Tourney" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mt-8">{children}</main>
    </div>
    <Footer />
  </Fragment>
);

export default Layout;
