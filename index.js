// variable initialization
let name = "harry potter";
console.log(name);

// constants
const weather = "sunny";
console.log(weather);

// primitives
let newName = "hermione"; // String literal
let age = 30; // Number literal
let isApproved = true; // Boolean literal
let lastName = undefined;
let firstName = null;

// dynamic language
// in static, the type cannot change
// with js, the type of variable can change
console.log(typeof(weather));
age = 30.1;
console.log(typeof(age));

// Reference types - objects
let person = {
    name: 'harry',
    address: 'hogwarts'
};
console.log(person.name)

// access property
person.address = 'london';
person['name'] = 'Ron';
console.log(person);

// Reference types - arrays
let colors = ['red', 'blue'];

// will print object
console.log(typeof(colors));

// access element
console.log(colors[1])

// add a new element - just access a new index
colors[2] = 'cricket';

// mixed type of values, here int
colors[3] = 100;
console.log('length of the array is' + colors.length);
console.log(colors);