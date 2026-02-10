// //challenge 1
// let sum = 0
// let i = 0

// while (i <= 5) {
//     sum += i;
//     i++;
// }
// console.log(sum);

// //challenge 2

// let countdown = []
// let j = 5

// while (j > 0) {
//     countdown.push(j)
//     j--
// }

// console.log(countdown)

let teaCollection = []
let tea
do {
    tea = prompt(`Enter you Favourite tea (type "stop to finish ")`);
    if (tea !== "stop") {
        teaCollection.push(tea);
    }


} while (tea !== "stop")

