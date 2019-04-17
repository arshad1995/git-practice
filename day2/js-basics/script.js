/*function getrandom(val) {
  return Math.random() * 11;
}

console.log(getrandom(2));*/

//function getRandomAdvanced(type, val) {
// if (type == "floor") {
//  return Math.floor(val);
// } else {
//  return Math.ceil(val);
// }
//}

//console.log(getRandomAdvanced("floor", 2.5));
function getgrades(marks) {
  if (marks >= 80) {
    return "Distinction";
  } else if (marks >= 60) {
    return "firstclass";
  } else if (marks >= 35) {
    return "secondclass";
  } else {
    return "fail";
  }
}
console.log(getgrades(35));
