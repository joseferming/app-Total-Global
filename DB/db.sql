CREATE DATABASE IF NOT EXISTS total;

USE total;

CREATE TABLE productos (
     codigo INT(21) NOT NULL,
     nombre VARCHAR(45) NOT NULL,
	 categoria VARCHAR(45) DEFAULT NULL,
	 precio VARCHAR (15) DEFAULT NULL,
	 marca VARCHAR (45) DEFAULT NULL,
     stock INT (45) NOT NULL,
	PRIMARY KEY(codigo)
 );


DESCRIBE productos;

INSERT INTO productos values
    (1, 'BINDER', 'Pintura automotriz', 130, 'NOVACOAT', 48),
	(2, 'FONDO GALON', 'Pintura automotriz', 150, 'VENEZOLANA DE PINTURAS', 145),
    (3, 'MASILLA PLASTICA GALON', 'Pintura automotriz', 90, 'MASIFLEX', 24);

select * from productos;