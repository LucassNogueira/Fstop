'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';
import DriverCard from '@/shared/components/DriverCard';
import { useGetDriverStandings } from '@/shared/hooks/queries/useGetDriverStandings';
import { useGetDriverDetails } from '@/shared/hooks/queries/useGetDriverDetails';
import { useAuth } from '@/shared/contexts/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/utils/firebase';
import { DriverStanding } from '@/shared/types/f1Types';

export default function DriversPage() {
  const { user, userDoc, setUserDoc } = useAuth();
  const { data: drivers, isLoading, error } = useGetDriverStandings(2023);
  
  const [selectedDriver1, setSelectedDriver1] = useState<string | null>(null);
  const [selectedDriver2, setSelectedDriver2] = useState<string | null>(null);

  // Fetch driver details on-demand - React Query caches automatically
  const { data: compare1Details } = useGetDriverDetails(selectedDriver1);
  const { data: compare2Details } = useGetDriverDetails(selectedDriver2);

  const handleFavoriteClick = async (driver: DriverStanding) => {
    if (!user || !db) return;

    try {
      // Use the driver data we already have from standings!
      // No API call needed - we already have all the info
      const favoriteData = {
        id: driver.driver.id,
        name: driver.driver.name,
        abbr: driver.driver.abbr,
        number: driver.driver.number,
        image: driver.driver.image,
        team_id: driver.team.id,
        team_name: driver.team.name,
        team_logo: driver.team.logo,
        position: driver.position,
        points: driver.points.toString(),
        wins: driver.wins,
        season: driver.season,
      };

      const driverRef = doc(db, 'Users', user.uid);
      await updateDoc(driverRef, {
        favDriver: favoriteData,
      });

      setUserDoc((prevState) => ({
        ...prevState!,
        favDriver: favoriteData as any,
      }));
      console.log('Favorite driver updated (no API call!):', driver.driver.name);
    } catch (error) {
      console.error('Error setting favorite driver:', error);
    }
  };

  const handleCompare1 = (driver: DriverStanding) => {
    setSelectedDriver1(driver.driver.name);
  };

  const handleCompare2 = (driver: DriverStanding) => {
    setSelectedDriver2(driver.driver.name);
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
          <Alert severity="error">Error loading driver standings</Alert>
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
            Current Driver Rankings
          </Typography>

          {compare1Details && compare2Details && (
            <Box sx={{ mb: 4, p: 3, backgroundColor: 'background.paper', borderRadius: 2 }}>
              <Typography variant="h5" mb={2}>
                Comparison
              </Typography>
              <Box sx={{ display: 'flex', gap: 4, justifyContent: 'space-around' }}>
                <Box>
                  <Typography variant="h6">{compare1Details.name}</Typography>
                  <Typography>Nationality: {compare1Details.nationality}</Typography>
                  <Typography>Career Points: {compare1Details.career_points}</Typography>
                  <Typography>Podiums: {compare1Details.podiums}</Typography>
                  <Typography>Championships: {compare1Details.world_championships}</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">{compare2Details.name}</Typography>
                  <Typography>Nationality: {compare2Details.nationality}</Typography>
                  <Typography>Career Points: {compare2Details.career_points}</Typography>
                  <Typography>Podiums: {compare2Details.podiums}</Typography>
                  <Typography>Championships: {compare2Details.world_championships}</Typography>
                </Box>
              </Box>
            </Box>
          )}

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center',
            }}
          >
            {drivers?.map((driver) => (
              <DriverCard
                key={driver.driver.id}
                driver={driver}
                isFavorite={userDoc?.favDriver?.id === driver.driver.id}
                onFavoriteClick={() => handleFavoriteClick(driver)}
                onCompare1Click={() => handleCompare1(driver)}
                onCompare2Click={() => handleCompare2(driver)}
              />
            ))}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

