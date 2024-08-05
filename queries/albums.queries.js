const db = require("../db/dbConfig");

async function getAllAlbums() {
	try {
		const albums = await db.any("SELECT * FROM albums");
		return albums;
	} catch (error) {
		throw error;
	}
}

async function getAlbumById(id) {
	try {
		const album = await db.one("SELECT * FROM albums WHERE id = $1", id);
		return album;
	} catch (error) {
		throw error;
	}
}
async function createAlbum({
	artist_id,
	title,
	release_date,
	cover_img,
	genre,
}) {
	try {
		const newAlbum = await db.one(
			"INSERT INTO albums (artist_id, title, release_date, cover_img, genre) VALUES ($1,$2,$3,$4,$5) RETURNING *",
			[artist_id, title, release_date, cover_img, genre]
		);
		return newAlbum;
	} catch (error) {
		throw error;
	}
}

async function updateAlbum(
	id,
	{ artist_id, title, release_date, cover_img, genre }
) {
	console.log(id,'k llega')
	try {
		const updatedAlbum = await db.one(
			"UPDATE albums SET artist_id = $1, title = $2, release_date = $3,  cover_img = $4, genre = $5 WHERE id = $6 RETURNING *",
			[artist_id, title, release_date, cover_img, genre, id]
		);
		return updatedAlbum;
	} catch (error) {
		throw error;
	}
}

async function deleteAlbum(id) {
	try {
		const deletedAlbum = await db.one(
			"DELETE FROM albums WHERE id = $1 RETURNING *",
			id
		);
		return deletedAlbum;
	} catch (error) {
		throw error;
	}
}
module.exports = {
	getAllAlbums,
	getAlbumById,
	createAlbum,
	updateAlbum,
	deleteAlbum,
};
