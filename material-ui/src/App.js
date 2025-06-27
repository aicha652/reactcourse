import './App.css';
import Material from "./material.js"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, purple } from '@mui/material/colors';


const theme = createTheme({
  status: {
    danger: orange[500],
  },

  palette: {
    primary: {
      main: purple[100],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ marginTop: "200px", marginLeft: "500px" }} >
        <Material />
      </div>
    </ThemeProvider>
  );
}

export default App;
