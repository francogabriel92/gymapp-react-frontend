import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ModalUpdateForm from './ClientUpdateModalForm';

const CardDataField = ({ label, value, client, token, currentClientHandler, list, listHandler }) => {
  const [ open, setOpen ] = useState(false);
  return (
    <Container>
      <Row noGutters className='text-center'>
        <Col className='text-center m-1'>{label}</Col>
        <Col>
          <input
            className='text-center m-1'
            readOnly
            value={value}
            onClick={() => {
              if (label === 'Subscription ends at' || label === 'Age') {
                return null;
              }
              setOpen(true);
            }}
          />
        </Col>
      </Row>
      <ModalUpdateForm
        client={client}
        title={`Modify ${label}`}
        open={open}
        handleOpen={setOpen}
        label={label}
        value={value}
        token={token}
        currentClientHandler={currentClientHandler}
        list={list}
        listHandler={listHandler}
      />
    </Container>
  )
}

export default CardDataField
