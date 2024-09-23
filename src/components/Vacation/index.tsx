"use client";

import Chip from "@/components/shared/Chip/index.tsx";
import SearchField from "@/components/shared/SearchField/index.tsx";
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
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Tabs from "@/components/shared/Tabs/index.tsx";
import Table from "@/components/shared/Table/index.tsx";

const Vacation: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  // 휴가 신청 Dialog Open 상태 관리
  const [isVacationApplicationDialogOpen, setIsVacationApplicationDialogOpen] =
    useState(false);
  // 휴가 신청 조회 Dialog Open 상태 관리
  const [
    isVacationApplicationViewDialogOpen,
    setIsVacationApplicationViewDialogOpen,
  ] = useState(false);

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

  // 내 휴가 관리
  const [myVacations, setMyVacations] = useState([
    {
      name: "김철수",
      title: "휴가 신청합니다.",
      date: "2024-10-01 ~ 2024-10-04",
      approver: "담당자",
      approval: <Chip label="대기중" />,
    },
  ]);

  const myVacationTableHeaders = [
    "이름",
    "제목",
    "연차 기간",
    "결재 담당자",
    "승인 여부",
  ];

  const myVacationTableRows = myVacations.map((vacation) => [
    vacation.name,
    vacation.title,
    vacation.date,
    vacation.approver,
    vacation.approval,
  ]);

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
        <Table headers={myVacationTableHeaders} rows={myVacationTableRows} />
        {renderMyVacationApplicationDialog()}
      </Stack>
    );
  };

  // 전체 휴가 관리
  const [allVacations, setAllVacations] = useState([
    {
      name: "김철수",
      title: "휴가 신청합니다.",
      date: "2024-10-01 ~ 2024-10-04",
      approver: "담당자",
      approval: <Chip label="대기중" />,
    },
  ]);

  const allVacationTableHeaders = [
    "이름",
    "제목",
    "연차 기간",
    "결재 담당자",
    "승인 여부",
  ];

  const allVacationTableRows = allVacations.map((vacation) => [
    vacation.name,
    vacation.title,
    vacation.date,
    vacation.approver,
    vacation.approval,
  ]);

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

  const renderAllVacation = () => {
    return (
      <Stack gap="1rem">
        <Box display="flex" justifyContent="start">
          <SearchField label="이름" />
        </Box>
        <Table
          headers={allVacationTableHeaders}
          rows={allVacationTableRows}
          onRowClick={openVacationApplicationViewDialog}
        />
        {renderVacationApplicationViewDialog()}
      </Stack>
    );
  };

  return (
    <Stack gap="1rem">
      <Tabs
        labels={["나의 휴가 관리", "전체 휴가 관리"]}
        currentTab={currentTab}
        onTabChange={handleTabChange}
      />
      {currentTab === 0 && renderMyVacation()}
      {currentTab === 1 && renderAllVacation()}
    </Stack>
  );
};

export default Vacation;
