var initalTasks = require('../models/inital-tasks');

exports.index = function(req, res) {
  res.render('index', {
    title: "칸반 보드 연습" ,
    todoTasks: initalTasks.getTasks().todo ,
    inProgTasks: initalTasks.getTasks().inProg ,
    doneTasks: initalTasks.getTasks().done
  });
}
