//&& and
//|| or
//! reverse

const { tree } = require("next/dist/build/templates/app-page");

let isLoggedin = true
let ispaid = false


console.log(isLoggedin && ispaid);

let isEmailuser = true
let isGoogleuser = false

console.log(isEmailuser || isGoogleuser)
