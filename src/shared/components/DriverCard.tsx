'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
} from '@mui/material';
import { Favorite, FavoriteBorder, CompareArrows } from '@mui/icons-material';
import Image from 'next/image';
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
        minHeight: 420,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-4px)',
          transition: 'transform 0.2s',
          boxShadow: 6,
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

      {/* Native size image - no forced dimensions */}
      <Box
        sx={{
          width: '100%',
          minHeight: 180,
          maxHeight: 260,
          backgroundColor: 'grey.100',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          p: 1.5,
        }}
      >
        <img
          src={driver.driver.image}
          alt={driver.driver.name}
          style={{
            maxWidth: '100%',
            maxHeight: '260px',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          }}
          loading="lazy"
        />
      </Box>

      <CardContent 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 1.5,
          pt: 2,
          pb: 2,
        }}
      >
        {/* Rank badge */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip
            label={`#${driver.position}`}
            color="primary"
            size="medium"
            sx={{ fontWeight: 700, fontSize: '0.9rem' }}
          />
          <Typography variant="body2" color="text.secondary">
            {driver.wins} {driver.wins === 1 ? 'Win' : 'Wins'}
          </Typography>
        </Box>

        {/* Driver name */}
        <Typography
          variant="h6"
          component="h3"
          fontWeight="bold"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontSize: '1.1rem',
          }}
        >
          {driver.driver.name}
        </Typography>

        {/* Team name */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {driver.team.name}
        </Typography>

        {/* Points display */}
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'baseline', 
            gap: 0.5,
            mt: 0.5,
          }}
        >
          <Typography variant="h5" color="primary" fontWeight="bold">
            {driver.points || 0}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            points
          </Typography>
        </Box>

        {/* Action buttons */}
        {(onCompare1Click || onCompare2Click) && (
          <Box sx={{ display: 'flex', gap: 1, mt: 'auto', pt: 1 }}>
            {onCompare1Click && (
              <Button
                variant="outlined"
                size="small"
                onClick={onCompare1Click}
                startIcon={<CompareArrows />}
                fullWidth
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
                fullWidth
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

