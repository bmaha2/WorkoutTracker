const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now

    },
    excercises : [
        {
            type: String,
            trim: true,
            required: true
        },
        {
            name: String,
            trim: true,
            required: true
        },
        {
            duration: Number,
            required: true
        },
        {
            weight: Number,
            required: true
        },
        {
            reps: Number,
            required: true
        },
        {
            sets: Number,
            required: true
        },
        {
            distance : Number,
            required: true
        }
    ]
})
const Workout = mongoose.model("Workout",workoutSchema);
module.exports = Workout;