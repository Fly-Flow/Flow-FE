"use client";

import Header from "@/components/shared/Header";
import SideBar from "@/components/shared/SideBar";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (newTab: number) => {
    setCurrentTab(newTab);
  };

  return (
    <>
      <SideBar />
      <Box
        component="main"
        sx={{
          marginLeft: "14rem",
          padding: "1rem",
        }}
      >
        <Header
          header="홈"
          currentTab={currentTab}
          onTabChange={handleTabChange}
        />
      </Box>
    </>
  );
}
