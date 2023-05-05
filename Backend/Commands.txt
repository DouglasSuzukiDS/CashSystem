-- // CREATE DATABASE cashSystem;

-- // USE cashSystem;

-- // users
/*CREATE TABLE users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userName VARCHAR(50) NOT NULL,
    userLogin VARCHAR(50) UNIQUE NOT NULL,
    userPassword VARCHAR(120) NOT NULL,
    userAdmin BOOLEAN DEFAULT false
);*/
/* // Users
	SELECT * FROM users;

	DELETE FROM users where id = 1;

    ALTER TABLE users AUTO_INCREMENT = 1;

	INSERT INTO users VALUES (01, 'Percio Valente', 'percio.valente', 123, 1);
    INSERT INTO users VALUES (02, 'Tonhao Motomoto', 'tonhao.motomoto', 123, 0);
    INSERT INTO users VALUES (03, 'Chico Palha', 'chico.palha', 123, 0);
    INSERT INTO users VALUES (04, 'Admin', 'admin', 123, 1);
*/

-- // products
/* CREATE TABLE products (
	id INT PRIMARY KEY AUTO_INCREMENT,
    pdt_name VARCHAR(50) UNIQUE NOT NULL ,
    pdt_price DECIMAL(10, 2) NOT NULL,
    pdt_type VARCHAR(50) NOT NULL,
    pdt_qty INT NOT NULL
); */
/* // Products
	SELECT * FROM products;

	DELETE FROM products where id = 1;

    ALTER TABLE products AUTO_INCREMENT = 1;

    INSERT INTO products VALUES (01, 'Skol', 5, 'Bebidas', 24);
    INSERT INTO products VALUES (02, 'Brahma Duplo Malte', 5, 'Bebidas', 24);
    INSERT INTO products VALUES (03, 'BriGADEIRO c/ Licor', 5, 'Comidas', 10);
    INSERT INTO products VALUES (04, 'Brownie c/ Licor', 5, 'Comidas', 10);
    INSERT INTO products VALUES (05, 'Kit Noia', 10, 'Diversos', 10);
    INSERT INTO products VALUES (06, 'Chanceller c/ Gelo e Vibe', 12, 'Bebidas', 30);
    INSERT INTO products VALUES (07, 'Seda Solta', 0.50, 'Diversos', 30);
    INSERT INTO products VALUES (08, 'Seda Pacote', 5, 'Diversos', 24);
    INSERT INTO products VALUES (09, 'Coca 200ML', 2.50, 'Bebidas', 32);
    INSERT INTO products VALUES (10, 'Coca 350ML', 5, 'Bebidas', 24);
    INSERT INTO products VALUES (11, 'Skol 269ML', 4, 'Bebidas', 24);
    INSERT INTO products VALUES (12, 'Heineken 269ML', 4, 'Bebidas', 24);
    INSERT INTO products VALUES (13, 'Budweiser', 4, 'Bebidas', 24);
    INSERT INTO products VALUES (14, 'Original 269ML', 4, 'Bebidas', 24);
    INSERT INTO products VALUES (15, 'Pão de Queijo', 2, 'Comidas', 12);
    INSERT INTO products VALUES (16, 'Toddynho', 2.50, 'Bebidas', 24);
    INSERT INTO products VALUES (17, 'Fandangos 33G', 2, 'Comidas', 24);
    INSERT INTO products VALUES (18, 'Cheetos 33G', 2, 'Comidas', 24);
    INSERT INTO products VALUES (19, 'Doritos 33G', 2.50, 'Comidas', 24);
    INSERT INTO products VALUES (20, 'White Horse c/ Gelo & Red Bull', 30, 'Bebidas', 18);
    INSERT INTO products VALUES (21, 'Jack Daniels c/ Gelo & Red Bull', 35, 'Bebidas', 17);
    INSERT INTO products VALUES (22, 'Jack Daniels c/ Coca 269ML', 30, 'Bebidas', 16);
    INSERT INTO products VALUES (23, 'Eight', 6, 'Cigarros', 30);
    INSERT INTO products VALUES (24, 'Corona 330ML', 5, 'Bebidas', 24);
    INSERT INTO products VALUES (25, 'Isqueiro Bic Grande', 5, 'Diversos', 12);
    INSERT INTO products VALUES (26, 'Isqueiro Bic Pequeno', 4, 'Diversos', 9);
    INSERT INTO products VALUES (27, 'Isqueiro Barato', 3, 'Diversos', 24);
    INSERT INTO products VALUES (28, 'Caixa de  Fósforo', 0.50, 'Diversos', 26);
    INSERT INTO products VALUES (29, 'Eight Solto', 0.50, 'Cigarros', 17);
    INSERT INTO products VALUES (30, 'Gudang Garang Solto', 2, 'Cigarros', 14);
*/

