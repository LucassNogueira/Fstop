'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import NavBar from '@/shared/components/NavBar';
import Footer from '@/shared/components/Footer';
import NewsCards from '@/shared/components/NewsCard';

export default function NewsPage() {
  return (
    <>
      <NavBar />
      <Box sx={{ minHeight: '100vh', pt: 10, pb: 4, backgroundColor: 'background.default' }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            textAlign="center"
            mb={4}
            mt={2}
          >
            Latest F1 News
          </Typography>
          <NewsCards />
        </Container>
      </Box>
      <Footer />
    </>
  );
}

