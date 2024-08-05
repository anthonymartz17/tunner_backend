\c tuner_db

-- Insert artists
INSERT INTO artists (name, genre, bio) VALUES
('J Balvin', 'Reggaeton', 'Colombian reggaeton singer known for his upbeat and danceable music.'),
('Cardi B', 'Hip Hop', 'American rapper known for her outspoken personality and hit singles.'),
('Luis Fonsi', 'Latin Pop', 'Puerto Rican singer and songwriter famous for his hit song "Despacito."'),
('Beyoncé', 'Pop', 'American singer, songwriter, and actress. Known for her powerful vocals and stage presence.'),
('Bad Bunny', 'Reggaeton', 'Puerto Rican singer and rapper known for his contributions to Latin trap and reggaeton.'),
('Shakira', 'Pop','Colombian singer and songwriter known for her distinctive voice and dance moves.');

-- -- Insert albums
INSERT INTO albums (artist_id, title, release_date, cover_img, genre) VALUES
((SELECT id FROM artists WHERE name = 'J Balvin'), 'Vibras', '2018-05-25', 'https://example.com/vibras_cover.jpg', 'Reggaeton'),
((SELECT id FROM artists WHERE name = 'J Balvin'), 'Colores', '2020-03-20', 'https://example.com/colores_cover.jpg', 'Reggaeton'),
((SELECT id FROM artists WHERE name = 'Cardi B'), 'Invasion of Privacy', '2018-04-06', 'https://example.com/invasion_of_privacy_cover.jpg', 'Hip Hop'),
((SELECT id FROM artists WHERE name = 'Cardi B'), 'WAP (Single)', '2020-08-07', 'https://example.com/wap_cover.jpg', 'Hip Hop'),
((SELECT id FROM artists WHERE name = 'Luis Fonsi'), 'Vida', '2019-02-01', 'https://example.com/vida_cover.jpg', 'Latin Pop'),
((SELECT id FROM artists WHERE name = 'Luis Fonsi'), 'Despacito (Single)', '2017-01-13', 'https://example.com/despacito_cover.jpg', 'Latin Pop'),
((SELECT id FROM artists WHERE name = 'Beyoncé'), 'Lemonade', '2016-04-23', 'https://example.com/lemonade_cover.jpg', 'Pop'),
((SELECT id FROM artists WHERE name = 'Beyoncé'), 'Renaissance', '2022-07-29', 'https://example.com/renaissance_cover.jpg', 'Pop'),
((SELECT id FROM artists WHERE name = 'Bad Bunny'), 'YHLQMDLG', '2020-02-29', 'https://example.com/yhlqmdlg_cover.jpg', 'Reggaeton'),
((SELECT id FROM artists WHERE name = 'Bad Bunny'), 'Un Verano Sin Ti', '2022-05-06', 'https://example.com/un_verano_sin_ti_cover.jpg', 'Reggaeton'),
((SELECT id FROM artists WHERE name = 'Shakira'), 'El Dorado', '2017-05-26', 'https://example.com/el_dorado_cover.jpg', 'Pop'),
((SELECT id FROM artists WHERE name = 'Shakira'), 'Laundry Service', '2001-11-13', 'https://example.com/laundry_service_cover.jpg', 'Pop');

-- -- Insert songs
-- INSERT INTO songs (artist_id, album_id, name, artist, album, time) VALUES
-- ((SELECT id FROM artists WHERE name = 'J Balvin'), (SELECT id FROM albums WHERE title = 'Vibras'), 'Mi Gente', 'J Balvin', 'Vibras', '2017-06-30 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'J Balvin'), (SELECT id FROM albums WHERE title = 'Colores'), 'Ritmo', 'J Balvin', 'Colores', '2020-07-31 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Cardi B'), (SELECT id FROM albums WHERE title = 'Invasion of Privacy'), 'Bodak Yellow', 'Cardi B', 'Invasion of Privacy', '2017-06-16 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Cardi B'), (SELECT id FROM albums WHERE title = 'WAP (Single)'), 'WAP', 'Cardi B', 'WAP (Single)', '2020-08-07 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Luis Fonsi'), (SELECT id FROM albums WHERE title = 'Vida'), 'Échame la Culpa', 'Luis Fonsi', 'Vida', '2017-11-17 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Luis Fonsi'), (SELECT id FROM albums WHERE title = 'Despacito (Single)'), 'Despacito', 'Luis Fonsi', 'Despacito (Single)', '2017-01-13 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Beyoncé'), (SELECT id FROM albums WHERE title = 'Lemonade'), 'Formation', 'Beyoncé', 'Lemonade', '2016-02-06 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Beyoncé'), (SELECT id FROM albums WHERE title = 'Renaissance'), 'Break My Soul', 'Beyoncé', 'Renaissance', '2022-06-21 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Bad Bunny'), (SELECT id FROM albums WHERE title = 'YHLQMDLG'), 'Vete', 'Bad Bunny', 'YHLQMDLG', '2019-11-27 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Bad Bunny'), (SELECT id FROM albums WHERE title = 'Un Verano Sin Ti'), 'Tití Me Preguntó', 'Bad Bunny', 'Un Verano Sin Ti', '2022-05-06 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Shakira'), (SELECT id FROM albums WHERE title = 'El Dorado'), 'Chantaje', 'Shakira', 'El Dorado', '2016-10-28 00:00:00'),
-- ((SELECT id FROM artists WHERE name = 'Shakira'), (SELECT id FROM albums WHERE title = 'Laundry Service'), 'Hips Don''t Lie', 'Shakira', 'Laundry Service', '2006-02-28 00:00:00');

-- -- Insert users
-- INSERT INTO users (email, uid) VALUES
-- ('amartinez@pursuit.org', 'uid12345');

-- -- Insert admins
-- INSERT INTO admin (email, uid) VALUES
-- ('anthonymartz17@hotmail.com', 'admin12345');

-- -- Insert playlists
-- INSERT INTO playlists (user_id, name, description, cover_img) VALUES
-- ((SELECT id FROM users WHERE uid = 'uid12345'), 'My Pop Hits', 'A collection of my favorite pop songs', 'https://example.com/pop_hits_cover.jpg'),
-- ((SELECT id FROM users WHERE uid = 'uid12345'), 'Reggaeton Party', 'Best reggaeton tracks for a party', 'https://example.com/reggaeton_party_cover.jpg');

-- -- Insert playlist_songs
-- INSERT INTO playlist_songs (playlist_id, song_id) VALUES
-- ((SELECT id FROM playlists WHERE name = 'My Pop Hits'), (SELECT id FROM songs WHERE name = 'Formation')),
-- ((SELECT id FROM playlists WHERE name = 'My Pop Hits'), (SELECT id FROM songs WHERE name = 'Break My Soul')),
-- ((SELECT id FROM playlists WHERE name = 'Reggaeton Party'), (SELECT id FROM songs WHERE name = 'Mi Gente')),
-- ((SELECT id FROM playlists WHERE name = 'Reggaeton Party'), (SELECT id FROM songs WHERE name = 'Ritmo'));
