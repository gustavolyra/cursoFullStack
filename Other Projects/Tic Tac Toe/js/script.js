window.addEventListener('load', () => {
  const X_CLASS = 'x';
  const O_CLASS = 'o';
  const cellElements = document.querySelectorAll('[data-cell]');
  const board = document.getElementById('board');

  const button = document.getElementById('restartButton');

  const winningMessageElement = document.getElementById('winningMessage');
  const winningMessageTextElement = document.querySelector(
    '[data-winning-message-text]'
  );

  const WINNING_COMBINATION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let isCircleTurn;

  const swapTurn = () => {
    isCircleTurn = !isCircleTurn;
  };

  const placeMark = (cell, currentClass) => {
    cell.classList.add(currentClass);
  };

  const setBoardHoverClass = () => {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if (isCircleTurn) {
      board.classList.add(O_CLASS);
    } else {
      board.classList.add(X_CLASS);
    }
  };

  const checkWin = (currentClass) => {
    return WINNING_COMBINATION.some((combination) => {
      return combination.every((index) => {
        return cellElements[index].classList.contains(currentClass);
      });
    });
  };

  const checkDraw = () => {
    return [...cellElements].every((cell) => {
      return (
        cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
      );
    });
  };

  const endGame = (status, currentClass) => {
    if (status === 'draw') {
      winningMessageTextElement.innerText = 'Draw !';
    } else {
      if (status === 'winner') {
        winningMessageTextElement.innerText =
          currentClass.toUpperCase() + ' Wins!';
      }
    }
    winningMessageElement.classList.add('show');
  };

  const handleClick = (e) => {
    console.log('click');
    const cell = e.target;
    const currentClass = isCircleTurn ? O_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
      endGame('winner', currentClass);
    } else if (checkDraw()) {
      endGame('draw');
    }
    swapTurn();
    setBoardHoverClass();
  };

  const startGame = () => {
    isCircleTurn = false;
    cellElements.forEach((cell) => {
      cell.classList.remove(X_CLASS);
      cell.classList.remove(O_CLASS);
      cell.removeEventListener('click', handleClick);
      cell.addEventListener('click', handleClick, { once: true });
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
  };

  button.addEventListener('click', startGame);
  startGame();
});
