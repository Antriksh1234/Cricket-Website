const mongoose = require('mongoose');

function connect() {
    mongoose.connect('mongodb+srv://admin-antriksh:test123@cluster0.gzagm.mongodb.net/cricketDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log("Connected to db");
    });
}

module.exports = {
    connect
}
