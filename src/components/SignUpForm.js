import React from 'react';
import { Formik } from 'formik';
import businessSchema from '../validations/BusinessValidation';
import businessService from '../services/business';
import { Form, Col, Row, Button } from 'react-bootstrap';
import TextField from '../components/FormTextField';

 

const initialValues = {
  name: '',
  username: '',
  password: '',
  passwordConfirm: ''
};

const SignUpForm = ({redirectHandler}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={ async (values, actions ) => {
      try {
        const newBusiness = {
          ...values
        }
        const response = await businessService.create(newBusiness);
        console.log(response);
        actions.resetForm();
        actions.setSubmitting(false);
        redirectHandler(true);
      }
      catch (error) {
        console.log(error);
        actions.setSubmitting(false);
      }
    }}
    validationSchema={businessSchema}
  >
    {({ handleChange, handleSubmit, isSubmitting, isValid, values, errors }) => (
      <Form className='text-center' onSubmit={handleSubmit}>
        <Row>
          <Col>
            <TextField 
              label='Name'
              name='name'
              onChange={handleChange}
              value={values.name}
              error={errors.name}
            />
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
              value={values.password}
              error={errors.password}
            />
            <TextField 
              label='Confirm password'
              name='passwordConfirm'
              type='password'
              onChange={handleChange}
              value={values.passwordConfirm}
              error={errors.passwordConfirm}
            />
          </Col>
        </Row>
        <Row>
          <Col>
           <Button
            variant='success'
            type='submit'
            disabled={ !isValid || isSubmitting}
            >
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    )}
  </Formik>
);



export default SignUpForm;
