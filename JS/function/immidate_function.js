//Immidate invoked function expressions (IIFE)

// function tea(){
//     console.log(`DB CONNECTION`);

// }
// tea()

(function tea(){
    //name IIFE
    console.log(`DB CONNECTION`);

})();

//to end the IIFE ; has to use at the end if it will not use the next code wont be execute

((name) => {
    //unname IIFE
    console.log(`DB CONNECTION ${name}`);
})('hindu')