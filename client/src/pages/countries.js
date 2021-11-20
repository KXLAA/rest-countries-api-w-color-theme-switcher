import React from "react";
import Layout from "../components/Layout";
import CountryGrid from "../components/CountryGrid";
import Filtering from "../components/Filtering";
import CountryCard from "../components/CountryCard";

/**
 * Countries Page is the app's home page.
 * Display a grid of countries fetched with useQuery with the COUNTRIES query
 */

const Countries = () => {
  return (
    <Layout>
      <Filtering />
      <CountryGrid>
        <CountryCard />
        <CountryCard />
        <CountryCard />
        <CountryCard />
      </CountryGrid>
    </Layout>
  );
};

export default Countries;
