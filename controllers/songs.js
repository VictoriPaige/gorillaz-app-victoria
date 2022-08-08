const Song = require("../models/song");
const Album = require("../models/album");

const createSong = async (req, res) => {
  try {
    const song = await new Song(req.body);
    await song.save();
    return res.status(201).json({ song });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find({});
    return res.status(200).json({ songs });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getSongById = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findById(id);
    if (song) {
      return res.status(200).json({ song });
    } else {
      return res.status(404).send("Song not found");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getSongsByAlbum = async (req, res) => {
  try {
    const { album_id } = req.params;
    const songs = await Song.find({ album: album_id });
    if (songs.length) {
      return res.status(200).json({ songs });
    } else {
      return res.status(404).send("Album not found");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateSong = (req, res) => {
  try {
    const { id } = req.params;
    Song.findByIdAndUpdate(id, req.body, { new: true }, (err, song) => {
      if (err !== null) {
        console.log(err, "error");
        res.status(404).send(message);
      } else {
        console.log(song);
        res.json(song);
      }
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Song.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Song deleted");
    } else {
      throw new Error("Song not found");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createSong,
  getAllSongs,
  getSongById,
  getSongsByAlbum,
  updateSong,
  deleteSong,
};
