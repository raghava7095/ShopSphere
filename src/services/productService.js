import axios from 'axios';

const getProducts = async () => {
  const response = await axios.get('https://api.example.com/products'); 
  return response.data;
};

export default getProducts;
