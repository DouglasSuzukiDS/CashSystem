-- // CREATE DATABASE cashSystem;

-- // USE cashSystem;

/* // Users
	SELECT * FROM users;

    SELECT * FROM users 
		WHERE userLogin = 'chico.palha' 
        AND userPassword = 123;
    
    SELECT * FROM users
		WHERE userLogin = 'chico.palha' 
        AND userPassword = '$2b$10$YEVuG2dcYSZfNhMB4ggc9.LMJcpCUrkZOTsHqlwqt5qq01WzMmtbS';

    SELECT * FROM users WHERE userLogin = 'persio.valente';
    
    INSERT INTO users VALUES ('Admin', 'admin', '$10$lbe01cY1gaQhJvQR9mrA9OS/SMsPfMKXZc4ZvT9jM8l5JC3/Pr9TC', true);
	INSERT INTO users VALUES ('Percio Valente', 'percio.valente', 123, 1);
    INSERT INTO users VALUES ('Tonhao Motomoto', 'tonhao.motomoto', 123, 0);
    INSERT INTO users VALUES ('Chico Palha', 'chico.palha', 123, 0);

    UPDATE users SET userName = 'Chico Palha' WHERE id = 3;

	DELETE FROM users where id != 1;

    ALTER TABLE users AUTO_INCREMENT = 1;   -- Reset AutoIncrement 
*/

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

/* // SaleDay
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
*/

/* // Sales
    SELECT * FROM Sales;

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

    DELETE FROM Sales;

    ALTER TABLE Sales AUTO_INCREMENT = 1;
*/

-- SELECT * FROM Products;
-- SELECT * FROM Users;
-- SELECT * FROM Sales;
-- SELECT * FROM SalesDay;