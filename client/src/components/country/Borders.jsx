import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

export const GET_COUNTRIES_BY_CODE = gql`
  query CountriesByCode($alpha3Code: String!) {
    countriesByCode(alpha3Code: $alpha3Code) {
      name
    }
  }
`;

const Border = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  padding: 4px 24px;
  display: flex;
  align-items: center;
`;

const Borders = ({ border }) => {
  const { loading, error, data } = useQuery(GET_COUNTRIES_BY_CODE, {
    variables: { alpha3Code: border },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {}
      <Link to={`/country/${data?.countriesByCode?.name}`}>
        <Border>{data?.countriesByCode?.name}</Border>
      </Link>
    </>
  );
};

export default Borders;
