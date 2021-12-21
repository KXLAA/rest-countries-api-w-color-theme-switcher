import { React, useState, useEffect } from "react";
import Layout from "../components/Layout";
import CountryGrid from "../components/CountryGrid";
import Filtering from "../components/Filtering";
import CountryCard from "../components/CountryCard";
import { useQuery, gql } from "@apollo/client";

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

/**
 * Countries Page is the app's home page.
 * Display a grid of countries fetched with useQuery with the COUNTRIES query
 */

const Countries = () => {
  const [filterRegion, setFilterRegion] = useState("all");

  const { loading, error, data } = useQuery(GET_COUNTRIES_BY_REGION, {
    variables: { region: filterRegion },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Layout>
      <Filtering
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
      />
      <CountryGrid>
        {data?.countriesByRegion?.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </CountryGrid>
    </Layout>
  );
};

export default Countries;
