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

const Employees: React.FC = (props) => {
  const [employees, setEmployees] = useState(employeeData);
  const [employeesDialog, setEmployeesDialog] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedPositions, setSelectedPositions] = useState<string>("");

  const openDialog = () => {
    setEmployeesDialog(true);
  };

  const closeDialog = () => {
    setEmployeesDialog(false);
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
            {employees.map((employee) => (
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
            ))}
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
        <DialogContent sx={{ margin: "2rem" }}>
          <FormGroup sx={{ paddingTop: "1rem", gap: "1rem" }}>
            <TextField label="이름" />

            <SelectField
              fullWidth={true}
              label="부서"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              items={departments}
            />

            <SelectField
              fullWidth={true}
              label="직급"
              value={selectedPositions}
              onChange={(e) => setSelectedPositions(e.target.value)}
              items={positions}
            />

            <TextField
              type="date"
              label="입사 일자"
              InputLabelProps={{
                shrink: true, // label을 위로 올려서 보여줌
              }}
            />
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
