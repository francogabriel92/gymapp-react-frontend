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
  client.birthDate = new Date(client.birthDate);
  client.age = utils.calculateAge(client.birthDate);
  client.subEndDate = new Date(client.subEndDate);
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
                <Card.Text>Age: {client.birthDate ? client.age : '-' }</Card.Text>
              </Col>
              <Col>
                <Card.Text>Birth Date: {client.birthDate ? client.birthDate.toLocaleDateString() : '-'}</Card.Text>
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
            <Row>
              <Col>
                <Card.Text>Subscriptions end in: {client.subEndDate ? client.subEndDate.toLocaleDateString() : '-'}</Card.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  )
};

export default ClientListItem;