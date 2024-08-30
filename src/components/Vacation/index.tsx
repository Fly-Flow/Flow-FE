"use client";

import BasicTabs from "@/components/shared/BasicTabs/index.tsx";
import { AddCircleOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  FormLabel,
  Paper,
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

const Vacation: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const tabLabels = [
    <Typography key={currentTab} variant="h4">
      나의 휴가 관리
    </Typography>,
    <Typography key={currentTab} variant="h4">
      전체 휴가 관리
    </Typography>,
  ];

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleTabChange = (newTab: number) => {
    setCurrentTab(newTab);
  };

  const renderMyVacationApplicationDialog = () => {
    return (
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle textAlign="center">휴가 신청</DialogTitle>
        <DialogContent>
          <FormGroup>
            <FormLabel>제목</FormLabel>
            <TextField size="small" />
            <FormLabel>결재 담당자</FormLabel>
            <TextField size="small" />
            <FormLabel>휴가 시작 날짜</FormLabel>
            <TextField size="small" type="date" />
            <FormLabel>휴가 마지막 날짜</FormLabel>
            <TextField size="small" type="date" />
            <FormLabel>휴가 사유</FormLabel>
            <TextField size="small" />
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>취소</Button>
          <Button variant="contained" onClick={() => {}}>
            추가
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const renderMyVacationTable = () => {
    return (
      <TableContainer component={Paper} sx={{ paddingX: "2rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>연차 기간</TableCell>
              <TableCell>결재 담당자</TableCell>
              <TableCell>승인 여부</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderMyVacation = () => {
    return (
      <Stack gap="1rem">
        <Box display="flex" justifyContent="end">
          <Button
            variant="contained"
            startIcon={<AddCircleOutline />}
            onClick={openDialog}
          >
            휴가 신청
          </Button>
        </Box>
        {renderMyVacationTable()}
        {renderMyVacationApplicationDialog()}
      </Stack>
    );
  };

  return (
    <Stack gap="1rem">
      <BasicTabs
        labels={tabLabels}
        currentTab={currentTab}
        onTabChange={handleTabChange}
      />
      {currentTab === 0 && renderMyVacation()}
    </Stack>
  );
};

export default Vacation;
