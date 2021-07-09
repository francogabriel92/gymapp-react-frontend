import React from 'react';
import { Formik } from 'formik';
import { Form, Row, Col, Button } from 'react-bootstrap';
import TextField from './FormTextField';
import clientSchema from '../validations/ClientValidation';
import clientService from '../services/client';

const initialValues = {
  name: '',
  mail: '',
  address: '',
  city:'',
  birthDate: '',
  phone: '',
  gender: '',
  subQty:'',
  subType:''
};

const AddClientForm = ({ user, modalHandler, clientList, clientListHandler }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={ async (values, actions) =>{
      const newClient = { ...values };
      try {
        const response = await clientService.create(newClient, user.token);
        clientListHandler(clientList.concat(response.data));
        modalHandler(true);
        actions.resetForm();
        actions.setSubmitting(false);
      }
      catch(error) {
        console.log(error);
        actions.setSubmitting(false);
      };
    }}
    validationSchema={clientSchema}
  >
    {({ handleChange, handleSubmit, isValid, isSubmitting, resetForm, values, errors }) => (
      <Form className='m-4' onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <TextField
             label='Fullname'
             name='name'
             onChange={handleChange}
             value={values.name}
             error={errors.name}
            />
            <TextField
             label='Mail'
             name='mail'
             onChange={handleChange}
             value={values.mail}
             error={errors.mail}
            />
            <TextField
             label='Address'
             name='address'
             onChange={handleChange}
             value={values.address}
             error={errors.address}
            />
            <Form.Group>
              <Form.Label>Birthdate</Form.Label>
              <Form.Control
                name='birthDate'
                type='date'
                value={values.birthDate}
                onChange={handleChange}
                error={errors.birthDate}
              />
            </Form.Group>
          </Col>
          <Col>
            <TextField
             label='City'
             name='city'
             onChange={handleChange}
             value={values.city}
             error={errors.city}
            />
            <TextField
             label='Phone'
             name='phone'
             onChange={handleChange}
             value={values.phone}
             error={errors.phone}
            />
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              { values.gender.touched && values.gender.error && <div className='mt-2 text-danger'>{values.gender.error}</div> }
              <Form.Check 
                type='radio'
                id='gender-male'
                label='Male'
                name='gender'
                value='male'
                onChange={handleChange}
              />
              <Form.Check
                type='radio'
                label='Female'
                id='gender-female'
                name='gender'
                value='female'
                onChange={handleChange}
              />
              <Form.Check
                type='radio'
                label='Other'
                id='gender-other'
                name='gender'
                value='other'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <TextField
                label='Subscription time'
                className={{ width: '40%' }}
                type='number'
                name='subQty'
                onChange={handleChange}
                value={values.subQty}
                error={errors.subQty}
              />
              <Form.Check
                type='radio'
                label='Months'
                id='sub-months'
                name='subType'
                value='months'
                onChange={handleChange}
              />
              <Form.Check
                type='radio'
                label='Days'
                id='sub-days'
                name='subType'
                value='days'
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='mt-3 justify-content-center'>
          <Form.Group>
            <Button
              variant='dark'
              className ='mr-4'
              type='submit'
              disabled={ !isValid || isSubmitting}
            >
              Create client
            </Button>
            <Button variant='secondary' onClick={resetForm} >Clear</Button>
          </Form.Group>
        </Row>
      </Form>
    )}
  </Formik>
)

export default AddClientForm
