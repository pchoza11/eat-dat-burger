CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN
    PRIMARY KEY (id)
);

