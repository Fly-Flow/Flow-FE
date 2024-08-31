"use client";

import { Typography } from "@mui/material";
import BasicTabs from "@/components/shared/BasicTabs";

type HeaderProps = {
  headers: string[];
  currentTab: number;
  onTabChange: (newTab: number) => void;
};

const Header: React.FC<HeaderProps> = ({
  headers,
  currentTab,
  onTabChange,
}) => {
  const tabLabels = headers.map((header, index) => (
    <Typography key={index} variant="h4">
      {header}
    </Typography>
  ));

  return (
    <BasicTabs
      labels={tabLabels}
      currentTab={currentTab}
      onTabChange={onTabChange}
    />
  );
};

export default Header;
