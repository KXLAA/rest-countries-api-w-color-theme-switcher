import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useQuery, gql } from "@apollo/client";
import { useDebounce } from "use-debounce";

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

const Search = styled.input`
  border: none;
  padding: 18px;
  padding-left: 74px;
  width: 480px;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
`;

export const GET_COUNTRIES_FOR_HOME = gql`
  query countriesForHome($region: String, $name: String) {
    countriesForHome(region: $region, name: $name) {
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

export default function SearchBar({ countries, setFoundCountries }) {
  const [search, setSearch] = useState("");

  console.log(search);

  const { loading, error, data } = useQuery(GET_COUNTRIES_FOR_HOME, {
    variables: { name: search },
  });

  console.log(data?.countriesForHome);

  //search input state
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
        <Search
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Filter"
        />
      </SearchContainer>
    </FilteringContainer>
  );
}
