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
      secondary: '#9575cd',
    },
    background: {
      paper: '#171d2a',
      default: '#101724',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
    h1: {
      fontSize: '40px',
    },
  },
  //status: {
  //    danger: 'orange',
  //},
});

theme = responsiveFontSizes(theme);
export default theme;
