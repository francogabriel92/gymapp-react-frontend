import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clientService from '../services/client';

const ClientList = ( {user, clientList, clientListHandler}) => {
  useEffect(()=> {
    const getClients = async () => {
      try{
        const response = await clientService.get(user.token);
        clientListHandler(response);
      }
      catch {
        return(<Link to='/' />)
      }
    };
    getClients();
  }, []);

  return (
    <div>
      <ul>
        {
          (clientList.length === 0) 
            ? <li>No clients yet!</li>
            : clientList.map( client => {
              return <li key={client.id}>{client.name} - Age: {client.age}</li>
            })    
        }
      </ul>
    </div>
  );
};

export default ClientList;