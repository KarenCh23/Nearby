import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://nearbywebsite-675f9da5dcb6.herokuapp.com/',
  timeout: 3600,
});

export default axiosInstance;
