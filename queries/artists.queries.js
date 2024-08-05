const db = require("../db/dbConfig");

async function getArtists() {
	try {
		const artists = await db.any("SELECT * FROM artists");
		return artists;
	} catch (error) {
		throw error;
	}
}

async function getArtistById(id) {
	try {
		const artist = await db.one("SELECT * FROM artists WHERE id = $1", id);
		return artist;
	} catch (error) {
		throw error;
	}
}
async function createArtist({ name, genre, bio }) {
	try {
		const newArtist = await db.one(
			"INSERT INTO artists (name, genre, bio) VALUES ($1,$2,$3) RETURNING *",
			[name, genre, bio]
		);
		return newArtist;
	} catch (error) {
		throw error;
	}
}

async function updateArtist(id, { name, genre, bio }) {
	try {
		const updatedArtist = await db.one(
			"UPDATE artists SET name = $1, genre = $2, bio = $3 WHERE id = $4 RETURNING *",
			[name, genre, bio, id]
		);
		return updatedArtist;
	} catch (error) {
		throw error;
	}
}

async function deleteArtist(id) {
	try {
		const deletedArtist = await db.one(
			"DELETE FROM artists WHERE id = $1 RETURNING *",
			id
		);
		return deletedArtist;
	} catch (error) {
		throw error;
	}
}
module.exports = {
	getArtists,
	getArtistById,
	createArtist,
	updateArtist,
	deleteArtist,
};
