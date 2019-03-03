Drop Database sequelize_burger_db;
CREATE DATABASE sequelize_burger_db;
USE sequelize_burger_db;
CREATE TABLE burgers (
	id INTEGER auto_increment NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN default false,
    createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

