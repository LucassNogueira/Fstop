'use client';

import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';
import { useAuth } from '@/shared/contexts/AuthContext';

export default function ProfilePage() {
  const { user, userDoc } = useAuth();

  return (
    <>
      <NavBar />
      <Box sx={{ minHeight: '100vh', pt: 12, pb: 4, backgroundColor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" fontWeight="bold" mb={4}>
            Profile
          </Typography>

          <Paper sx={{ p: 4 }}>
            <Typography variant="h6" mb={1}>
              Display Name
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              {userDoc?.displayName || 'N/A'}
            </Typography>

            <Typography variant="h6" mb={1}>
              Email
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              {user?.email || 'N/A'}
            </Typography>

            <Typography variant="h6" mb={1}>
              Favorite Driver
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              {userDoc?.favDriver?.name || 'Not selected'}
            </Typography>

            <Typography variant="h6" mb={1}>
              Favorite Team
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              {userDoc?.favTeam?.name || 'Not selected'}
            </Typography>

            <Typography variant="h6" mb={1}>
              Favorite Circuit
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {userDoc?.favTrack?.competition?.name || 'Not selected'}
            </Typography>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

