var os = require('os');
var config = require('./config.json');
var username = config.spotify_username;
var password = config.spotify_password;
var spotify;

if (os.arch() == 'arm') {
    spotify = require('./lib/pi/spotify');
} else {
    spotify = require('./lib/mac/spotify');
}

spotify = spotify({ appkeyFile: 'spotify_appkey.key' });

var ready = function()  {
    spotify.player.play(spotify.createFromLink('spotify:track:3MjrueDQKVr6xDDseZwhEd'));
};

spotify.on({
    ready: ready
});

spotify.login(username, password, false, false);
