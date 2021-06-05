import React from 'react';
import { Spinner, ListGroup } from 'react-bootstrap';
import ClientListItem from './ClientListItem';

const ClientList = ({ clients, isLoading, token, listHandler, list }) => {

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
            clients.length > 0
              ? clients.map( client => <ClientListItem 
                  client={client}
                  key={client.id}
                  token={token}
                  listHandler={listHandler}
                  list={list}
                />)
              : <span className='m-3 alert alert-primary'>No clients yet!</span>
          }
        </ListGroup>
      </div>
    );
  }
};

export default ClientList;