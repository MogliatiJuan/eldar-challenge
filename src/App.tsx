import { BrowserRouter, Route, Navigate } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
import { Box, Skeleton, Typography } from '@mui/material';
import { AuthGuard } from '@guards/index';
import { PrivateRoutes, PublicRoutes } from '@models/index';
import { Layout, NotFound } from '@components/index';

const Login = lazy(() => import('@pages/Login/Login'));
const Dashboard = lazy(() => import('@pages/Dashboard/Dashboard'));

const App: React.FC = () => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Box
            sx={{
              width: { xs: '80%', sm: '50%', md: '40%' },
              padding: '1rem',
              textAlign: 'center',
            }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
              <Skeleton
                variant='circular'
                width={80}
                height={80}
                sx={{ margin: '0 auto' }}
              />
              <Skeleton
                variant='rectangular'
                width={160}
                height={60}
                sx={{ margin: '0 auto' }}
              />
            </Box>
            <Typography variant='h4' sx={{ mt: '0.5rem' }}>
              <Skeleton width='60%' sx={{ margin: '0 auto' }} />
            </Typography>
            <Skeleton variant='text' sx={{ width: '40%', fontSize: '1rem' }} />{' '}
            <Skeleton
              variant='rectangular'
              width='100%'
              height={56}
              sx={{ mb: '1rem' }}
            />
            <Skeleton variant='text' sx={{ width: '40%', fontSize: '1rem' }} />
            <Skeleton
              variant='rectangular'
              width='100%'
              height={56}
              sx={{ mb: '1rem' }}
            />
            <Skeleton variant='rectangular' width='100%' height={40} />
          </Box>
        </Box>
      }>
      <BrowserRouter>
        <NotFound>
          <Route path='/' element={<Layout />}>
            <Route
              path='/'
              element={<Navigate to={PublicRoutes.LOGIN} replace />}
            />

            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
          </Route>
        </NotFound>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
