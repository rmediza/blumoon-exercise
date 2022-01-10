CREATE TABLE shelf_TB(
    shelfID serial PRIMARY KEY,
    category       TEXT   NOT NULL,
    location       TEXT   NOT NULL
);

CREATE TABLE level_TB(
    levelID serial PRIMARY KEY,
    dCreated date NOT NULL
);
