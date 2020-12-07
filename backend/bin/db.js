//Fichier de connection à notre BDD
const mongoose = require('mongoose');

const connect = function (callback) {
    mongoose.set("debug", true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useNewUrlParser', true);

    mongoose.connect('mongodb+srv://DashBoardMONTELSBONNET:DashBoardMB@cluster0.rwcak.mongodb.net/activities?retryWrites=true&w=majority', {useNewUrlParser:true, useCreateIndex:true});

    const db = mongoose.connection;
    //Mise en place des scripts si erreur
    db.on("error", console.error.bind(console, " Connection error"));
    db.once("open",() => {
        console.log('Connection réussie à la BDD');
        callback();
    }
    );
};

module.exports.connect = connect;