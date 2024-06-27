import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://keep-coin.ru/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;