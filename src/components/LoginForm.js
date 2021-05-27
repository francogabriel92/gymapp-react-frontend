import React, { useState } from 'react';
import loginService from '../services/login';

const LoginForm = ({ loginHandler }) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const user = await loginService({ username, password});
      setUsername('');
      setPassword('');
      loginHandler(user);
      window.localStorage.setItem('loggedGymAppUser', JSON.stringify(user));
    }
    catch (error) {

    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type='text'
            value={username}
            onChange={ e => setUsername(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={ e => setPassword(e.target.value)}
          >
          </input>
        </div>
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};

export default LoginForm;