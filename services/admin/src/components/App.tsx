import React from 'react';
import { Outlet } from 'react-router-dom';
import { deepMerge } from '@packages/shared/src/utils/deepMerge';
import { UserCard } from '@packages/shared/src/components/UserCard';

export const App = () => {
  deepMerge();

  return (
    <div>
      <h1>ADMIN_MODULE</h1>
      <Outlet />
      <UserCard userName="From admin" />
    </div>
  );
};
