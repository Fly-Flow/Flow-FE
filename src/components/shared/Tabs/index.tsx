import React from "react";
import { Box, Tab, Tabs as MuiTabs, Typography } from "@mui/material";

interface TabsProps {
  labels: React.ReactNode[];
  currentTab: number;
  onTabChange: (index: number) => void;
}

// 여러 개의 Tab을 렌더링하는 Tabs 컴포넌트
const Tabs: React.FC<TabsProps> = ({ labels, currentTab, onTabChange }) => {
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    onTabChange(newValue);
  };

  return (
    <Box>
      <MuiTabs value={currentTab} onChange={handleChange}>
        {labels.map((label, index) => (
          <Tab
            key={index}
            label={<Typography variant="h4">{label}</Typography>}
            value={index}
          />
        ))}
      </MuiTabs>
    </Box>
  );
};

export default Tabs;
