import axios from "axios";

const api = axios.create({
  baseURL: "https://cv-genius-backend.onrender.com",
});

export default api;