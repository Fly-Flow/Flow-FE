"use client";

import { Button, Chip } from "@mui/material";

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
      <Button
        variant="contained"
        sx={{ backgroundColor: "common.white", color: "common.black" }}
      >
        안녕하시와요?
      </Button>
      <Chip
        variant="outlined"
        label="결근"
        sx={{
          backgroundColor: "error.light",
          borderColor: "error.main",
          color: "error.main",
        }}
      />
    </>
  );
}
