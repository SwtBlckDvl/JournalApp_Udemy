import { Box, Toolbar } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";

// Para crear la barra lateral de un tamaño específico
const drawerWidth = 240;
// como es un layout estamos esperando recibir un children.
export const JournalLayout = ({ children }) => {
  return (
    // Box es como un div, pero para MaterialUI.
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar */}
      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
        {/* Toolbar, nos ayuda a que el contenido se acomode por sí solo*/}
        {/* debajo de la NavBar*/}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
