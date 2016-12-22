:octocat: [owo-study/nodejs2016](https://github.com/owo-study/nodejs2016)
# 부평 Node.js 스터디 (2016)

## MySQL
- RBDMS중 무료로 가장 사용하기 쉽고 잘 알려진 DB
> mysql이 Oracle에 인수되어 oracle이 언제 이를 빌미로 행패(?!)를 부릴지 모르니
아직 DB를 설치하지 않으신 분은 mysql과 호환되는 mariadb를 사용하는 것을 권장

- 다운로드
  - maria DB  => https://mariadb.com/downloads
  - mysql DB => https://www.mysql.com/downloads/

- 설치 확인은 터미널(cmd)에서 `mysql --vserion` 버전확인 명령을 통해 확인
- 접속하기 (mysql console)
```shell
mysql -u[유저명] -p[패스워드] [데이터베이스명]
```

- node 모듈 설치
```shell
[sudo] npm install mysql
```
- 가이드 : [node mysql module github](https://github.com/mysqljs/mysql)

### Sample Database 입력
- mysql 콘솔에서

```sql
/* nodejs DB 생성 */
CREATE DATABASE `nodejs`;

/* nodejs DB에서 작업하도록 설정 */
USE `nodejs`;

/* memo 테이블 생성 */
CREATE TABLE `memo` (
	`no` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(255),
	`memo` TEXT,
	PRIMARY KEY (`no`)
);

/* 샘플 데이터 입력 */
INSERT INTO memo(name, memo) VALUES ("홍길동", "테스트"), ("고길동", "둘리오라그래"), ("장길동", "잘나오나?") ;

/* 입력 확인용 */
SELECT * FROM memo;

/* nodejs유저 생성하고 패스워드 또한 nodejs로 설정, 접속 권한을 아무데나로 설정 */
create user 'nodejs'@'%' identified by 'nodejs';

/* nodejs 유저에서 nodejs DB에 모든 권한을 설정 */
grant all privileges on nodejs.* to nodejs@'%' identified by 'nodejs';

/* 권한 설정 사항을 반영 */
flush privileges;

```

### node에서 연동 확인 코드
- 다음 소스를 test.js로 저장 후 `node test`로 동작 확인
```js
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'nodejs',
  password : 'nodejs',
  database : 'nodejs'
});

connection.connect();

connection.query('SELECT * FROM memo; ', function(err, rows, fields) {
  if (err) throw err;

  console.log('mome Table DATA : ', rows);
});

connection.end();
```
