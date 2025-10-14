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
import { TeamStanding } from '@/shared/types/f1Types';

interface TeamCardProps {
  team: TeamStanding;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
}

export default function TeamCard({
  team,
  isFavorite = false,
  onFavoriteClick,
}: TeamCardProps) {
  return (
    <Card
      sx={{
        width: 320,
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
        height="200"
        image={team.team.logo}
        alt={team.team.name}
        sx={{
          objectFit: 'contain',
          backgroundColor: 'grey.100',
          p: 3,
        }}
      />

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Chip
            label={`Position: ${team.position}`}
            color="primary"
            size="small"
            sx={{ fontWeight: 600 }}
          />
        </Box>

        <Typography
          variant="h5"
          component="h3"
          fontWeight="bold"
          textAlign="center"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {team.team.name}
        </Typography>

        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="h5" color="primary" component="span" fontWeight="bold">
            {team.points || 0}
          </Typography>
          <Typography variant="body1" color="text.secondary" component="span" ml={1}>
            Points
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" textAlign="center">
          Season {team.season}
        </Typography>
      </CardContent>
    </Card>
  );
}

