import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    background: {
      default: '#FFF',
    },
    primary: {
      main: '#0f132a',
    },
    secondary: { main: '#1ddd58' },
  },
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: '1rem',
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '0.5rem',
      },
    },
    MuiTextField: {
      root: {
        padding: 0,
      },
    },
  },
});
