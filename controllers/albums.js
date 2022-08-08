const Album = require("../models/album");

const createAlbum = async (req, res) => {
  try {
    const album = await new Album(req.body);
    await album.save();
    return res.status(201).json({ album });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find({});
    return res.status(200).json({ albums });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const getAlbumById = async (req, res) => {
  try {
    const { id } = req.params;
    const album = await Album.findById(id);
    return album
      ? res.status(200).json({ album })
      : res.status(404).send("Album not found");
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const updateAlbum = (req, res) => {
  // WHY NOT ASYNC?
  try {
    const { id } = req.params;
    Album.findByIdAndUpdate(id, req.body, { new: true }, (err, album) => {
      if (err !== null) {
        console.log(err, "error");
        res.status(404).send(message);
      } else {
        console.log(album);
        res.json(album);
      }
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const deleteAlbum = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Album.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send(`Album "${deleted.name}" deleted!`);
    } else {
      throw new Error("Album not found");
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAlbum,
  getAlbums,
  getAlbumById,
  updateAlbum,
  deleteAlbum,
};
