'use client';

import React from 'react';
import { Box, Container, Typography, Paper, Stack, Chip } from '@mui/material';
import { useAuth } from '@/shared/contexts/AuthContext';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function FavDriver() {
  const { userDoc } = useAuth();

  if (!userDoc?.favDriver) return null;

  const driverSearch = userDoc.favDriver.name.replace(' ', '_');
  const teamName = (userDoc.favDriver as any).team_name;

  return (
    <Box sx={{ py: 6, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          fontWeight="bold"
          textAlign="center"
          mb={1}
          sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}
        >
          Your Favorite Driver
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          textAlign="center"
          mb={4}
        >
          2023 Season Performance
        </Typography>

        <Paper 
          elevation={4}
          sx={{
            overflow: 'hidden',
            borderRadius: 3,
            background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.05) 0%, rgba(37, 99, 235, 0.05) 100%)',
          }}
        >
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={0}
            alignItems="stretch"
          >
            {/* Image Section */}
            {userDoc.favDriver.image && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'grey.100',
                  p: 3,
                  minHeight: { xs: 280, md: 320 },
                  flex: { md: '0 0 280px' },
                }}
              >
                <a
                  href={`https://en.wikipedia.org/wiki/${driverSearch}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Box
                    sx={{
                      border: 3,
                      borderColor: 'primary.main',
                      borderRadius: 2,
                      p: 1.5,
                      backgroundColor: 'white',
                      boxShadow: 2,
                      transition: 'all 0.2s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: 4,
                        borderColor: 'primary.dark',
                      },
                    }}
                  >
                    <img
                      src={userDoc.favDriver.image}
                      alt={userDoc.favDriver.name}
                      style={{
                        maxWidth: '220px',
                        maxHeight: '260px',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        display: 'block',
                        cursor: 'pointer',
                      }}
                      loading="lazy"
                    />
                  </Box>
                </a>
              </Box>
            )}

            {/* Stats Section */}
            <Box sx={{ flex: 1, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
                >
                  {userDoc.favDriver.name}
                </Typography>
                {teamName && (
                  <Chip
                    label={teamName}
                    size="small"
                    sx={{ mt: 1 }}
                    color="primary"
                    variant="outlined"
                  />
                )}
              </Box>

              <Stack spacing={3} alignItems="center" sx={{ width: '100%' }}>
                <Box>
                  <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {(userDoc.favDriver as any).position || 'N/A'}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Championship Position
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {(userDoc.favDriver as any).position ? `P${(userDoc.favDriver as any).position}` : 'N/A'}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Stack direction="row" spacing={4} justifyContent="center">
                  <Box>
                    <Typography variant="body2" color="text.secondary" mb={0.5}>
                      Points
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color="primary">
                      {(userDoc.favDriver as any).points || userDoc.favDriver.career_points || 'N/A'}
                    </Typography>
                  </Box>

                  <Box>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center" mb={0.5}>
                      <EmojiEventsIcon sx={{ fontSize: 18, color: 'warning.main' }} />
                      <Typography variant="body2" color="text.secondary">
                        Wins
                      </Typography>
                    </Stack>
                    <Typography variant="h5" fontWeight="bold" color="primary">
                      {(userDoc.favDriver as any).wins || 0}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

