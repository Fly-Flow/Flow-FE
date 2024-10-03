"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  Pagination,
  SelectChangeEvent,
  Stack,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import Header from "../shared/Header";
import Chip from "@/components/shared/Chip/index.tsx";
import Table from "@/components/shared/Table/index.tsx";
import SearchField from "../shared/SearchField";
import SelectField from "../shared/SelectField";

import {
  addEmployee,
  EmployeeOverview,
  fetchAllEmployees,
  fetchEmployeesByName,
} from "@/app/api/employees";
import { useDebounce } from "@/hooks/useDebounce";

const companyCode = "6731";

const departmentCodes: { [key: string]: string } = {
  인사팀: "601",
  개발팀: "602",
  디자인팀: "603",
  영업팀: "604",
  회계팀: "605",
};

const Employees: React.FC = () => {
  const [employees, setEmployees] = useState<EmployeeOverview[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 0,
    totalPages: 0,
    totalElements: 0,
    hasNext: false,
    hasPrevious: false,
  });
  const size = 10;

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [isAddEmployeesDialogOpen, setIsAddEmployeesDialogOpen] =
    useState(false);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    position: "",
    joinDate: "",
    employeeNumber: "",
  });

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchEmployees(debouncedSearchTerm);
    } else {
      loadAllEmployees(0);
    }
  }, [debouncedSearchTerm]);

  const searchEmployees = async (name: string) => {
    try {
      const response = await fetchEmployeesByName(name);
      console.log(response);

      const employeeDetails = response.data?.employeeDetails || [];

      const employeesData = employeeDetails.map(
        (detail: any) => detail.employeeOverviewResponse
      );
      console.log("Row data:", employeesData);

      const employeesArray = Array.isArray(employeesData)
        ? employeesData
        : [employeesData];

      const filteredEmployees = employeesArray.filter(
        (employee: EmployeeOverview) => employee.name.includes(name)
      );
      setEmployees(filteredEmployees);
      console.log("filtered data:", filteredEmployees);
    } catch (error) {
      console.error(error);
      setEmployees([]);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handlePageChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    setPagination((prev) => ({
      ...prev,
      currentPage: newPage - 1,
    }));
  };

  useEffect(() => {
    loadAllEmployees(pagination.currentPage);
  }, [pagination.currentPage]);

  const loadAllEmployees = async (page: number) => {
    try {
      const response = await fetchAllEmployees(size, page);

      const {
        employeeOverviewResponse,
        currentPageNumber,
        totalElements,
        hasNext,
        hasPrevious,
      } = response.data;

      const totalPages = Math.ceil(totalElements / size);

      setEmployees(employeeOverviewResponse);
      setPagination({
        currentPage: currentPageNumber,
        totalElements,
        totalPages,
        hasNext,
        hasPrevious,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const employeesTableHeaders = [
    "사원번호",
    "이름",
    "부서",
    "직급",
    "입사 일자",
    "권한",
  ];

  const roleMapping: { [key: string]: string } = {
    EMPLOYEE: "사원",
    ADMIN: "관리자",
  };

  const employeesTableRows = employees.map((employee) => [
    employee.employeeNumber,
    employee.name,
    employee.department,
    employee.position,
    employee.joinDate,
    <Chip
      label={roleMapping[employee.role] || employee.role}
      key={employee.employeeNumber}
    />,
  ]);

  const openDialog = () => {
    setIsAddEmployeesDialogOpen(true);
  };

  const closeDialog = () => {
    setIsAddEmployeesDialogOpen(false);
    setNewEmployee({
      employeeNumber: "",
      name: "",
      department: "",
      position: "",
      joinDate: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSelectChange = (e: SelectChangeEvent<string>, field: string) => {
    setNewEmployee({ ...newEmployee, [field]: e.target.value as string });
  };

  const generateEmployeeNumber = () => {
    const departmentCode = departmentCodes[newEmployee.department] || "000"; // 부서 코드
    const employeeCount = (pagination.totalElements + 1)
      .toString()
      .padStart(3, "0"); // 현재 사원 수 기반 증가 + 1

    return `${companyCode}${departmentCode}${employeeCount}`;
  };

  const addNewEmployee = async () => {
    const nameRegex = /^[^\s]{2,}$/;
    if (!nameRegex.test(newEmployee.name)) {
      alert("이름은 공백 없이 2글자 이상이어야 합니다.");
      return;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (
      !dateRegex.test(newEmployee.joinDate) ||
      isNaN(new Date(newEmployee.joinDate).getTime())
    ) {
      alert("입사 일자가 유효하지 않습니다.");
      return;
    }

    const newEmployeeNumber = generateEmployeeNumber(); // 자동 사원 번호 생성
    const newEmp = {
      employeeNumber: newEmployeeNumber,
      name: newEmployee.name,
      department: newEmployee.department,
      position: newEmployee.position,
      joinDate: newEmployee.joinDate,
      role: newEmployee.position === "리드" ? "관리자" : "사원",
    };

    try {
      const response = await addEmployee(newEmp);

      if (response) {
        setEmployees((prevEmployees) => [...prevEmployees, newEmp]);
        alert("구성원이 추가되었습니다.");
      } else {
        alert("구성원 추가에 실패했습니다.");
      }
    } catch (error) {
      console.error(error);
    }

    closeDialog();
    setIsAddEmployeesDialogOpen(false);
  };

  const renderToolbar = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "2rem",
        }}
      >
        <SearchField
          label="이름"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Button
          variant="contained"
          startIcon={<AddCircleOutline />}
          onClick={openDialog}
        >
          구성원 추가
        </Button>
      </Box>
    );
  };

  const renderAddEmployeesDialog = () => {
    return (
      <Dialog open={isAddEmployeesDialogOpen} onClose={closeDialog} fullWidth>
        <DialogTitle textAlign="center">구성원 추가</DialogTitle>
        <DialogContent sx={{ margin: "1rem" }}>
          <FormGroup sx={{ paddingTop: "1rem", gap: "1rem" }}>
            <TextField
              label="이름"
              name="name"
              value={newEmployee.name}
              onChange={handleInputChange}
            />

            <SelectField
              fullWidth={true}
              label="부서"
              value={newEmployee.department}
              onChange={(e) => handleSelectChange(e, "department")}
              items={Object.keys(departmentCodes).map((department) => ({
                value: department,
                label: department,
              }))}
            />

            <SelectField
              fullWidth={true}
              label="직급"
              value={newEmployee.position}
              onChange={(e) => handleSelectChange(e, "position")}
              items={[
                { value: "사원", label: "사원" },
                { value: "팀장", label: "팀장" },
                { value: "리드", label: "리드" },
              ]}
            />

            <TextField
              label="입사 일자"
              name="joinDate"
              type="date"
              value={newEmployee.joinDate}
              onChange={handleInputChange}
              InputLabelProps={{
                shrink: true, // label을 위로 올려서 보여줌
              }}
            />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>취소</Button>
          <Button
            onClick={addNewEmployee}
            variant="contained"
            disabled={
              !newEmployee.name ||
              !newEmployee.department ||
              !newEmployee.position ||
              !newEmployee.joinDate
            }
          >
            추가
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Stack gap="1.5rem">
      <Header label="구성원" />
      {renderToolbar()}
      {renderAddEmployeesDialog()}
      <Table headers={employeesTableHeaders} rows={employeesTableRows} />
      <Pagination
        count={pagination.totalPages}
        page={pagination.currentPage + 1}
        onChange={handlePageChange}
        color="primary"
        sx={{ alignSelf: "center" }}
      />
    </Stack>
  );
};

export default Employees;
