CREATE DATABASE cashSystem;
USE cashSystem;

CREATE TABLE users (
	id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    userName VARCHAR(50) NOT NULL,
    userLogin VARCHAR(50) NOT NULL,
    userPassword VARCHAR(50) NOT NULL,
    userAdmin BOOLEAN DEFAULT false
);

/*ALTER TABLE users AUTO_INCREMENT = 3; /* Reset AutoIncrement */
/*RENAME TABLE oldName TO newName; /* Rename Table */
/*INSERT INTO users VALUES (01, 'Admin', 'Admin', 'Admin', true);*/
/* DELETE FROM users WHERE id = 2; */
/* DELETE FROM users WHERE userLogin = ''; */
/* SELECT * FROM users */
/* SELECT * FROM users WHERE id = '02' */