import { Navigate, Outlet } from 'react-router-dom';
import { PublicRoutes } from '@models/index';
import React from 'react';
import { useAuthStore } from '@store/index';

const AuthGuard: React.FC = () => {
  const { user } = useAuthStore();

  return user?.username ? (
    <Outlet />
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};
export default AuthGuard;
