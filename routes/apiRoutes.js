var Workout = require("../models/Workout");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({})
      .then(function (dbWorkouts) {
        res.json(dbWorkouts);
      });
  })
  
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then(function (dbWorkouts) {
        res.json(dbWorkouts);
      });
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find({})
      .then(function (dbWorkouts) {
        res.json(dbWorkouts);
      });
  })

  app.post("/api/workouts/range", function (req, res) {
    Workout.create({})
      .then(function (dbWorkouts) {
        res.json(dbWorkouts);
      });
  });

  app.post("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true, runValidators: true })
      .then(function (dbWorkouts) {
        res.json(dbWorkouts);
      });
  });

};
