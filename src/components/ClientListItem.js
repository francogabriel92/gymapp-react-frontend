import React from 'react';
import { ListGroup,
  Container,
  Row,
  Col,
  Card,
  Button } from 'react-bootstrap';

const ClientListItem = ({ client }) => {

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
                <Card.Text>Age: {client.age}</Card.Text>
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
                <Button size='sm' variant='danger'>Remove</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ListGroup.Item>
  )
};

export default ClientListItem;