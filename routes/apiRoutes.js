var db = require("../models/Workout");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(dbPosts) {
      res.json(dbPosts);
    });
  });
};
