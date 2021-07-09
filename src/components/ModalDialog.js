import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const ModalDialog = ({ open, handleOpen, title, message, children }) => {

  const handleClose = () => handleOpen(false);
  return (
    <>
      <Modal
      size='m'
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
          <p>{message}</p>
          {children}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleClose}>Ok</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ModalDialog;

