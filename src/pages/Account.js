import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const Account = (props) => {

  const [ redirect, setRedirect ] = useState(false);
  if (redirect) {
    return <Redirect to='/home' /> 
  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedGymAppUser');
    props.loginHandler(null);
    setRedirect(true);
  }; 

  return (
    <Container className='text-center'>
      <h3>Under construction</h3>
      <Button variant='dark' onClick={() => handleLogout()}>Logout</Button>
    </Container>
  );
};

export default Account;