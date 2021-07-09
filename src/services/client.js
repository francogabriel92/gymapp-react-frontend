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
  catch (error) {
    console.log(error.message);
  }
};

const create = async (client, token) => {
  const config = setHeader(token);
  try {
    const response = await axios.post(baseUrl, client, config);
    return response;
  }
  catch (error) {
    console.log(error.message);
  }
};

const update = async (updatedClient, token) => {
  const config = setHeader(token);
  try {
    const response = await axios.put(`${baseUrl}/${updatedClient.id}`, updatedClient, config);
    return response;
  }
  catch (error) {
    console.log(error.message);
    return error.message;
  }
}

const addTime = async (client, time, token) => {
  const config = setHeader(token);
  try {
    const response = await axios.put(`${baseUrl}/addtime/${client.id}`, time, config);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const erase = async (client, token) => {
  const config = setHeader(token);
  try {
    const response = await axios.delete(`${baseUrl}/${client.id}`, config)
    return response
  }
  catch (error) {
    console.log(error.message);
  }
}

const clientService = { 
  get, 
  create,
  update,
  addTime,
  erase
}

export default clientService;