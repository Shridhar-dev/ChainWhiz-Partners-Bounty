import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    background: 'black'
  },
  typography: {
    fontFamily: ["EudoxusSans"].join(","),
  }
});

export { darkTheme, createTheme };