import './App.css';
import Material from "./material.js"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, purple } from '@mui/material/colors';
import GridTest from './GridTest.js';
import StackTest from './StackTest.js';


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
      <div className="App" >
        <Material />

        {/*<GridTest />
        <StackTest />*/}
      </div>
    </ThemeProvider>
  );
}

export default App;
