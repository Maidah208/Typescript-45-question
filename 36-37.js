"use strict";
function make_shirt(size = 'large', message = 'I Love Typescript') {
    console.log('The size of the shirt is \'' + size + '\' and the message on the shirt is \'' + message + '\'');
}
make_shirt('medium', 'hello world');
make_shirt();
make_shirt('small');
