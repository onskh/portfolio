DROP DATABASE IF EXISTS Solo;

CREATE DATABASE Solo;

USE Solo;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  quantity integer NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);


CREATE TABLE contact (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  message varchar(150) NOT NULL,
  email varchar(150) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/