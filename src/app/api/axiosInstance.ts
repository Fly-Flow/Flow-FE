import axios from "axios";

// env 환경변수 설정
const BASE_URL = "http://localhost:3000/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
