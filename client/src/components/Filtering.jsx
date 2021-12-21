import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery, gql } from "@apollo/client";
import { Menu, MenuList, MenuButton, MenuItem } from "@reach/menu-button";
import "@reach/menu-button/styles.css";

export const GET_COUNTRIES_BY_REGION = gql`
  query ($region: String!) {
    countriesByRegion(region: $region) {
      name {
        common
      }
      population
      region
      capital
      flags {
        svg
        png
      }
    }
  }
`;

const FilteringContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SearchBar = styled.input`
  border: none;
  padding: 18px;
  padding-left: 74px;
  width: 480px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;

const DropdownBtn = styled.button`
  width: 250px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-left: 24px;
  padding-right: 18px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  display: inline-block;
  margin: 0;
  font-size: 14px;
  line-height: 20px;

  span {
    padding-left: 16px;
  }
`;

function Dropdown({ filterRegion, setFilterRegion }) {
  console.log(filterRegion);
  return (
    <Menu>
      <MenuButton as={DropdownBtn}>
        Filter by Region <span aria-hidden>▾</span>
      </MenuButton>
      <MenuList className="slide-down">
        <MenuItem onSelect={() => setFilterRegion("africa")}>Africa</MenuItem>
        <MenuItem onSelect={() => setFilterRegion("americas")}>
          Americas
        </MenuItem>
        <MenuItem onSelect={() => setFilterRegion("asia")}>Asia </MenuItem>
        <MenuItem onSelect={() => setFilterRegion("europe")}>Europe </MenuItem>
        <MenuItem onSelect={() => setFilterRegion("oceania")}>
          Oceania{" "}
        </MenuItem>
        <MenuItem onSelect={() => setFilterRegion("all")}>All </MenuItem>
      </MenuList>
    </Menu>
  );
}

const Filtering = ({
  countries,
  setFoundCountries,
  filterRegion,
  setFilterRegion,
}) => {
  const [search, setSearch] = useState(""); //search input state

  const filterCountries = (event) => {
    const keyword = event.target.value;
    if (keyword !== "") {
      const filteredCountries = countries?.filter((apiCountry) =>
        apiCountry.name.common.toLowerCase().includes(keyword.toLowerCase())
      );
      setFoundCountries(filteredCountries);
    } else {
      setFoundCountries(countries);
    }
    setSearch(keyword);
  };

  console.log(search);

  return (
    <FilteringContainer>
      <SearchContainer>
        <AiOutlineSearch
          style={{
            position: "absolute",
            left: "32px",
            top: "19px",
            fontSize: "24px",
            color: "#848484",
          }}
        />
        <SearchBar
          type="search"
          value={search}
          onChange={filterCountries}
          placeholder="Filter"
        />
      </SearchContainer>
      <Dropdown setFilterRegion={setFilterRegion} />
    </FilteringContainer>
  );
};

export default Filtering;
