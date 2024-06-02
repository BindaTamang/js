//array

//basic array 

const myArr = [0, 1, 2, 3, 4, 5]

console.log(myArr[2]);

const myFamily = new Array("sister", "brother", "mother", "father")
console.log(myFamily[1]);

const myArr2 = new Array("family", 1, 2, (1+2))
console.log(myArr2[3]);

//array methods 
//push() method use to add the value
//pop() method remove the last index value
//unshift() method add the value in start and we give argument 
//shift() method remove the seroth index and shifts the value at consecutive indexs down, the returns the remove value and we don't give any parameter
//The includes() method check if an array includes passed element or not
//The indexOf() method checks if an array includes passed element or not. But the difference is The indexOf() method returns position, it returns -1 if an element is not found.



// myArr.push(6)//add the value inside array
// myArr.push(7)
// myArr.pop(7)
// myArr.unshift(9)
//  myArr.shift()

//Array.prototype.join() baind the array and change into string
// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

//slice() is used to extract a section of the array without modifying the original,
// while splice() is used to modify the array by adding, removing, or replacing elements.


