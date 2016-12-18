# sample code

```sql

CREATE DATABASE `nodejs`

USE `nodejs`;

CREATE TABLE `memo` (
	`no` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255),
	`memo` TEXT,
	PRIMARY KEY (`no`)
);

INSERT INTO memo(name, memo) VALUES ("홍길동", "테스트"), ("고길동", "둘리오라그래"), ("장길동", "잘나오나?") ;

SELECT * FROM memo;


create user 'nodejs'@'%' identified by 'nodejs';

grant all privileges on nodejs.* to nodejs@'%' identified by 'nodejs';

flush privileges;

``` 