// axiosConfig.js

import axios from 'axios';

// Importe a variável de ambiente BACKEND_PORT
//const BACKEND_PORT = process.env.BACKEND_PORT;

// Verifique se a variável BACKEND_PORT está definida


// Set the global base URL for Axios
//axios.defaults.baseURL = `/api`;
axios.defaults.baseURL = `http://localhost:3002`;


export default axios;
