import { createTheme } from "@mui/material";

const fontTheme = {
  fontFamily: ["Dongle", "sans-serif"].join(","),
  fontSize: 22,
  fontWeight: 300,
};

const lightTheme = createTheme({
  typography: fontTheme,
  palette: {
    mode: "light",
  },
});
const darkTheme = createTheme({
  typography: fontTheme,
  palette: {
    mode: "dark",
  },
});

export { lightTheme, darkTheme };
