CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(50) NOT NULL,
  userLogin VARCHAR(50) UNIQUE NOT NULL,
  userPassword VARCHAR(120) NOT NULL,
  userAdmin BOOLEAN DEFAULT false
);

CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  pdt_name VARCHAR(50) UNIQUE NOT NULL,
  pdt_price DECIMAL(10, 2) NOT NULL,
  pdt_type VARCHAR(50) NOT NULL,
  pdt_qty INT NOT NULL
);

CREATE TABLE SalesDay (
  idSale INT PRIMARY KEY AUTO_INCREMENT,
  sellerId INT,
  sellerSale VARCHAR(50),
  priceSale DECIMAL(10, 2),
  methodSale VARCHAR(20),
  registrationSale VARCHAR(20)
);

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

ALTER TABLE SalesDay ADD FOREIGN KEY (sellerId) REFERENCES users (id);

ALTER TABLE Sales ADD FOREIGN KEY (sellerId) REFERENCES users (id);
