const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    ranking: Number,
});

const Team = mongoose.model('Team', teamSchema, 'Team');

module.exports = {Team};