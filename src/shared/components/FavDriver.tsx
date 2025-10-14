'use client';

import React from 'react';
import { Box, Container, Typography, Paper, Stack } from '@mui/material';
import Image from 'next/image';
import { useAuth } from '@/shared/contexts/AuthContext';

export default function FavDriver() {
  const { userDoc } = useAuth();

  if (!userDoc?.favDriver) return null;

  const driverSearch = userDoc.favDriver.name.replace(' ', '_');

  return (
    <Box sx={{ py: 4, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: 'column', lg: 'row' }}
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ flex: { lg: '0 0 58%' } }}>
            <Typography
              variant="h2"
              component="h2"
              fontWeight="bold"
              textAlign="center"
              mb={4}
              sx={{ fontSize: { xs: '2.5rem', sm: '4rem', lg: '5rem' } }}
            >
              {userDoc.favDriver.name}
            </Typography>

            <Paper elevation={3}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                divider={<Box sx={{ borderRight: { sm: 1 }, borderColor: 'divider' }} />}
              >
                <Box
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    flex: 1,
                    borderBottom: { xs: 1, sm: 0 },
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Career Points
                  </Typography>
                  <Typography variant="h4" color="primary" fontWeight="bold" mt={1}>
                    {userDoc.favDriver.career_points}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    flex: 1,
                    borderBottom: { xs: 1, sm: 0 },
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Podiums
                  </Typography>
                  <Typography variant="h4" color="primary" fontWeight="bold" mt={1}>
                    {userDoc.favDriver.podiums}
                  </Typography>
                </Box>

                <Box sx={{ p: 3, textAlign: 'center', flex: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Races Entered
                  </Typography>
                  <Typography variant="h4" color="primary" fontWeight="bold" mt={1}>
                    {userDoc.favDriver.grands_prix_entered}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>

          {userDoc.halfImg && (
            <Box sx={{ flex: { lg: '0 0 42%' } }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <a
                  href={`https://en.wikipedia.org/wiki/${driverSearch}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={userDoc.halfImg.img}
                    alt={userDoc.favDriver.name}
                    width={400}
                    height={480}
                    style={{
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                </a>
              </Box>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

