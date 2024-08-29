"use client";

import React, { useEffect, useState } from "react";
import BasicTabs from "../shared/BasicTabs";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
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
import SearchIcon from "@mui/icons-material/Search";
import BasicDateCalendar from "../shared/BasicDateCalendar";
import theme from "@/styles/theme";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getCurrentTime() {
  const time = new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
  return `${time}`;
}

type StatusColors = Record<string, string>;

const statusLightColors: StatusColors = {
  결근: theme.palette.error.light,
  퇴근: theme.palette.success.light,
  근무: theme.palette.info.light,
  휴가: theme.palette.success.light,
  조퇴: theme.palette.warning.light,
  지각: theme.palette.warning.light,
};

const statusMainColors: StatusColors = {
  결근: theme.palette.error.main,
  퇴근: theme.palette.success.main,
  근무: theme.palette.info.main,
  휴가: theme.palette.success.main,
  조퇴: theme.palette.warning.main,
  지각: theme.palette.warning.main,
};

const Attendances: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentDate, setCurrentDate] = useState(getCurrentDate()); // 현재 날짜
  const [currentTime, setCurrentTime] = useState(getCurrentTime()); // 현재 시간
  const [hasMounted, setHasMounted] = useState(false);
  const [clockInTime, setClockInTime] = useState<string | null>(null); // 출근 시간
  const [clockOutTime, setClockOutTime] = useState<string | null>(null); // 퇴근 시간
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs()); // 캘린더 선택 날짜

  const [commuteList, setCommuteList] = useState([
    {
      name: "김결근",
      department: "개발팀",
      clockInTime: "1234",
      clockOutTime: "1234",
      workingHours: "1234",
      workingStatus: "결근",
    },
    {
      name: "김퇴근",
      department: "인사팀",
      clockInTime: "1234",
      clockOutTime: "1234",
      workingHours: "1234",
      workingStatus: "퇴근",
    },
    {
      name: "김근무",
      department: "디자인팀",
      clockInTime: "1234",
      clockOutTime: "1234",
      workingHours: "1234",
      workingStatus: "근무",
    },
    {
      name: "김휴가",
      department: "마케팅팀",
      clockInTime: "1234",
      clockOutTime: "1234",
      workingHours: "1234",
      workingStatus: "휴가",
    },
    {
      name: "김조퇴",
      department: "운영팀",
      clockInTime: "1234",
      clockOutTime: "1234",
      workingHours: "1234",
      workingStatus: "조퇴",
    },
    {
      name: "김지각",
      department: "영업팀",
      clockInTime: "1234",
      clockOutTime: "1234",
      workingHours: "1234",
      workingStatus: "지각",
    },
  ]);

  const tabLabels = [
    <Typography key={currentTab} variant="h5">
      나의 출퇴근
    </Typography>,
    <Typography key={currentTab} variant="h5">
      전체 출퇴근
    </Typography>,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setHasMounted(true);
      setCurrentDate(getCurrentDate());
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderCurrentDateTime = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "25rem",
          height: "3.5rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          boxShadow: 2,
          cursor: "default",
        }}
      >
        <Typography color="primary.main" variant="subtitle1">
          {currentDate}
        </Typography>
        <Typography color="primary.main" variant="subtitle1">
          {"|"}
        </Typography>
        <Typography color="primary.main" variant="subtitle1">
          {currentTime}
        </Typography>
      </Box>
    );
  };

  const handleClockIn = () => {
    if (!clockInTime) {
      setClockInTime(getCurrentTime());
    }
  };

  const handleClockOut = () => {
    setClockOutTime(getCurrentTime());
  };

  const renderCommute = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "30rem",
          height: "3.5rem",
          backgroundColor: "white",
          borderRadius: "0.5rem",
          border: "1px solid",
          borderColor: "primary.main",
        }}
      >
        <Typography
          variant="subtitle1"
          color="primary.main"
          sx={{ cursor: "default" }}
        >
          {clockInTime ? clockInTime : "출근 전"}
        </Typography>
        <Button
          variant="contained"
          onClick={handleClockIn}
          disabled={!!clockInTime}
          sx={{
            color: "primary.dark",
            backgroundColor: "secondary.main",
            boxShadow: "none",
            "&:hover": {
              color: "white",
              boxShadow: "none",
            },
          }}
        >
          출근
        </Button>
        <Typography
          variant="subtitle1"
          color="primary.main"
          sx={{ cursor: "default" }}
        >
          {clockOutTime ? clockOutTime : "퇴근 전"}
        </Typography>
        <Button
          variant="contained"
          onClick={handleClockOut}
          disabled={!clockInTime}
          sx={{
            color: "primary.dark",
            backgroundColor: "secondary.main",
            boxShadow: "none",
            "&:hover": {
              color: "white",
              boxShadow: "none",
            },
          }}
        >
          퇴근
        </Button>
      </Box>
    );
  };

  const handleDateChange = (date: Dayjs | null) => {
    setSelectedDate(date);
  };

  const renderDateCalendar = () => {
    return (
      <Box sx={{ width: "24rem" }}>
        <BasicDateCalendar
          value={selectedDate}
          onDateChange={handleDateChange}
        />
      </Box>
    );
  };

  const renderCardInfo = () => {
    return (
      <Card sx={{ width: "24rem", borderRadius: "0.5rem", boxShadow: 2 }}>
        <CardContent>
          {selectedDate ? selectedDate.format("MM월 DD일 (ddd)") : ""}
          <Typography>
            {"출근"}
            {clockInTime}
          </Typography>
          <Typography>
            {"퇴근"}
            {clockOutTime}
          </Typography>
          <Typography>
            {"근무 시간"}
            {}
          </Typography>
          <Typography>
            {"근무 상태"}
            {}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const renderMyAttendances = () => {
    return (
      <Stack gap="2rem">
        <Stack gap="1rem">
          {renderCurrentDateTime()}
          {renderCommute()}
        </Stack>
        <Stack direction="row" gap="1rem">
          {renderDateCalendar()}
          {renderCardInfo()}
        </Stack>
      </Stack>
    );
  };

  const renderSearchbar = () => {
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
      </Box>
    );
  };

  const renderCommuteTable = () => {
    return (
      <TableContainer sx={{ paddingX: "2rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>이름</TableCell>
              <TableCell>부서</TableCell>
              <TableCell>출근 시간</TableCell>
              <TableCell>퇴근 시간</TableCell>
              <TableCell>근무 시간</TableCell>
              <TableCell>근무 상태</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commuteList.map((list) => (
              <TableRow key={list.name}>
                <TableCell>{list.name}</TableCell>
                <TableCell>{list.department}</TableCell>
                <TableCell>{list.clockInTime}</TableCell>
                <TableCell>{list.clockOutTime}</TableCell>
                <TableCell>{list.workingHours}</TableCell>
                <TableCell>
                  <Chip
                    label={list.workingStatus}
                    style={{
                      backgroundColor: statusLightColors[list.workingStatus],
                      color: statusMainColors[list.workingStatus],
                      border: `1px solid ${
                        statusMainColors[list.workingStatus]
                      }`,
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderAllAttendances = () => {
    return (
      <Stack gap="1rem">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderDateCalendar()}
        </Box>
        {renderSearchbar()}
        {renderCommuteTable()}
      </Stack>
    );
  };

  const handleTabChange = (newTab: number) => {
    setCurrentTab(newTab);
  };

  return (
    <Box>
      <BasicTabs
        labels={tabLabels}
        currentTab={currentTab}
        onTabChange={handleTabChange}
      />
      <Box>
        <Box sx={{ padding: "1rem" }}>
          {currentTab === 0 && hasMounted && renderMyAttendances()}
          {currentTab === 1 && renderAllAttendances()}
        </Box>
      </Box>
    </Box>
  );
};

export default Attendances;
