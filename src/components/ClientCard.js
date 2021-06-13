import React, { useState } from 'react';
import { Container,
  Row,
  Col,
  Card, 
  Button} from 'react-bootstrap';
import clientService from '../services/client';
import utils from '../utils/utils';
import CardDataField from './CardDataField';
import ModalUpdateForm from './ClientUpdateModalForm';
import AddTimeButton from './AddTimeButton';

const ClientCard = ({ client, token, listHandler, list, currentClientHandler, dashboard }) => {
  const [ openName, setOpenName ] = useState(false);
  const [ label, setLabel ] = useState('');
  const [ value, setValue ] = useState('');
  const deleteClient = async () => {
      if(window.confirm(`Do you really want to delete ${client.name}?`)){
        try {
          await clientService.erase(client, token);
          listHandler(list.filter( c => c.id !== client.id));
          currentClientHandler(null);
          window.alert(`${client.name} deleted successfully.`);
        }
        catch (error) {
          console.log(error);
        }
      }
  };
  client.birthDate = new Date(client.birthDate);
  client.age = utils.calculateAge(client.birthDate);
  client.subEndDate = new Date(client.subEndDate);
  return(
    <Card border ='secondary' className='m-3 p-3' >
      <Card.Title className='text-center'>{client.name}</Card.Title>
      <Card.Subtitle className='text-center'>
        { 
          utils.dateIsPast(client.subEndDate)
            ? <p className='text-danger'>Unsubscribed</p>
            : <p className='text-success'>Subscribed</p>
        }
      </Card.Subtitle>
      <p className='text-center small'>(Click on a field to modify its value)</p>
      <Card.Body>
        <Container >
          <Row>
            <Col xs={12} lg={6}>
              <CardDataField 
                token={token}
                client={client}
                label='Age'
                value={client.birthDate ? client.age : '-' }
                currentClientHandler={currentClientHandler}
                listHandler={listHandler}
                list={list}
              />
              <CardDataField 
                token={token}
                client={client}
                label ='Address'
                value={client.address ? client.address : '-' }
                currentClientHandler={currentClientHandler}
                listHandler={listHandler}
                list={list}
              />
              <CardDataField 
                token={token}
                client={client}
                label='Mail' value={client.mail ? client.mail : '-' }
                currentClientHandler={currentClientHandler}
                listHandler={listHandler}
                list={list}
              />
              <CardDataField 
                token={token}
                client={client}
                label='Gender' value={utils.capitalizeFirstLetter(client.gender)}
                currentClientHandler={currentClientHandler}
                listHandler={listHandler}
                list={list}
              />
            </Col>
            <Col>
              <CardDataField 
                token={token}
                client={client}
                label='Birthday' value={client.birthDate ? client.birthDate.toLocaleDateString() : '-'}
                currentClientHandler={currentClientHandler}
                listHandler={listHandler}
                list={list}
              />
              <CardDataField 
                token={token}
                client={client}
                label='City' value={client.city ? client.city : '-' }
                currentClientHandler={currentClientHandler}
                listHandler={listHandler}
                list={list}
              />
              <CardDataField 
                token={token}
                client={client}
                label='Phone' value={client.phone ? client.phone : '-' }
                currentClientHandler={currentClientHandler}
                listHandler={listHandler}
                list={list}
              />
              <CardDataField
                token={token}
                client={client}
                label='Subscription ends at'
                value={client.subEndDate ? client.subEndDate.toLocaleDateString() : '-'}
                className={utils.dateIsPast(client.subEndDate) ? 'table-danger' : null }
                currentClientHandler={currentClientHandler}
                listHandler={listHandler}
                list={list}
              />
            </Col>
          </Row>
          <Row className='text-center m-3'>
            <Col>
              <AddTimeButton
                token={token}
                client={client}
                currentClientHandler={currentClientHandler}
                listHandler={listHandler}
                list={list}
              />
              <Button
              variant='dark'
                onClick={() => {
                  setLabel('Name');
                  setValue(client.name);
                  setOpenName(true);
                }}
              >
                Change name
              </Button>
              <Button
                className='m-1'
                onClick={() => deleteClient() }
                variant='danger'
              >
                Remove
              </Button>
              {
                !dashboard
                  ? <Button
                  variant='secondary'
                  onClick={() => currentClientHandler(null)}
                  >
                  Close
                  </Button>
                  : null
              }
            </Col>
          </Row>
        </Container>
      </Card.Body>
      <ModalUpdateForm
        client={client}
        title={`Modify ${label}`}
        open={openName}
        handleOpen={setOpenName}
        label={label}
        value={value}
        token={token}
        currentClientHandler={currentClientHandler}
        listHandler={listHandler}
        list={list}
      />
    </Card>
  )
};

export default ClientCard;