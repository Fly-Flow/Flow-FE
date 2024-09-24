import { getCookie } from "@/utils/cookie";
import axios from "axios";

// env 환경변수 설정
const BASE_URL = "/";
const token = getCookie("flow_token");

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
