-- Users
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userName VARCHAR(50) NOT NULL,
  userLogin VARCHAR(50) UNIQUE NOT NULL,
  userPassword VARCHAR(120) NOT NULL,
  userAdmin BOOLEAN DEFAULT false
);

SELECT * FROM users;
INSERT INTO users (userName, userLogin, userPassword, userAdmin)
  VALUES ('Admin', 'admin', 'admin', true);

INSERT INTO users (userName, userLogin, userPassword, userAdmin) 
	VALUES ('Nick', 'nick', 'nick123', 1);
    
SELECT * FROM users 
   WHERE userLogin = 'chico.palha' 
   AND userPassword = 123;

SELECT * FROM users
   WHERE userLogin = 'chico.palha' 
   AND userPassword = '$2b$10$YEVuG2dcYSZfNhMB4ggc9.LMJcpCUrkZOTsHqlwqt5qq01WzMmtbS';

SELECT * FROM users WHERE userLogin = 'persio.valente';

INSERT INTO users (userName, userLogin, userPassword, userAdmin) 
	VALUES ('Percio Valente', 'percio.valente', 123, 1);
    
INSERT INTO users (userName, userLogin, userPassword, userAdmin) 
	VALUES ('Tonhao Motomoto', 'tonhao.motomoto', 123, 0);
    
INSERT INTO users (userName, userLogin, userPassword, userAdmin) 
	VALUES ('Chico Palha', 'chico.palha', 123, 0);

UPDATE users SET userName = 'Chico Palha' WHERE id = 3;

DELETE FROM users where id != 1;

ALTER TABLE users AUTO_INCREMENT = 1;   -- Reset AutoIncrement 