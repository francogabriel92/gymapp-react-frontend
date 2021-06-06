import { Field, Formik } from 'formik';
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import TextField from '../components/FormTextField';
import loginService from '../services/login';

const initialValues = {
  username: '',
  password: '',
  remember: false
};

const LoginForm = ({ loginHandler }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={ async ( values, actions ) => {
      try {
        const user = await loginService(values);
        loginHandler(user);
        window.localStorage.setItem('loggedGymAppUser', JSON.stringify(user));
        actions.setSubmitting(false);
        actions.resetForm()
        return <Redirect to='/home' />
      }
      catch (error) {
        
      }
    }}
  >
    {({ handleChange, handleSubmit, isSubmitting, values, errors }) => (
      <Form className='text-center' onSubmit={handleSubmit}>
        <Row>
          <Col>
            <TextField
             label='Username'
             name='username'
             onChange={handleChange}
             value={values.username}
             error={errors.username}
            />
            <TextField
             label='Password'
             name='password'
             type='password'
             onChange={handleChange}
             value={values.mail}
             error={errors.mail}
            />
            <Form.Group>
              <Form.Label>Remember me?</Form.Label>
              <Field type='checkbox' name='remember' className='ml-2'  />
            </Form.Group>
            <Form.Group>
              <Button 
                className ='mr-4'
                type='submit'
                disabled={isSubmitting}
              >
                Login
              </Button>   
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col  >
            <Form.Label>Not registered yet?</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={() => <Link to='/register'/>} >Sign Up</Button>
          </Col>
        </Row>
      </Form>
    )}
  </Formik>
)
/*{
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

};*/

export default LoginForm;