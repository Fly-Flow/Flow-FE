"use client";

import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Button variant="contained">안녕하시와요?</Button>
      <Button variant="contained" color="secondary">
        안녕하시와요?
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "primary.dark" }}>
        안녕하시와요?
      </Button>
    </>
  );
}
