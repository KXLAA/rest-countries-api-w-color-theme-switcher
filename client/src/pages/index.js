import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/** importing our pages */
import Countries from "./countries";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
}
