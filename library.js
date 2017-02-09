var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}


//printPlaylists()
// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// <playlistId>: <playListId> - <numOfTracks> tracks
var printPlaylists = function () {

  for( var playlistComponent in library.playlists) {
    var inPlayList = library.playlists[playlistComponent];
    console.log(playlistComponent,": ",inPlayList.name,"-",inPlayList.tracks.length);
  }

}
//printPlaylists();


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for( var trackComponent in library.tracks) {
    var inTracks = library.tracks[trackComponent];
    console.log(trackComponent,": ",inTracks.name," by ",inTracks.artist,"(",inTracks.album, ")" );
  }

}
//printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var tracksOfPl = library.playlists[playlistId].tracks
  console.log(playlistId,": ",library.playlists[playlistId].name,"-",tracksOfPl.length);
  for ( var tr of tracksOfPl) {
    var trackInfo = library.tracks[tr];
    console.log(tr,": ",trackInfo.name," by ",trackInfo.artist,"(",trackInfo.album, ")" );

  }

}
//printPlaylist("p01");

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {

  var plyListTrack = library.playlists[playlistId].tracks;
  plyListTrack.push(trackId);

}
addTrackToPlaylist ("t03","p02");
console.log(JSON.stringify(library));

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {

  var newName = name;
  var newArtist = artist;
  var newAlbum = album;
  var newId = uid()

   var output = {
     id: newId,
     name: newName,
     artist: newArtist,
     album: newAlbum
   };

   library.tracks[newId] = output;

console.log(library);

}
//addTrack("Talk","PinkFloyd","DivisionBells");

// adds a playlist to the library

var addPlaylist = function (name) {
 var newName = name;
  var track = "";
  // var newAlbum = album;
  var newId = uid()

   var output = {
     id: newId,
     name: newName,
     tracks: track,
   };

   library.playlists[newId] = output;

console.log(library);

}
//addPlaylist("Nima's playlist");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}