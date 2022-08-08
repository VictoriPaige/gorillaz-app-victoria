const db = require("../db");
const Album = require("../models/album");
const Song = require("../models/song");
const { albums, allSongs: songs } = require("../sources");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const albumsDB = [];

  for (let album of albums) {
    const entry = await new Album({ ...album });
    entry.save();
    albumsDB.push(entry);
  }

  await Song.insertMany(
    songs.map((song) => {
      song.album = albumsDB.find((entry) => entry.name === song.album)._id;
      return song;
    })
  );
  console.log("Created albums!");
};

const run = async () => {
  await main();
  db.close();
};

run();
