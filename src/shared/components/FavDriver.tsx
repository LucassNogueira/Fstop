'use client';

import React from 'react';
import { Box, Typography, Paper, Stack, Chip } from '@mui/material';
import { useAuth } from '@/shared/contexts/AuthContext';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function FavDriver() {
  const { userDoc } = useAuth();

  if (!userDoc?.favDriver) return null;

  const driverSearch = userDoc.favDriver.name.replace(' ', '_');
  const teamName = (userDoc.favDriver as any).team_name;

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        fontWeight="bold"
        textAlign="center"
        mb={2}
        sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
      >
        Favorite Driver
      </Typography>

      <Paper 
        elevation={6}
        sx={{
          overflow: 'hidden',
          borderRadius: 3,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
          {/* Image Section - Full Width */}
          {userDoc.favDriver.image && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
                p: 3,
                borderBottom: 3,
                borderColor: 'primary.main',
                minHeight: 280,
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
                    src={userDoc.favDriver.image}
                    alt={userDoc.favDriver.name}
                    style={{
                      maxWidth: '200px',
                      maxHeight: '240px',
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

          {/* Stats Section - Compact */}
          <Box sx={{ p: 3, textAlign: 'center', backgroundColor: 'background.paper', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              variant="h5"
              component="h3"
              fontWeight="bold"
              mb={1}
            >
              {userDoc.favDriver.name}
            </Typography>
            
            {teamName && (
              <Chip
                label={teamName}
                size="small"
                color="primary"
                variant="outlined"
                sx={{ mb: 2 }}
              />
            )}

            <Stack 
              direction="row" 
              spacing={3} 
              justifyContent="center"
              divider={<Box sx={{ borderLeft: 1, borderColor: 'divider' }} />}
              sx={{ mt: 2 }}
            >
              <Box>
                <Typography variant="body2" color="text.secondary" mb={0.5}>
                  Position
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {(userDoc.favDriver as any).position || '-'}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary" mb={0.5}>
                  Points
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {(userDoc.favDriver as any).points || userDoc.favDriver.career_points || '-'}
                </Typography>
              </Box>

              <Box>
                <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="center" mb={0.5}>
                  <EmojiEventsIcon sx={{ fontSize: 16, color: 'warning.main' }} />
                  <Typography variant="body2" color="text.secondary">
                    Wins
                  </Typography>
                </Stack>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {(userDoc.favDriver as any).wins || 0}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Paper>
    </Box>
  );
}

