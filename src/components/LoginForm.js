import { Field, Formik } from 'formik';
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextField from '../components/FormTextField';
import loginService from '../services/login';

const initialValues = {
  username: '',
  password: '',
  remember: false
};

const LoginForm = ({ loginHandler, redirectHandler }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={ async ( values, actions ) => {
      try {
        const user = await loginService(values);
        loginHandler(user);
        window.localStorage.setItem('loggedGymAppUser', JSON.stringify(user));
        actions.setSubmitting(false);
        actions.resetForm()
        redirectHandler(true);
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
                type='submit'
                disabled={isSubmitting}
                variant='light'
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
          <Form.Group>
            <Link to='/signup'>
              <Button variant='success' >Sign Up</Button>
            </Link>
          </Form.Group>
          </Col>
        </Row>
      </Form>
    )}
  </Formik>
);

export default LoginForm;