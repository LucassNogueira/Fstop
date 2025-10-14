'use client';

import React from 'react';
import { Box, Container, Stack } from '@mui/material';
import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';
import NextRace from '@/shared/components/NextRace';
import FavDriver from '@/shared/components/FavDriver';
import FavTeam from '@/shared/components/FavTeam';
import FavCircuit from '@/shared/components/FavCircuit';
import NewsCards from '@/shared/components/NewsCard';
import { useAuth } from '@/shared/contexts/AuthContext';

export default function LoggedPage() {
  const { userDoc } = useAuth();

  const hasFavorites = userDoc?.favDriver || userDoc?.favTeam || userDoc?.favTrack;

  return (
    <>
      <NavBar />
      <Box sx={{ minHeight: '100vh', pt: 8 }}>
        <NextRace />
        
        {/* Horizontal Favorites Section */}
        {hasFavorites && (
          <Box sx={{ py: 4, backgroundColor: 'background.default' }}>
            <Container maxWidth="xl">
              <Stack
                direction="row"
                spacing={3}
                justifyContent="center"
                alignItems="stretch"
                flexWrap="wrap"
                sx={{
                  '& > *': {
                    flex: { xs: '1 1 100%', sm: '1 1 45%', md: '0 1 380px' },
                    maxWidth: { xs: '100%', md: '380px' },
                    height: '550px',
                  },
                }}
              >
                {userDoc?.favDriver && (
                  <Box sx={{ height: '100%' }}>
                    <FavDriver />
                  </Box>
                )}
                {userDoc?.favTeam && (
                  <Box sx={{ height: '100%' }}>
                    <FavTeam />
                  </Box>
                )}
                {userDoc?.favTrack && (
                  <Box sx={{ height: '100%' }}>
                    <FavCircuit />
                  </Box>
                )}
              </Stack>
            </Container>
          </Box>
        )}

        <NewsCards />
      </Box>
      <Footer />
    </>
  );
}

