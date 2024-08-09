
const db = require("../db/dbConfig");

async function addSongToPlaylist(playlist_id, song_id) {
    try {
        const addedSong = await db.one(
            "INSERT INTO playlist_songs (playlist_id, song_id) VALUES ($1, $2) RETURNING *",
            [playlist_id, song_id]
        );
        return addedSong;
    } catch (error) {
        throw new Error('Error adding song to playlist');
    }
}

async function removeSongFromPlaylist(playlist_id, song_id) {
    try {
        const removedSong = await db.one(
            "DELETE FROM playlist_songs WHERE playlist_id = $1 AND song_id = $2 RETURNING *",
            [playlist_id, song_id]
        );
        return removedSong;
    } catch (error) {
        throw new Error('Error removing song from playlist');
    }
}

async function getSongsInPlaylist(playlist_id) {
    try {
        const songs = await db.any(
            `SELECT
                p.id AS playlist_id,
                p.name AS playlist_name,
                p.description AS playlist_description,
                p.cover_img AS playlist_cover_img,
                s.id AS song_id,
                s.artist_id AS artist_id,
                s.artist AS artist,
                s.album_id AS album_id,
                s.name AS song_name,
                s.album AS album,
                s.duration AS duration
            FROM
                playlists p
            JOIN
                playlist_songs ps ON p.id = ps.playlist_id
            JOIN
                songs s ON s.id = ps.song_id
            WHERE
                p.id = $1;`,
            [playlist_id]
        );

        if (songs.length === 0) {
            throw new Error("Playlist not found");
        }

        const playlist = {
            id: songs[0].playlist_id,
            name: songs[0].playlist_name,
            description: songs[0].playlist_description,
            cover_img: songs[0].playlist_cover_img,
            tracks: songs.length,
            songs: songs.map((item) => ({
                id: item.song_id,
                artist_id: item.artist_id,
                album_id: item.album_id,
                album: item.album,
                name: item.song_name,
                duration: item.duration,
                artist: item.artist,
            })),
        };

        return playlist;
    } catch (error) {
        throw new Error('Error fetching songs in playlist');
    }
}

module.exports = {
    addSongToPlaylist,
    removeSongFromPlaylist,
    getSongsInPlaylist
};
