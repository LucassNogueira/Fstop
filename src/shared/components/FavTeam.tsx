'use client';

import React, { useEffect, useRef } from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import { useAuth } from '@/shared/contexts/AuthContext';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function FavTeam() {
  const { userDoc } = useAuth();
  const containerRef = useRef<HTMLDivElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && paperRef.current) {
      console.log('🏁 FAVTEAM MEASUREMENTS:');
      console.log('  Container height:', containerRef.current.offsetHeight);
      console.log('  Container clientHeight:', containerRef.current.clientHeight);
      console.log('  Paper height:', paperRef.current.offsetHeight);
      console.log('  Paper clientHeight:', paperRef.current.clientHeight);
      console.log('  Paper scrollHeight:', paperRef.current.scrollHeight);
      console.log('  Computed height:', window.getComputedStyle(containerRef.current).height);
      console.log('---');
    }
  }, [userDoc]);

  if (!userDoc?.favTeam) return null;

  const team = userDoc.favTeam;

  return (
    <Box ref={containerRef} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography
        variant="h5"
        component="h2"
        fontWeight="bold"
        textAlign="center"
        mb={2}
        sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}
      >
        Favorite Team
      </Typography>

      <Paper 
        ref={paperRef}
        elevation={6}
        sx={{
          overflow: 'hidden',
          borderRadius: 3,
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
          {/* Logo Section - Full Width */}
          {team.logo && (
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
                  src={team.logo}
                  alt={team.name}
                  style={{
                    maxWidth: '200px',
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

          {/* Stats Section - Compact */}
          <Box sx={{ p: 3, textAlign: 'center', backgroundColor: 'background.paper', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              variant="h5"
              component="h3"
              fontWeight="bold"
              mb={1}
            >
              {team.name}
            </Typography>

            <Stack 
              direction="row" 
              spacing={3} 
              justifyContent="center"
              divider={<Box sx={{ borderLeft: 1, borderColor: 'divider' }} />}
              sx={{ mt: 2 }}
            >
              <Box>
                <Typography variant="body2" color="text.secondary" mb={0.5}>
                  Base
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {team.base || 'N/A'}
                </Typography>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary" mb={0.5}>
                  First Entry
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {team.first_team_entry || 'N/A'}
                </Typography>
              </Box>

              <Box>
                <Stack direction="row" spacing={0.5} alignItems="center" justifyContent="center" mb={0.5}>
                  <EmojiEventsIcon sx={{ fontSize: 16, color: 'warning.main' }} />
                  <Typography variant="body2" color="text.secondary">
                    Titles
                  </Typography>
                </Stack>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {team.world_championships || 0}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Paper>
    </Box>
  );
}

