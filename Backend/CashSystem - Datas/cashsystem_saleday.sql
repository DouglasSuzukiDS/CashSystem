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
-- Table structure for table `saleday`
--

DROP TABLE IF EXISTS `saleday`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `saleday` (
  `idSale` int NOT NULL AUTO_INCREMENT,
  `priceSale` decimal(10,2) DEFAULT NULL,
  `sellerSale` varchar(50) DEFAULT NULL,
  `methodSale` varchar(20) DEFAULT NULL,
  `registrationSale` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idSale`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saleday`
--

LOCK TABLES `saleday` WRITE;
/*!40000 ALTER TABLE `saleday` DISABLE KEYS */;
INSERT INTO `saleday` VALUES (1,20.00,'Persio Valente','Pix','24-3-2023 23:0:53'),(2,12.25,'Nick','Cartão de Crédito','25-3-2023 23:1:6'),(3,5.25,'Nick','Pix','25-3-2023 23:6:23'),(4,10.00,'Nick','Pix','25-3-2023 23:9:16'),(5,22.00,'Nick','Pix','25-3-2023 23:11:25'),(6,12.25,'Nick','Pix','25-3-2023 23:29:54'),(7,22.00,'Nick','Cartão de Débito','25-3-2023 23:30:42'),(8,10.00,'Nick','Dinheiro','25-3-2023 23:34:18'),(9,10.00,'Nick','Cartão de Crédito','25-3-2023 23:34:59'),(10,4.25,'Nick','Cartão de Débito','25-3-2023 23:38:23'),(11,10.00,'Nick','Pix','25-3-2023 23:51:34'),(12,10.00,'Nick','Pix','26-3-2023 16:43:20'),(13,15.00,'Nick','Cartão de Crédito','26-3-2023 16:44:22'),(14,10.00,'Nick','Pix','26-3-2023 16:45:54'),(15,20.25,'Nick','Dinheiro','26-3-2023 16:47:55'),(16,9.00,'Nick','Pix','26-3-2023 16:48:23'),(17,5.00,'Nick','Pix','26-3-2023 17:3:20'),(18,5.00,'Nick','Pix','26-3-2023 19:8:17'),(19,22.00,'Nick','Cartão de Débito','26-3-2023 19:9:2'),(20,10.25,'Nick','Pix','26-3-2023 19:9:51'),(21,12.00,'Nick','Dinheiro','26-3-2023 19:10:23'),(22,10.00,'Nick','Pix','26-3-2023 19:53:35'),(23,52.25,'Nick','Cartão de Crédito','26-3-2023 21:18:48'),(24,34.00,'Nick','Cartão de Crédito','26-3-2023 22:24:55'),(25,0.50,'Nick','Pix','27-3-2023 17:28:6'),(26,9.00,'Nick','Cartão de Débito','28-3-2023 21:42:2');
/*!40000 ALTER TABLE `saleday` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-31  0:17:26
