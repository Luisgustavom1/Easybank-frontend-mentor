import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/global";
import Home from "./views/Home";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
