const resolvers = {
  Query: {
    countriesForHome: (_, __, { dataSources }) => {
      return dataSources.countryAPI.getCountriesForHome();
    },
  },
};

module.exports = resolvers;
