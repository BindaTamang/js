let today = new Date()
let day = today.getDay()
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(`Today is : ${dayList[day]}`);

let month = today.getMonth()
let monthList = ["Jan", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
console.log(`Today Month is: ${monthList[month]} ${today.getDay()}`);




