import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;