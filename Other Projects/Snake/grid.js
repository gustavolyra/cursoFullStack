const GRID_SIZE = 21;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function outsideGrid(position) {
  return outSide(position.x) || outSide(position.y);
}

function outSide(pos) {
  return pos < 1 || pos > GRID_SIZE;
}
