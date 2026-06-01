import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://crisply-humbling-politely.ngrok-free.dev/api/", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;