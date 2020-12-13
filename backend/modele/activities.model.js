const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema({
    ID_Activity: {
        type: Number,
        required: true,
    }, 
    ID_User: {
        type: String,
        required: false,
    },
    Type: {
        type: String,
        required: false,
    },
    Lieu: {
        type: String,
        required: false,
    },
    Distance: {
        type: String,
        required: false,
    },
    Vitesse_max: {
        type: String,
        required: false,
    },
    Vitesse_moy: {
        type: String,
        required: false,
    },
    Temps: {
        type: String, 
        required: false,
    },
    Calories: {
        type: String,
        required: false,
    },
    Denivele: {
        type: String,
        required: false,
    },
    Map: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    },
})

const Activities = mongoose.model('Activities', activitiesSchema);
module.exports = Activities;