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
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `idSale` int NOT NULL AUTO_INCREMENT,
  `dateSale` varchar(30) NOT NULL,
  `sellerSale` varchar(50) NOT NULL,
  `openCash` decimal(10,2) NOT NULL,
  `totalSale` decimal(10,2) NOT NULL,
  `openSystemHour` varchar(50) NOT NULL,
  `closeSystemHour` varchar(50) NOT NULL,
  `moneySale` decimal(10,2) NOT NULL,
  `pixSale` decimal(10,2) NOT NULL,
  `debitSale` decimal(10,2) NOT NULL,
  `creditSale` decimal(10,2) NOT NULL,
  `cardsSale` decimal(10,2) NOT NULL,
  `bankSale` decimal(10,2) NOT NULL,
  PRIMARY KEY (`idSale`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,'30/03/2023','Nick',12.00,150.00,'12:50:00','18:00:00',30.00,80.00,20.00,20.00,40.00,120.00),(2,'30/03/2023','Nick',12.00,150.00,'12:50:00','18:00:00',30.00,80.00,20.00,20.00,40.00,120.00),(3,'11-4-2023 21:35:6','Chico Palha',12.00,150.00,'12:50:00','18:00:00',30.00,80.00,20.00,20.00,40.00,120.00),(4,'11-4-2023','Tonhao Moto Moto',12.00,150.00,'12:50:00','18:00:00',30.00,80.00,20.00,20.00,40.00,120.00),(5,'11-4-2023','Nick',10.00,440.02,'22-21-55','22:22:3',94.75,159.25,196.02,123.50,196.02,355.27),(6,'11-4-2023','Nick',12.00,440.02,'22-23-18','22:23:27',96.75,159.25,196.02,123.50,196.02,355.27),(7,'11-4-2023','Nick',50.00,0.00,'22-25-17','22:25:22',0.00,0.00,0.00,0.00,0.00,0.00),(8,'11-4-2023','Nick',12.00,0.00,'22-30-10','22:30:14',0.00,0.00,0.00,0.00,0.00,0.00),(9,'11-4-2023','Tonhao Moto Moto',12.00,150.00,'12:50:00','18:00:00',30.00,80.00,20.00,20.00,40.00,120.00),(10,'11-4-2023','Nick',5.00,0.00,'22-31-52','22:31:57',0.00,0.00,0.00,0.00,0.00,0.00),(11,'11-4-2023','Nick',14.00,0.00,'22-33-3','22:35:5',0.00,0.00,0.00,0.00,0.00,0.00),(12,'11/4/2023','Tonhao Moto Moto',12.00,150.00,'12:50:00','18:00:00',30.00,80.00,20.00,20.00,40.00,120.00),(13,'11/4/2023','Tonhao Moto Moto',12.00,150.00,'12:50:00','18:00:00',30.00,80.00,20.00,20.00,40.00,120.00),(14,'11-4-2023','Tonhao Moto Moto',12.00,150.00,'12:50:00','18:00:00',30.00,80.00,20.00,20.00,40.00,120.00),(15,'11-4-2023','Nick',13.00,0.00,'22-54-36','22:54:45',0.00,0.00,0.00,0.00,0.00,0.00),(16,'11-4-2023','Nick',12.00,0.00,'22-59-58','23:0:3',0.00,0.00,0.00,0.00,0.00,0.00),(17,'11-4-2023','Nick',10.00,440.02,'23-1-11','23:1:17',94.75,159.25,196.02,123.50,196.02,355.27),(18,'11-4-2023','Nick',10.00,98.77,'23-5-2','23:6:51',75.00,10.00,23.77,8.50,23.77,33.77),(19,'11-4-2023','Nick',20.00,88.27,'23-8-51','23:9:37',20.00,95.00,-6.73,0.00,-6.73,88.27),(20,'11-4-2023','Admin',10.00,0.00,'23-10-15','23:10:30',0.00,0.00,0.00,0.00,0.00,0.00),(21,'11-4-2023','Chico Palha',12.00,3.27,'23-10-44','23:11:2',12.00,10.00,-6.73,0.00,-6.73,3.27);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-11 23:20:44
