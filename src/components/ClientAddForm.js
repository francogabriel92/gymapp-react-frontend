import React, { useState } from 'react';
import { Form, Modal, Button } from 'react-bootstrap';
import useForm from './useForm';
import clientSchema from '../validations/ClientValidation'
import clientService from '../services/client';

const initialValues = {
  name: '',
  mail: '',
  address: '',
  city:'',
  birthDate: undefined,
  phone: '',
  gender: '',
};

const ClientForm = ({ user, clientList, clientListHandler, handleClose}) => {
/*
  const submitHandler = async e => {
    const token = user.token;
    e.preventDefault();
    const response = await clientService.create('aca va algooooooo',token);
    clientListHandler([...clientList, response.data]);
  }; */

  const { values, setValues, handleInputChange, handleSubmit, errors } = useForm(initialValues, clientSchema);

  return (
    <div>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Fullname</Form.Label>
            <Form.Control
              name='name'
              type='text'
              value={values.name}
              onChange={handleInputChange}
              placeholder='Enter name'
              autofocus
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Mail</Form.Label>
            <Form.Control
              name='mail'
              type='mail'
              value={values.mail}
              onChange={handleInputChange}
              placeholder='mail@example.com'
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              name='address'
              type='text'
              value={values.address}
              onChange={handleInputChange}
              placeholder='Enter address'
              
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              name='city'
              type='text'
              value={values.city}
              onChange={handleInputChange}
              placeholder='Enter city'
              
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Birthdate</Form.Label>
            <Form.Control
              name='birthDate'
              type='date'
              value={values.birthDate}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name='phone'
              type='text'
              value={values.phone}
              onChange={handleInputChange}
              placeholder='Enter phone number'
              
            />
          </Form.Group>
         
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Check 
                type='radio'
                id='gender-male'
                label='Male'
                name='gender'
                value='male'
                onChange={handleInputChange}
              />
              <Form.Check
                type='radio'
                label='Female'
                id='gender-female'
                name='gender'
                value='female'
                onChange={handleInputChange}
              />
              <Form.Check
                type='radio'
                label='Other'
                id='gender-other'
                name='gender'
                value='other'
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Button className='m-2' type='submit'>Add client</Button>
              <Button variant='secondary' onClick={() => setValues(initialValues)}>Clear</Button>
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default ClientForm;