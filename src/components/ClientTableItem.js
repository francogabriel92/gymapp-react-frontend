import React from 'react';
import { Button } from 'react-bootstrap';
import clientService from '../services/client';
import utils from '../utils/utils';
import AddTimeButton from './AddTimeButton';

const ClientTableItem = ({ client, token, listHandler, list, currentClientHandler }) => {
  const deleteClient = async () => {
      if(window.confirm(`Do you really want to delete ${client.name}?`)){
        try {
          await clientService.erase(client, token);
          listHandler(list.filter( c => c.id !== client.id));
          currentClientHandler(null);
          window.alert(`${client.name} deleted successfully.`);
        }
        catch (error) {
          console.log(error);
        }
      }
  };
  client.birthDate = new Date(client.birthDate);
  client.age = utils.calculateAge(client.birthDate);
  client.subEndDate = new Date(client.subEndDate);
  return(
    <React.Fragment>
      <tr className='text-center' style={{ cursor: 'pointer' }} onClick={() => currentClientHandler(client) }>
        <td>{client.name}</td>
        <td>{client.birthDate ? client.age : '-' }</td>
        <td>{client.birthDate ? client.birthDate.toLocaleDateString() : '-'}</td>
        <td>{client.phone ? client.phone : '-'}</td>
        <td className={ utils.dateIsPast(client.subEndDate) ? 'table-danger' : null }>
          {client.subEndDate ? client.subEndDate.toLocaleDateString() : '-'}
        </td>
        <td>
          <AddTimeButton
            table
            size='sm'
            token={token}
            client={client}
            currentClientHandler={currentClientHandler}
            listHandler={listHandler}
            list={list}
          >
            Add
          </AddTimeButton>
        </td>
        <td> 
          <Button
            size='sm'
            variant='danger'
            onClick={() => deleteClient()}
          >
            Remove
          </Button>
        </td>
      </tr>
    </React.Fragment>
  )
};

export default ClientTableItem;