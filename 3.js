var myName = 'Henry David';
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
function titleCase(myName) {
    myName = myName.toLowerCase();
    myName = myName.split(' ');
    for (var i = 0; i < myName.length; i++) {
        myName[i] = myName[i].charAt(0).toUpperCase() + myName[i].slice(1);
    }
    return myName.join(' ');
}
console.log(titleCase('hEnry DAviD'));
