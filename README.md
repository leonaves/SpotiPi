# SpotiPi
A very lightweight Spotify client for the Raspberry Pi. *Should* run on OS X, primarily for development purposes. Built on top of libspotify and node-spotify.

## Requirements
You will need the following:

- OS X or a Linux distro running on an ARM architecture (Tested on Raspberry Pi 2).
- Node 0.10.x. Use nvm if you don't want to screw up your existing installation.
  - **node-spotify will not work on later versions of node so this is important.**
- Libspotify installed on your machine (See instructions below).

## Installing libspotify

### OS X Users
Turns out this is easy as shit:

```
brew install mopidy/mopidy/libspotify
```

That's it. Have fun.

### Linux Users
This one's a bit more involved (but not too bad):

1. First download libspotify from here: https://developer.spotify.com/technologies/libspotify/
  - If you are on Raspberry Pi you will *need* the eabi-armv6hf download.
  - As I said above, this has only been tested on Raspberry Pi 2, so I don't guarantee it working on any other machine.
2. Extract the tarball and inside the resulting folder run `sudo make install`
3. Link the resulting .so files (in /usr/local/lib) into /usr/lib.

## Usage
Duplicate `config.json.example` and replace with your credentials. *Note: You will need a Spotify premium account to use this.*

You will also have to go [here](https://devaccount.spotify.com/my-account/keys/) to get an app key. Copy the .key file (the binary link) into the root of this repo with the name `spotify_appkey.key`. This should be the default name anyway.

Once you've done the above you are ready to go. Run `node index.js`, rock out to some Royal Blood and check back here for when I add some actual features. Enjoy.
