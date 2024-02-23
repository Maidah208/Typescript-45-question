"use strict";
function make_album(artist, title, tracks) {
    let music_album = {
        'artist_name': artist,
        'album_title': title,
    };
    if (tracks !== undefined) {
        music_album.tracks = tracks;
    }
    return music_album;
}
console.log(make_album('atif', 'dil', 2));
console.log(make_album('Ali', 'Tum', 4));
console.log(make_album('Fazal', 'Mein'));
