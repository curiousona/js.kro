//const tinderUser = new Object()

const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "xyzv"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
        fullName: {
            userFullname: {
                firstName: "Sonali",
                lastName: "Singh"
            }
        }
        
    }
console.log(regularUser.fullName.userFullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = (obj1, obj2);
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4} //spread ...glass break
console.log(obj3);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


const course ={
    courseName: "turkish language",
    price: "599",
    courseInstructor: "Hayat"
}

const {courseInstructor} = course
console.log(courseInstructor);

