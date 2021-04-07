CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) AUTO_INCREMENT PRIMARY KEY,
    `name` varchar(100) NOT NULL,
    `lastName` varchar(100) DEFAULT NULL,
    `gender` char(6) NOT NULL,
    `email` varchar(100) NOT NULL UNIQUE,
    `password` char(96) NOT NULL,
    `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);