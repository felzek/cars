/* Replace with your SQL commands */
CREATE DATABASE cars;

CREATE TABLE cars (
    id varchar(25) PRIMARY KEY not null,
    make varchar(25) NOT NULL,
    model varchar(25) NOT NULL,
    color varchar(25) NOT NULL,
    year INTEGER NOT NULL,
    category varchar(40) NOT NULL,
    millege real NOT null,
    price real not null
);

INSERT INTO cars(id,make,model,color,year,category,millege,price) 
    VALUES ('JH290XJ','Ford','F10','Base','Silver','2010','Truck',120123, 1999900);