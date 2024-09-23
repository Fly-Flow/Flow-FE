import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles/createPalette";

// 기존 MUI Palette 타입을 확장
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    gray: Palette["primary"];
    purple: Palette["primary"];
  }
  interface PaletteOptions {
    gray?: PaletteOptions["primary"];
    purple?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#199AE2",
      dark: "#006BA7",
    },
    secondary: {
      main: "#90D6FE",
    },
    background: {
      default: "#FFFCF0",
    },
    error: {
      main: "#C62828",
      light: "#FDC1C1",
    },
    warning: {
      main: "#EF6C00",
      light: "#FFE8DF",
    },
    success: {
      main: "#2E7D32",
      light: "#C4E6C1",
    },
    info: {
      main: "#0277BD",
      light: "#D3F1FF",
    },
    gray: {
      main: "#66717E",
      light: "#D9D9D9",
    },
    purple: {
      main: "#B344F9",
      light: "#E0B1FD",
    },
  },
});

export default theme;
