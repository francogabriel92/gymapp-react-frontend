import React from 'react';

const Account = () => {

  const handleLogout = () => {
    console.log('Remove');
    window.localStorage.removeItem('loggedGymAppUser');
  }; 

  return (
    <div>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Account;