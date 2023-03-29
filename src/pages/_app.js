import React from "react";
import { FormikProvider } from "formik";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/fonts.css";

import { GlobalStyles } from "@/styles/globalStyles";
import DefaultTheme from "@/styles/defaultTheme";

import { AppProvider, UserProvider } from "@/application/context";

export default function App({ Component, pageProps }) {
  if (typeof window == undefined) return <></>;

  return (
    <ThemeProvider theme={DefaultTheme}>
      <UserProvider>
        <AppProvider>
          <FormikProvider>
            <GlobalStyles />
            <ToastContainer />
            <Component {...pageProps} />
          </FormikProvider>
        </AppProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
