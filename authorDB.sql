CREATE DATABASE authorDB;

CREATE TABLE authors_TB(
    ID SERIAL PRIMARY KEY NOT NULL,
    firstName   TEXT    NOT NULL,
    lastName    TEXT    NOT NULL,
    penName     TEXT    NOT NULL,
    bDate       DATE    NOT NULL,
    dCreated    DATE    NOT NULL
);

INSERT INTO authors_TB (firstName, lastName, penName, bDate, dCreated)
VALUES ("Gwenth", "Chu", "PoblacionWoman", "2022-12-25", current_timestamp);
