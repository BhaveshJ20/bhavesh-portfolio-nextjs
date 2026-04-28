import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import LoadingScreen from '../components/LoadingScreen';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show loading screen on home page
    if (router.pathname === '/') {
      setIsLoading(true);
    }
  }, [router.pathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setLoadingComplete(true);
  };

  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bruno+Ace+SC&family=DM+Sans:wght@400;500;600;700&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Salaryman&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.6s ease-in-out' }}>
        {router.pathname === '/' ? (
          loadingComplete ? <Component {...pageProps} loadingComplete={loadingComplete} /> : null
        ) : (
          <Component {...pageProps} loadingComplete={loadingComplete} />
        )}
      </div>
    </>
  );
}
