import { React, useState, useEffect } from "react";
import Layout from "../components/Layout";
import CountryGrid from "../components/CountryGrid";
import Filtering from "../components/Filtering";
import CountryCard from "../components/CountryCard";
import { useQuery, gql } from "@apollo/client";

export const COUNTRIES = gql`
  query getCountries {
    countriesForHome {
      name {
        common
      }
      population
      capital
      flags {
        svg
        png
      }
      region
    }
  }
`;

/**
 * Countries Page is the app's home page.
 * Display a grid of countries fetched with useQuery with the COUNTRIES query
 */

const Countries = () => {
  const { loading, error, data } = useQuery(COUNTRIES);
  const [countries, setCountries] = useState([]);
  const [foundCountries, setFoundCountries] = useState([]);

  useEffect(() => {
    setCountries(data?.countriesForHome);
  }, [countries]);

  console.log(data);

  console.log(countries);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Layout>
      <Filtering countries={countries} setFoundCountries={setFoundCountries} />
      <CountryGrid>
        {foundCountries?.map((country) => (
          <CountryCard key={country.name.common} country={country} />
        ))}
      </CountryGrid>
    </Layout>
  );
};

export default Countries;
