-- MySQL dump 10.13  Distrib 5.7.33, for Linux (x86_64)
--
-- Host: localhost    Database: web_search
-- ------------------------------------------------------
-- Server version	5.7.33-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `item_status`
--

DROP TABLE IF EXISTS `item_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_status` (
  `status_type` int(11) DEFAULT NULL,
  `status_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_status`
--

LOCK TABLES `item_status` WRITE;
/*!40000 ALTER TABLE `item_status` DISABLE KEYS */;
INSERT INTO `item_status` VALUES (1,'Active'),(2,'Inactive');
/*!40000 ALTER TABLE `item_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `item_type`
--

DROP TABLE IF EXISTS `item_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_type` (
  `type` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `item_type`
--

LOCK TABLES `item_type` WRITE;
/*!40000 ALTER TABLE `item_type` DISABLE KEYS */;
INSERT INTO `item_type` VALUES (1,'Foam'),(2,'Adhesive'),(3,'Film'),(4,'Rubber Sheet'),(5,'Genderfluid');
/*!40000 ALTER TABLE `item_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `items` (
  `name` varchar(100) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES ('Zafgen, Inc.','KT1Fmv3tHDirFL2rv7ULmWuXsiGWaQK5PVoT',2,1),('Grupo Aeroportuario Del Pacifico, S.A. de C.V.','KT1PrcZ4wG5G4XLsLR5tAmMgk1n1LJ7Qm5py',1,2),('Blackrock MuniYield Quality Fund, Inc.','KT1DGpFjMHgeHXa5oGGdtj132rWTZBeYocsg',2,3),('Covisint Corporation','KT1Goj5SXvdKSaBaC2CnQq3rJf4KeteSybPJ',2,1),('VictoryShares Developed Enhanced Volatility Wtd ETF','KT1GSeafDpLv87P1ge4XsmRNYiV11LKsqQSX',2,3),('Guidewire Software, Inc.','KT1STCFUcGrfTLKhwrEs5Sx4pJcqLnSCKmyT',2,3),('First Trust Enhanced Short Maturity ETF','KT1D4AMaVTWzLYQNiMncizLofmKPwJyQk5TH',2,3),('Fifth Street Finance Corp.','KT1HgM116mswLhUjgpmiGMSkhiTqzESkQV4g',1,1),('Great Western Bancorp, Inc.','KT1JsTdt7UVCeERvh6PHJGXooWT8zi9koLw3',2,1),('Miller/Howard High Income Equity Fund','KT1R7E6m2ZdHTV21oDHeqJbWddDyGFpTHmQZ',2,1),('Latin American Discovery Fund, Inc. (The)','KT1AERXDLKVWo4zkjMyZD8u1ywzkQCboZ5im',1,2),('VelocityShares VIX Medium-Term ETN','KT1KnYcABt3XrYbyiyoTAtbH65DvvygRPoAk',1,4),('The ExOne Company','KT19sU8p89PyToKo1Z9zqWUCjp3usgAhq9G5',2,2),('Bravo Brio Restaurant Group, Inc.','KT1LXftf15BoSuVHV5ueRZcrWk5PWe7ct6FG',1,4),('MutualFirst Financial Inc.','KT1EcQGA6gbk1Rev6RweWMKF9Tqj43kTyvic',1,2),('Tekla Life Sciences Investors','KT1JPDwW2eakqShboJNa42Vr9xCcvsyq9ivu',1,2),('Vident Core U.S. Bond Strategy Fund','KT1ACQXfMtErkHoUXNUZHu1gjUKhrA9gERv4',1,2),('Kitov Pharmaceuticals Holdings Ltd.','KT1GAcPfNsZP8FuB4YJHy8ZPY1xVCtXic7ps',2,3),('Church & Dwight Company, Inc.','KT1QP1GrMQ1PB742Vr9wVewNNhhGpRj2qTzn',2,2),('Capricor Therapeutics, Inc.','KT1RGiB1c7u4KiQZoZhD7akp7wdw9FduQNtZ',1,1),('Pingtan Marine Enterprise Ltd.','KT1Jrjdu7LzM9uFtBXhQ4UHLyoekWAhRUhfd',2,1),('Seres Therapeutics, Inc.','KT1NuFNiBPEFXfbsGhzCdC97fA2rPtf1Tqrj',1,2),('Vanguard Emerging Markets Government Bond ETF','KT1Tbc8B697Sazo1dki2ZqJmLst2wxbwNVX3',2,5),('Eaton Vance Municipal Income Trust','KT18vAiX3yEMEAoTmC6mNn2ajcsME8KhE393',1,1),('Itron, Inc.','KT1UszV2DRFPc1MZqFMQ3MPb39rdMMASVaYL',1,1),('Nike, Inc.','KT1FayvDsXz8V3GuZVExuSm3MEvxBSMdu6iF',1,2),('Nicholas Financial, Inc.','KT1N1bUU5VptygUmkphMt9f4qVnUQXbAo9Hh',1,2),('Dillard\'s, Inc.','KT18cNYwdzkiEa7ZDAV5pe4Y2EETUFiBhcVi',1,2),('C&F Financial Corporation','KT1JqXoE5HAPjT7aozFULhVeBGXTEUDrePPu',1,3),('PowerShares DWA Momentum & Low Volatility Rotation Portfolio','KT1XBAfAC92XZwHz2WRuAucWc5AAWpryieer',2,4),('Kol\'s Corporation','KT1DEakY3euH8VZZ7V1jh5EoXGiAantGoPJf',2,2),('NRG Energy, Inc.','KT1UWx4e1zdTP5DcZXomzoUNTZkopyMhTh7E',2,2),('Fanhua Inc.','KT1FhLQhhYSoNPDjjNqsttQV59hgX26Y1hkf',2,1),('Stag Industrial, Inc.','KT1CpiGZvpmGZx1aL8ZQTs3mzcTW4CNkKTEG',1,2),('Ventas Realty, Limited Partnership // Ventas Capital Corporati','KT1CE7CAG4Dpqw7QMLEoRC4ypDKz2vrouTdp',2,2),('Southern California Edison Company','KT1NxVUTSbxYgmigtb2ZANg2XKAYbksndFCe',2,4),('White Mountains Insurance Group, Ltd.','KT1Qqd2sAkG3RJPJfmwtQ5b2GV3Eu7gSgWUm',1,2),('Infinity Pharmaceuticals, Inc.','KT1BZBsdHmMhNDiRzGJ81VAeGmYbu6m7EBee',2,3),('Rocky Brands, Inc.','KT1KyYVYf5FEfowmqhe5QSLTJUryVtZc8kJz',2,2),('Nathan\'s Famous, Inc.','KT1GDwnSvkV78c328q7UVmHnrQpKCHaf4pZA',2,5),('Gold Fields Limited','KT1HPtMf12ixsz8EpxvCYwKfXWeG3gRDCxXP',2,2),('Natural Alternatives International, Inc.','KT1X1HZFbTX6FoePe8SKx8pXjThuXVBWLTMy',1,2),('Dover Downs Gaming & Entertainment Inc','KT1HL9ira5xkx6EHtjsfe2BawksfdmW6TgmE',1,3),('VictoryShares Dividend Accelerator ETF','KT1GNur6T8c4VZC7qTH7nXa1x3VYeCprctxF',2,1),('Entegris, Inc.','KT1Eb2AuUMkXvgR1wjBvaSfZC9xkzHseda2E',1,1),('Newfield Exploration Company','KT1WFmj3L5sT33PpJ7WD7kNX7aNY8ms31xgS',2,1),('Sun Life Financial Inc.','KT1SdT4mjT48C9SDq6AFbuWvGwvwNZ1nPNeB',2,2),('U.S. Energy Cor.','KT1PDe1LbZ5Btxxk9bpQKkyxua8xU6ppuFVM',2,2),('CBRE Group, Inc.','KT1EgP9tmPmcPHmoUhaRK1Xeex4E3Y8AF6QS',1,2),('Cognizant Technology Solutions Corporation','KT1UHybLbEuan5TKXVXH91eKwv55smvyuNAg',1,3),('Lifetime Brands, Inc.','KT1TnGWhC1bpFeVnPsMREQstp8pQ4RC5FRFy',2,1),('TSR, Inc.','KT1UkjauiSqGHmzYjQbkDPfJWspTXeVcz8vV',2,1),('Gilat Satellite Networks Ltd.','KT1NQyyRgPjP8Dsbgjzf7q6RVRAygeGQTSzU',1,1),('Select Asset Inc.','KT1GYXP9d7HrhGDwaECjCC949KkZWRZcZjeA',1,1),('Tuesday Morning Corp.','KT1NWqc1MD6A3hAmmZviDYSWK1i7a1piug5M',1,1),('Pyxis Tankers Inc.','KT1F3XEwUG7a3wCwWRhSAjXvdNqAp8TsPLz8',1,5),('Dividend and Income Fund','KT1Jczk4fbKvRYQZ1A9xnYKqV1Lv5trXdQ41',2,1),('ING Group, N.V.','KT1Q39juv6XjSp5MG38nzizYJ51i55gGScG7',1,3),('Weingarten Realty Investors','KT1Dh3uNj3X4yxbWC3onLswP6kY2qPUm1kkc',2,2),('Nelnet, Inc.','KT1TpRECv1PBLpkpJbHSf4qrBRCwhufW92GN',1,2),('UroGen Pharma Ltd.','KT19SV8Tdym5gGdMWedLcpD6L6yPaou8nmin',2,1),('Blackrock Corporate High Yield Fund, Inc.','KT19Aptup8SQxZ6j8bbRbtxSTc1LyDMd5GBn',2,2),('Continental Building Products, Inc.','KT1WAZtgg5dm3oeY8VHKUHNioB3JdLjMC6xk',1,4),('Upland Software, Inc.','KT1JVYRLgcQnd9PcJB9XEzv9zqmgEQUHb6s3',2,5),('Key Tronic Corporation','KT1BPi2cGDctWk58Wn6a9uGSv6dPCaYZfkXo',1,1),('American International Group, Inc.','KT1Ri4iQgJTr1sAGjaFecUhACNbjQ1zFWwdS',1,2),('Sinovac Biotech, Ltd.','KT1CuzDLCXGaDzxDxeDfR38wiQMptmoggtWG',1,4),('Fresh Del Monte Produce, Inc.','KT1U6VE9RH19pF4gAk8EJaLaUHTmFDbR6sEq',2,1),('First Community Corporation','KT1MqpsSWCPQ1DdSoyuL18j3q1eAbpuAfdun',2,4),('Otelco Inc.','KT1HNKwnLp464HYMnbFXs1cj5VcfcJ1f2etW',2,3),('Annaly Capital Management Inc','KT19S8GYfwe2LehHrobyXkwa97z5QcBdRBMy',2,4),('First Trust International IPO ETF','KT1JKorm2tVPogGB2kxnZg2p92zo1yqRHmGn',1,1),('Kohl\'s Corporation','KT195kYdEqudPV1Q81aFvEzoEob2KD6kxTay',1,3),('Allied World Assurance Company Holdings, AG','KT1XGN6FyYfQqe9sGfpP37oHUsaRuAhKYDMw',2,1),('Colony NorthStar, Inc.','KT1K9Mrid2wuQdeBKKH3jJ7VLYDp16qHSia7',1,1),('Horizon Pharma plc','KT1GucJ2DUCiAdhtB6kh9htzZnFJUDVqDd4Q',2,4),('Sabre Corporation','KT1C2QyGGrkAsLABuLEFWYEqwMRR99J4A53e',1,2),('Mid-America Apartment Communities, Inc.','KT1ThvmYPHsXSe2AVye249uJN9WKPeCduDQD',1,2),('Summit Therapeutics plc','KT1JZmAUC6m4kzeTBU4UhgsffmcmHJoAhHyU',2,3),('Citi Trends, Inc.','KT1UMt2xicmayhy7LqCEPMac5H7eqNGxHEsu',1,5),('Global X Robotics & Artificial Intelligence ETF','KT1PipCDPWcDE7hpvrrbdvuZ7AR5jQ5YVyY8',1,5),('VelocityShares 3x Long Silver ETN','KT1KgYX3wagc9rKKGbbQiLHyAGZPjDQUBuxo',1,3),('HCP, Inc.','KT1PuJCsa51fTBiWzu8Nn7sY1hLXQTGNAMyH',2,3),('MGP Ingredients, Inc.','KT1BTzcY2nvLvR8HRxbhmUNv9sYhmqpKkoSb',1,5),('Amdocs Limited','KT1XiwEsbZH5qGC1aZJiqfyyrdys2Fvx6Pak',2,3),('Dynex Capital, Inc.','KT1DRNgqYvPMrv6x64y1zvyXRNv35o4DGrxj',2,2),('ICF International, Inc.','KT1SzRwtAb2Giban9ptCLq3iz4cu4FZ4g7Hu',1,2),('Rex Energy Corporation','KT1VZxnEr4C4CCWum8Yicc3YtHY4vpN5LS5s',2,1),('Vedanta  Limited','KT1F7m9hD9voDegQNFfEofquPR2kVUjWRuvf',2,1),('Alimera Sciences, Inc.','KT196NPsMC1tqgHkiLnxnHV4cRwDMbbYYpFH',1,1),('ImmuCell Corporation','KT1ECGrYyc2FVkr154jPmWodACz9aBqc26cZ',2,2),('First Trust RBA American Industrial Renaissance ETF','KT1R2XpAWRpkkbrimP45p9MpqgsD6haRbgVP',2,1),('TriNet Group, Inc.','KT1GrNhYxXU5kJRasD61RPS6Ly5fBKndDyS5',2,2),('Jernigan Capital, Inc.','KT1UtJVJDP1bVjvnmhGbJgqD6fJsKEB157TW',2,4),('Daseke, Inc.','KT1Dn6gPi5mbGebSo1yc1UmX1bxPYonEaXgP',1,4),('U.S. Energy Corp.','KT1LGfK5hXW8ik1CWu4m72cQLs4ffQpmFoWB',1,2),('The Hanover Insurance Group, Inc.','KT1AEsBUBisDncmJMGHWFPASTarycZJ9tATj',2,1),('Stellus Capital Investment Corporation','KT1JEgreH4NGsVJumvy52QhAyMUy6tQnZQFo',2,2),('National Grid Transco, PLC','KT1W9G5r79a8GvU5dNJjm9qLWKyHMAyn6V7b',1,2),('AmTrust Financial Services, Inc.','KT1JXBprmZuUhPzXCfc4xSvhKQBjxZtQLY5x',2,3);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-01 11:25:01
