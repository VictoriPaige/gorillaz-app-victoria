const albums = require("./albums");
const songs = require("fs")
  .readdirSync("./sources/songs")
  .map((file) => require("./songs/" + file));

const allSongs = [];
songs.forEach((album) => allSongs.push(...album));

module.exports = { albums, allSongs };
