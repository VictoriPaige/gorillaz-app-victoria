const albumControls = require("./albums");
const songControls = require("./songs");

module.exports = { ...albumControls, ...songControls };
