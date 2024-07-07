function randomizeArray(arr1, arr2, root) {
    const shuffledRoot = root.sort(() => Math.random() - 0.5);
    const halfway = Math.floor(shuffledRoot.length / 2);
    arr1.push(...shuffledRoot.slice(0, halfway),0);
    arr2.push(...shuffledRoot.slice(halfway),0);
  }
  
  function generateCardsDeck() {
    let deck = [];
    for (let i = 1; i <= 13; i++) {
      deck.push(i, i, i, i);
    }
    return deck;
  }
  
  export { randomizeArray, generateCardsDeck };
  