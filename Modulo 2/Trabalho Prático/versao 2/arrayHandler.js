//Cria o formato do Json dos arquivos UF.json
export const doMapUF = (data, sigla) => {
  const found = data.map((city) => {
    const { Nome } = city;
    return {
      Nome,
      SiglaEstado: sigla,
      NomeLength: Nome.length,
    };
  });
  return found;
};

//Filtra as cidades no estado com base no ID do estado
export const doFilterCitiesInState = (dataCities, idState) => {
  const found = dataCities.filter((city) => {
    if (city.Estado === idState) {
      return city;
    }
  });
  return found;
};
