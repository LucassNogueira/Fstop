'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, CircularProgress } from '@mui/material';
import { useAuth } from '@/shared/contexts/AuthContext';

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [hasRedirected, setHasRedirected] = useState(false);

  // Try instant redirect based on cached auth state
  useEffect(() => {
    if (hasRedirected) return;

    const cachedAuthState = localStorage.getItem('lastAuthState');
    
    if (cachedAuthState === 'authenticated' && !user && loading) {
      // Optimistically redirect to logged if user was previously authenticated
      console.log('Using cached auth state for instant redirect');
      setHasRedirected(true);
      router.replace('/logged');
      return;
    }
  }, [hasRedirected, user, loading, router]);

  useEffect(() => {
    if (hasRedirected) return;

    // Set a timeout to redirect to login if auth takes too long
    const timeoutId = setTimeout(() => {
      if (!hasRedirected && loading) {
        console.log('Auth timeout - redirecting to login');
        setHasRedirected(true);
        router.replace('/login');
      }
    }, 2000); // 2 second timeout

    // Normal redirect logic
    if (!loading && !hasRedirected) {
      setHasRedirected(true);
      
      // Cache the auth state for next visit
      if (user) {
        localStorage.setItem('lastAuthState', 'authenticated');
        router.replace('/logged');
      } else {
        localStorage.setItem('lastAuthState', 'unauthenticated');
        router.replace('/login');
      }
    }

    return () => clearTimeout(timeoutId);
  }, [user, loading, router, hasRedirected]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: 'background.default',
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
}
