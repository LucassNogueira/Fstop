'use client';

import React from 'react';
import Link from 'next/link';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Image from 'next/image';
import { useAuth } from '@/shared/contexts/AuthContext';

export default function Footer() {
  const { user } = useAuth();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: 2,
        borderColor: 'divider',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href={user ? '/logged' : '/'} passHref>
          <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/media/logof1.svg"
              alt="F1 Logo"
              width={80}
              height={36}
            />
          </Box>
        </Link>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mt: { xs: 2, sm: 0 },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          © {new Date().getFullYear()} FStop —
          <Typography
            component="a"
            href="https://www.linkedin.com/in/lucas-nogueira-34aa41228/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ml: 1,
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            @LucasNogueira
          </Typography>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            gap: 1,
            mt: { xs: 2, sm: 0 },
          }}
        >
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/lucas-nogueira-34aa41228/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="inherit"
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/lucas-nogueira-34aa41228/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="inherit"
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/lucas-nogueira-34aa41228/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="inherit"
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/lucas-nogueira-34aa41228/"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            color="inherit"
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

