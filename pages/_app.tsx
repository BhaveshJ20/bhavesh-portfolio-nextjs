import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingScreen from '../components/LoadingScreen';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [hasSeenLoading, setHasSeenLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Only access localStorage on client side
    if (typeof window !== 'undefined') {
      // Check if user has already seen the loading screen
      const hasSeen = localStorage.getItem('hasSeenLoadingScreen');
      setHasSeenLoading(!!hasSeen);

      // Only show loading screen on first visit to home page
      if (router.pathname === '/' && !hasSeen) {
        setIsLoading(true);
        // Mark that user has seen the loading screen
        localStorage.setItem('hasSeenLoadingScreen', 'true');
      }
    }
  }, [router.pathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in-out' }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
