DROP DATABASE IF EXISTS tuner_db;

-- Create the database
CREATE DATABASE tuner_db;

-- Connect to the new database
\c tuner_db

-- User tables

-- -- Create the users table
-- CREATE TABLE users (
--   id SERIAL PRIMARY KEY,
--   email VARCHAR(255) NOT NULL,
--   uid VARCHAR(255) UNIQUE NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create the playlists table
-- CREATE TABLE playlists (
--   id SERIAL PRIMARY KEY,
--   user_id INT REFERENCES users(id) ON DELETE CASCADE,
--   name VARCHAR(255) NOT NULL,
--   description TEXT,
--   cover_img TEXT,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create the playlist_songs table
-- CREATE TABLE playlist_songs (
--   playlist_id INT REFERENCES playlists(id) ON DELETE CASCADE,
--   song_id INT REFERENCES songs(id) ON DELETE CASCADE,
--   added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (playlist_id, song_id)
-- );

-- -- Admin Tables

-- -- Create the admin table
-- CREATE TABLE admin (
--   id SERIAL PRIMARY KEY,
--   uid VARCHAR(255) UNIQUE NOT NULL,
--   is_admin BOOL DEFAULT TRUE,
--   email VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- Create the artists table
CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  genre VARCHAR(255) NOT NULL,
  bio TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- -- Create the albums table
-- CREATE TABLE albums (
--   id SERIAL PRIMARY KEY,
--   artist_id INT REFERENCES artists(id) ON DELETE CASCADE,
--   title VARCHAR(255) NOT NULL,
--   release_date DATE,
--   cover_img TEXT NOT NULL,
--   genre VARCHAR(255) NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- -- Create the songs table
-- CREATE TABLE songs (
--   id SERIAL PRIMARY KEY,
--   artist_id INT REFERENCES artists(id) ON DELETE CASCADE,
--   album_id INT REFERENCES albums(id) ON DELETE CASCADE,
--   name VARCHAR(255) NOT NULL,
--   artist VARCHAR(100) NOT NULL,
--   album VARCHAR(255) NOT NULL,
--   time TIMESTAMP NOT NULL,
--   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--   updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );
