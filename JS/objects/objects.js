//singleton => constuctor le bane ko objet =>  a design pattern that ensures a class has only one instance while providing a global point of access to that instance.

//literal and constuctor

//object literals

const mySyn = Symbol("key1")

const jsUser = {
    name: "Binda",
    "full name": "Binda Tamang",
    [mySyn]: "mykey1",//syntax to declare symbol
    age: 25,
    location: "Kathamandu",
    email: "binda@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]

}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySyn]);

//typeof is use to see the datatype

jsUser.email = "binda@gmail.np.com"//change the email
//Object.freeze(jsUser)//if you don't want to make a change not want to other to change it
jsUser.email= "binda@np.com"
console.log(jsUser.email);
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello js user");
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());

//string interpolation=> when string is change using backtrick `
//${}=> to write any varaibale 
//{this.proper}=> this. garera kk property xa  dekhau a and help to add property

jsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(jsUser.greeting2());