-- // SaleDay
/* CREATE TABLE SaleDay (
    idSale INT PRIMARY KEY AUTO_INCREMENT,
    priceSale DECIMAL(10, 2),
    sellerSale VARCHAR(50),
    methodSale VARCHAR(20),
    registrationSale VARCHAR(20)
); */
/* // SaleDay
    SELECT * FROM SaleDay;

    DELETE FROM SaleDay where id = 1;

    ALTER TABLE SaleDay AUTO_INCREMENT = 1;

    ALTER TABLE SaleDay ADD COLUMN methodSale VARCHAR(20);
    ALTER TABLE SaleDay DROP COLUMN methodSale;
    ALTER TABLE SaleDay ADD COLUMN RegistrationSale DATETIME;
    
    INSERT INTO SaleDay (priceSale, sellerSale, methodSale, registrationSale) VALUES (
		"10.00", "Nick", "Pix", "2023-04-03 10:38:00"
	);
    
    INSERT INTO SaleDay (priceSale, sellerSale, methodSale, registrationSale) VALUES (
		"5.00", "Nick", "Dinheiro", now()
	);

    /* ALTER TABLE SaleDay AUTO_INCREMENT = 1; /* Reset AutoIncrement */
    /* DELETE FROM SaleDay; */

	/* ALTER TABLE SaleDay RENAME to saleDay; */
    /*INSERT INTO saleDay (idSale, listSale, priceSale, sellerSale, methodSale) VALUES (
    01, '{
			"id": 1,
			"pdt_name": "Skol",
			"pdt_price": "5.00",
			"pdt_type": "Bebidas",
			"pdt_qty": 24
		}', '5.00', 'Nick', 'Pix'
    );
*/

-- // Sales
/*CREATE TABLE Sales(
    idSale INT PRIMARY KEY AUTO_INCREMENT,
    dateSale VARCHAR(30) NOT NULL,
    sellerSale VARCHAR(50) NOT NULL,
    openCash DECIMAL (10, 2) NOT NULL,
    totalSale DECIMAL (10, 2) NOT NULL,
    openSystem VARCHAR(50) NOT NULL,
    closeSystem VARCHAR(50) NOT NULL,
    moneySale DECIMAL (10, 2) NOT NULL,
    pixSale DECIMAL (10, 2) NOT NULL,
    debitSale DECIMAL (10, 2) NOT NULL,
    creditSale DECIMAL (10, 2) NOT NULL,
    cardsSale DECIMAL (10, 2) NOT NULL,
    bankSale DECIMAL (10, 2) NOT NULL
);*/
/* // Sales
    INSERT INTO Sales (dateSale, sellerSale, openCash, totalSale, openSystem, closeSystem, moneySale, pixSale, debitSale, creditSale, cardsSale, bankSale) VALUES (
        "30/03/2023",
        "Nick",
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
*/

/* ALTER TABLE users AUTO_INCREMENT = 1; /* Reset AutoIncrement */
/* RENAME TABLE oldName TO newName; /* Rename Table */
/* INSERT INTO users VALUES (01, 'Admin', 'admin', 'admin', true); */
/* 
	DELETE FROM users WHERE id = 3; 

    ALTER TABLE users AUTO_INCREMENT = 1;

    ALTER TABLE products AUTO_INCREMENT = 1;
    SELECT * FROM users;
    SELECT * FROM products;
    SELECT * FROM users 
		WHERE userLogin = 'chico.palha' 
        AND userPassword = 123;
*/

/* DELETE FROM users WHERE userLogin = ''; */
/* SELECT * FROM users */
/* SELECT * FROM users WHERE userLogin = 'persio.valente2' */
/* UPDATE users SET userName = 'Chico Palha' WHERE id = 3; */
/* DELETE FROM users WHERE id = 4 */

/* DROP TABLE products; */

/* ALTER TABLE products MODIFY COLUMN pdt_price DECIMAL(10,2); */
/* ALTER TABLE products MODIFY COLUMN pdt_name VARCHAR(50) UNIQUE; */
/* ALTER TABLE users MODIFY COLUMN userLogin VARCHAR(50) UNIQUE; */
/* ALTER TABLE users AUTO_INCREMENT = 3; /* Reset AutoIncrement */
/* RENAME TABLE oldName TO newName; /* Rename Table */
/* INSERT INTO products VALUES (01 ,'Skol', 5, 'Bebidas', 24); */

/* // Actions on DB
	DELETE FROM products WHERE id = 3; 
	DELETE FROM products WHERE id = 4; 
	DELETE FROM products WHERE id = 5; 
    ALTER TABLE products AUTO_INCREMENT = 1;
    SELECT * FROM users
		WHERE userLogin = 'chico.palha' 
        AND userPassword = '$2b$10$YEVuG2dcYSZfNhMB4ggc9.LMJcpCUrkZOTsHqlwqt5qq01WzMmtbS';
*/

-- SELECT * FROM Products;
-- SELECT * FROM Users;
-- SELECT * FROM Sales;
-- SELECT * FROM SalesDay;

-- ALTER TABLE saleday RENAME SalesDay;
-- ALTER TABLE Sales RENAME COLUMN openSystem TO openSystemHour;
-- ALTER TABLE Sales RENAME COLUMN closeSystem TO closeSystemHour;