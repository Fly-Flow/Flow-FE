"use client";

import { Button, Chip } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
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
      <Button onClick={() => router.push("/login")}>로그인</Button>
    </>
  );
}
