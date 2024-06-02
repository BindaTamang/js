const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heros[3][1]);

//the push() method is used to add one or more elements to the end of an array and returns the new length of the array.
//concat()combine two and more arrays and return new array
// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);//output [ 'thor', 'ironman', 'spiderman' ]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);//output [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]


//spread oprater it spread the array

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);//output [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//flat= returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Himali"));// check the passed valu is array or not
console.log(Array.from("Himali"));//convert given value into array
console.log(Array.from({name: "himali"}));//interesting//give []empty array bcz {name: "himali"}, is not an array-like or iterable object. It's a plain object with a name property.


//Array.of() => returns a new array from a set of elements @param items - A set of elements to include in the new array object
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));//output [ 100, 200, 300 ]