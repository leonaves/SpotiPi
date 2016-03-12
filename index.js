var os = require('os');
var config = require('./config.json');
var username = config.spotify_username;
var password = config.spotify_password;
var server_address = config.server_address;
var spotify_init;

if (os.arch() == 'arm') {
    spotify_init = require('./lib/pi/spotify');
} else {
    spotify_init = require('./lib/mac/spotify');
}

var spotify = spotify_init({ appkeyFile: 'spotify_appkey.key' });
var queue = [];
var playing = false;

var playSongFromQueue = function()  {
    if (queue.length) spotify.player.play(queue.shift());
};

spotify.on({
    ready: playSongFromQueue
});

spotify.player.on({
    endOfTrack: playSongFromQueue
});

spotify.login(username, password, false, false);

var socket = require('socket.io-client')(server_address);

socket.on('add track to queue', function(link) {
    var track = spotify.createFromLink(link);
    queue.push(track);
    if (!playing) playSongFromQueue();
});
