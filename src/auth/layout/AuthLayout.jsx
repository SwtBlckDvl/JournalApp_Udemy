import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid
      container
      spacing={0} // Para que no haya espacio entre los hijos
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "main", padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3} // En pantallas pequeñas va a tener 3 posiciones.
        sx={{
          width: { sm: 450 },
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }} // Es el extra style.
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};
