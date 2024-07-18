\c tunner_db

INSERT INTO songs (name, artist, album, time, is_favorite)
VALUES 
    ('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '1975-10-31 00:00:00', true),
    ('Hotel California', 'Eagles', 'Hotel California', '1976-12-08 00:00:00', false),
    ('Stairway to Heaven', 'Led Zeppelin', 'Led Zeppelin IV', '1971-11-08 00:00:00', true),
    ('Imagine', 'John Lennon', 'Imagine', '1971-09-09 00:00:00', true),
    ('Thriller', 'Michael Jackson', 'Thriller', '1982-11-30 00:00:00', false);

    SELECT * FROM songs