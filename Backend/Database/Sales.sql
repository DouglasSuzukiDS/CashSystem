CREATE TABLE Sales (
  idSale INT PRIMARY KEY AUTO_INCREMENT,
  dateSale VARCHAR(30) NOT NULL,
  sellerId INT NOT NULL,
  sellerSale VARCHAR(50) NOT NULL,
  openCash DECIMAL(10, 2) NOT NULL,
  totalSale DECIMAL(10, 2) NOT NULL,
  openSystemHour VARCHAR(50) NOT NULL,
  closeSystemHour VARCHAR(50) NOT NULL,
  moneySale DECIMAL(10, 2) NOT NULL,
  pixSale DECIMAL(10, 2) NOT NULL,
  debitSale DECIMAL(10, 2) NOT NULL,
  creditSale DECIMAL(10, 2) NOT NULL,
  cardsSale DECIMAL(10, 2) NOT NULL,
  bankSale DECIMAL(10, 2) NOT NULL
);

ALTER TABLE Sales ADD FOREIGN KEY (sellerId) REFERENCES users (id);

SELECT * FROM Sales;

INSERT INTO Sales (sellerId, sellerSale, dateSale, openCash, totalSale, openSystemHour, closeSystemHour, moneySale, pixSale, debitSale, creditSale, cardsSale, bankSale) VALUES (
   "02",
   "Nick",
   "30/03/2023",
   "12.00",
   "150.00",
   "12:50:00",
   "18:00:00",
   "30.00",
   "80.00",
   "20.00",
   "20.00",
   "40.00",
   "120.00"
);

DELETE FROM Sales;

ALTER TABLE Sales AUTO_INCREMENT = 1;
