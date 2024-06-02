//const tinderUser = new Object() //singleton object
const tinderUser = {}//non singleton 

tinderUser.id = "123abc"
tinderUser.name = "asmita"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "hello@gmail.com",
    fullname: {
        userfullname: {
            firstname: "asmita",
            lastname: "tamang"
        }

    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {4: "a", 5: "b"}
//const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);


const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {

    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//de-structuring 

const course = {
    coursename: "Js in Nepali",
    price: "100",
    courseInstructor: "hitesh"
}

//course.courseInstructor
// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


