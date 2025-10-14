'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';
import CircuitCard from '@/shared/components/CircuitCard';
import { useGetRaces } from '@/shared/hooks/queries/useGetRaces';
import { useAuth } from '@/shared/contexts/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/utils/firebase';
import { trackImages } from '@/shared/utils/imageData';
import { Race } from '@/shared/types/f1Types';

export default function CircuitsPage() {
  const { user, userDoc, setUserDoc } = useAuth();
  const { data: circuits, isLoading, error } = useGetRaces(2023, 'race');

  const handleFavoriteClick = async (circuit: Race) => {
    if (!user || !db) return;

    try {
      const circuitRef = doc(db, 'Users', user.uid);
      await updateDoc(circuitRef, {
        favTrack: circuit,
      });

      const trackImg = trackImages.find((track) => track.id === circuit.circuit.id);
      if (trackImg) {
        await updateDoc(circuitRef, {
          trackImg: trackImg,
        });
      }

      setUserDoc((prevState) => ({
        ...prevState!,
        favTrack: circuit,
        trackImg: trackImg || null,
      }));
    } catch (error) {
      console.error('Error setting favorite circuit:', error);
    }
  };

  if (isLoading) {
    return (
      <>
        <NavBar />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            pt: 10,
          }}
        >
          <CircularProgress />
        </Box>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <Container sx={{ pt: 12 }}>
          <Alert severity="error">Error loading circuits</Alert>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Box sx={{ minHeight: '100vh', pt: 10, pb: 4, backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            textAlign="center"
            mb={4}
            mt={2}
          >
            All Circuits
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center',
            }}
          >
            {circuits?.map((circuit) => (
              <CircuitCard
                key={circuit.circuit.id}
                circuit={circuit}
                isFavorite={userDoc?.favTrack?.id === circuit.id}
                onFavoriteClick={() => handleFavoriteClick(circuit)}
              />
            ))}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

