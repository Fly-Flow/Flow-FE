"use client";

import React, { useEffect, useState } from "react";
import BasicTabs from "../shared/BasicTabs";
import { Box, Button, Stack, Typography } from "@mui/material";

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

const Attendances: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [hasMounted, setHasMounted] = useState(false);
  const [clockInTime, setClockInTime] = useState<string | null>(null);
  const [clockOutTime, setClockOutTime] = useState<string | null>(null);

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

  const handleClockIn = () => {
    if (!clockInTime) {
      setClockInTime(getCurrentTime());
    }
  };

  const handleClockOut = () => {
    setClockOutTime(getCurrentTime());
  };

  const renderMyAttendances = () => {
    return (
      <Stack gap="1rem">
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
          <Typography variant="subtitle1" color="primary.main">
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
          <Typography variant="subtitle1" color="primary.main">
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
      </Stack>
    );
  };

  const renderAllAttendances = () => {
    return <>전체 출퇴근 콘텐츠</>;
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
