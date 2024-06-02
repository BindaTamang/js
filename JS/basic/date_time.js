//dates
let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toString());
// console.log(typeof myDate);

// let myCreateDate = new Date(2023, 0, 12)
// let myCreateDate = new Date(2023, 0, 12, 9, 0)
// let myCreateDate = new Date("2023-02-12")
let myCreateDate = new Date("02-12-2023")
// console.log(myCreateDate);
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(`Date: ${newDate.getDate()} Month: ${newDate.getMonth()}`);


console.log( newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "America/New_York"
}));