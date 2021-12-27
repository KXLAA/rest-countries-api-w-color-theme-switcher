import React from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

const FilteringContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

const Filtering = ({ setFilterRegion }) => {
  return (
    <FilteringContainer>
      <SearchBar />
      <Dropdown setFilterRegion={setFilterRegion} />
    </FilteringContainer>
  );
};

export default Filtering;
