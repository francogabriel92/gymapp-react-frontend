import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container, Image, Col, Row, Card } from 'react-bootstrap';
import background from '../images/login-background.webp';

const Login = ({ loginHandler }) => {
  return(
    <Container fluid className='mt-4'>
      <Row className='align-items-center'>
        <Col xs={6}md={3} className='mx-auto'>
          <Card>
            <Card.Body>
              <Card.Title className='text-center'>Login</Card.Title>
              <LoginForm loginHandler={loginHandler} />
            </Card.Body>
          </Card>       
        </Col>
      </Row>    
    </Container>
  );
};

export default Login;