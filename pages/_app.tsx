import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingScreen from '../components/LoadingScreen';
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

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
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div className={`${syne.variable} ${dmSans.variable}`} style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.6s ease-in-out' }}>
        {router.pathname === '/' ? (
          loadingComplete ? <Component {...pageProps} loadingComplete={loadingComplete} /> : null
        ) : (
          <Component {...pageProps} loadingComplete={loadingComplete} />
        )}
      </div>
    </>
  );
}
