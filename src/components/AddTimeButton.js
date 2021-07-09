import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import clientService from '../services/client';

const AddTimeButton = ({ table, client, currentClientHandler, list, listHandler, token, ...props }) => {
  const [open, setOpen] = useState(false);
  const [ error, setError ] = useState(null)
  const [ values, setValues ] = useState({
    subQty: '',
    subType:''
  });
  const handleOpen = () => setOpen(!open);
  const handleChange = e => setValues({
    ...values,
    [e.target.name]: e.target.value
  });
  const handleSubmit = async e => {
    e.preventDefault();
    if(validate()){
      try {
        const response = await clientService.addTime(client, values, token);
        listHandler( list.map( c => c.id === response.data.id ? response.data : c ) );
        currentClientHandler(response.data);
        handleOpen();
        setValues('')
      }
      catch (error) {
        console.log(error.message);
      }
    };
  };
  const validate = () => {
    if ( values.subQty <= 0 || values.subQty.length === 0) {
      handleError('* Number must be more than 0');
      return false;
    };
    if ( values.subType === '' ) {
      handleError('* Must select a type');
      return false;
    };
    return true;
  };
  const handleError = message => {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 5000)
  }
  return (
    <> 
      <Button
        variant='dark'
        className={ table ? '' : 'm-1' }
        onClick={handleOpen}
        {...props}
      >
        { table ? 'Add' : 'Add Time' }
      </Button>
      <Modal
        size='sm'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        animation={false}
        show={open} 
        onHide={handleOpen}
      >
        <Modal.Header closeButton >
          <Modal.Title>Add time</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit} >
          <Modal.Body>
            <Form.Group>
              <Form.Control
                className='mb-1'
                type='number'
                onChange={handleChange}
                name='subQty'
                value={values.subQty}
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
              {
                error
                  ? <p className='text-danger'>{error}</p>
                  : null
              }
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='dark' type='submit'>Add</Button>
            <Button
              variant='secondary'
              onClick={handleOpen}
            >
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddTimeButton;
