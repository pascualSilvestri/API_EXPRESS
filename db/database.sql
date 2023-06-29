create database spoty;

use spoty;

CREATE TABLE artista (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    edad INT
);

CREATE TABLE musica (
	id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200),
    tiempo float,
    artista_id INT,
    FOREIGN KEY (artista_id) REFERENCES artista(id)
);


-- Datos para la tabla "artista"
INSERT INTO artista (nombre, edad) VALUES
    ( 'Ed Sheeran', 30),
    ('Taylor Swift', 32),
    ('Bruno Mars', 35),
    ( 'Adele', 33),
    ( 'Rihanna', 34),
    ( 'Drake', 33),
    ( 'Beyoncé', 39),
    ( 'Justin Bieber', 27),
    ( 'Billie Eilish', 20),
    ( 'Post Malone', 26);

-- Datos para la tabla "musica"
INSERT INTO musica (titulo, tiempo, artista_id) VALUES
    ( 'Shape of You', 3.53, 1),
    ( 'Love Story', 3.56, 2),
    ( 'Just the Way You Are', 3.40, 3),
    ( 'Hello', 4.55, 4),
    ( 'Umbrella', 4.35, 5),
    ( 'God''s Plan', 3.18, 6),
    ( 'Halo', 4.21, 7),
    ( 'Baby', 3.36, 8),
    ( 'Bad Guy', 3.14, 9),
    ( 'Circles', 3.34, 10);

