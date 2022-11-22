import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { TournamentProvider } from 'contexts/TournamentContext';
import Layout from '../components/Layout';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <TournamentProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TournamentProvider>
  </UserProvider>
);

export default App;
