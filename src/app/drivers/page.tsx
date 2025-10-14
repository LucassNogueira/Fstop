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
import { useGetAllDrivers, findDriverByName } from '@/shared/hooks/queries/useGetAllDrivers';
import { useAuth } from '@/shared/contexts/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/utils/firebase';
import { DriverDetails, DriverStanding } from '@/shared/types/f1Types';

export default function DriversPage() {
  const { user, userDoc, setUserDoc } = useAuth();
  const { data: drivers, isLoading, error } = useGetDriverStandings(2023);
  
  // Fetch all drivers once and cache them - using season parameter
  const { data: allDrivers, isLoading: isLoadingAllDrivers, error: allDriversError } = useGetAllDrivers(2023);
  
  const [selectedDriver1, setSelectedDriver1] = useState<string | null>(null);
  const [selectedDriver2, setSelectedDriver2] = useState<string | null>(null);

  // Use cached driver data instead of making API calls
  const compare1Details = findDriverByName(allDrivers, selectedDriver1 || '');
  const compare2Details = findDriverByName(allDrivers, selectedDriver2 || '');

  const handleFavoriteClick = async (driver: DriverStanding) => {
    if (!user) {
      console.warn('User not logged in');
      return;
    }
    if (!db) {
      console.error('Firestore not initialized');
      return;
    }
    if (!allDrivers) {
      console.warn('Driver data not loaded yet');
      return;
    }

    try {
      // Use cached driver details instead of making an API call
      const driverDetails = findDriverByName(allDrivers, driver.driver.name);
      
      if (!driverDetails) {
        console.error('Driver details not found in cache for:', driver.driver.name);
        return;
      }

      const driverRef = doc(db, 'Users', user.uid);
      await updateDoc(driverRef, {
        favDriver: driverDetails,
      });

      setUserDoc((prevState) => ({
        ...prevState!,
        favDriver: driverDetails,
      }));
      console.log('Favorite driver updated:', driverDetails.name);
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

