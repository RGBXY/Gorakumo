import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY_URL;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
});

export default axiosInstance;
