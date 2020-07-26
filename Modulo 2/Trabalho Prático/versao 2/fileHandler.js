import { promises as fs } from 'fs';
import { doFilterCitiesInState, doMapUF } from './arrayHandler.js';

const path = './jsonFile/';
const pathAnswer = './answer/';

//Pega o arquivo json
export const getJsonFromFile = async (filePath) => {
  const file = await fs.readFile(filePath);
  const json = JSON.parse(file);
  return json;
};

export const createJsonUF = async (id, sigla, dataCities) => {
  const found = await doFilterCitiesInState(dataCities, id);
  const formatJson = await doMapUF(found, sigla);
  return formatJson;
};
export const createFile = async (id, sigla, dataCities) => {
  const createFileUF = async (sigla, json) => {
    let filePath = path + sigla + '.json';
    await fs.writeFile(filePath, json);
  };

  const json = JSON.stringify(await createJsonUF(id, sigla, dataCities));
  await createFileUF(sigla, json);
};

export const writeAnswer = (name, answer) => {
  const filePath = pathAnswer + name + '-answer.txt';
  fs.writeFile(filePath, answer);
};

export const readJsonFile = async (stateSigla) => {
  const filePath = path + stateSigla + '.json';
  const file = await fs.readFile(filePath);
  return file;
};
