import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const JournalApp = () => {
  return (
    <AppTheme>
      {/* Aqui utilizaremos AppRouter como el sistema de rutas principal. */}
      {/* Aqui vamos a renderizar */}
      <AppRouter />
    </AppTheme>
  );
};
