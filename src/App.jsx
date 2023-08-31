import { Main } from './pages'
import { theme } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Main />
      </div>
    </ThemeProvider>
  );
}

export default App;
