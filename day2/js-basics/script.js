/*function getrandom(val) {
  return Math.random() * 11;
}

console.log(getrandom(2));*/

function getRandomAdvanced(type, val) {
  if (type == "floor") {
    return Math.floor(val);
  } else {
    return Math.ceil(val);
  }
}

console.log(getRandomAdvanced("floor", 2.5));
