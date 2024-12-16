import AccessibleCarousel from './AccessibleCarousel';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // your MUI theme

// Basic usage
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AccessibleCarousel />
    </ThemeProvider>
  );
}

export default App;
