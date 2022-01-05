CREATE TABLE shelf_TB(
    shelfID SERIAL PRIMARY KEY NOT NULL,
    category       TEXT   NOT NULL,
    location       TEXT   NOT NULL
);

CREATE TABLE level_TB(
    levelID SERIAL PRIMARY KEY NOT NULL,
    bookID          INT    NOT NULL
    
);

CREATE TABLE shelves_TB(
    shelvesID SERIAL PRIMARY KEY NOT NULL,
    levelID          INT    NOT NULL,
    dateCreated      DATE   NOT NULL,
    CONSTRAINT fk_levels
      FOREIGN KEY(levelID) 
	  REFERENCES levels(levelID)
);



