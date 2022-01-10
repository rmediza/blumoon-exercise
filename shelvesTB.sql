CREATE TABLE shelf_TB(
    shelfID serial PRIMARY KEY,
    category       TEXT   NOT NULL,
    location       TEXT   NOT NULL
);

CREATE TABLE level_TB(
    levelID INT GENERATED ALWAYS AS IDENTITY,
    bookID  INT  NOT NULL,
    PRIMARY KEY(levelID)
);

CREATE TABLE shelves_TB(
    shelvesID INT GENERATED ALWAYS AS IDENTITY,
    levelID        INT    NOT NULL,
    dateCreated    DATE   NOT NULL,
    PRIMARY KEY(shelvesID),
    CONSTRAINT fk_level
      FOREIGN KEY(levelID) 
	  REFERENCES level_TB(levelID)
);

