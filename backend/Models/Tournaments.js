const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema ({
    title: String,
    startDate: String,
    endDate: String,
    description: String
});

const Tournament = mongoose.model('Tournament', tournamentSchema, 'Tournament');
module.exports = {Tournament};