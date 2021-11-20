import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

/** importing our pages */
import Countries from "./countries";

const theme = {
  font: "sans-serif",
  primary: "#333",
  secondary: "#999",
};

export default function Pages() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Countries />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
