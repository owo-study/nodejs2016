var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/test';

exports.connect = function(){
  mongoose.connect(dbURI);

  mongoose.connection.on('connected', function(){
    console.log('몽고 디비 접속 완료 : ' + dbURI);
  });

  mongoose.connection.on('error', function(err){
    console.log('몽고 디비 접속 실패 : ' + err);
  });

  mongoose.connection.on('disconnected', function(){
    console.log('몽고 디비 접속 종료');
  });

  // 프로세스가 죽으면 다 닫기?
  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log('프로그램 종료되니 다같이 죽자');
      process.exit(0);
    });
  });

}
