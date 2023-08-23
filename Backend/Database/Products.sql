CREATE TABLE products (
   id INT PRIMARY KEY AUTO_INCREMENT,
   pdt_name VARCHAR(50) UNIQUE NOT NULL ,
   pdt_price DECIMAL(10, 2) NOT NULL,
   pdt_type VARCHAR(50) NOT NULL,
   pdt_qty INT NOT NULL
);

SELECT * FROM products;

DELETE FROM products where id = 1;

ALTER TABLE products AUTO_INCREMENT = 1;

INSERT INTO products VALUES (01, 'Skol', 5, 'Bebidas', 24);
INSERT INTO products VALUES (02, 'Brahma Duplo Malte', 5, 'Bebidas', 24);
INSERT INTO products VALUES (03, 'Brigadeiro c/ Licor', 5, 'Comidas', 10);
INSERT INTO products VALUES (04, 'Brownie c/ Licor', 5, 'Comidas', 10);
INSERT INTO products VALUES (05, 'Kit Kebradeira', 10, 'Diversos', 10);
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