const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: String,
    artist: String,
    title: String,
    downloads: Number
})

module.exports = mongoose.model('Song', songSchema, 'songs');