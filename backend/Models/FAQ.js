const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
    que: String,
    ans: String
});

const FAQ = mongoose.model('FAQ', faqSchema, 'FAQ');
module.exports = {FAQ};