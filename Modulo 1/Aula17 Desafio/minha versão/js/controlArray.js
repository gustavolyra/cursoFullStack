const doMap = (data) => {
  const list = data.map((country) => {
    const { translations, flag, population, numericCode } = country;
    return {
      name: translations.pt,
      flag,
      population,
      id: numericCode,
      favorite: false,
    };
  });
  return list;
};

const changeMap = (data, countryName) => {
  const list = data.map((country) => {
    if (country.name === countryName) {
      return {
        name: country.name,
        flag: country.flag,
        population: country.population,
        id: country.id,
        favorite: !country.favorite,
      };
    } else {
      return {
        name: country.name,
        population: country.population,
        id: country.id,
        flag: country.flag,
        favorite: country.favorite,
      };
    }
  });
  return list;
};

const doMapOther = (data) => {
  const list = data.filter((country) => country.favorite === false);
  const sortList = list.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return sortList;
};

const doMapFavorite = (data) => {
  const list = data.filter((country) => country.favorite === true);
  const sortList = list.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return sortList;
};

const getPopulation = (list) => {
  const totalPopulation = list.reduce((accumulator, current) => {
    return accumulator + current.population;
  }, 0);
  var populationNumber = formatNumber(totalPopulation);
  var strPopulation = 'População total : ' + populationNumber;
  return strPopulation;
};

function formatNumber(number) {
  numberFormat = Intl.NumberFormat('pt-BR');
  return numberFormat.format(number);
}
