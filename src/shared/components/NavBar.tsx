'use client';

import React from 'react';
import Link from 'next/link';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  ListItemIcon,
} from '@mui/material';
import { 
  AccountCircle, 
  Person,
  Logout,
} from '@mui/icons-material';
import Image from 'next/image';
import { useAuth } from '@/shared/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { logOut } from '@/shared/utils/authUtils';

export default function NavBar() {
  const { user } = useAuth();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
      handleClose();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: 1,
        height: 64,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Link href={user ? '/logged' : '/'} passHref>
          <Box sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <Image
              src="/media/logof1.svg"
              alt="F1 Logo"
              width={80}
              height={36}
              priority
            />
          </Box>
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Link href={user ? '/logged' : '/'} passHref style={{ textDecoration: 'none' }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 600,
                color: 'text.primary',
                cursor: 'pointer',
                transition: 'color 0.2s',
                '&:hover': { color: 'primary.main' },
              }}
            >
              Home
            </Typography>
          </Link>

          {user && (
            <>
              <Link href="/drivers" passHref style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  Drivers
                </Typography>
              </Link>

              <Link href="/teams" passHref style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  Teams
                </Typography>
              </Link>

              <Link href="/circuits" passHref style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  Circuits
                </Typography>
              </Link>

              <Link href="/news" passHref style={{ textDecoration: 'none' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' },
                  }}
                >
                  News
                </Typography>
              </Link>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  '& .MuiPaper-root': {
                    minWidth: 180,
                  },
                }}
              >
                <MenuItem
                  onClick={() => {
                    router.push('/profile');
                    handleClose();
                  }}
                >
                  <ListItemIcon>
                    <Person fontSize="small" />
                  </ListItemIcon>
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

