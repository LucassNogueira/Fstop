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
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
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
                '&:hover': { color: 'primary.main' },
              }}
            >
              Home
            </Typography>
          </Link>

          {user && (
            <>
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
              >
                <MenuItem
                  onClick={() => {
                    router.push('/profile');
                    handleClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    router.push('/drivers');
                    handleClose();
                  }}
                >
                  Drivers
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    router.push('/teams');
                    handleClose();
                  }}
                >
                  Teams
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    router.push('/circuits');
                    handleClose();
                  }}
                >
                  Circuits
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    router.push('/news');
                    handleClose();
                  }}
                >
                  News
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

