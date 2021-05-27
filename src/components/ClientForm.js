import React, { useState } from 'react';
import clientService from '../services/client';

const ClientForm = (props) => {
  const [ name, setName ] = useState('');
  const [ mail, setMail ] = useState('');
  const [ age, setAge ] = useState(0);
  const submitHandler = async e => {
    const token = props.user.token;
    e.preventDefault();
    const newClient = {
      name,
      mail,
      age
    };
    await clientService.create(newClient, token);
  };

  return (
    <div>
      <h3>New client</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type='text'
            value={name}
            onChange={ e => setName(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label>Mail</label>
          <input
            type='text'
            value={mail}
            onChange={ e => setMail(e.target.value)}
          >
          </input>
        </div>
        <div>
          <label>Age</label>
          <input
            type='number'
            value={age}
            onChange={ e => setAge(e.target.value)}
          >
          </input>
        </div>
        <div>
          <input type='submit' value='Add client' />
        </div>
      </form>
    </div>
  );
};

export default ClientForm;