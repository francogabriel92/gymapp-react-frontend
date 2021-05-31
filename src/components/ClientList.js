import React from 'react';
import { Spinner, ListGroup } from 'react-bootstrap';
import ClientListItem from './ClientListItem';

const ClientList = ({ clients, isLoading }) => {

  if(isLoading) {
    return(
      <div className='text-center'>
        <h4>
          Loading...
        </h4>
        <Spinner className='m-3' animation="border" role="status" />
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