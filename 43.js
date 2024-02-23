"use strict";
let magician = ['Harry', 'David', 'Teller', 'Criss'];
function makeGreat(magician) {
    let great_magician = [];
    for (let magician_1 of magician) {
        great_magician.push('Great ' + magician_1);
    }
    return great_magician;
}
function show_magicians(magician) {
    for (let magician_1 of magician) {
        console.log(magician_1);
    }
}
let great_magician = makeGreat([...magician]);
console.log("Original magicians:");
show_magicians(magician);
console.log("Great magicians:");
show_magicians(great_magician);
