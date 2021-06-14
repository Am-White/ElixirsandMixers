DROP DATABASE IF EXISTS sho_sheller;

CREATE DATABASE sho_sheller;
USE sho_sheller;

CREATE TABLE recipes (

id INT NOT NULL AUTO_INCREMENT, 
drinkname VARCHAR (40),
drinkdescription VARCHAR (500),
ingredients VARCHAR (2000),
directions VARCHAR (3000),
barnotes VARCHAR (3000),
);