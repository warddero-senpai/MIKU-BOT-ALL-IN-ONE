const { ActivityType } = require('discord.js');

module.exports = {
  ownerId: '1004206704994566164',
  status: {
    rotateDefault: [
      { name: 'Netflix', type: ActivityType.Watching },
      { name: 'GTA VI', type: ActivityType.Playing },
      { name: 'on YouTube', type: ActivityType.Streaming, url: 'https://www.twitch.tv/wardosenpai' },
      { name: 'Spotify', type: ActivityType.Listening },
    ],
    songStatus: true
  },
  spotifyClientId: "c7f0768496a644afb95bdba50e6b1b2d",
  spotifyClientSecret: "40541a04803a4efbb14c0dd11998e085",
}
