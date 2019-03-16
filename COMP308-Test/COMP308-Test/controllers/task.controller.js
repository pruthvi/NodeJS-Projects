const taskmodel = require("../model/task.model");

const home = function (req, res) {
  const ret = {};
  res.render("task_home", { data: ret });
}

const taskadd = function (req, res) {
  const ret = {};
  res.render("task_add", { data: ret });
}
const insert = function (req, res) {
  const ret = {};
  taskmodel.create(req.body, function (err, retobj) {
    if (err) {
      ret.msg = err.message;
      res.json({ ret });
    } else {
      res.render("task_home", { data: ret });
    }
  });

}


/*
// 'update' controller method to update a user based on id
exports.update = function (req, res, next) {
    req.user=req.body //read the user from request's body
    console.log(req.user)
	// Use the 'User' static 'findByIdAndUpdate' method to update a specific user
	User.findByIdAndUpdate(req.user.id, req.body, (err, user) => {
		 
	})
};

*/




const taskupdate = function (req, res) {
  const ret = {};
  
  taskmodel.findByIdAndUpdate(req.params.taskId,  
    {     $set: { taskId: req.body.taskId, taskName: req.body.taskName, taskDescription: req.body.taskDescription, taskPriority: req.body.taskPriority }}, 
    {upsert:true}, function (err, retobj) {
    if (err) {
      ret.msg = err.message;
      res.json({ ret });
    } else {
      res.render("task_home");
    }
  });

}



const findall = function (req, res) {
  taskmodel.find({}, function (err, retobj) {
    let ret = {};
    ret.tasks = retobj;
    res.render("task_list", { data: ret });
  });
}

const updateT = function (req, res, next) {
  console.log(req.body);
  taskmodel.findByIdAndUpdate(req.params.taskId, req.body, (err, user) => {
    if (err) {
      return next(err);
    } else {
            res.redirect('task_home') 
    }
  })
  };


module.exports = { "insert": insert, "findall": findall,  "home": home, "taskadd": taskadd, "taskupdate": taskupdate, "updateT" : updateT }

