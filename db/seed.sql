\c tuner_db
-- -- Insert admins
INSERT INTO admins (email, uid) VALUES
('antonio.fr.martinezc@hotmail.com', 'DE0rFwCysWOP00rEH8O4SgdnLBy2');

-- Insert artists
INSERT INTO artists (admin_id,name, genre, bio,cover_img) VALUES
('DE0rFwCysWOP00rEH8O4SgdnLBy2','J Balvin', 'Reggaeton', 'Colombian reggaeton singer known for his upbeat and danceable music.','https://s3.abcstatics.com/media/summum/2020/05/18/1_jbalvin-k4DF--1248x698@abc.jpg'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2','Cardi B', 'Hip Hop', 'American rapper known for her outspoken personality and hit singles.','https://s.yimg.com/ny/api/res/1.2/sleEooq6QJEWoAPB1uWLUw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/people_218/59f2a45d50ac356a59b901b0379b2e50'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2','Luis Fonsi', 'Latin Pop', 'Puerto Rican singer and songwriter famous for his hit song "Despacito."','https://www.luisfonsi.com/files/2023/10/thumbnail-compressed.jpg'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2','Beyoncé', 'Pop', 'American singer, songwriter, and actress. Known for her powerful vocals and stage presence.','https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Beyonce-Metlife-Renaissance3-Publicity-H-2023.jpg?w=1296&h=730&crop=1'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2','Bad Bunny', 'Reggaeton', 'Puerto Rican singer and rapper known for his contributions to Latin trap and reggaeton.','https://www.billboard.com/wp-content/uploads/2023/02/Bad-Bunny-2022-billboard-pro-1260.jpg?w=942&h=623&crop=1'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2','Shakira', 'Pop','Colombian singer and songwriter known for her distinctive voice and dance moves.','https://resources.tidal.com/images/0b2ce779/6e09/4d8c/9b93/d1efa5936b34/750x750.jpg');

-- -- Insert albums
INSERT INTO albums (admin_id,artist_id, title, release_date, cover_img, genre) VALUES
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'J Balvin'), 'Colores', '2020-03-20', 'https://example.com/colores_cover.jpg', 'Reggaeton'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'J Balvin'), 'Vibras', '2018-05-25', 'https://example.com/vibras_cover.jpg', 'Reggaeton'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Cardi B'), 'Invasion of Privacy', '2018-04-06', 'https://example.com/invasion_of_privacy_cover.jpg', 'Hip Hop'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Cardi B'), 'WAP (Single)', '2020-08-07', 'https://example.com/wap_cover.jpg', 'Hip Hop'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Luis Fonsi'), 'Vida', '2019-02-01', 'https://example.com/vida_cover.jpg', 'Latin Pop'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Luis Fonsi'), 'Despacito (Single)', '2017-01-13', 'https://example.com/despacito_cover.jpg', 'Latin Pop'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Beyoncé'), 'Lemonade', '2016-04-23', 'https://example.com/lemonade_cover.jpg', 'Pop'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Beyoncé'), 'Renaissance', '2022-07-29', 'https://example.com/renaissance_cover.jpg', 'Pop'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Bad Bunny'), 'YHLQMDLG', '2020-02-29', 'https://example.com/yhlqmdlg_cover.jpg', 'Reggaeton'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Bad Bunny'), 'Un Verano Sin Ti', '2022-05-06', 'https://example.com/un_verano_sin_ti_cover.jpg', 'Reggaeton'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Shakira'), 'El Dorado', '2017-05-26', 'https://example.com/el_dorado_cover.jpg', 'Pop'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Shakira'), 'Laundry Service', '2001-11-13', 'https://example.com/laundry_service_cover.jpg', 'Pop');


