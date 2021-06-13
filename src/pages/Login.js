import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { Redirect } from 'react-router';

const Login = ({ loginHandler }) => {
  const [ redirect, setRedirect ] = useState(false);
  if (redirect) {
    return <Redirect to='/home' /> 
  };
  return(
    <Container fluid className='mt-4'>
      <Row className='align-items-center'>
        <Col xs={10} sm={6} md ={5} lg={4} className='mx-auto'>
          <Card border='dark' bg='dark' text='light'>
            <Card.Body>
              <Card.Title className='text-center'>Login</Card.Title>
              <LoginForm loginHandler={loginHandler} redirectHandler={setRedirect} />
            </Card.Body>
          </Card>       
        </Col>
      </Row>    
    </Container>
  );
};

export default Login;