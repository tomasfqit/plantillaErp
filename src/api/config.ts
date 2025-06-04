import axios from "axios";
const server = import.meta.env.VITE_API_SERVICE || 'http://localhost:3000';
const defaultOptions = {
  baseURL: server,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 300000,
};

const _axios = axios.create(defaultOptions);

const { get, post, put, delete: destroy, patch } = _axios;
export { destroy, get, patch, post, put };

