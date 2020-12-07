const mongoose = require("mongoose");

const sommeilSchema = new mongoose.Schema({
    horaire_debut: {
        type: String,
        required: true
    }, 
    horaire_fin: {
        type: String,
        required: true
    }  
})

const Sommeil = mongoose.model('Sommeil', sommeilSchema);
module.exports = Sommeil;