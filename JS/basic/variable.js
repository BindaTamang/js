const accountId = 14453
let accountEmail = "intern@gmail.com"
var accountPassword = "12345"
accountCity = "Kathmandu"

let accountState;
// accountId = 2 // not allow 

accountEmail = "hs@hs.com"
accountPassword = "212122"
accountCity = "Bhaktapur"
console.log(accountId);//to print the accountId

/* 
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);