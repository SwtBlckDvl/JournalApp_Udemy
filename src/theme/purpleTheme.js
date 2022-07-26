import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

// Esta funcion que recibe un objeto
export const purpleTheme = createTheme({
  palette: {
    main: "#262254",
  },
  secondary: {
    main: "#543884",
  },
  error: {
    main: red.A400,
  },
});
