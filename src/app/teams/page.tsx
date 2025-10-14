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
import TeamCard from '@/shared/components/TeamCard';
import { useGetTeamStandings } from '@/shared/hooks/queries/useGetTeamStandings';
import { useAuth } from '@/shared/contexts/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/utils/firebase';
import { TeamStanding } from '@/shared/types/f1Types';

export default function TeamsPage() {
  const { user, userDoc, setUserDoc } = useAuth();
  const { data: teams, isLoading, error } = useGetTeamStandings(2023);

  const handleFavoriteClick = async (team: TeamStanding) => {
    if (!user || !db) return;

    try {
      // Fetch full team details
      const response = await fetch(
        `https://v1.formula-1.api-sports.io/teams?id=${team.team.id}`,
        {
          headers: {
            'x-rapidapi-key': process.env.NEXT_PUBLIC_F1_API_KEY || '',
            'x-rapidapi-host': 'api-formula-1.p.rapidapi.com',
          },
        }
      );
      const data = await response.json();
      const teamDetails = data.response[0];

      const teamRef = doc(db, 'Users', user.uid);
      await updateDoc(teamRef, {
        favTeam: teamDetails,
      });

      setUserDoc((prevState) => ({
        ...prevState!,
        favTeam: teamDetails,
      }));
    } catch (error) {
      console.error('Error setting favorite team:', error);
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
          <Alert severity="error">Error loading team standings</Alert>
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
            Current Team Rankings
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 3,
              justifyContent: 'center',
            }}
          >
            {teams?.map((team) => (
              <TeamCard
                key={team.team.id}
                team={team}
                isFavorite={userDoc?.favTeam?.id === team.team.id}
                onFavoriteClick={() => handleFavoriteClick(team)}
              />
            ))}
          </Box>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

