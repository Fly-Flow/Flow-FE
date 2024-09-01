"use client";

import Header from "@/components/shared/Header";
import SideBar from "@/components/shared/SideBar";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Home() {
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
        <Header label="홈" />
      </Box>
    </>
  );
}
