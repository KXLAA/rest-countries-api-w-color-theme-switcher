const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get countries array for homepage grid"
    countriesForHome: [Country!]!
  }

  "Country definition for the home page"
  type Country {
    id: ID!
    "The countries name"
    name: String!
    "The countries population"
    population: Int
    "The countries region"
    region: String
    "The countries capital"
    capital: String
    "The countries flag"
    flag: String
  }
`;
module.exports = typeDefs;
