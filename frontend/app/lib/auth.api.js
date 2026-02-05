import axios from "axios"
const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

console.log(API_URL);

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true, // 🔐 important for cookies
});

// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       window.location.href = "/login"
//     }
//     return Promise.reject(error)
//   }
// )

export default api;
