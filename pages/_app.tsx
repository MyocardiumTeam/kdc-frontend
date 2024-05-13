import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@styles/reset.scss';
import '@styles/globals.scss';
import { store } from '../src/store/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
