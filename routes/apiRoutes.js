
let Workout = require("../models/index");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({}, (err, Workout) => {
      if (err) {
        res.send(err);
      }
      res.json(Workout)
    });
  }).post("/api/workouts", function (req, res) {
    let newWorkout = new Workout(req.body);
    newWorkout.save((err, Workout) => {
      if (err) {
        res.send(err)
      }
      res.json(Workout);
    });
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find({}, (err, Workout) => {
      if (err) {
        res.send(err);
      }
      res.json(Workout)
    });
  }).post("/api/workouts/range", function (req, res) {
    let newWorkout = new Workout(req.body);
    newWorkout.save((err, Workout) => {
      if (err) {
        res.send(err)
      }
      res.json(Workout);
    });
  });

  app.put("/api/workouts/:id", function (req, res) {
    Workout.findOneAndUpdate({ _id: req.params.id }, { $push: { exercises: req.body } }, { new: true }, (err, Workout) => {
      if (err) {
        res.send(err);
      }
      res.json(Workout)
    });
  });
};
