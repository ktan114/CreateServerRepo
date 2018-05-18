const express = require('express');
const mongoose = require('mongoose');

const Song = require('./Song/Song')

const server = express();

// Connect to mongoDB - DBMS database management system
mongoose
.connect(`mongodb://localhost/testing`)
.then(connect => {
    console.log('You are connected!')
})
.catch(err => {
    console.log('You are not connected')
}) 

// Add middleware
server.use(express.json())

// GET request for initial route
server.get('/', (req, res) => {
    res.send('api running')
})

// Create a new Song
server.post('/api/song', (req, res) => {

    Song
    .create(req.body)
    .then(song => {
        res.json( req.body )
    })
    .catch(err => {
        res.send('NOPE not a SONG')
    })

})

// GET all of the songs
server.get('/api/song', (req, res) => {

    Song
    .find()
    .then(songs => {
        res.send(songs)
    })
    .catch(err => {
        res.send('You got no songs to find')
    })
})

const port = 3000;
server.listen(port, () => console.log(`You are connected on port: ${port}`))