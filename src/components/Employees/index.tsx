"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  Paper,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import Header from "../shared/Header";
import Chip from "@/components/shared/Chip/index.tsx";
import SearchField from "../shared/SearchField";
import SelectField from "../shared/SelectField";
import {
  employees as employeeData,
  departments,
  positions,
} from "@/utils/employeesDTO";

const companyCode = "6731";

const departmentCodes: { [key: string]: string } = {
  인사팀: "601",
  개발팀: "602",
  디자인팀: "603",
  영업팀: "604",
  회계팀: "605",
};

const Employees: React.FC = (props) => {
  const [employees, setEmployees] = useState(employeeData);
  const [searchTerm, setSearchTerm] = useState("");
  const [employeesDialog, setEmployeesDialog] = useState(false);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    department: "",
    position: "",
    joinDate: "",
    employeeNumber: "",
  });

  const filteredEmployees = employees.filter((employee) =>
    employee.name.includes(searchTerm)
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const openDialog = () => {
    setEmployeesDialog(true);
  };

  const closeDialog = () => {
    setEmployeesDialog(false);
    setNewEmployee({
      name: "",
      department: "",
      position: "",
      joinDate: "",
      employeeNumber: "",
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
    const employeeCount = employees.length + 1; // 현재 사원 수 기반 증가 값
    const employeeCountPadded = employeeCount.toString().padStart(3, "0"); // 3자리로 맞춤

    return `${companyCode}${departmentCode}${employeeCountPadded}`;
  };

  const addNewEmployee = () => {
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
      ...newEmployee,
      employeeNumber: newEmployeeNumber,
      role: newEmployee.position === "리드" ? "관리자" : "사원", // 권한 설정
    };

    setEmployees([...employees, newEmp]); // 새로운 사원 추가
    closeDialog();
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

  const renderTable = () => {
    return (
      <TableContainer component={Paper} sx={{ paddingX: "2rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>사원번호</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>부서</TableCell>
              <TableCell>직급</TableCell>
              <TableCell>입사 일자</TableCell>
              <TableCell>권한</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <Typography variant="body2" color="textSecondary">
                    검색 결과가 없습니다.
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              filteredEmployees.map((employee) => (
                <TableRow key={employee.employeeNumber}>
                  <TableCell>{employee.employeeNumber}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.joinDate}</TableCell>
                  <TableCell>
                    <Chip label={employee.role} />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Stack gap="1.5rem">
      <Header label="구성원" />
      {renderToolbar()}

      <Dialog open={employeesDialog} onClose={closeDialog} fullWidth>
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
              items={departments}
            />

            <SelectField
              fullWidth={true}
              label="직급"
              value={newEmployee.position}
              onChange={(e) => handleSelectChange(e, "position")}
              items={positions}
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

      {renderTable()}
    </Stack>
  );
};

export default Employees;
