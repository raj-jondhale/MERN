let num1 = 10
let num2 = 20

console.log("I am regualer upper code")
if (num1 > num2) {
    console.log("Num1 is greater than num2")
} else {
    console.log("Nope ,num1 is not greater")
}

console.log("I am regualer bottom code")

//checking username
let username = "chai"
let anotherUsername = "chai"


if (username == anotherUsername) {
    console.log("pick another username");
} else {
    console.log("you can pick this username");
}

//checking if a variable is a number or not

let score = 44
if (typeof score === "number") {
    console.log("yep this is number")
} else {
    console.log("no that is not number")
}

//checking if a boolean value is true or false

let isTeaReady = false

if (isTeaReady) {
    console.log("Tea is ready")
}

//checking if an array is empty or not

let items = []

if (items.length === 0) {
    console.log("Array is empty");

} else {
    console.log("Array is not empty");

}