import { React, useState } from "react";
import Layout from "../components/common/Layout";
import CountryGrid from "../components/countries/CountryGrid";
import Filtering from "../components/countries/Filtering";
import CountryCard from "../components/countries/CountryCard";
import { useQuery, gql } from "@apollo/client";

export const GET_COUNTRIES_BY_REGION = gql`
  query ($region: String!) {
    countriesByRegion(region: $region) {
      name
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

const Countries = () => {
  const [filterRegion, setFilterRegion] = useState("all");

  const { loading, error, data } = useQuery(GET_COUNTRIES_BY_REGION, {
    variables: { region: filterRegion },
  });

  console.log(data);

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
          <CountryCard key={country.name} country={country} />
        ))}
      </CountryGrid>
    </Layout>
  );
};

export default Countries;
