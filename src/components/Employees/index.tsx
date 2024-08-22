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

const Employees: React.FC = (props) => {
  const [employeesDialog, setEmployeesDialog] = useState(false);

  const openDialog = () => {
    setEmployeesDialog(true);
  };

  const closeDialog = () => {
    setEmployeesDialog(false);
  };

  const renderHeader = () => {
    return (
      <Typography variant="h4" sx={{ cursor: "default" }}>
        구성원
      </Typography>
    );
  };

  const renderToolbar = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField size="small" label="이름" />
        <Button variant="contained" onClick={openDialog}>
          구성원 추가
        </Button>
      </Box>
    );
  };

  const renderTable = () => {
    return (
      <TableContainer>
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
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <>
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
    </>
  );
};

export default Employees;
