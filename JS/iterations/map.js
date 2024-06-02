const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumbers.map( (num) => num + 10 )

//console.log(newNums);
// myNumbers.forEach( (num) => {
//     return console.log(num + 10);
// } )

//chaining
// const newNums = myNumbers
//                 .map( (num) => num * 10 )//1t ko value 2 ma pass hunxa
//                 .map( (num) => num + 1 )
//                 .filter( (num) => num >= 40 )


// console.log(newNums);

//reduce 

// const myTotal = myNumbers.reduce( 
//    function (acc, currVal) {
//     console.log(`acc: ${acc} and currval: ${currVal}`);
//     return acc + currVal
//    }, 0)

const myTotal = myNumbers.reduce( (acc, curr) => acc + curr, 0)
//console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 1500
    },
    {
        itemName: "py course",
        price: 2000
    },
    {
        itemName: "mobile course course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);

