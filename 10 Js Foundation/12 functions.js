//challenge 1
function makeTea(typeofTea) {
    return `Making ${typeofTea}`;
}

let teaOrder = makeTea("lemon tea");

//challenge 2

function orderTea(teatype) {
    function confirmOrder() {
        return `order confirmed for chai`
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);