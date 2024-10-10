import React from 'react';
import { Box, Button, Link } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthStore } from '@store/authStore';
const Header: React.FC = () => {
  const { token, logout, user } = useAuthStore();

  return (
    <Box
      component='header'
      sx={{
        width: '100%',
        pt: '1rem',
        px: '2rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Link href='/' underline='none'>
        {user ? `ELDAR - ${user.username.toUpperCase()}` : 'ELDAR'}
      </Link>
      {token && (
        <Button
          type='submit'
          variant='contained'
          onClick={() => {
            logout();
          }}>
          Cerrar sesión
          <Box component='label' sx={{ pl: 1, lineHeight: 0 }}>
            <LogoutIcon />
          </Box>
        </Button>
      )}
    </Box>
  );
};

export default Header;
