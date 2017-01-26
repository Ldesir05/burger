-- Create the database burger_db and specified it for use.
CREATE DATABASE burger_db;
USE burger_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id int AUTO_INCREMENT PRIMARY KEY ,
  burger_name varchar(255) NOT NULL,
  devoured  TINYINT(1) NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


