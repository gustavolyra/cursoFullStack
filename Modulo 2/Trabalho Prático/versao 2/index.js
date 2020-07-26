import { getJsonFromFile, createFileUF } from './fileHandler.js';
import { doMapUF, doFilterCitiesInState } from './arrayHandler.js';

const filePathState = './jsonBase/Estados.json';
const filePathCity = './jsonBase/Cidades.json';

async function main() {
  const dataStates = await getJsonFromFile(filePathState);
  const dataCities = await getJsonFromFile(filePathCity);

  await dataStates.forEach(async (state) => {
    const json = await createJsonUF(state.ID, state.Sigla, dataCities);
    await createFileUF(state.Sigla, json);
  });
}

async function createJsonUF(id, sigla, dataCities) {
  const found = await doFilterCitiesInState(dataCities, id);
  const formatJson = await doMapUF(found, sigla);
  return JSON.stringify(formatJson);
}

main();
