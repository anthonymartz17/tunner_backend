const express = require("express");
const cors = require("cors");
const app = express();

//controllers
const songsController = require("./controllers/songs.controllers");
const artistsController = require("./controllers/artists.controllers");
const albumsController = require("./controllers/albums.controllers");


//middlewares
app.use(express.json());
app.use(cors());
app.use("/songs", songsController);
app.use("/artists", artistsController);
app.use("/albums", albumsController);


//routes
app.get("/", (req, res) => {
	res.send("Welcome to the Tuner app");
});

app.get("*", (req, res) => {
	res.status(404).json({ msg: "Page not found" });
});
module.exports = app;
