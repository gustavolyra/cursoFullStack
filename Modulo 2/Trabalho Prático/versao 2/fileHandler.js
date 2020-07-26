import { promises as fs } from 'fs';

const path = './jsonFile/';

//Pega o arquivo json
export const getJsonFromFile = async (filePath) => {
  const file = await fs.readFile(filePath);
  const json = JSON.parse(file);
  return json;
};

export const createFileUF = async (sigla, json) => {
  let filePath = path + sigla + '.json';
  await fs.writeFile(filePath, json);
};
