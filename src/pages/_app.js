import React from "react";
import { FormikProvider } from "formik";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/fonts.css";

import { GlobalStyles } from "@/styles/globalStyles";
import DefaultTheme from "@/styles/defaultTheme";

import {
  AppProvider,
  MetaMaskProvider,
  UserProvider,
} from "@/application/context";

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={DefaultTheme}>
    <UserProvider>
      <AppProvider>
        <MetaMaskProvider>
          <FormikProvider>
            <GlobalStyles />
            <ToastContainer />
            <Component {...pageProps} />
          </FormikProvider>
        </MetaMaskProvider>
      </AppProvider>
    </UserProvider>
  </ThemeProvider>
);

export default App;
