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
import { useGetAllTeams, findTeamById } from '@/shared/hooks/queries/useGetAllTeams';
import { useAuth } from '@/shared/contexts/AuthContext';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/utils/firebase';
import { TeamStanding } from '@/shared/types/f1Types';

export default function TeamsPage() {
  const { user, userDoc, setUserDoc } = useAuth();
  const { data: teams, isLoading, error } = useGetTeamStandings(2023);
  
  // Fetch all teams once and cache them - no individual API calls needed!
  const { data: allTeams } = useGetAllTeams();

  const handleFavoriteClick = async (team: TeamStanding) => {
    if (!user) {
      console.warn('User not logged in');
      return;
    }
    if (!db) {
      console.error('Firestore not initialized');
      return;
    }
    if (!allTeams) {
      console.warn('Team data not loaded yet');
      return;
    }

    try {
      // Use cached team details instead of making an API call
      const teamDetails = findTeamById(allTeams, team.team.id);
      
      if (!teamDetails) {
        console.error('Team details not found in cache');
        return;
      }

      const teamRef = doc(db, 'Users', user.uid);
      await updateDoc(teamRef, {
        favTeam: teamDetails,
      });

      setUserDoc((prevState) => ({
        ...prevState!,
        favTeam: teamDetails,
      }));
      console.log('Favorite team updated:', teamDetails.name);
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

