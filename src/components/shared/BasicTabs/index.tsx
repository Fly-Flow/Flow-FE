import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

interface TabsProps {
  labels: React.ReactNode[];
  currentTab: number;
  onTabChange: (index: number) => void;
}

const BasicTabs: React.FC<TabsProps> = ({
  labels,
  currentTab,
  onTabChange,
}) => {
  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    onTabChange(newValue);
  };

  return (
    <Box>
      <Tabs value={currentTab} onChange={handleChange}>
        {labels.map((label, index) => (
          <Tab key={index} label={label} value={index} />
        ))}
      </Tabs>
    </Box>
  );
};

export default BasicTabs;
