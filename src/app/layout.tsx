"use client";

import theme from "@/styles/theme.ts";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <RecoilRoot>
            <CssBaseline />
            {children}
          </RecoilRoot>
        </ThemeProvider>
      </body>
    </html>
  );
}
