# db-express

Sovellus perustuu sivun https://peatutor.com/express/Examples/mysql_index.php esimerkkiin.

## Sovelluksen asentaminen

<ol>
<li>Kloonaa tämä repo</li>
<li>Siirry kansioon db-express ja anna komento **npm install**</li>
<li>Luo tietokanta ja käyttäjä MySQL-palvelimeesi suorittamalla alla oleva sql-koodi</li>
<li>Käynnistä sovellus komennolla **npm start** tai **nodemon ./bin/www**</li>
</ol>

<pre>
CREATE DATABASE netdb;
CREATE USER 'netuser'@'localhost' IDENTIFIED BY 'netpass';
GRANT ALL on netdb.* to 'netuser'@'localhost';

USE netdb;

CREATE TABLE book(
id_book INT primary key auto_increment,
name VARCHAR(255),
author VARCHAR(255),
isbn VARCHAR(20)
);

INSERT INTO book(name,author,isbn) VALUES('PHP Basic','Bob Jones','123-456-789-111-x');
INSERT INTO book(name,author,isbn) VALUES('Statistics','Lisa Smith','222-333-444-555-y');

CREATE TABLE user(
  id_user INT primary key auto_increment,
  username VARCHAR(20),
  password VARCHAR(255),
  UNIQUE (username)
);
</pre>