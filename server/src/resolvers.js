const resolvers = {
  Query: {
    allCountries: (_, __, { dataSources }) => {
      return dataSources.countryAPI.getAllCountries();
    },
    countriesForHome: (_, { region, name }, { dataSources }) => {
      if (region) {
        if (region === "all") {
          return dataSources.countryAPI.getCountriesForHome();
        } else {
          return dataSources.countryAPI.getCountriesByRegion(region);
        }
      }
      if (name) {
        return dataSources.countryAPI.getCountriesByName(name);
      }
    },
    countriesByRegion: (_, { region }, { dataSources }) => {
      if (region === "all") {
        return dataSources.countryAPI.getAllCountries();
      } else {
        return dataSources.countryAPI.getCountriesByRegion(region);
      }
    },
    countriesByName: (_, { name }, { dataSources }) => {
      return dataSources.countryAPI.getCountriesByName(name);
    },

    oneCountryByName: (_, { name }, { dataSources }) => {
      return dataSources.countryAPI.getCountryByName(name);
    },
  },
};

module.exports = resolvers;
