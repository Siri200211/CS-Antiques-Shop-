import { createTheme } from '@mui/material/styles';

const luxuryTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#d4af37', // Gold
      light: '#e8c547',
      dark: '#aa8c2c',
    },
    secondary: {
      main: '#eaeaea',
      light: '#f5f5f5',
      dark: '#bdbdbd',
    },
    background: {
      default: '#0b0b0b',
      paper: '#121212',
    },
    text: {
      primary: '#eaeaea',
      secondary: '#aaaaaa',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      fontWeight: 700,
      letterSpacing: '0.02em',
      color: '#d4af37',
    },
    h2: {
      fontSize: 'clamp(1.5rem, 4vw, 3rem)',
      fontWeight: 700,
      letterSpacing: '0.01em',
    },
    h3: {
      fontSize: 'clamp(1.25rem, 3vw, 2rem)',
      fontWeight: 600,
    },
    body1: {
      fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 600,
          borderRadius: '50px',
          padding: '12px 40px',
          transition: 'all 0.3s ease',
          fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #d4af37 0%, #e8c547 100%)',
          color: '#0b0b0b',
          boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 30px rgba(212, 175, 55, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
        outlinedSecondary: {
          borderColor: '#d4af37',
          color: '#d4af37',
          '&:hover': {
            backgroundColor: 'rgba(212, 175, 55, 0.1)',
            borderColor: '#e8c547',
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 20,
  },
});

export default luxuryTheme;
