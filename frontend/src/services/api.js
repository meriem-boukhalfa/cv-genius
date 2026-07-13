import axios from "axios";

const api = axios.create({
  baseURL: "https://cv-genius.onrender.com",
});

export default api;