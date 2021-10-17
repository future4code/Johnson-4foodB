import React from "react";
import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../src/constants/theme'
import FooterNav from "./Components/FooterNav/FooterNav";
import Router from "./Routes/Router";
 

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
