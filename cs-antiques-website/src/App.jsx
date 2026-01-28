import { ThemeProvider, CssBaseline } from "@mui/material";
import luxuryTheme from "./theme/theme";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={luxuryTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
