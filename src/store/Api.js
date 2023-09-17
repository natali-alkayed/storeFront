import axios from 'axios';

const API_URL = '  http://localhost:5000/products';

export const fetchInventory = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};
