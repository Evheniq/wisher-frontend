import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BACKEND_HOST,
  headers: {
    accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
