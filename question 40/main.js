function make_album(album_artist, album_title, track) {
    var album = { artist: album_artist, title: album_title };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album_1 = make_album("Arijit Singh", "Hit Songs");
console.log(album_1);
album_1 = make_album("Atif Aslam", "Top songs");
console.log(album_1);
album_1 = make_album("Hitesh", "Rock songs");
console.log(album_1);
album_1 = make_album("Atif Aslam", "Sufi Songs", 5);
console.log(album_1);
