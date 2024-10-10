import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

interface NotFoundProps {
  children: React.ReactNode;
}

const NotFound: React.FC<NotFoundProps> = ({ children }: NotFoundProps) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Routes>
      {children}
      <Route
        path='/*'
        element={
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '100vh',
              textAlign: 'center',
            }}>
            <Typography variant='h4' gutterBottom>
              Página no encontrada
            </Typography>
            <Typography variant='body1' color='textSecondary' paragraph>
              Al parecer, la página que intentas ingresar no existe
            </Typography>
            <Button
              variant='contained'
              color='primary'
              startIcon={<HomeIcon />}
              onClick={handleGoHome}>
              Ir al inicio
            </Button>
          </Box>
        }
      />
    </Routes>
  );
};

export default NotFound;
