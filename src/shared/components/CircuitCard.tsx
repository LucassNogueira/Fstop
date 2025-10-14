'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Race } from '@/shared/types/f1Types';

interface CircuitCardProps {
  circuit: Race;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

export default function CircuitCard({
  circuit,
  isFavorite = false,
  onFavoriteClick,
}: CircuitCardProps) {
  return (
    <Card
      sx={{
        width: 350,
        height: 380,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.2s',
        },
      }}
    >
      <IconButton
        onClick={onFavoriteClick}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        {isFavorite ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorder />
        )}
      </IconButton>

      <CardMedia
        component="img"
        height="180"
        image={circuit.circuit.image}
        alt={circuit.competition.name}
        sx={{
          objectFit: 'contain',
          backgroundColor: 'grey.100',
          p: 2,
        }}
      />

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Chip
            label={`${circuit.laps.total} Laps`}
            color="primary"
            size="small"
            sx={{ fontWeight: 600 }}
          />
        </Box>

        <Typography
          variant="h6"
          component="h3"
          fontWeight="bold"
          textAlign="center"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            minHeight: '3.6em',
          }}
        >
          {circuit.competition.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          City: {circuit.competition.location.city}
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body1" color="primary" component="span" fontWeight="bold">
            {circuit.distance}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span" ml={1}>
            Long
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

