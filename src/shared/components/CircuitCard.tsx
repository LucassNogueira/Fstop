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
        width: 320,
        minHeight: 400,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.2s',
          boxShadow: 4,
        },
      }}
    >
      <IconButton
        onClick={onFavoriteClick}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 1)',
          },
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
        height="200"
        image={circuit.circuit.image}
        alt={circuit.competition.name}
        sx={{
          objectFit: 'contain',
          backgroundColor: 'grey.100',
          p: 2,
        }}
      />

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5, pb: 2 }}>
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
            lineHeight: 1.3,
            minHeight: '2.6em',
            fontSize: '1rem',
          }}
        >
          {circuit.competition.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {circuit.competition.location.city}, {circuit.competition.location.country}
        </Typography>

        <Box sx={{ textAlign: 'center', mt: 'auto' }}>
          <Typography variant="body1" color="primary" component="span" fontWeight="bold">
            {circuit.distance}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

