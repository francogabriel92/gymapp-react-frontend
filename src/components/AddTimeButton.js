import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const AddTimeButton = ({ table, client, currentClientHandler, list, listHandler, token }) => {
  const [open, setOpen] = useState(false);
  const [ values, setValues ] = useState({
    subQty: '',
    subType:''
  });
  const handleOpen = () => setOpen(!open);
  const handleChange = e => setValues({
    ...values,
    [e.target.name]: e.target.value
  });
  const handleSubmit = e => {
    e.preventDefault();
    const result = validate();
    console.log(values, result);
    setValues({});
  };
  const validate = () => {
    if ( values.subQty <= 0 || !values.subQty) return false;
    if ( values.subType === '' ) return false;
    return true;
  };
  return (
    <> 
      <Button
        className={ table ? '' : 'm-1' }
        onClick={handleOpen}
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
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type='submit'>Add</Button>
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
