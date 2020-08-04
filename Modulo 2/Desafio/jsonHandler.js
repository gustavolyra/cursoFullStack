import { promises as fs, read } from 'fs';
const { readFile, writeFile } = fs;

export const getJson = async () => {
  const data = await readFile(global.fileJson);
  const json = JSON.parse(data);
  return json;
};

export const writeJson = async (json) => {
  await writeFile(global.fileJson, JSON.stringify(json, null, 2));
};

export const getTotalScore = (json) => {
  const total = json.reduce((accumulator, current) => {
    return accumulator + current.value;
  }, 0);
  return {
    totalScore: total,
  };
};

export const getAverageScore = (json) => {
  const total = json.reduce((accumulator, current) => {
    return accumulator + current.value;
  }, 0);
  const average = total / json.length;
  return {
    averageScore: average,
  };
};

export const filterByStudent = (json, student) => {
  const found = json.filter((grade) => {
    if (grade.student === student) {
      return grade;
    }
  });
  return found;
};
export const filterBySubject = (json, subject) => {
  const found = json.filter((grade) => {
    if (grade.subject === subject) {
      return grade;
    }
  });
  return found;
};
export const filterByType = (json, type) => {
  const found = json.filter((grade) => {
    if (grade.type === type) {
      return grade;
    }
  });
  return found;
};

export const getTop3Score = (json) => {
  const sortList = json.sort((a, b) => b.value - a.value);
  const list = [sortList[0], sortList[1], sortList[2]];
  return list;
};
