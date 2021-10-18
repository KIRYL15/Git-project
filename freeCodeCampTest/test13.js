//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range
let randomRange=(myMin, myMax) => Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
