const name = "arshad";
const age = "22";
const loc = "bangalore";

console.log(`my name is ${name},
 age is ${age} and 
 im from ${loc}`);

const nam = "salman";
const ag = "24";
const lo = "ramnagar";
console.log(`my name is ${nam},
 age is ${ag} and 
 im from ${lo}`);

function namee(name, age, loc) {
  return { name: name, age: age, loc: loc };
  //  return name,age, loc;
}
let person = namee("tajamul", 23, "ramanagar");

console.log(`${person.name} age is ${person.age} and his from ${person.loc}`);
