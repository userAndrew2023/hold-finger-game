import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://147.45.185.114:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;