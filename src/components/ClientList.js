import React from 'react';
import { Spinner, ListGroup } from 'react-bootstrap';
import ClientListItem from './ClientListItem';

const ClientList = ({ clients, isLoading }) => {
  if(isLoading) {
    return(
      <div>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    )
  } else {
    return (
      <div>
        <ListGroup variant='flush'>
          {
            clients
              ? clients.map( client => <ClientListItem client={client} key={client.id} />)
              : <span>No clients yet!</span>
          }
        </ListGroup>
      </div>
    );
  }
};

export default ClientList;