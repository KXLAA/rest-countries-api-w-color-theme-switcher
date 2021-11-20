const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    countriesForHome: () => [...new Array(8)],
  }),
  Country: () => ({
    id: () => "country_01",
    name: () => "Colombia",
    population: () => 48759958,
    region: () => "South America",
    capital: () => "Bogotá",
    flag: () => "https://restcountries.com/data/col.svg",
  }),
};

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
    `);
});
