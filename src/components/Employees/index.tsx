"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  FormLabel,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import Header from "../shared/Header";
import Chip from "@/components/shared/Chip/index.tsx";
import SearchField from "../shared/SearchField";
import Table from "@/components/shared/Table/index.tsx";

const Employees: React.FC = () => {
  const [isAddEmployeesDialogOpen, setIsAddEmployeesDialogOpen] =
    useState(false);

  const [employees, setEmployees] = useState([
    {
      id: "1234123001",
      name: "김철수",
      department: "개발팀",
      position: "주임",
      hireDate: "2020-01-15",
      role: "관리자",
    },
    {
      id: "1234123002",
      name: "이영희",
      department: "인사팀",
      position: "사원",
      hireDate: "2021-07-10",
      role: "사원",
    },
    {
      id: "1234123003",
      name: "박민수",
      department: "디자인팀",
      position: "대리",
      hireDate: "2019-11-05",
      role: "관리자",
    },
  ]);

  const employeesTableHeaders = [
    "사원번호",
    "이름",
    "부서",
    "직급",
    "입사 일자",
    "권한",
  ];

  const employeesTableRows = employees.map((employee) => [
    employee.id,
    employee.name,
    employee.department,
    employee.position,
    employee.hireDate,
    <Chip label={employee.role} key={employee.id} />,
  ]);

  const openDialog = () => {
    setIsAddEmployeesDialogOpen(true);
  };

  const closeDialog = () => {
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
        <SearchField label="이름" />
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
      <Dialog open={isAddEmployeesDialogOpen} onClose={closeDialog}>
        <DialogTitle textAlign="center">구성원 추가</DialogTitle>
        <DialogContent>
          <FormGroup>
            <FormLabel>이름</FormLabel>
            <TextField size="small" />
            <FormLabel>부서</FormLabel>
            <TextField size="small" />
            <FormLabel>직급</FormLabel>
            <TextField size="small" />
            <FormLabel>입사 일자</FormLabel>
            <TextField type="date" size="small" />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>취소</Button>
          <Button onClick={() => {}} variant="contained">
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
    </Stack>
  );
};

export default Employees;
