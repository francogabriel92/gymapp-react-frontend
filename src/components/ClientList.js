import React from 'react';
import { Table } from 'react-bootstrap';
import ClientTableItem from './ClientTableItem';

const ClientList = ({ clients, token, listHandler, list, currentClientHandler }) => {
  return (
    <div className='mt-4'>
      <Table size='sm' striped bordered hover responsive>
        <thead>
          <tr className='text-center'>
            <th>Fullname</th>
            <th>Age</th>
            <th>Birthdate</th>
            <th>Phone</th>
            <th>Sub's end date</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            clients.length > 0
              ? clients.map( client => <ClientTableItem 
                  client={client}
                  key={client.id}
                  token={token}
                  listHandler={listHandler}
                  list={list}
                  currentClientHandler={currentClientHandler}
                />)
              : <tr><td colSpan='7' className='m-3 alert alert-primary text-center'>No Clients found!</td></tr>
          }
        </tbody>
      </Table>
    </div>
  );
};

export default ClientList;