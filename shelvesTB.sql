CREATE TABLE shelf_TB(
    shelfID INT GENERATED ALWAYS AS IDENTITY,
    category       TEXT   NOT NULL,
    location       TEXT   NOT NULL,
    PRIMARY KEY(shelfID)
);

CREATE TABLE level_TB(
    levelID INT GENERATED ALWAYS AS IDENTITY,
    shelfID        INT    NOT NULL,
    PRIMARY KEY(levelID),
    CONSTRAINT fk_level
      FOREIGN KEY(levelID) 
	  REFERENCES levels(levelID)
);

CREATE TABLE shelves_TB(
    shelvesID INT GENERATED ALWAYS AS IDENTITY,
    levelID        INT    NOT NULL,
    dateCreated    DATE   NOT NULL,
    PRIMARY KEY(levelID),
    CONSTRAINT fk_level
      FOREIGN KEY(levelID) 
	  REFERENCES levels(levelID)
);



