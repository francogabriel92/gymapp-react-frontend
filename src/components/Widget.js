import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/card.css';

const Widget = ({title, children}) => {
  return (
    <Card bg='dark' text='light' className='.card'>
      <Card.Header>{title}</Card.Header>
      <Card.Body scrollable='true' >
        {children}
      </Card.Body>
    </Card>
  )
}

export default Widget;
