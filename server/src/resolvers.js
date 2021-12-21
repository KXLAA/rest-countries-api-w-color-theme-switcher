const resolvers = {
  Query: {
    countriesForHome: (_, __, { dataSources }) => {
      return dataSources.countryAPI.getCountriesForHome();
    },
    countriesByRegion: (_, { region }, { dataSources }) => {
      if (region === "all") {
        return dataSources.countryAPI.getCountriesForHome();
      } else {
        return dataSources.countryAPI.getCountriesByRegion(region);
      }
    },
    countriesByName: (_, { name }, { dataSources }) => {
      return dataSources.countryAPI.getCountriesByName(name);
    },
  },
};

module.exports = resolvers;
