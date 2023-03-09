import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { IconContext } from "react-icons";

import App from "./App";
import ScrollToTop from "./components/functional/ScrollToTop";
import { theme } from "./styles/global/theme";
import { GlobalStyles } from "./styles/global/Global.styled";
import { Web3Provider } from "./utils/context/Web3Context";
import { ModalProvider } from "./utils/context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Web3Provider>
      <ModalProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router>
            <ScrollToTop />
            <IconContext.Provider value={{ size: "18px" }}>
              <App />
            </IconContext.Provider>
          </Router>
        </ThemeProvider>
      </ModalProvider>
    </Web3Provider>
  </React.StrictMode>
);
