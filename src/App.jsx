import React from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { red, blue, purple } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:80/api' : 'https://mybakemarkapp.com/api'

const theme = {
  palette: {
    primary: blue,
    secondary: purple,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  spacing: {
    unit: 16
  },
  typography: {
    useNextVariants: true,
  },
};

const useStyles = makeStyles(() => ({
  defaults: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <div className={classes.defaults}>
        <Router>
          <AppRouter />
        </Router>
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
