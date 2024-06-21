import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://5b59-185-188-96-111.ngrok-free.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;