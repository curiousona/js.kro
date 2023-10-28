//sigleton
//object.create

//object literals
const mysym = Symbol("key1")

const Jsuser={
    name: "Sonali",
    [mysym]: "mykey1",
    age: 18,
    location: "Pune",
    isLoggedIn: false,
    lastLogginDays: ["monday", "saturday"]

}

console.log(Jsuser.location);
console.log(Jsuser[mysym]);

console.log(Jsuser);

Jsuser.greeting = function() {
    console.log("Hello js user");
}

Jsuser.greetingTwo = function() {
    console.log('Hello js user, ${name}');
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

