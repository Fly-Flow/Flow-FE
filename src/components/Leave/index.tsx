"use client";

import BasicTabs from "@/components/shared/BasicTabs/index.tsx";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

const Leave: React.FC = (props) => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabLabels = [
    <Typography key={currentTab} variant="h4">
      나의 휴가 관리
    </Typography>,
    <Typography key={currentTab} variant="h4">
      전체 휴가 관리
    </Typography>,
  ];

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
    </Box>
  );
};

export default Leave;
