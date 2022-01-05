CREATE TABLE shelf_TB(
    shelfID INT GENERATED ALWAYS AS IDENTITY,
    category       TEXT   NOT NULL,
    location       TEXT   NOT NULL
);

CREATE TABLE level_TB(
    levelID INT GENERATED ALWAYS AS IDENTITY,
    bookID         INT    NOT NULL,
    shelfID        INT    NOT NULL
);

CREATE TABLE shelves_TB(
    shelvesID INT GENERATED ALWAYS AS IDENTITY,
    levelID        INT    NOT NULL,
    dateCreated    DATE   NOT NULL,
    CONSTRAINT fk_level
      FOREIGN KEY(levelID) 
	  REFERENCES levels(levelID)
);



