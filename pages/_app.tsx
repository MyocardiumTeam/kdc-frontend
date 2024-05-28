import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@styles/reset.scss';
import '@styles/globals.scss';
import { store } from '../src/store/store';
import { Default } from '@common/index';
import { isAuthorized } from '../src/store/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { RouteEnum } from '@constants/route';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { push } = useRouter();

  useEffect(() => {
    if (isAuthorized()) {
      push('/patients');
    } else {
      push(RouteEnum.HOME);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <Default>
        <Component {...pageProps} />
      </Default>
    </Provider>
  );
}
