CREATE DATABASE tunner_db;
\c tunner_db

CREATE TABLE songs (name VARCHAR(255) NOT NULL, artist VARCHAR(100) NOT NULL, album VARCHAR(255) NOT NULL, time TIMESTAMP , is_favorite BOOL);

