const mongoose = require("mongoose");

const sommeilSchema = new mongoose.Schema({
    horaire_debut: {
        type: Number,
        required: true
    }, 
    horaire_fin: {
        type: Number,
        required: true
    }  
})

const Sommeil = mongoose.model('Sommeil', sommeilSchema);
module.exports = Sommeil;