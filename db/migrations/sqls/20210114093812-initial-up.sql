/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS cars (
    id text UNIQUE PRIMARY KEY NOT NULL,
    make text NOT NULL,
    model text NOT NULL,
    package text NOT NULL,
    color text NOT NULL,
    year INTEGER NOT NULL,
    category text NOT NULL,
    millege real NOT null,
    price real not null
);

  CREATE TABLE users (
    id uuid PRIMARY KEY,
    email text UNIQUE,
    password text
  );

INSERT INTO cars(id,make,model,package,color,year,category,millege,price) 
    VALUES ('JH290XJ','Ford','F10','Base','Silver','2010','Truck',120123, 1999900);