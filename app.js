const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const songsController = require("./controllers/songs.controller")
app.use("/songs", songsController)

app.get("/", (req, res) => {
	res.send("Welcome to the Tuner app");
});

app.get("*", (req, res) => {
	res.status(404).json({msg:"Page not found"})
})
module.exports = app;
