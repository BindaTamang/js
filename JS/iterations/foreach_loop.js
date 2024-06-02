//for each loop
const coding = ["js", "ruby", "java", "py", "css"]
// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)//declaring function first

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javaScript",
        languagefileName: "js"
    },
    {
        languageName: "java",
        languagefileName: "java"
    },
    {
        languageName: "python",
        languagefileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )