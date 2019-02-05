import React from 'react';
import AppRouter from './components/AppRouter/AppRouter';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { red, blue, purple } from '@material-ui/core/colors';
import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? 'http://localhost:80/api' : 'https://coachesclass.com/api'

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

function App() {

  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <Router>
        <AppRouter />
      </Router>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
