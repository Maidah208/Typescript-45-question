"use strict";
let guests = ['Maidah', 'khudaja', 'Mahnoor'];
for (let guest of guests) {
    console.log('Dear ' + guest + ' you are invited for dinner at my place \n');
}
//removing a guest
let willnot_attend = guests[1];
console.log('Unfortunately ' + willnot_attend + ' can\'t make to dinner\n.');
//adding another guest
guests.splice(1, 1, 'Mirha');
for (let guest of guests) {
    console.log('Dear ' + guest + ' you are invited for dinner at my place \n');
}
//inviting more guests
console.log('Good News! I have found a bigger table\n');
guests.splice(0, 0, 'Miraal');
guests.splice(1, 0, 'Mehak');
guests.push('Maasfa');
for (let guest of guests) {
    console.log('Dear ' + guest + ' you are invited for dinner.\n');
}
// dinner table is not available
console.log('Unfotunately the dinner table is not available, so I can only invite two people.\n');
//removing guest 
while (guests.length > 2) {
    let remove_guest = guests.pop();
    console.log('I am sorry I can \'t invite ' + remove_guest + ' to dinner.\n');
}
// invinting the rest of the guest
for (let guest of guests) {
    console.log(guest + ' ,you are still invited\n');
}
// emptying the array
while (guests.length > 0) {
    guests.pop();
}
//printing the empty array
console.log(guests);
