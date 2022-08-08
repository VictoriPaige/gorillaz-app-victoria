const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is the root."));
// ----------- ALBUM CONTROLS -----------
router.post("/albums", controllers.createAlbum);
router.get("/albums", controllers.getAlbums);
router.get("/albums/:id", controllers.getAlbumById);
router.put("/albums/:id", controllers.updateAlbum);
router.delete("/albums/:id", controllers.deleteAlbum);
// ----------- SONG CONTROLS -----------
router.post("/songs", controllers.createSong);
router.get("/songs", controllers.getAllSongs);
router.get("/songs/:id", controllers.getSongById);
router.get("/songs/:album_id", controllers.getSongsByAlbum);
router.put("/songs/:id", controllers.updateSong);
router.delete("/songs/:id", controllers.deleteSong);

module.exports = router;
