var Task = require('../models/tasks.js');

exports.list = function(req, res){
  Task.find(function(err, tasks){
    console.log('모든 태스크 : ' + tasks );

    var todoTasks = [];
    var inProgTasks = [];
    var doneTasks = [];

    for( var key in tasks ){
      var task = tasks[key];
      if ( task.get('status') === 'TO-DO' ) {
        todoTasks.push( task.get('contents') );
      }else if(task.get('status') === 'INPROG'){
        inProgTasks.push( task.get('contents') );
      }else if(task.get('status') === 'DONE'){
        doneTasks.push( task.get('contents') );
      }else{
        console.error('태스크 상태가 꼬임');
      }
    }

    res.render('index', {
      'title': "칸반보드 연습" ,
      'todoTasks': todoTasks ,
      'inProgTasks': inProgTasks ,
      'doneTasks': doneTasks
    });
  });
}; // end list

exports.create = function(req, res){
  Task.find({contents: req.body.contents}, function(err, tasks){
    if(err) throw err;

    var newTask = true;
    if(tasks.length > 0){
      console.error("같은 내용이 이미 있음");
      newTask = false;
    }

    if(newTask){
      new Task({
        contents: req.body.contents ,
        author: req.body.author
      }).save();
      console.log("새 할일 추가됨 : " + req.body.contents );
    }
  });

  res.redirect('/');
  res.end();
}; // end create

exports.update = function(req, res){
  Task.update( { contents: req.body.contents }, { status: req.body.status }, function(err, numberAffected, raw){
    if (err) throw err;
    console.log("할일 수정됨 : " + numberAffected);
    console.log("몽고 response RAW : " + raw);
  });
  res.redirect('/');
  res.end();
}; // end update

exports.remove = function(req, res){
  Task.remove({contents: req.body.contents}, function(err){
    if (err) throw err;

    console.log("할일 삭제됨 : " + req.body.contents);
  });
  res.redirect('/');
  res.end();
}; // end remove
