'use client';

import React, { useMemo } from 'react';
import { Box, Container, Typography, Card, CardContent, CardMedia, Avatar, Stack } from '@mui/material';

interface NewsPost {
  title: string;
  description: string;
  imageUrl: string;
  readingTime: string;
  author: {
    name: string;
    imageUrl: string;
  };
}

const newsPosts: NewsPost[] = [
  {
    title: "Norris finally speaks up!",
    description: "Lando Norris has conceded that moods have dipped at McLaren, who sit eighth in the championship ahead of this weekend's 2022 Australian Grand Prix – but the squad are still motivated to push on and recover.",
    imageUrl: "/media/newsimg/norris.png",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Does Ferrari have what it takes?",
    description: "Ferrari Team Principal Mattia Binotto has acknowledged that while his squad \"lost ground\" to rivals in previous years, they are now primed for a tough development war as they aim to win their first championship since 2008.",
    imageUrl: "/media/newsimg/ferrari.png",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      imageUrl: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    title: "Magnussen scores big for Haas!",
    description: "Haas F1 Team Principal Guenther Steiner has spoken about Kevin Magnussen's improved motivation and maturity after the Dane spent a year out of Formula 1 before returning in 2022 with the rejuvenated squad.",
    imageUrl: "/media/newsimg/haas.png",
    readingTime: "5 min",
    author: {
      name: "Daniela Metz",
      imageUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function NewsCards() {
  const randomPosts = useMemo(() => {
    return [...newsPosts].sort(() => 0.5 - Math.random()).slice(0, 3);
  }, []);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            mb={2}
            sx={{ fontSize: { xs: '2.5rem', lg: '3.5rem' } }}
          >
            From the pits
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            The latest Formula 1 news, events and reactions. With breaking stories, results,
            upcoming races and team and driver news.
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={4}
          flexWrap="wrap"
          useFlexGap
          sx={{
            '& > *': {
              flexBasis: { xs: '100%', md: 'calc(50% - 16px)', lg: 'calc(33.333% - 21.333px)' },
            },
          }}
        >
          {randomPosts.map((post, index) => (
            <Card
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={post.imageUrl}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h5" component="h3" fontWeight="bold" mb={2}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>
                  {post.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                  <Avatar src={post.author.imageUrl} alt={post.author.name} />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="body2" fontWeight="600">
                      {post.author.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {post.readingTime} read
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

