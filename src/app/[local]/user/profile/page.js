import React from 'react';
import LogoutButton from '@/components/logout-button/LogoutButton';

const ProfilePage = () => {
  return (
    <div>
      <h1>Vous êtes connecté</h1>
      <LogoutButton />
    </div>
  );
};

export default ProfilePage;
