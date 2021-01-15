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

INSERT INTO cars(id,make,model,package,color,year,category,millege,price) 
    VALUES ('JH290XJ','Ford','F10','Base','Silver',2010,'Truck',120123, 1999900),
            ('fwi37a', 'Toyota','Camry', 'SE','White',2019, 'Sedan',3999,2899000),
            ('1i3xjRllc','Toyota','Rav4','XSE','Red',2018,'SUV',24001,2275000),
            ('cku43920s', 'Ford','Bronco','Badlands','Burnt Orange',2022,'SUV',1,4499000)