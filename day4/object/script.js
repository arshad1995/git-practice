// let car = { type: "fiat", model: "500", color: "white" };
// function cars() {
//   console.log(car);
// }
// let person = {
//   firstName: "arshad",
//   lastName: "pasha",
//   age: 22,
//   eyeColor: "brown"
// };

// console.log(
//   person.firstName +
//     "" +
//     "" +
//     person.lastName +
//     " is " +
//     person.age +
//     " years old."
// );
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());
