import axios from "axios"
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(API_URL);

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // 🔐 important for cookies
});

export default api;
