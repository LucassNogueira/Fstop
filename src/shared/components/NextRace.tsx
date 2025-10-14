'use client';

import React, { useMemo } from 'react';
import { Box, Typography, Stack, Paper } from '@mui/material';
import Image from 'next/image';
import { useGetRaces } from '@/shared/hooks/queries/useGetRaces';
import { format } from 'date-fns';

export default function NextRace() {
  const { data: races } = useGetRaces(2023, 'race');

  const nextRace = useMemo(() => {
    return races?.find((race) => race.status === 'Scheduled');
  }, [races]);

  if (!nextRace) return null;

  const formatDate = (dateStr: string) => {
    try {
      return format(new Date(dateStr), 'MM/dd/yyyy');
    } catch {
      return dateStr;
    }
  };

  const raceDistance = nextRace.distance
    ? (Number(nextRace.distance.slice(0, 5)) / 1.609).toFixed(0)
    : '0';

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'grey.900',
        overflow: 'hidden',
        py: { xs: 6, lg: 0 },
      }}
    >
      <Stack direction={{ xs: 'column', lg: 'row' }}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'background.default',
            p: 3,
            flex: { lg: '0 0 33%' },
            minHeight: 400,
          }}
        >
          {nextRace.circuit.image && (
            <Image
              src={nextRace.circuit.image}
              alt={nextRace.circuit.name}
              fill
              sizes="400px"
              style={{ objectFit: 'contain' }}
            />
          )}
        </Box>

        <Box
          sx={{
            p: { xs: 4, sm: 6, lg: 8 },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: { lg: 400 },
            flex: 1,
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              color: 'grey.300',
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', sm: '3rem' },
            }}
          >
            Petrol is in the air at the
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '1.5rem', sm: '2rem' },
            }}
          >
            {nextRace.competition.name}
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            useFlexGap
            sx={{ '& > *': { flexBasis: { xs: 'calc(50% - 8px)', sm: 'calc(25% - 12px)' } } }}
          >
            <Paper sx={{ p: 2, textAlign: 'center', minWidth: 120 }}>
              <Typography variant="body2" color="text.secondary">
                Country
              </Typography>
              <Typography variant="h6" color="primary" fontWeight="bold">
                {nextRace.competition.location.country}
              </Typography>
            </Paper>

            <Paper sx={{ p: 2, textAlign: 'center', minWidth: 120 }}>
              <Typography variant="body2" color="text.secondary">
                Laps
              </Typography>
              <Typography variant="h6" color="primary" fontWeight="bold">
                {nextRace.laps.total}
              </Typography>
            </Paper>

            <Paper sx={{ p: 2, textAlign: 'center', minWidth: 120 }}>
              <Typography variant="body2" color="text.secondary">
                Race Distance
              </Typography>
              <Typography variant="h6" color="primary" fontWeight="bold">
                {raceDistance} Miles
              </Typography>
            </Paper>

            <Paper sx={{ p: 2, textAlign: 'center', minWidth: 120 }}>
              <Typography variant="body2" color="text.secondary">
                Date
              </Typography>
              <Typography variant="h6" color="primary" fontWeight="bold">
                {formatDate(nextRace.date.slice(0, 10))}
              </Typography>
            </Paper>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

