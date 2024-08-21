import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#199AE2",
      dark: "#006BA7",
    },
    secondary: {
      main: "#57C3FF",
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
      main: "#FFE8DF",
      light: "#C4E6C1",
    },
    info: {
      main: "#C4E6C1",
      light: "#D3F1FF",
    },
  },
});

export default theme;
