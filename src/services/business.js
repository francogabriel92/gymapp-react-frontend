import axios from 'axios';
const baseUrl = '/api/business'

const create = async newUser => {
  try {
    const response = await axios.post(baseUrl, newUser);
    return response;
  }
  catch (error) {
    console.log(error.message);
  }
};

const businessService = { create }

export default businessService;