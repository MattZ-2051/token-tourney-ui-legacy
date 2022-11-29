import type { AppProps } from 'next/app';
import { AppProvider } from 'store/context';
import Layout from '../components/Layout';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <AppProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </AppProvider>
);

export default App;
