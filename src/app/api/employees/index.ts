import axiosInstance from "../axiosInstance";

export interface EmployeeInfo {
  data: {
    employeeOverviewResponse: EmployeeOverview[];
    currentPageNumber: number;
    totalElements: number;
    remainingDataCount: number;
    hasContent: boolean;
    hasPrevious: boolean;
    hasNext: boolean;
  };
}

export interface EmployeeOverview {
  employeeNumber: string;
  name: string;
  department: string;
  position: string;
  joinDate: string;
  role: string;
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

export const addEmployee = async (newEmployee: any) => {
  try {
    const response = await axiosInstance.post(
      `/api/admin/employees`,
      newEmployee
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchEmployeesByName = async (name: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/admin/employees?name=${name}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
