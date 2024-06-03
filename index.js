function Ship() {
  let length = 0;
  let hits = 0;
  let sunk = false;

  function hit() {
    hits++;
  }

  function isSuck() {
    if (hits == length) {
      sunk = true;
    }
  }
}
