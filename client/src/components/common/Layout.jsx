import React from "react";
import Header from "./Header";
import styled from "styled-components";

const PageContainer = styled.main`
  margin: 0 auto;
  width: 1200px;
  padding: 0px 40px 0px 40px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default Layout;
