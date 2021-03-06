const { RESTDataSource } = require("apollo-datasource-rest");

class CountryAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://restcountries.com/v2/";
  }

  getAllCountries() {
    return this.get("all");
  }

  getCountriesForHome(region, name) {
    if (region) {
      return this.get(`region/${region}`);
    }
    if (name) {
      return this.get(`name/${name}`);
    }
  }

  getCountriesByRegion(region) {
    return this.get(`region/${region}`);
  }

  getCountriesByName(name) {
    return this.get(`name/${name}`);
  }

  getCountryByName(name) {
    return this.get(`name/${name}?fullText=true`);
  }

  getCountriesByCode(alpha3Code) {
    return this.get(`alpha/${alpha3Code}`);
  }
}

module.exports = CountryAPI;
