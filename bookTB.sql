CREATE TABLE book_TB(
    bookID SERIAL PRIMARY KEY NOT NULL,
    title          TEXT   NOT NULL,
    description    TEXT   NOT NULL,
    publishYear    DATE   NOT NULL,
    authorID       INT    NOT NULL
);
