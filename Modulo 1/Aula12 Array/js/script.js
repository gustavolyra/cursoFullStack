window.addEventListener('load', () => {
  doSpread();
  doRest();
  doDestruction();
});

function doSpread() {
  const marriedMen = people.results.filter(
    (person) => person.name.title === 'Mr'
  );
  const marriedWoman = people.results.filter(
    (person) => person.name.title === 'Ms'
  );
  // const marriedPeople = people.results.
  console.log(marriedMen);

  console.log(marriedWoman);
  const marriedPeople = [...marriedMen, ...marriedWoman];
  console.log(marriedPeople);
}

function doRest() {
  console.log(infiniteSum(1, 2, 3, 4, 11));
}

function infiniteSum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

function doDestruction() {
  const first = people.results[1];
  // const username = first.login.username;
  // const password = first.login.password;
  const { username, password } = first.login;
  console.log(username);
  console.log(password);
}
