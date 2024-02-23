"use strict";
let user_names = ['Eric', 'Admin', 'Henry', 'Adrian', 'Lia'];
if (user_names.length == 0) {
    console.log('We need to find some users.');
}
else {
    for (let name of user_names) {
        if (name == 'Admin') {
            console.log('Hello ' + name + ', would you like to see a status report?');
        }
        else {
            console.log('Hello ' + name + ', thankyou for log in again.');
        }
    }
}
//checking when user_names empty
user_names = [];
if (user_names.length == 0) {
    console.log('We need to find some users.');
}
