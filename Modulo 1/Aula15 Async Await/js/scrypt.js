window.addEventListener('load', () => {
  const replyFetch = () => {
    fetch('https://api.github.com/users/gustavolyra')
      .then((res) => {
        res.json().then((data) => {
          showData(data);
        });
      })
      .catch((error) => console.log('Erro na requisição'));
  };

  let datJson = replyFetch();
  executeDivPromises();
  executeDivPromisesAsyncAwait();
  doFetchAsync();
});

const doFetchAsync = async () => {
  const res = await fetch('https://api.github.com/users/gustavolyra');
  const json = await res.json();
  console.log(json);
};

const showData = (data) => {
  const user = document.querySelector('#user');
  user.textContent = data.login + ' ' + data.name;
};

const divPromise = (a, b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject('Não é possível dividir por zero');
    } else {
      resolve(a / b);
    }
  });
};

const executeDivPromises = () => {
  divPromise(5, 10).then((result) => {
    console.log(result);
  });
  divPromise(5, 0)
    .then((result) => {
      console.log(result);
    })
    .catch((errorMessage) => {
      console.log('Falha na divisão : ' + errorMessage);
    });
};

const executeDivPromisesAsyncAwait = async () => {
  const division = await divPromise(10, 2);
  console.log('async await : ' + division);
};
