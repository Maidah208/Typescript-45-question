let Magicians = ['Harry','David','Teller','Criss'];
function make_great(magician: string[]){
    for (let magician of Magicians){
        console.log( 'Hello ' + magician);
    }
}
make_great(Magicians);
