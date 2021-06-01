import React from 'react';
import { Formik } from 'formik';
import { Form, Row, Col, Button } from 'react-bootstrap';
import TextField from './FormTextField';
import clientSchema from '../validations/ClientValidation';

const initialValues = {
  name: '',
  mail: '',
  address: '',
  city:'',
  birthDate: null,
  phone: '',
  gender: '',
};

const AddClientForm = () => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values, actions) =>{
      setTimeout(() => {
        console.log(values);
        console.log(actions);
      }, 2000)
    }}
    validationSchema={clientSchema}
  >
    {({ handleChange, handleSubmit, isSubmitting, resetForm, values, errors, touched }) => (
      <Form className='m-4' onSubmit={handleSubmit}>
        <Row>
          <Col>
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
              <Button className ='mr-4' type='submit'>Create client</Button>
              <Button onClick={resetForm} >Clear</Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    )}
  </Formik>
)

export default AddClientForm
