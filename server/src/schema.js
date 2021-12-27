const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get countries array for homepage grid"
    allCountries: [Country!]!
    countriesForHome(region: String, name: String): [Country!]!
    countriesByRegion(region: String!): [Country!]!
    countriesByName(name: String!): [Country!]!
    oneCountryByName(name: String!): [Country]!
  }

  "Country definition for the home page"
  type Country {
    "The countries name"
    name: String!
    "The countries Native Name"
    nativeName: String
    "The countries population"
    population: Int
    "The countries region"
    region: String
    "The countries sub-region"
    subregion: String
    "The countries capital"
    capital: String
    "The countries flag"
    flags: Flags
    "The top level domain"
    topLevelDomain: [String]
    "Currency"
    currencies: [Currency]
    "Currency"
    languages: [Languages]
  }

  type Flags {
    svg: String!
    png: String!
  }

  type Currency {
    name: String!
  }

  type Languages {
    name: String!
  }
`;
module.exports = typeDefs;
