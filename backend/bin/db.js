
//Fichier de connection à notre BDD
const mongoose = require('mongoose');

const connect = function (callback) {
    mongoose.set("debug", true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useNewUrlParser', true);

    mongoose.connect('mongodb://localhost:27017/DashBoardMONTELSBONNET');

    const db = mongoose.connection;
    //Mise en place des scripts si erreur
    db.on("error", console.error.bind(console, " Connection error"));
    db.once("open", function () {
        console.log('Super, vous avez réussi à vous connecter à votre BDD');
        callback();
    }
    );
};

module.exports.connect = connect;