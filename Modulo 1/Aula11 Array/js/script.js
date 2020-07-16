window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);
  return nameEmailArray;
}

function doFilter() {
  const olderThan18 = people.results.filter((person) => {
    return person.dob.age >= 18;
    person;
  });
  console.log(olderThan18);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(totalAges);
}

function doFind() {
  const found = people.results.find((person) => {
    return person.dob.age >= 60;
  });
  console.log(found.name.first);
}

function doSome() {
  const found = people.results.some((person) => {
    return person.location.state === 'Roraima';
  });
  console.log(found);
}

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'US';
  });
  console.log(every);
}

function doSort() {
  const sort = people.results
    .map((person) => {
      return person.name.first;
    })
    .filter((person) => {
      return person.startsWith('F');
    })
    .sort();
  console.log(sort);
}
