import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import CountryPage from "../components/country/CountryPage";

export const GET_COUNTRIES_BY_NAME = gql`
  query ($name: String!) {
    oneCountryByName(name: $name) {
      name
      nativeName
      population
      region
      subregion
      capital
      flags {
        svg
        png
      }
      topLevelDomain
      currencies {
        name
      }
      languages {
        name
      }
      borders
    }
  }
`;

const Country = () => {
  const params = useParams();
  const countryName = params.name;
  const { loading, error, data } = useQuery(GET_COUNTRIES_BY_NAME, {
    variables: { name: countryName },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <CountryPage country={data.oneCountryByName[0]} />
    </>
  );
};

export default Country;
