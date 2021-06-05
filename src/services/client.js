import axios from 'axios';
const baseUrl = '/api/clients';

const setHeader = token => {
  const header = {
    headers: {
      Authorization : `bearer ${token}` }
    };
  return header;
}

const get = async token => {
  const config = setHeader(token);
  try {
    const response = await axios.get(baseUrl, config);
    return response;
  }
  catch {
    // PUT ERROR CODE
  }
};

const create = async (client, token) => {
  const config = setHeader(token);
  try {
    const response = await axios.post(baseUrl, client, config);
    return response;
  }
  catch {
    // PUT ERROR CODE
  }
};

const erase = async (client, token) => {
  const config = setHeader(token);
  try {
    const response = await axios.delete(`${baseUrl}/${client.id}`, config)
    return response
  }
  catch {
    // PUT ERROR CODE
  }
}

const clientService = { 
  get, 
  create,
  erase
}

export default clientService;