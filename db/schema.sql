CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR (30),
    devoured BOOLEAN DEFAULT (0),
    PRIMARY KEY (id)
)