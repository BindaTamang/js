//functions with objects and array

// function calculateCarPrice(...num1){
//     return num1

// }
// console.log(calculateCarPrice(200, 400, 500));//[200,400, 500]


function calculateCarPrice(val1, val2, ...num1){
    return num1

}
console.log(calculateCarPrice(200, 400, 500, 600, 1200));//[500, 600, 1200]


const user = {
    username: "binda",
    price: 123
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user);
// handleObject({
//     username: "asmita",
//     price: 200
// })


const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));