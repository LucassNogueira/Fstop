'use client';

import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import { useAuth } from '@/shared/contexts/AuthContext';
import PlaceIcon from '@mui/icons-material/Place';

export default function FavCircuit() {
  const { userDoc } = useAuth();

  if (!userDoc?.favTrack) return null;

  const track = userDoc.favTrack;

  return (
    <Box sx={{ py: 4, backgroundColor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          mb={3}
          sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}
        >
          Your Favorite Circuit
        </Typography>

        <Paper 
          elevation={6}
          sx={{
            overflow: 'hidden',
            borderRadius: 3,
            maxWidth: 600,
            mx: 'auto',
          }}
        >
          {/* Circuit Image Section - Full Width */}
          {track.circuit?.image && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
                p: 3,
                borderBottom: 3,
                borderColor: 'primary.main',
              }}
            >
              <Box
                sx={{
                  border: 3,
                  borderColor: 'primary.main',
                  borderRadius: 2,
                  p: 2,
                  backgroundColor: 'white',
                  boxShadow: 3,
                  transition: 'all 0.2s',
                  '&:hover': {
                    transform: 'scale(1.03)',
                    boxShadow: 6,
                    borderColor: 'primary.dark',
                  },
                }}
              >
                <img
                  src={track.circuit.image}
                  alt={track.competition.name}
                  style={{
                    maxWidth: '250px',
                    maxHeight: '200px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  loading="lazy"
                />
              </Box>
            </Box>
          )}

          {/* Info Section - Compact */}
          <Box sx={{ p: 3, textAlign: 'center', backgroundColor: 'background.paper' }}>
            <Typography
              variant="h5"
              component="h3"
              fontWeight="bold"
              mb={1}
            >
              {track.competition.name}
            </Typography>

            <Stack 
              direction="row" 
              spacing={0.5} 
              alignItems="center" 
              justifyContent="center"
              mb={2}
            >
              <PlaceIcon sx={{ fontSize: 18, color: 'primary.main' }} />
              <Typography variant="body1" color="text.secondary">
                {track.competition.location.city}, {track.competition.location.country}
              </Typography>
            </Stack>

            <Stack 
              direction="row" 
              spacing={3} 
              justifyContent="center"
              divider={<Box sx={{ borderLeft: 1, borderColor: 'divider' }} />}
              sx={{ mt: 2 }}
            >
              <Box>
                <Typography variant="body2" color="text.secondary" mb={0.5}>
                  Laps
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {track.laps?.total || 'N/A'}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary" mb={0.5}>
                  Distance
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {track.distance || 'N/A'}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

