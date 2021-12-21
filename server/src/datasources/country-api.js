const { RESTDataSource } = require("apollo-datasource-rest");

class CountryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://restcountries.com/v3.1/";
  }

  getCountriesForHome() {
    return this.get("all");
  }

  getCountriesByRegion(region) {
    return this.get(`region/${region}`);
  }

  getCountriesByName(name) {
    return this.get(`name/${name}`);
  }
}

module.exports = CountryAPI;
