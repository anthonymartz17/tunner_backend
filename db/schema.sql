
-- DROP DATABASE IF EXISTS tuner_db;

CREATE DATABASE tuner_db;
\c tuner_db

CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  artist VARCHAR(100) NOT NULL,
  album VARCHAR(255) NOT NULL, 
  time TIMESTAMP NOT NULL, 
  is_favorite BOOL NOT NULL
  );

