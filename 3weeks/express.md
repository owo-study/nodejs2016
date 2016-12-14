:octocat: [owo-study/nodejs2016](https://github.com/owo-study/nodejs2016)
# 부평 Node.js 스터디 (2016)

## express 웹 서버
- nodejs에서 가장 많이 사용되고 있는 웹(http) 서버 프로그램 모듈
- [express 공식 홈페이지](http://expressjs.com/) ([한글 번역 페이지](http://expressjs.com/ko/))

### [express-generator](http://expressjs.com/ko/starter/generator.html)
- express와 자주 사용되는 모듈들을 이용해 기본 웹 서버 골격을 만들어주는 유틸리티
- 설치
```shell
[sodo] npm install express-generator -g
```
- express 프로젝트 생성
```shell
express -e [프로젝트 폴더명]
cd [프로젝트 폴더명]
npm install
```

#### express project 폴더 구조
```shell
.
├── app.js          (express 설정 파일)
├── bin
│   └── www         (웹 서버 시작 프로그램)
├── package.json
├── public          (static 파일들이 있는 폴더 (http document root) )
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes          (route 설정 파일들이 디렉터리)
│   ├── index.js
│   └── users.js
└── views           (view파일들이 있는 디렉터리)
    ├── error.ejs
    └── index.ejs
```

##### app.js 파일
```js
/* 모듈 로드 */
var express = require('express'); // express 모듈을 로드
var path = require('path'); // 경로 설정 관련 모듈
var favicon = require('serve-favicon'); // favicon 관련 모듈
var logger = require('morgan'); // 로그 관리 모듈
var cookieParser = require('cookie-parser'); // 쿠키 해석 모듈
var bodyParser = require('body-parser'); // body 해석 모듈

/* route (url => file 매칭) 설정 파일 */
var routes = require('./routes/index');
var users = require('./routes/users');

/* express 초기화 */
var app = express();

// view 템플릿 엔진 초기화 및 express에 사용 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* express 환경 설정 */
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // 로그 모듈을 dev(개발) 모드로 설정후 express에 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // public 폴더를 정적 파일 폴더로 설정

/* route 경로와 파일 설정 */
app.use('/', routes);
app.use('/users', users);

// 404 not found 에러 설정
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* 에러 처리 */
// development 모드일 때 에러 상세 내용 출력하도록 설정
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// 일반 에러 표시 방법 설정 (no stacktraces leaked to user)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// 외부에서 설정된 express인스턴스(app) 사용할수 있도록 exports
module.exports = app; // [tip] 'bin/www' 파일에서 계속...
```
