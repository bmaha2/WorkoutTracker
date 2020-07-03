let Workout = require("../models/Workout");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    Workout.find({})
      .then(dbWorkouts => res.json(dbWorkouts))
      .catch(err => res.json(err));
  })
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
    .then(dbWorkouts => res.json(dbWorkouts))
    .catch(err => res.json(err));
  });

  app.get("/api/workouts/range", function (req, res) {
    Workout.find({})
    .then(dbWorkouts => res.json(dbWorkouts))
    .catch(err => res.json(err));
  });
  app.put("/api/workouts/:id", (req, res) => {
    Workout.findOne({ _id: req.params.id }, {
      $push: {
        exercises: [
          {
            "type": req.body.type,
            "name": req.body.name,
            "duration": req.body.duration,
            "weight": req.body.weight,
            "reps": req.body.reps,
            "sets": req.body.sets,
            "distance": req.body.distance
          }
        ]
      }
    })
    .then(dbWorkouts => res.json(dbWorkouts))
    .catch(err => res.json(err));
  });
};
