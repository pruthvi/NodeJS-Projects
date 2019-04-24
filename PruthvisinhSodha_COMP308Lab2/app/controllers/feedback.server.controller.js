// Load the 'User' Mongoose model
const Feedback = require('mongoose').model('feedback');

// 'create' controller method to create a new user
exports.create = function (req, res, next) {
    const user = new Feedback(req.body);
    user.save((err) => {
        const fname = req.body.fname;
        const lname = req.body.lname;
        const email = req.body.email;
        const season = req.body.season;
        const game = req.body.game;
        if (err) {
            return next(err);
        } else {
            res.json(user);

           // res.render("feedback", { fname, lname, email, season, game });
        }
    });
};
// const insert = function (req, res) {
//     const ret = {};
//     const user = new Feedback(req.body);

//     Feedback.create(req.body, function (err, retobj) {
//       if (err) {
//         ret.msg = err.message;
//         res.json({ ret });
//       } else {
//         res.json(user);

// //        res.render("task_home", { data: ret });
//       }
//     });
  
//   }

  
//   module.exports = { "createFeedback": insert }