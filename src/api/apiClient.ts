import axios from 'axios';
import Config from 'react-native-config';

export const apiClient = axios.create({
  baseURL: `${Config.API_URL}`,
  timeout: 10000,
  withCredentials: false,
  headers: {'Content-Type': 'application/json'},
});
