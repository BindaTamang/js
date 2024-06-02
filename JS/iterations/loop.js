//for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello world!"

for (const greet of greetings) {
    //console.log(`each char is ${greet}`);
    
}

//Maps => unique value and in which order you enter it remain in same order
//not print similar value
// const map = new Map()
// map.set('NP', "Nepal")
// map.set('IN', "India")
// map.set('USA', "United State Of America")
// map.set('Fr', "France")
// map.set('NP', "Nepal")
//console.log(map);

for (const [key, value] of map) {//to print key and value differently
    //console.log(key, ':-', value);
    
}



const myObject = {
    'game1': "NFS",
    'game2': "Spiderman"
}
// for (const [key, value] of myObject) {

//     console.log(key, ':-', value);
    
// }//its not work bcz object is not iterable 

const myObj = {
    js: "JavaScript",
    cpp: "CSS",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObj) {

    //console.log(`${key} shortcut is for ${myObj[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('NP', "Nepal")
// map.set('IN', "India")
// map.set('USA', "United State Of America")
// map.set('Fr', "France")
// map.set('NP', "Nepal")

// for (const key in map) {
//     console.log(key);
// }

//object kolage forin loop map ko lage forof
//array ko lage forof
