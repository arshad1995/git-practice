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
// function getgrades(marks) {
//   if (marks >= 80) {
//     return "Distinction";
//   } else if (marks >= 60) {
//     return "firstclass";
//   } else if (marks >= 35) {
//     return "secondclass";
//   } else {
//     return "fail";
//   }
// }
// console.log(getgrades(34));

// function getRandomAdvanced(a, b) {
//   return a + b;
// }

// console.log(getRandomAdvanced(3, 2));
// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias", "Linus"];
// var arr3 = ["Robin", "Morgan"];
// var myarr = arr1.concat(arr2);
// console.log(myarr);
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(0, 4);
// console.log(citrus);
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "dates", "kiwi");
// console.log(fruits);
let arry1 = [0, 1, 2, 3, 4];
let arry2 = [5, 6, 7, 8, 9];

function concatArray(arry1, arry2, num) {
  let arry3 = arry1.concat(arry2);
  console.log(arry3);
  arry3.push(num);
  console.log(arry3);
  arry3.sort();
  console.log(arry3);
  arry3.reverse();
  console.log(arry3);
  let arry4 = arry3.slice(0, 3);
  console.log(arry4);
  console.log(arry3);
  //   arry3.pop();
  //   arry3.pop();
  //arry3.pop();

  console.log(arry3);
  arry3.pop();
  console.log(arry3);
  //   let stringArray = arry3.toString();
  //   console.log(stringArray);
}
concatArray(arry1, arry2, 5);

// function add(a, b) {
//   console.log(a + b);
// }
// add(1, 3);
