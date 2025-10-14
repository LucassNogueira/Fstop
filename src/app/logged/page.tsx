'use client';

import React from 'react';
import { Box } from '@mui/material';
import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';
import NextRace from '@/shared/components/NextRace';
import FavDriver from '@/shared/components/FavDriver';
import NewsCards from '@/shared/components/NewsCard';
import { useAuth } from '@/shared/contexts/AuthContext';

export default function LoggedPage() {
  const { userDoc } = useAuth();

  return (
    <>
      <NavBar />
      <Box sx={{ minHeight: '100vh', pt: 8 }}>
        <NextRace />
        {userDoc?.favDriver && <FavDriver />}
        {/* {userDoc?.favTrack && <FavTrack />}
        {userDoc?.favTeam && <FavTeam />} */}
        <NewsCards />
      </Box>
      <Footer />
    </>
  );
}

