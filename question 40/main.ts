function make_album(album_artist: string, album_title: string, track? : number)
{   
    let album : {artist: string, title: string, track? :  number}= {artist : album_artist, title : album_title };
    if (track !== undefined){
    album.track = track 

    }
return album
}

let album_1 = make_album("Arijit Singh", "Hit Songs")
console.log(album_1)
album_1 = make_album("Atif Aslam", "Top songs")
console.log(album_1)
album_1 = make_album("Hitesh", "Rock songs")
console.log(album_1)

album_1 = make_album("Atif Aslam", "Sufi Songs", 5)
console.log(album_1)