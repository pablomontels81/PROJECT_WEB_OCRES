const mongoose = require("mongoose");

const sommeilSchema = new mongoose.Schema({
    horaire_debut: {
        type: String,
        required: false
    }, 
    horaire_fin: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        required: false
    }
})

const Sommeil = mongoose.model('Sommeil', sommeilSchema);
module.exports = Sommeil;