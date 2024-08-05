const express = require("express");
const cors = require("cors");
const app = express();

//controllers
const songsController = require("./controllers/songs.controllers");
const artistsController = require("./controllers/artists.controllers");
const albumsController = require("./controllers/albums.controllers");
const usersController = require("./controllers/users.controllers");
const adminsController = require("./controllers/admins.controllers");

//middlewares
app.use(express.json());
app.use(cors());
app.use("/songs", songsController);
app.use("/artists", artistsController);
app.use("/albums", albumsController);
app.use("/users", usersController);
app.use("/admins", adminsController);

//routes
app.get("/", (req, res) => {
	res.send("Welcome to the Tuner app");
});

app.get("*", (req, res) => {
	res.status(404).json({ msg: "Page not found" });
});
module.exports = app;
