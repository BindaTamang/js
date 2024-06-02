const user = {
    username: "himali",
    price: 999,

    welcimeMessage: function(){
        console.log(`${this.username} welcome to website`);//this refere current context to access varaible inside this object 
        //console.log(this);
    }
}

// user.welcimeMessage()

// user.username = "sita"

// user.welcimeMessage()

//console.log(this);

// function chai(){
//     let username = "Mina"
//     console.log(this.username);//output undefined 

// }

// chai()


// const chai = function (){
//     let username = "Mina"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Mina"
//     //console.log(this.username);
//     console.log(this);
// }
// chai()

//++++++++++arrow function

// const AddTwoNumbers = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 +num2

// const addTwo = (num1, num2) =>  (num1 +num2)

const addTwo = (num1, num2) =>  ({username: "himal"})

console.log(AddTwoNumbers(3, 4));

const myArray = [2, 5, 3, 7, 8]

//myArray.forEach(() => {})