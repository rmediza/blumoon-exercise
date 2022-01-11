CREATE TABLE authors_TB(
    authorID SERIAL PRIMARY KEY NOT NULL,
    firstName   TEXT    NOT NULL,
    lastName    TEXT    NOT NULL,
    penName     TEXT    NOT NULL,
    bDate       DATE    NOT NULL,
    dCreated    DATE    NOT NULL
);
