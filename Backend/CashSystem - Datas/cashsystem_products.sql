-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cashsystem
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pdt_name` varchar(50) NOT NULL,
  `pdt_price` decimal(10,2) NOT NULL,
  `pdt_type` varchar(50) NOT NULL,
  `pdt_qty` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pdt_name` (`pdt_name`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Skol',5.00,'Bebidas',24),(2,'Brahma Duplo Malte',5.00,'Bebidas',24),(3,'Brigadeiro c/ Licor',5.00,'Comidas',10),(4,'Brownie c/ Licor',5.00,'Comidas',10),(5,'Kit Kebradeira',9.50,'Diversos',8),(6,'Chanceller c/ Gelo e Vibe',12.00,'Bebidas',30),(7,'Seda Solta',0.50,'Diversos',30),(8,'Seda Pacote',5.00,'Diversos',24),(9,'Coca 200ML',2.50,'Bebidas',32),(10,'Coca 350ML',5.00,'Bebidas',24),(11,'Skol 269ML',4.00,'Bebidas',24),(12,'Heineken 269ML',4.00,'Bebidas',24),(13,'Budweiser',4.00,'Bebidas',24),(14,'Original 269ML',4.00,'Bebidas',24),(15,'Pão de Queijo',2.00,'Comidas',12),(16,'Toddynho',2.50,'Bebidas',24),(17,'Fandangos 33G',2.00,'Comidas',24),(18,'Cheetos 33G',2.00,'Comidas',24),(19,'Doritos 33G',2.50,'Comidas',20),(20,'White Horse c/ Gelo & Red Bull',30.00,'Bebidas',18),(21,'Jack Daniels c/ Gelo & Red Bull',35.00,'Bebidas',17),(22,'Jack Daniels c/ Coca 269ML',30.00,'Bebidas',16),(23,'Eight',6.00,'Cigarros',30),(24,'Corona 330ML',5.00,'Bebidas',24),(25,'Isqueiro Bic Grande',5.00,'Diversos',12),(26,'Isqueiro Bic Pequeno',4.00,'Diversos',9),(27,'Isqueiro Barato',3.00,'Diversos',24),(28,'Caixa de  Fósforo',0.50,'Diversos',26),(29,'Eight Solto',0.50,'Cigarros',17),(30,'Gudang Garang Solto',2.00,'Cigarros',14),(31,'Schweppes 350ML',5.00,'Bebibas',12);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-03 22:02:47
