import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    //secondary: purple,

    secondary: {
      main: '#8561c5',
      //main: '#673ab7',
      // #4ba0d7
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.87)',
    },
    background: {
      paper: '#171d2a',
      default: '#101724',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h3: {
      fontSize: '40px',
    },
    h1: {
      fontSize: '70px',
    },
  },
  //status: {
  //    danger: 'orange',
  //},
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          overflowX: 'hidden',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
