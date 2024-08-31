"use client";

import { Typography } from "@mui/material";
import BasicTabs from "@/components/shared/BasicTabs";

type HeaderProps = {
  header: string;
  currentTab: number;
  onTabChange: (newTab: number) => void;
};

const Header: React.FC<HeaderProps> = ({ header, currentTab, onTabChange }) => {
  const tabLabels = [
    <Typography key={0} variant="h4">
      {header}
    </Typography>,
  ];

  return (
    <BasicTabs
      labels={tabLabels}
      currentTab={currentTab}
      onTabChange={onTabChange}
    />
  );
};

export default Header;
