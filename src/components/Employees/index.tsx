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
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { AddCircleOutline } from "@mui/icons-material";
import Header from "../shared/Header";
import Chip from "@/components/shared/Chip/index.tsx";

const Employees: React.FC = (props) => {
  const [employeesDialog, setEmployeesDialog] = useState(false);

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

  const openDialog = () => {
    setEmployeesDialog(true);
  };

  const closeDialog = () => {
    setEmployeesDialog(false);
  };

  const renderHeader = () => {
    return <Header header="구성원" />;
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
        <TextField
          size="small"
          label="이름"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
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
      <TableContainer sx={{ paddingX: "2rem" }}>
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
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.department}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.hireDate}</TableCell>
                <TableCell>
                  <Chip label={employee.role} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Stack gap="1.5rem">
      {renderHeader()}
      {renderToolbar()}

      <Dialog open={employeesDialog} onClose={closeDialog}>
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

      {renderTable()}
    </Stack>
  );
};

export default Employees;
