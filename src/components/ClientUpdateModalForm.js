import React, { useState } from 'react';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
import clientService from '../services/client';

const ClientUpdateModalForm = ({ open, handleOpen, title, label, value, client, token, currentClientHandler, listHandler, list }) => {
  const [ newValue, setNewValue ] = useState(value);
  const [ error, setError ] = useState('');
  let property = label === 'Birthday' ? 'birthDate' : label.toLowerCase();
  const handleError = message => {
    setError(message);
    setTimeout(() => setError(''), 5000);
  }
  const handleClose = () => handleOpen(false);
  const handleChange = e => setNewValue(e.target.value);
  const validate = (field, value) => {
    switch (field) {
      case 'mail':
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
          handleError('Invalid mail.');
          return false;
        } else {
          return true;
        };
      case 'gender':
        const lowerCaseValue = value.toLowerCase();
        if (lowerCaseValue === 'male' || lowerCaseValue === 'female' || lowerCaseValue === 'other'){
          return true;
        } else {
          handleError('You must enter male, female or other');
          return false;
        };
      default:
        return true;
    };
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const newField = { [property]: newValue }
    if(validate(property, newValue)){
      const updatedClient = {
        ...client,
        ...newField
      }
      try {
        const response = await clientService.update(updatedClient, token);
        listHandler( list.map( c => c.id === response.data.id ? response.data : c ) );
        currentClientHandler(response.data);
        handleClose();
      }
      catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <>
      <Modal
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      animation={false}
      show={open} 
      onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Control
                  label={label}
                  name={property}
                  type={property === 'birthDate' ? 'date' : 'text' }
                  onChange={handleChange}
                  value={newValue}
                />
              </Col>
            </Row>
            {
              error.length > 0
                ? (<Row><Col><p className='text-center text-danger mt-2'>{error}</p></Col></Row>)
                : null
            }
            <Modal.Footer>
              <Button variant='dark' type='submit'>Save changes</Button>
              <Button variant='secondary' onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
    
      </Modal>
    </>
  );
}


export default ClientUpdateModalForm;

