"use client";

import React, { useEffect, useState } from "react";
import BasicTabs from "../shared/BasicTabs";
import { Box, Typography } from "@mui/material";

function getCurrentDateTime() {
  const now = new Date();
  const date = new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  const time = new Intl.DateTimeFormat("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(now);

  return `${date} ${time}`;
}

const Attendances: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentDateTime());

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
      setCurrentDateTime(getCurrentDateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderMyAttendances = () => {
    return (
      <>
        <Typography>{currentDateTime}</Typography>
      </>
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
          {currentTab === 0 && renderMyAttendances()}
          {currentTab === 1 && renderAllAttendances()}
        </Box>
      </Box>
    </Box>
  );
};

export default Attendances;
