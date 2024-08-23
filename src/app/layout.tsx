"use client";

import SideBar from "@/components/shared/SideBar";
import theme from "@/styles/theme.ts";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SideBar />
          <Box
            component="main"
            sx={{
              marginLeft: "14rem",
              padding: "1rem",
            }}
          >
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
