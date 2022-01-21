import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FEE934",
    },
    secondary: {
      main: "#212121",
    },
    default: {
      main: "#ffffff",
    },
    gray: {
      main: "#F8F8F8",
    },
    background: {
      drawer: "#643FDB",
    },
    text: {
      primary: "#212121",
      secondary: "#FEE934",
      default: "#686E76",
      details: "#54595F",
    },
  },
});

export default theme;
