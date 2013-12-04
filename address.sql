-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 04, 2013 at 09:48 AM
-- Server version: 5.5.33
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `address`
--

-- --------------------------------------------------------

--
-- Table structure for table `locationPlace`
--

CREATE TABLE `locationPlace` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `placeName` varchar(500) NOT NULL,
  `addressName` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=47 ;

--
-- Dumping data for table `locationPlace`
--

INSERT INTO `locationPlace` (`id`, `placeName`, `addressName`) VALUES
(39, 'Taronga Zoo', 'Taronga Zoo'),
(41, 'Sydney Darling Harbour', 'Sydney Darling Harbour'),
(45, 'BC Place Vancouver', 'BC Place Vancouver'),
(46, 'BCIT', 'BCIT');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
