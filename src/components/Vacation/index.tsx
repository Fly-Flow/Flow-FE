"use client";

import BasicTabs from "@/components/shared/BasicTabs/index.tsx";
import Chip from "@/components/shared/Chip/index.tsx";
import SearchField from "@/components/shared/SearchField/index.tsx";
import theme from "@/styles/theme.ts";
import { AddCircleOutline } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
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
  const [isVacationApplicationDialogOpen, setIsVacationApplicationDialogOpen] =
    useState(false);
  const [
    isVacationApplicationViewDialogOpen,
    setIsVacationApplicationViewDialogOpen,
  ] = useState(false);

  const tabLabels = [
    <Typography key={currentTab} variant="h4">
      나의 휴가 관리
    </Typography>,
    <Typography key={currentTab} variant="h4">
      전체 휴가 관리
    </Typography>,
  ];

  const openVacationApplicationDialog = () => {
    setIsVacationApplicationDialogOpen(true);
  };

  const closeVacationApplicationDialog = () => {
    setIsVacationApplicationDialogOpen(false);
  };

  const openVacationApplicationViewDialog = () => {
    setIsVacationApplicationViewDialogOpen(true);
  };

  const closeVacationApplicationViewDialog = () => {
    setIsVacationApplicationViewDialogOpen(false);
  };

  const handleTabChange = (newTab: number) => {
    setCurrentTab(newTab);
  };

  const renderMyVacationApplicationDialog = () => {
    return (
      <Dialog
        open={isVacationApplicationDialogOpen}
        onClose={closeVacationApplicationDialog}
      >
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
          <Button onClick={closeVacationApplicationDialog}>취소</Button>
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
            onClick={openVacationApplicationDialog}
          >
            휴가 신청
          </Button>
        </Box>
        {renderMyVacationTable()}
        {renderMyVacationApplicationDialog()}
      </Stack>
    );
  };

  const renderVacationApplicationViewDialog = () => {
    return (
      <Dialog
        open={isVacationApplicationViewDialogOpen}
        onClose={closeVacationApplicationViewDialog}
      >
        <Box display="flex" justifyContent="end">
          <IconButton onClick={closeVacationApplicationViewDialog}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogTitle textAlign="center">휴가 신청서 조회</DialogTitle>
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
          <Button
            variant="contained"
            sx={{ backgroundColor: "info.main" }}
            onClick={() => {}}
          >
            승인
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "error.main" }}
            onClick={() => {}}
          >
            반려
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const renderAllVacationTable = () => {
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
            <TableRow
              onClick={openVacationApplicationViewDialog}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: theme.palette.info.light,
                },
              }}
            >
              <TableCell>홍길동</TableCell>
              <TableCell>휴가 신청</TableCell>
              <TableCell>2023-09-01 ~ 2023-09-10</TableCell>
              <TableCell>김매니저</TableCell>
              <TableCell>
                <Chip label="대기중" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderAllVacation = () => {
    return (
      <Stack gap="1rem">
        <Box display="flex" justifyContent="start">
          <SearchField label="이름" />
        </Box>
        {renderAllVacationTable()}
        {renderVacationApplicationViewDialog()}
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
      {currentTab === 1 && renderAllVacation()}
    </Stack>
  );
};

export default Vacation;
