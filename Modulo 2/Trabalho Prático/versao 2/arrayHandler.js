//Cria o formato do Json dos arquivos UF.json
export const doMapUF = (data, sigla) => {
  const found = data.map((city) => {
    const { Nome } = city;
    const info = Nome + ' - ' + sigla;
    return {
      Nome,
      SiglaEstado: sigla,
      NomeLength: Nome.length,
      info: info,
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

export const bigCity = (list) => {
  var byData = list.slice(0);
  const big = biggestCityName(byData);
  const filtered = doFilterByLength(byData, big.NomeLength);
  const valid = validList(filtered);
  return valid[0];
};
export const smallCity = (list) => {
  var byData = list.slice(0);
  const small = smallestCityName(byData);
  const filtered = doFilterByLength(byData, small.NomeLength);
  const valid = validList(filtered);
  return valid[0];
};

//retorna a cidade de maior nome da lista
export const biggestCityName = (list) => {
  var byData = list.slice(0); //faz uma copia da lista
  const sortList = byData.sort((a, b) => b.NomeLength - a.NomeLength);
  return sortList[0];
};
export const smallestCityName = (list) => {
  var byData = list.slice(0); //faz uma copia da lista
  const sortList = byData.sort((a, b) => a.NomeLength - b.NomeLength);
  return sortList[0];
};

//5 estados com maior número de cidades
export const getTop5 = (list) => {
  var byData = list.slice(0); //faz uma copia da lista
  const sortList = byData.sort((a, b) => b.numero - a.numero);
  let listTop5 = [];
  for (let i = 0; i < 5; i++) {
    listTop5.push(byData[i].info);
  }
  return listTop5;
};
export const getBottom5 = (list) => {
  var byData = list.slice(0); //faz uma copia da lista
  const sortList = byData.sort((a, b) => a.numero - b.numero);
  let listBottom5 = [];
  for (let i = 0; i < 5; i++) {
    listBottom5.push(byData[i].info);
  }
  return listBottom5;
};

export const doFilterByLength = (list, size) => {
  const listFiltered = list.filter((city) => {
    if (city.NomeLength === size) {
      return city;
    }
  });
  return listFiltered;
};

export const doSortByName = (list) => {
  const listSorted = list.sort((a, b) => {
    return a.Nome.localeCompare(b.Nome);
  });
  return listSorted;
};

//No caso de empate no tamanho do nome, o desempate é por ordem alfabética
export const validList = (list) => {
  if (list.length === 1) return list;
  else {
    const sortList = doSortByName(list);
    return [sortList[0]]; //Enviando nesse formato para manter o padrão
  }
};
