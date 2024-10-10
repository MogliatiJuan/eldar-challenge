import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A90E2',
    },
    secondary: {
      main: '#2C3E50',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#7F8C8D',
    },
    background: {
      default: '#2C3E50',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h5: {
      fontWeight: 600,
      color: '#4A90E2',
    },
    body1: {
      color: '#FFFFFF',
      background: '#2C3E50',
    },
  },
});

export default theme;
