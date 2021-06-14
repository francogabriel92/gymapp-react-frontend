import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import AddClientForm from "../components/AddClientForm";
import ModalDialog from "../components/ModalDialog";

export const AddClient = ({ user, clientList, clientListHandler }) => {
  const [ openModal, setOpenModal ] = useState(false);
  return (
    <Container>
      <h3 className='text-center mt-3'>Add new client</h3>
      <AddClientForm
        user={user}
        modalHandler={setOpenModal}
        clientList={clientList}
        clientListHandler={clientListHandler}
      />
      <ModalDialog 
        title='Success!'
        message='Client added successfully.'
        open={openModal}
        handleOpen={setOpenModal}
      />
    </Container>
  );
};

export default AddClient;