-- -- Insert songs
INSERT INTO songs (admin_id,artist_id, album_id, name, artist, album, duration, cover_img) VALUES
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'J Balvin'), (SELECT id FROM albums WHERE title = 'Vibras'), 'Mi Gente', 'J Balvin', 'Vibras', 210, 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/J._Balvin_Vibras.svg/1200px-J._Balvin_Vibras.svg.png'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'J Balvin'), (SELECT id FROM albums WHERE title = 'Colores'), 'Ritmo', 'J Balvin', 'Colores', 185, 'https://www.gettothefront.co.uk/wp-content/uploads/black-eyed-peas-j-balvin-music-news-660x450.png'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Cardi B'), (SELECT id FROM albums WHERE title = 'Invasion of Privacy'), 'Bodak Yellow', 'Cardi B', 'Invasion of Privacy', 216, 'https://dbknews.s3.amazonaws.com/uploads/2019/05/cardi-b-invasion-of-privacy.jpg'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Cardi B'), (SELECT id FROM albums WHERE title = 'WAP (Single)'), 'WAP', 'Cardi B', 'WAP (Single)', 158, 'https://media.allure.com/photos/5f297bc78c0221d12c7c6878/4:3/w_1111,h_833,c_limit/wap%20megan%20thee%20stallion%20cardi%20b.jpg'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Luis Fonsi'), (SELECT id FROM albums WHERE title = 'Vida'), 'Échame la Culpa', 'Luis Fonsi', 'Vida', 200, 'https://i.scdn.co/image/ab67616d0000b273ef0d4234e1a645740f77d59c'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Luis Fonsi'), (SELECT id FROM albums WHERE title = 'Despacito (Single)'), 'Despacito', 'Luis Fonsi', 'Despacito (Single)', 230, 'https://www.billboard.com/wp-content/uploads/media/Luis-Fonsi-Daddy-Yankee-PHOTO-OMAR-CRUZ-billboard-1548.jpg'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Beyoncé'), (SELECT id FROM albums WHERE title = 'Lemonade'), 'Formation', 'Beyoncé', 'Lemonade', 216, 'https://d13jj08vfqimqg.cloudfront.net/uploads/article/header_marquee/4605/large_bal-beyonce-announces-world-tour-including-baltimore-date-in-june-20160207.jpg'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Beyoncé'), (SELECT id FROM albums WHERE title = 'Renaissance'), 'Break My Soul', 'Beyoncé', 'Renaissance', 207, 'https://www.rollingstone.com/wp-content/uploads/2022/08/220420_M22_LA_CarlijnJacobs_Silver_0004.jpg'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Bad Bunny'), (SELECT id FROM albums WHERE title = 'YHLQMDLG'), 'Vete', 'Bad Bunny', 'YHLQMDLG', 213, 'https://e.rpp-noticias.io/xlarge/2021/02/28/202520_1064087.jpg'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Bad Bunny'), (SELECT id FROM albums WHERE title = 'Un Verano Sin Ti'), 'Tití Me Preguntó', 'Bad Bunny', 'Un Verano Sin Ti', 202, 'https://i.ytimg.com/vi/a9xxDXRQ0-w/maxresdefault.jpg'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Shakira'), (SELECT id FROM albums WHERE title = 'El Dorado'), 'Chantaje', 'Shakira', 'El Dorado', 210, 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-shakira-24ea878b-0481-41c8-b442-203bd5f988be.jpg?w=910&h=511&crop=1'),
('DE0rFwCysWOP00rEH8O4SgdnLBy2',(SELECT id FROM artists WHERE name = 'Shakira'), (SELECT id FROM albums WHERE title = 'Laundry Service'), 'Hips Don''t Lie', 'Shakira', 'Laundry Service', 208, 'https://www.hola.com/us/horizon/landscape/d1b6712a8957-2006-mtv-video-music-awards-show.jpg');









-- -- Insert users
INSERT INTO users (email, uid) VALUES
('amartinez@pursuit.org', '8R4FkJhB98frW67n3UtC8v3e06J2'),
('anthonymartz17@hotmail.com', '85CynY8RorM2j3fYofx2c9zBFys2');


-- -- Insert playlists
INSERT INTO playlists (user_id, name, description, cover_img) VALUES
((SELECT id FROM users WHERE uid = '8R4FkJhB98frW67n3UtC8v3e06J2'), 'My Pop Hits', 'A collection of my favorite pop songs', 'https://example.com/pop_hits_cover.jpg'),
((SELECT id FROM users WHERE uid = '8R4FkJhB98frW67n3UtC8v3e06J2'), 'Reggaeton Party', 'Best reggaeton tracks for a party', 'https://example.com/reggaeton_party_cover.jpg'),
((SELECT id FROM users WHERE uid = '85CynY8RorM2j3fYofx2c9zBFys2'), 'Bachata', 'Best bachata tracks for a party', 'https://example.com/reggaeton_party_cover.jpg');

-- -- Insert playlist_songs
INSERT INTO playlist_songs (playlist_id, song_id) VALUES
(1,7),
(1,4),
(2,3),
(2,9); 
