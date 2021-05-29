import React from 'react';

const Account = (props) => {

  const handleLogout = () => {
    window.localStorage.removeItem('loggedGymAppUser');
    props.loginHandler(null)
  }; 

  return (
    <div>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Account;