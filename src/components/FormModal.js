import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ClientAddForm from './ClientAddForm';

const FormModal = ({ openButtonValue, title, formType }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {openButtonValue}
      </Button>
      <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show} 
      onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {
          {
            'newClient': <ClientAddForm />,
          }[formType]
        }
      </Modal>
    </>
  );
}


export default FormModal;
