import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../components/Layout';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </UserProvider>
);

export default App;
