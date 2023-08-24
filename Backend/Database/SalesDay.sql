CREATE TABLE SalesDay (
  idSale INT PRIMARY KEY AUTO_INCREMENT,
  sellerId INT,
  sellerSale VARCHAR(50),
  priceSale DECIMAL(10, 2),
  methodSale VARCHAR(20),
  registrationSale VARCHAR(20)
);

ALTER TABLE SalesDay ADD FOREIGN KEY (sellerId) REFERENCES users (id);

SELECT * FROM SalesDay;

INSERT INTO SalesDay (sellerId, sellerSale, priceSale, methodSale, registrationSale) VALUES (
   "02", "Nick", "10.00", "Pix", "2023-04-03 10:38:00"
);

INSERT INTO SalesDay (sellerId, sellerSale, priceSale, methodSale, registrationSale) VALUES (
   "02", "Nick", "10.00", "Dinheiro", now()
);

DELETE FROM SalesDay where id = 1;

DELETE FROM SalesDay;

ALTER TABLE SalesDay AUTO_INCREMENT = 1; /* Reset AutoIncrement

ALTER TABLE SalesDay AUTO_INCREMENT = 1;