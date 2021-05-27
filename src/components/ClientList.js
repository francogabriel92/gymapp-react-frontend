import React, { useState, useEffect } from 'react';
import clientService from '../services/client';

const ClientList = (user) => {
  const [ clients, setClients ] = useState([]);


  return (
    <div>
      <ul>
        {
          (clients.length === 0) 
            ? <li>No clients yet!</li>
            : clients.map( client => {
              return <li key={client.id}>{client.name} - Age: {client.age}</li>
            })    
        }
      </ul>
    </div>
  );
};

export default ClientList;