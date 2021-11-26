const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get countries array for homepage grid"
    countriesForHome: [Country!]!
  }

  "Country definition for the home page"
  type Country {
    "The countries name"
    name: Name!
    "The countries population"
    population: Int
    "The countries region"
    region: String
    "The countries capital"
    capital: [String]
    "The countries flag"
    flags: Flags
  }

  type Name {
    common: String!
  }

  type Flags {
    svg: String!
  }
`;
module.exports = typeDefs;
