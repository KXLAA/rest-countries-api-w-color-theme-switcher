import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 64px;
`;

export default function CountryGrid({ children }) {
  return <Grid>{children}</Grid>;
}
