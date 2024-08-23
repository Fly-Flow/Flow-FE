"use client";

import React, { useState } from "react";
import BasicTabs from "../shared/BasicTabs";
import { Box, Typography } from "@mui/material";

const Attendances: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabLabels = [
    <Typography key="myAttendance" variant="h6" sx={{ cursor: "default" }}>
      나의 출퇴근
    </Typography>,
    <Typography key="allAttendance" variant="h6" sx={{ cursor: "default" }}>
      전체 출퇴근
    </Typography>,
  ];

  const renderMyContents = () => {
    return <>나의 출퇴근 콘텐츠</>;
  };

  const renderAllContents = () => {
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
          {currentTab === 0 && renderMyContents()}
          {currentTab === 1 && renderAllContents()}
        </Box>
      </Box>
    </Box>
  );
};

export default Attendances;
