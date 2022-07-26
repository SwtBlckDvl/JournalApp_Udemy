import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import { purpleTheme } from "./purpleTheme";

// Es un HOC (Higher Order Component) recibiendo el children.
// EL HOC no es mas que un componente que internamente va a tener otros
// componentes hijos.
// El children va a ser practicamente el App
export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
