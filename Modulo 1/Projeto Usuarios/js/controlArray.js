const doMap = (data) => {
  const list = data.map((person) => {
    const { name, picture, dob, gender } = person;
    return {
      name: name.first + ' ' + name.last,
      picture: picture.large,
      gender,
      age: dob.age,
      found: false,
    };
  });
  return list;
};

const doMapFound = (data) => {
  const list = data.map((person) => {
    const { name, picture, age, gender } = person;
    return {
      name,
      picture,
      gender,
      age,
      found: true,
    };
  });
  console.log(list);
  return list;
};

const doMapFoundNotFound = (data) => {
  const list = data.map((person) => {
    const { name, picture, age, gender } = person;
    return {
      name,
      picture,
      gender,
      age,
      found: false,
    };
  });
  console.log(list);
  return list;
};

const reduceAge = (data) => {
  const totalAge = data.reduce((accumulator, current) => {
    return accumulator + current.age;
  }, 0);
  return totalAge;
};

const filterMan = (data) => {
  const found = data.filter((person) => {
    if (person.gender === 'male') {
      return person;
    }
  });
  return found;
};

const filterWoman = (data) => {
  const found = data.filter((person) => {
    if (person.gender === 'female') {
      return person;
    }
  });
  return found;
};

const doFilter = (data, str) => {
  const lowerCaseStr = str.toLowerCase();
  const found = data.filter((person) => {
    let nameLowerCase = person.name.toLowerCase();
    if (nameLowerCase.includes(lowerCaseStr)) {
      return person;
    }
  });

  const notFound = data.filter((person) => {
    let nameLowerCase = person.name.toLowerCase();
    if (!nameLowerCase.includes(lowerCaseStr)) {
      return person;
    }
  });
  return found;
};
