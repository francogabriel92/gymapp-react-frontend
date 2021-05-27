import React, { useState } from 'react';
import ClientList from '../components/ClientList';
import ClientForm from '../components/ClientForm';

const Client = ( props ) => {
  const [ openForm, setOpenForm ] = useState(false);
  return (
    <div>
      <h2>Clients</h2>
      <ClientList user={props.user} />
      {
        openForm 
         ? <ClientForm user={props.user} />
         : <button onClick={() => { setOpenForm(true) }}>Add Client</button>
      }
    </div>
  );
}

export default Client;