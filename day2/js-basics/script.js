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
var points = [40, 100, 1, 5, 25, 10];
function myFunction() {
  points.sort(function(a, b) {
    return a - b;
  });
}
console.log(myFunction());
