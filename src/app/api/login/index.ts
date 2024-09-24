import axiosInstance from "../axiosInstance";

export interface LoginInfo {
  employeeNumber: string;
  password: string;
}

export const loginRequest = async (loginInfo: LoginInfo) => {
  try {
    const response = await axiosInstance.post(`/api/login`, loginInfo);
    return response;
  } catch (error) {
    throw error;
  }
};
