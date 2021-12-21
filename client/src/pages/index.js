import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

/** importing our pages */
import Countries from "./countries";
import Country from "./country";

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
          <Route path="/country/:name" element={<Country />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
