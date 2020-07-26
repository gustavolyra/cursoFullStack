import {
  createFile,
  getJsonFromFile,
  writeAnswer,
  createJsonUF,
  readJsonFile,
} from './fileHandler.js';

import {
  getTop5,
  getBottom5,
  smallestCityName,
  biggestCityName,
  doFilterByLength,
  validList,
  bigCity,
  smallCity,
} from './arrayHandler.js';

const filePathState = './jsonBase/Estados.json';
const filePathCity = './jsonBase/Cidades.json';

async function main() {
  const dataStates = await getJsonFromFile(filePathState);
  const dataCities = await getJsonFromFile(filePathCity);

  //Etapa (1)
  await dataStates.forEach((state) => {
    createFile(state.ID, state.Sigla, dataCities);
  });

  //Etapa (2)
  //pega o número de cidades de cada estado
  const listNumberOfCities = [];
  for (let state in dataStates) {
    const id = dataStates[state].ID;
    const sigla = dataStates[state].Sigla;
    const data = await getNumberOfCities(id, sigla, dataCities);
    listNumberOfCities.push(data);
  }

  //Etapa 3
  //lista com os 5 estados com maior número de cidades
  await step3(listNumberOfCities);

  //Etapa 4
  //lista com os 5 estados com menor número de cidades
  await step4(listNumberOfCities);

  //Montando uma lista com as cidades de maior e menor nome de cada estado
  const listBiggestCitiesName = [];
  const listSmallestCitiesName = [];
  for (let state in dataStates) {
    const file = await readJsonFile(dataStates[state].Sigla);
    const json = JSON.parse(file);

    const bigName = bigCity(json);
    listBiggestCitiesName.push(bigName);
    const smallName = smallCity(json);
    listSmallestCitiesName.push(smallName);
  }

  //Etapa 5 lista das cidades de maior nome
  step5(listBiggestCitiesName);

  //Etapa 6 lista das cidades de menor nome
  step6(listSmallestCitiesName);

  //Etapa 7 cidade de maior nome
  step7(listBiggestCitiesName);

  //Etapa 8 cidade de menor nome
  step8(listSmallestCitiesName);
}

const validBiggestName = (list) => {
  var byData = list.slice(0); //faz uma copia da lista
  const biggestName = biggestCityName(byData);
  let listMap = doFilterByLength(list, biggestName.NomeLength);
  const final = validList(listMap);
  return final;
};
const validSmallestName = (list) => {
  var byData = list.slice(0); //faz uma copia da lista
  const smallestName = smallestCityName(byData);
  let listMap = doFilterByLength(list, smallestName.NomeLength);
  const final = validList(listMap);
  return final;
};

const step3 = async (list) => {
  const topList = getTop5(list);
  writeAnswer('3', topList);
};
const step4 = async (list) => {
  const bottomList = getBottom5(list);
  writeAnswer('4', bottomList);
};
const step5 = (list) => {
  const listInfo = getInfo(list);
  writeAnswer('5', listInfo);
};
const step6 = (list) => {
  const listInfo = getInfo(list);
  writeAnswer('6', listInfo);
};
const step7 = (list) => {
  const answer = validBiggestName(list);
  const info = getInfo(answer);
  writeAnswer('7', info);
};
const step8 = (list) => {
  const answer = validSmallestName(list);
  const info = getInfo(answer);
  writeAnswer('8', info);
};

//Etapa (2)
//função retorna número de cidades no estado
const getNumberOfCities = async (id, sigla, dataCities) => {
  const json = await createJsonUF(id, sigla, dataCities);
  const info = sigla + ' - ' + json.length;
  let data = {
    sigla: sigla,
    numero: json.length,
    info: info,
  };
  return data;
};

const getInfo = (list) => {
  let listInfo = [];
  for (let i = 0; i < list.length; i++) {
    listInfo.push(list[i].info);
  }
  return listInfo;
};

main();
