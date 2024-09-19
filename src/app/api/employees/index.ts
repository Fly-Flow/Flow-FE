import { Employee } from "@/types/Employee";
import axiosInstance from "../axiosInstance";

interface EmployeeInfo {
  status: string;
  message: string;
  data: {
    employeeDetails: Employee[];
    currentPageNumber: number;
    totalElements: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

export const fetchAllEmployees = async (
  size: number,
  page: number
): Promise<EmployeeInfo> => {
  try {
    const response = await axiosInstance.get<EmployeeInfo>(
      `/api/admin/employees?size=${size}&page=${page}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
