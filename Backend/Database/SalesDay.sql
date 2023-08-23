CREATE TABLE SalesDay (
   idSale INT PRIMARY KEY AUTO_INCREMENT,
   priceSale DECIMAL(10, 2),
   sellerSale VARCHAR(50),
   methodSale VARCHAR(20),
   registrationSale VARCHAR(20)
); 

SELECT * FROM SalesDay;

INSERT INTO SalesDay (priceSale, sellerSale, methodSale, registrationSale) VALUES (
   "10.00", "Nick", "Pix", "2023-04-03 10:38:00"
);

INSERT INTO SalesDay (priceSale, sellerSale, methodSale, registrationSale) VALUES (
"5.00", "Nick", "Dinheiro", now()
);

DELETE FROM SalesDay where id = 1;

DELETE FROM SalesDay;

ALTER TABLE SalesDay AUTO_INCREMENT = 1; /* Reset AutoIncrement

ALTER TABLE SalesDay AUTO_INCREMENT = 1;