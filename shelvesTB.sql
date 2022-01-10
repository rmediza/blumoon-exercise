CREATE TABLE shelf_TB(
    shelfID serial PRIMARY KEY,
    category   TEXT   NOT NULL,
    location   TEXT   NOT NULL
);

CREATE TABLE level_TB(
    levelID serial PRIMARY KEY,
    shelfID INT  NOT NULL,
    dCreated DATE NOT NULL,
    FOREIGN KEY (shelfID)
         REFERENCES shelf_TB (shelfID)
);

