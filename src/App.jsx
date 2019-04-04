import React from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline, createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";
import { red, blue, white } from "@material-ui/core/colors";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const theme = {
  palette: {
    primary: blue,
    secondary: white,
    // secondary: { main: "#9e9e9e" },
    // secondary: { main: "#2196f3" },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  spacing: {
    unit: 16
  },
  typography: {
    useNextVariants: true
  }
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
