//function
function sayMyName(){
    console.log("B");
    console.log("I");
    console.log("N");
    console.log("D");
    console.log("A");
}
//sayMyName()//without () is reference and with () is function execution

// function AddTwoNumbers(num1, num2){

//     console.log(num1 + num2);

// }
// AddTwoNumbers(3, 4)//output 7
// AddTwoNumbers(3, "4")//34
//AddTwoNumbers(3, null)//3

//parameter = the input that you take when create function
//arrguments = the value that give while calling the function

// const result = AddTwoNumbers(3, 5)
// console.log("Result: ", result);//output Result: undefined 



function AddTwoNumbers(num1, num2){

    // let result = num1 + num2
    // return result
    //console.log("Hello");//it is never print bcz after return is executeted function will not return anything by default

    return num1 + num2

}

const result = AddTwoNumbers(3, 5)
//console.log("Result: ", result);


// function logInUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(logInUserMessage("Binda"));//Binda just logged in
//console.log(logInUserMessage(""))//just logged in
//console.log(logInUserMessage())//undefined logged in

//if value is not passe by default it become undefined

function logInUserMessage(username){
    if(username === undefined){                         //instead of if(username === undefined) also used if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(logInUserMessage());//Please enter a username //undefined
console.log(logInUserMessage("Manisha"));//Manisha just logged in


//if we don't want to make value undefined than we can declare default value and 
//never enter in if condition code if passed valu than it overwrite declare value
function logInUserMessage(username = "sam"){
    if(username === undefined){                         
        console.log("Please enter a username"); 
        return
    }
    return `${username} just logged in`
}

console.log(logInUserMessage());