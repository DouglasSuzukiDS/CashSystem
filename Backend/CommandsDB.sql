CREATE DATABASE cashSystem;
USE cashSystem;

CREATE TABLE users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userName VARCHAR(50) NOT NULL,
    userLogin VARCHAR(50) NOT NULL,
    userPassword VARCHAR(50) NOT NULL,
    userAdmin BOOLEAN DEFAULT false
);

/* ALTER TABLE users AUTO_INCREMENT = 3; /* Reset AutoIncrement */
/* RENAME TABLE oldName TO newName; /* Rename Table */
/* INSERT INTO users VALUES (01, 'Admin', 'Admin', 'Admin', true); */
/* 
	DELETE FROM users WHERE id = 3; 
	DELETE FROM users WHERE id = 4; 
	DELETE FROM users WHERE id = 5; 
    ALTER TABLE users AUTO_INCREMENT = 3;
    SELECT * FROM users;
    SELECT * FROM users 
		WHERE userLogin = 'chico.palha' 
        AND userPassword = 123;
*/
/* DELETE FROM users WHERE userLogin = ''; */
/* SELECT * FROM users */
/* SELECT * FROM users WHERE userLogin = 'Chico.Palha' */

/* DROP TABLE products; */
CREATE TABLE products (
	id INT PRIMARY KEY AUTO_INCREMENT,
    pdt_name VARCHAR(50) NOT NULL,
    pdt_price INT NOT NULL,
    pdt_type VARCHAR(50) NOT NULL,
    pdt_qty INT NOT NULL
);

/* ALTER TABLE users AUTO_INCREMENT = 3; /* Reset AutoIncrement */
/* RENAME TABLE oldName TO newName; /* Rename Table */
/* INSERT INTO products VALUES (01 ,'Skol', 5, 'Bebidas', 24); */
/* 
	DELETE FROM products WHERE id = 3; 
	DELETE FROM products WHERE id = 4; 
	DELETE FROM products WHERE id = 5; 
    ALTER TABLE products AUTO_INCREMENT = 3;
    SELECT * FROM products;
    SELECT * FROM products 
		WHERE userLogin = 'chico.palha' 
        AND userPassword = 123;
*/
