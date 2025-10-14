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
  Button,
} from '@mui/material';
import { Favorite, FavoriteBorder, CompareArrows } from '@mui/icons-material';
import { DriverStanding } from '@/shared/types/f1Types';

interface DriverCardProps {
  driver: DriverStanding;
  isFavorite?: boolean;
  onFavoriteClick?: () => void;
  onCompare1Click?: () => void;
  onCompare2Click?: () => void;
}

export default function DriverCard({
  driver,
  isFavorite = false,
  onFavoriteClick,
  onCompare1Click,
  onCompare2Click,
}: DriverCardProps) {
  return (
    <Card
      sx={{
        width: 280,
        height: 450,
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
        height="240"
        image={driver.driver.image}
        alt={driver.driver.name}
        sx={{
          objectFit: 'contain',
          backgroundColor: 'grey.100',
        }}
      />

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Chip
            label={`Rank: ${driver.position}`}
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
            whiteSpace: 'nowrap',
          }}
        >
          {driver.driver.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          {driver.team.name}
        </Typography>

        <Box sx={{ textAlign: 'center', mt: 1 }}>
          <Typography variant="h6" color="primary" component="span" fontWeight="bold">
            {driver.points || 0}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="span" ml={1}>
            Points
          </Typography>
        </Box>

        {(onCompare1Click || onCompare2Click) && (
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mt: 'auto' }}>
            {onCompare1Click && (
              <Button
                variant="outlined"
                size="small"
                onClick={onCompare1Click}
                startIcon={<CompareArrows />}
              >
                Compare 1
              </Button>
            )}
            {onCompare2Click && (
              <Button
                variant="outlined"
                size="small"
                onClick={onCompare2Click}
                startIcon={<CompareArrows sx={{ transform: 'rotate(180deg)' }} />}
              >
                Compare 2
              </Button>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

