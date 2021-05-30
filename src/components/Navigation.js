import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';

export const Navigation = ({ user }) => {
  return (
    <div>
      <Navbar bg="primary" expand="sm" variant='dark'>
        <Navbar.Brand>GymApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/clients"><Nav.Link>Clients</Nav.Link></LinkContainer>
            { user
              ? <LinkContainer to="/account"><Nav.Link>Account</Nav.Link></LinkContainer>
              : <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation;