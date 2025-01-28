import '../globalStyles.scss'; // Importa solo tu archivo SCSS
import type { AppProps } from 'next/app';
import { memo, JSX, useEffect } from 'react';
import TagManager from 'react-gtm-module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIfz2wUJJVw3ALfc8CGuNa-jSvTwhwVp4",
  authDomain: "porfoliogfb.firebaseapp.com",
  projectId: "porfoliogfb",
  storageBucket: "porfoliogfb.appspot.com",
  messagingSenderId: "43415321075",
  appId: "1:43415321075:web:5c8ba05fa1fb606aa5fa86",
  measurementId: "G-MTCQEJVKXL"
};

// Inicializa Firebase solo en el cliente
let app;
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    // Inicializa GTM solo en el cliente
    if (typeof window !== "undefined") {
      const tagManagerArgs = {
        gtmId: 'GTM-PGDCRGDQ'
      };
      TagManager.initialize(tagManagerArgs);

      // Registra un evento de vista de página en Firebase Analytics
      if (analytics) {
        logEvent(analytics, 'page_view', {
          page_title: document.title,
          page_path: window.location.pathname,
        });
      }
    }
  }, []);

  return <Component {...pageProps} />;
});

export default MyApp;