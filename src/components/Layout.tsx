import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useLoaderStore } from '@store/loaderStore';
import { Loader, Header } from '@components/index';

const Layout: React.FC = () => {
  const { loader } = useLoaderStore();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box
        component='main'
        sx={{
          height: '100%',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {loader && <Loader />}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
