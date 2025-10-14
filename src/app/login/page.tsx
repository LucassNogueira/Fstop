'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Alert,
} from '@mui/material';
import Image from 'next/image';
import { login } from '@/shared/utils/authUtils';
import { useAuth } from '@/shared/contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      router.push('/logged');
    }
  }, [user, router]);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await login(email, password);
      router.push('/logged');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/media/rbbg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: 4,
            backgroundColor: 'rgba(249, 250, 251, 0.95)',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Image
              src="/media/logof1.svg"
              alt="F1 Logo"
              width={120}
              height={80}
              style={{ margin: '0 auto' }}
            />
            <Typography variant="h4" component="h1" fontWeight="bold" mt={2}>
              Login
            </Typography>
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleLogin}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              required
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              required
              margin="normal"
              variant="outlined"
            />

            <Box sx={{ textAlign: 'center', my: 2 }}>
              <Link href="/signup" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  Don&apos;t have an account? Sign up!
                </Typography>
              </Link>
            </Box>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? 'Loading...' : 'Login'}
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

