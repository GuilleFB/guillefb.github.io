import '../globalStyles.scss'; // Importa solo tu archivo SCSS
import type { AppProps } from 'next/app';
import { memo, JSX, useEffect} from 'react';
import TagManager from 'react-gtm-module';

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
      const tagManagerArgs = {
          gtmId: 'GTM-PGDCRGDQ'
      };
      TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />;
});

export default MyApp;