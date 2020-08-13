import React, { Component } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      allCountries: [],
      filteredCountries: [],
      filteredPopulation: 0,
      filter: '',
    };
  }

  async componentDidMount() {
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();

    const allCountries = json.map(({ name, numericCode, flag, population }) => {
      return {
        id: numericCode,
        name,
        filterName: name.toLowerCase(),
        flag,
        population,
      };
    });

    this.setState({
      allCountries,
      filteredCountries: Object.assign([], allCountries),
    });
  }

  handleChangeFilter = (newText) => {
    this.setState({
      filter: newText,
    });

    const newTextLowerCase = newText.toLowerCase();

    const filteredCountries = this.state.allCountries.filter((country) => {
      console.log(typeof country.filterName);
      return country.filterName.includes(newTextLowerCase);
    });

    this.setState({
      filteredCountries,
    });
  };

  render() {
    const { filteredCountries, filter } = this.state;
    return (
      <div className="container">
        <h1>React Countries</h1>
        <Header
          filter={filter}
          countryCount={filteredCountries.length}
          onChangeFilter={this.handleChangeFilter}
        />
        <Countries countries={filteredCountries} />
      </div>
    );
  }
}
