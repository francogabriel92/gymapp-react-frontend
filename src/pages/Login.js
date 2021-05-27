import React from 'react';
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';

const Login = ({ loginHandler }) => {
  return(
    <div>
      <h2>Login</h2>
      <LoginForm loginHandler={loginHandler} />
      <p>Not registered yet?</p>
      <Link to='/register'>
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default Login;