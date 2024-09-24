"use client";

import theme from "@/styles/theme.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CookiesProvider } from "react-cookie";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <CookiesProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </CookiesProvider>
      </body>
    </html>
  );
}
