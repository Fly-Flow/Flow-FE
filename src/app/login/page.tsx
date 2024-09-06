"use client";

import Login from "@/components/Login/LoginContainer.tsx";
import Logo from "@/components/Logo/index.tsx";
import theme from "@/styles/theme.ts";
import { Box, Stack } from "@mui/material";

const LoginPage = () => {
  return (
    <Stack direction="row" height="100vh">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="30%"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Logo color="white" sx={{ width: "18.75rem" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="70%"
      >
        <Login />
      </Box>
    </Stack>
  );
};

export default LoginPage;
