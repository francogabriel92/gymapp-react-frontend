import React from 'react';
import { ListGroup,
  Container,
  Row,
  Col,
  Card,
  Button } from 'react-bootstrap';
import clientService from '../services/client';
import utils from '../utils/utils';

const ClientListItem = ({ client, token, listHandler, list }) => {
  const calculateAge = bd => Math.floor((Date.now()-bd)/(31557600000));
  const deleteClient = async () => {
      if(window.confirm(`Do you really want to delete ${client.name}?`)){
        try {
          await clientService.erase(client, token);
          listHandler(list.filter( c => c.id !== client.id));
          window.alert(`${client.name} deleted successfully.`);
        }
        catch (error) {
          console.log(error);
        }
      }
  };
  console.log(client);
  return(
    <ListGroup.Item>
      <Container>
        <Row>
          <Col>
            <Row className='m-1'>
              <Card.Title>{client.name}</Card.Title>
            </Row>
            <Row className='m-1'>
              <Col>
                <Card.Text>Age: {client.birthDate ? calculateAge(client.birthdate) : '-' }</Card.Text>
              </Col>
              <Col>
                <Card.Text>Birth Date: {client.birthDate ? client.birthDate : '-'}</Card.Text>
              </Col>
              <Col>
                <Card.Text>Mail: {client.mail ? client.mail : '-'}</Card.Text>
              </Col>
              <Col>
                <Button size='sm'>Edit</Button>
              </Col>
            </Row>
            <Row className='m-1'>
              <Col>
                <Card.Text>Phone: {client.phone ? client.phone : '-'}</Card.Text>
              </Col>
              <Col>
                <Card.Text>Address: {client.address ? client.address : '-'}</Card.Text>
              </Col>
              <Col>
                <Card.Text>Gender: {client.gender ? utils.capitalizeFirstLetter(client.gender) : '-'}</Card.Text>
              </Col>
              <Col>
                <Button
                  size='sm'
                  variant='danger'
                  onClick={deleteClient}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  )
};

export default ClientListItem;