import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export default api;
