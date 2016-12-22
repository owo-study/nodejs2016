var task = require('./controllers/task-controller.js');

exports.route = function (app) {
  app.get('/', task.list);

  app.post('/createTask', task.create);
  app.post('/updateTask', task.update);
  app.post('/removeTask', task.remove);
};
