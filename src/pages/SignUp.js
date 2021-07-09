import React, { useState } from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import SignUpForm from '../components/SignUpForm';
import { Redirect } from 'react-router-dom';

const SignUp = () => {
  const [ redirect, setRedirect ] = useState(false);
  if (redirect) {
    return <Redirect to='/home' />
  }
  return (
    <Container fluid className='mt-4'>
      <Row className='align-items-center'>
        <Col xs={10} sm={6} md ={5} lg={4} className='mx-auto'>
          <Card border='dark' bg='dark' text='light'>
            <Card.Body>
              <Card.Title className='text-center'>Sign Up</Card.Title>
              <SignUpForm redirectHandler={setRedirect} />
            </Card.Body>
          </Card>       
        </Col>
      </Row>    
    </Container>
  )
}

export default SignUp;
