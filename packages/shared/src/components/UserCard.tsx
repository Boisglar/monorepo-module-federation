import React from 'react';

export const UserCard = ({ userName }: { userName?: string }) => {
  return (
    <div style={{ border: '1px solid red', padding: 20 }}>
      <div>username: {userName ?? 'user'}</div>
      <div>password: 12345</div>
    </div>
  );
};
